import express from "express";
const authRouter = express.Router();

authRouter.post('/signup',(req, res,next) => {
    console.log('signup');
    res.status(200).send(' signup' + new Date());
})

authRouter.post('/login',(req, res, next) => {
    console.log("login");
    res.status(200).send(" login" + new Date());
})

export default authRouter;