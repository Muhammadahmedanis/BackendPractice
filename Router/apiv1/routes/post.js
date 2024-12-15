import express from 'express';
import { nanoid } from 'nanoid';
const postRouter = express.Router();

// not recommand all server should be stateless
let post = [
    {
        id: nanoid(),
        title: "abc title",
        text: "some text",
    }
];

// GET           /api/v1/post/:userId/:postId
postRouter.get('/post/:postId', (req, res, next) => {
    console.log('post create');
    if(isNaN(req.params.postId)){
        res.status(403).send("post id must be a valid number no alphabet allow");  // mostly alphanueric hoti ha
        for(let i = 0; i < post.length; i++){  // map not recommend because we cannot break request
            if(post[i].id === Number(req.params.postId)){
            res.send(post[i]);
            return;
            }
        }
    }   
    res.send("post not found" + req.params.postId);
})


// Get 
postRouter.get('/posts', (req, res, next) => {
    console.log('posts create');
    res.status(200).send(post);
})

// POST          /api/v1/post/:userId/:postId
postRouter.post('/post', (req, res, next) => {
    console.log('post create');
    // if (!req.body.id || !req.body.title || !req.body.text) {
    //     res.status(403).send(`required parameter missing example request body:  {
    //     id: "123",
    //     title: "abc title",
    //     text: "some text", 
    //     } `// calling self documented api
    //   );
    if (!req.body.title || !req.body.text) {
        res.status(403).send(`required parameter missing example request body:  {
        title: "abc title",
        text: "some text", 
        } `// calling self documented api
      );
      return;
    }
    // post.push({
    //     id: req.body.id,
    //     title: req.body.title,
    //     text: req.body.text,
    // })
    post.push({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text,
    })
    res.status(200).send('post created');
})

// PUT          /api/v1/post/:userId/:postId
postRouter.put('/post/:userId/:postId', (req, res, next) => {
    console.log('post create');
    res.send('post created');
})

// DELETE       /api/v1/post/:userId/:postId
postRouter.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('post create');
    res.send('post created');
})

export default postRouter;