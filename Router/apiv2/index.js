import express from 'express';
const router = express.Router();

import authRouter from './routes/auth.js'
import postRouter from './routes/post.js'
import commentRouter  from './routes/comment.js'

router.use(authRouter);

router.use((req, res, next) => {
    if('valid' === 'valid'){
        next();
    } else {
        res.status(401).send({message: "invalid token"});
    }
})

router.use(postRouter);
router.use(commentRouter);

export default router;