import express from 'express';
import { nanoid } from 'nanoid';
const commentRouter = express.Router();

let comments = [
    {
        id: nanoid(),
        name: "Ali",
        text: "skspq",
    }
]

commentRouter.get('/comment/:commentId', (req, res, next) => {
    if(isNaN(req.params.commentId)){
        res.status(403).send("post must id must have a valid aplhanumbric number");
        for(let i = 0; i < comments.length; i++){
            if(comments[i].id === req.params.commentId){
                res.send(comments[i])
            }
        }
    } else {
        res.status(404).send("post not found" + req.params.commentId);
    }
})

commentRouter.post('/comment/:commentId', (req, res, next) => {
    if(!req.body.name || !req.body.text){
            res.status(403).send(`required parameter is missing example is: {
            id: nanoid(),
            name: "Ali",
            text: "skspq",
        }`)
        } else {
            posts.push({
                id: nanoid(),
                name: req.body.name,
                text: req.body.text,
            })
        }
})

commentRouter.put('/comment/:commentId', (req, res, next) => {
    if(isNaN(req.params.commentId)){
        res.status(403).send("the given is given is incorrect");
    } else {
        const index = comments.filter(post => post.id === req.params.commentId);
        comments.splice(index, 1, {...req.body, id: req.params.body});
        res.status(200).send("post added successfully");
    }
})

commentRouter.delete('/comment/:commentId', (req, res, send) => {
    if(isNaN(req.params.commentId)){
        res.status(403).send("the given is given is incorrect");
    } else{
        comments = comments.filter(post => post.id !== req.params.commentId);
        res.status(200).send("post deleted successfully");
    }
})

export default commentRouter;