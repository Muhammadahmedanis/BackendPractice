import express, { response } from 'express';
import { nanoid } from 'nanoid';
const postRouter = express.Router();

let posts = [
    {
        id: nanoid(),
        title: "abc",
        text: "skspq",
    }
]

postRouter.get('/post/:postId',(req, res, next) => {
    if(req.params.postId){
        // res.status(403).send("post must id must have a valid aplhanumbric number");
        for(let i = 0; i < posts.length; i++){
            if(posts[i].id === req.params.postId){
                res.send(posts[i])
            }
        }
    } else {
        res.status(404).send("post not found" + req.params.postId);
    }
})

postRouter.get('/posts', (req, res) => {
    res.status(200).send(posts);
})

postRouter.post('/post', (req, res, next) => {
    if(!req.body.title || !req.body.text){
        res.status(403).send(`required parameter is missing example is: {
        id: nanoid(),
        title: "abc",
        text: "skspq",
    }`)
    } else {
        posts.push({
            id: nanoid(),
            title: req.body.title,
            text: req.body.text,
        })
        res.status(200).send({messgae: "post added successfully ", posts})
    }
})

postRouter.delete('/post/:postId', (req, res, next) => {
    if(!req.params.postId){
        res.status(403).send("the given id is incorrect");
    } else{
        posts = posts.filter(post => post.id !== req.params.postId);
        res.status(200).send("post deleted successfully");
    }
})

postRouter.put('/post/:postId', (req, res, next) => {
    if(!req.params.postId){
        res.status(403).send("the given is incorrect");
    } else {
        const index = posts.filter(post => post.id === req.params.postId);
        posts.splice(index, 1, {...req.body, id: req.params.body});
        res.status(200).send("post added successfully");
    }
})

export default postRouter;