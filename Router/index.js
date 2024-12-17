// import express from 'express';
// import path from 'path';
// const __dirname = path.resolve();

// // Learn mini router
// import authRouter from './routes/auth.js'
// import commentRouter  from './routes/comment.js'
// import postRouter from './routes/post.js'

// const app = express();
// app.use(express.json());

// // app use ma start am luch bhi matter nahi karta path kuch bhi hit hoga means /api/v1 then amy path
// app.use("/api/v1", authRouter);  //    /api/v1/login

// app.use((req, res, next) => {
//     if (token === "valid") {
//         next();
//     } else {
//         res.send({message: "invalid token "});
//     }
// })

// app.use("/api/v1", commentRouter);
// app.use("/api/v1", postRouter);

// app.use("/static", express.static(path.join(__dirname, 'static')))

// app.use(express.static(path.join(__dirname, 'public')))
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log("server wroking");
// })





// version of routers
import express from 'express';
import path from 'path';
const __dirname = path.resolve();  // static page server karna ka lia jo firebase hosting hot ha wo ham jhud kar raha hain

import apiv1Router from '../Router/apiv1/index.js';
import apiv2Router from '../Router/apiv2/index.js';


const app = express();
app.use(express.json());

app.use("/api/v1", apiv1Router);
app.use("/api/v2", apiv2Router);


app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server wroking");
})