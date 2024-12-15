// mini router
import express from 'express';
const authRouter = express.Router();

authRouter.post('/login', (req, res, next) => {
    console.log("login v1");
    res.send('login v1 '+ new Date());
})


// authRouter.post('/api/v1/signup', (req, res, next) => {
authRouter.post('/signup', (req, res, next) => {
    console.log("signup v1");
    res.send('signup'+ new Date());
})

export default authRouter;