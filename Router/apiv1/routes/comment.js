import express from 'express';
const commentRouter = express.Router();

// GET           /api/v1/comment/:userId/:postId
commentRouter.get('/comment/:userId/:postId', (req, res, next) => {
    console.log(req.params);
    console.log('comment create');
    res.send('comment created');
})

// POST          /api/v1/comment/:userId/:postId
commentRouter.post('/comment/:userId/:postId', (req, res, next) => {
    console.log('comment create');
    res.send('comment created');
})

// PUT          /api/v1/comment/:userId/:postId
commentRouter.put('/comment/:userId/:postId', (req, res, next) => {
    console.log('comment create');
    res.send('comment created');
})

// DELETE       /api/v1/comment/:userId/:postId
commentRouter.delete('//comment/:userId/:postId', (req, res, next) => {
    console.log('post create');
    res.send('post created');
})

export default commentRouter;