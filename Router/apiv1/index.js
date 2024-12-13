import express from 'express';
const router = express.Router();

import authRouter from './routes/auth.js'
import commentRouter  from './routes/comment.js'
import postRouter from './routes/post.js'

// app use ma start am luch bhi matter nahi karta path kuch bhi hit hoga means /api/v1 then amy path
router.use(authRouter);  //   (51:/api/v1 )/login

router.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        res.send({message: "invalid token "});
    }
})

router.use("/api/v1", commentRouter);
router.use("/api/v1", postRouter);

export default router;