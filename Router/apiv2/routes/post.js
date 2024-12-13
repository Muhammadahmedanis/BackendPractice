import express from 'express';
const postRouter = express.Router();

// GET           /api/v1/post/:userId/:postId
postRouter.get('/post/:userId/:postId', (req, res, next) => {
    console.log('post create');
    res.send('post created');
})

// POST          /api/v1/post/:userId/:postId
postRouter.post('/post/:userId/:postId', (req, res, next) => {
    console.log('post create');
    res.send('post created');
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