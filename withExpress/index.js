// import express from 'express';
// const app = express();
// app.use(express.json())
// let user = [];

// app.get("/", (req, res) => {
//     res.send(new Date().toString());
// })

// app.get("/user", (req, res) => {
//     res.send(user);
// })

// app.post("/user", (req, res) => {
//     try {
//         user.push({...req.body,  id: Date.now().toString(36)});
//         res.status(200).send({status: 200, user: req.body})
//     } catch (error) {
//         res.status(404).send({ status: 400, message: "Not found"});
//     }
// })

// app.put("/user/:id", (req, res) => {
//     const{ id } = req.params;
//     const index = user.filter(obj => obj.id === id);
//     user.splice(index, 1, {...req.body, id});
//     res.status(200).send({ status: 200, message: "update successfully", id})
// })

// app.delete("/user/:id", (req, res) => {
//     const{ id } = req.params;
//     user = user.filter( obj => obj.id !== id);
//     res.send({status: 204, id: id});
// })


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log("Server running");
// });



// Making serverapi with connection of frontend
// import cors from 'cors';
// // app.use(cors())
// import express from 'express';
// import path from 'path';
// const __dirname = path.resolve();

// const app = express();
// app.use(express.json());

// app.get('/weather/:cityName', (req, res) => {

//     let weatherData =  {
//         karachi: {
//         city: 'Karachi',
//         humidity: 32,
//         temp: '12 C',
//     },
//     lahore: {
//         city: "Lahore",
//         humidity: 44,
//         temp: ' 19 C',
//     }
// }

//     let userInputCityName = req.params.cityName.toLowerCase();
//     let weatherDataSend = weatherData[userInputCityName];
//     if(weatherDataSend){
//         res.status(200).send(weatherDataSend);
//     } else {
//         res.status(404).send("error in passing data");
//     }
// })

// let comments = [];
// app.post('/comment/:name', (req, res) =>{
//     try {
//         const name = req.params.name;
//         const userComment = req.body.comment;
//         comments.push({
//             name: name,
//             comment: userComment,
//         })
//         res.status(200).send("comment add success fully")
//     } catch (error) {
//         res.status(404).send("error occur");
//     }
// })

// app.get('/comment', (req, res) => {
//     res.status(200).send(comments);
// })


// app.use(express.static(path.join(__dirname, 'public')));
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log("server wroking");
// })




// WAYS OF TAKING INPUT FROM SERVER(header, params, query, body)
// http://abcweather.com/weather/karachi?unit=metric&side=west

// import path from 'path';
// const __dirname = path.resolve();
// const app = express();
// app.use(express.json()); //body parser
// we donot pass private data
// the input we pass from header is not input because it is a kind of meta data(data abput data), data pass from body is secure but when you have a secure server https(ssl server)
// Jab ma server dobara start karonga to comment hat jainga because ya local var par base karta hain and local var jab tak rahta hain jab tak mera server off nahi hojata jesa hi mera server restart hota local var khatm hojata hain
// app.get("/weather/:cityName", (req, res) => {

//     console.log(req.params.cityName);
//     console.log(req.query.unit);
//     console.log(req.body.name);
    
    
//     let weatherData = { 
//         karachi: {
//         city: "Karachi",
//         tempInC: "32 C",
//         humidity: 56,
//         high: 32,
//         low: 21,
//     },
//         landon: {
//             city: "Landon",
//             tempInC: "32 C",
//             humidity: 56,
//             high: 32,
//             low: 21,
//         }
//     }

//     let userInputCityName = req.params.cityName.toLowerCase();
//     let weatherDataToSend = weatherData[userInputCityName];
    
//     if(weatherDataToSend){
//         res.send(weatherDataToSend);
//     }else {
//         res.status(404).send("Not Found");
//     }
// })

// let comments = [];
// app.post("/comment/:name", (req, res) => {
//     const name = req.params.name;
//     const comment = req.body.comment;
//     comments.push({
//         name: name,
//         comment: comment,
//     })
//     res.send({message: "comment post success"});
// })

// app.get("/comments", (req, res) => {
//     res.send(comments);
// })

// app.use(express.static(path.join(__dirname, 'public')))

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log("Server running");
// })




// WAYS OF TAKING OUTPUT FROM SERVER(file, json, plan string text{not recommmand})
// static folder relate to this
// reason for not recommand and solution data interchange language
// XML is a data inchangelang
// data interchange lang for client server communication wo json ha

import express from 'express'
import path from 'path';
const app = express();
const __dirname = path.resolve();
app.use(express.json());

// app.post("/weather", (req, res, next) => {
//     console.log(req.body);
//     res.send({
//         meassage: "weather normal",
//         temp: 23,
//     });
// })
// app.use(express.json(path.join(__dirname, 'public')))


// app.get('/getHtmlFile', (req, res) => {
//     res.sendfile('./public/index.html');
// })
// app.use("/static",express.static(path.join(__dirname, 'static')))
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log("Server listenenig");
// })




// PRICIPLES OF REST API
// 1: client and server dono alag honga  2: Server par state var nahi bana sakta state always  make on database server statte maintain nahi hogi eg(eik profile ka page us par counter laga dia jitni dafa user url par hit karega counter increase hota rahega) , stateless (agar state maintain ki restapi ya any micro service architecture par to wo kabhi consistent data provide nahi karegi unsatable hojata kabhi kuch data dega aur kabhi kuch)   3: chachable
// API also call webservice