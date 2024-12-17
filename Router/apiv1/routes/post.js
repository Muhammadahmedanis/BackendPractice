import express from 'express';
import { nanoid } from 'nanoid';
const postRouter = express.Router();

// not recommand all server should be stateless
let posts = [
    {
        id: nanoid(),
        title: "abc title",
        text: "some text",
    }
];

// GET           /api/v1/post/:userId/:postId
postRouter.get('/post/:postId', (req, res, next) => {
    console.log('post create');
    if(!req.params.postId){
        res.status(403).send("post id must be a valid number no alphabet allow");  // mostly alphanueric hoti ha
        for(let i = 0; i < posts.length; i++){  // map not recommend because we cannot break request
            if(posts[i].id === req.params.postId){
            res.send(posts[i]);
            return;
            }
        }
    }   
    res.send("post not found" + req.params.postId);
})

// Get 
postRouter.get('/posts', (req, res, next) => {
    console.log('posts create');
    res.status(200).send(posts);
})

// POST          /api/v1/post/:userId/:postId
postRouter.post('/post', (req, res, next) => {
    // console.log('post create');
    // if (!req.body.id || !req.body.title || !req.body.text) {
    //     res.status(403).send(`required parameter missing example request body:  {
    //     id: "123",
    //     title: "abc title",
    //     text: "some text", 
    //     } `// calling self documented api
    //   );
    // post.push({
    //     id: req.body.id,
    //     title: req.body.title,
    //     text: req.body.text,
    // })

    if (!req.body.title || !req.body.text) {
        res.status(403).send(`required parameter missing example request body:  {
        title: "abc title",
        text: "some text", 
        } `// calling self documented api
      );
      return;
    } else {
        posts.unshift({
            id: nanoid(),
            title: req.body.title,
            text: req.body.text,
        })
        res.status(200).send('post created');
    }
})

// PUT          /api/v1/post/:userId/:postId
postRouter.put('/post/:postId', (req, res, next) => {
    if(!req.params.postId || !req.body.title || !req.body.text){
        res.status(403).send("the given id is incorrect");
    } 
    const postIndex = posts.findIndex((post) => post.id === req.params.postId);
    console.log(postIndex);
    if (postIndex === -1) {
        return res.status(404).send("Post not found.");
    }
    posts[postIndex] = { id: req.params.postId, title: req.body.title, text: req.body.text };
    return res.status(200).send("Post updated successfully.");
})

// DELETE       /api/v1/post/:userId/:postId
postRouter.delete('/post/:postId', (req, res, next) => {
    if(!req.params.postId){
        res.status(403).send("the given id is incorrect");
    } else{
        for(let i = 0; i < posts.length; i++){  // map not recommend because we cannot break request
            if(posts[i].id === req.params.postId){
            posts.splice(i,1);
            res.status(200).send("post deleted successfully");
            return;
            }
        }
    }
})

export default postRouter;