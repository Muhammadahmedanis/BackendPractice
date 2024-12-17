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

commentRouter.get('/comments', (req, res, next) => {
    try {
        res.status(200).send(comments)
    } catch (error) {
        res.status(404).send("no comment found");        
    }
})

commentRouter.get('/comment/:commentId', (req, res, next) => {
    if(req.params.commentId){
        for(let i = 0; i < comments.length; i++){
            if(comments[i].id === req.params.commentId){
                res.status(200).send(comments[i])
            }
        }
    } else {
        res.status(403).send("post must id must have a valid id");
    }
})

commentRouter.post('/comment', (req, res, next) => {
    if(!req.body.name || !req.body.text){
            res.status(403).send(`required parameter is missing example is: {
            id: nanoid(),
            name: "Ali",
            text: "skspq",
        }`)
        } else {
            comments.push({
                id: nanoid(),
                name: req.body.name,
                text: req.body.text,
            })
            res.status(200).send({message: "comment added successfully"});
        }
})

commentRouter.put('/comment/:commentId', (req, res, next) => {
    if(!req.params.commentId){
        res.status(403).send("the given is given is incorrect");
    } else {
        const index = comments.filter(comment => comment.id === req.params.commentId);
        comments.splice(index, 1, {...req.body, id: req.params.commentId});
        res.status(200).send("comment updated successfully");
    }
})

commentRouter.delete('/comment/:commentId', (req, res, send) => {
    if(!req.params.commentId){
        res.status(403).send("the given is given is incorrect");
    } else{
        comments = comments.filter(comment => comment.id !== req.params.commentId);
        res.status(200).send("comment deleted successfully");
    }
})

export default commentRouter;