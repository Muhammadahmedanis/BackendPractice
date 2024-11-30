import express from 'express';

const app = express();
app.use(express.json())
let user = [];

app.get("/", (req, res) => {
    res.send(new Date().toString());
})

// app.get("/user", (req, res) => {
//     res.send([{name: "Zain"}])
// })
// app.post("/post", (req, res) => {
//     res.send("running")
// })
// app.delete("/post", (req, res) => {
//     res.send("deleting");
// })

app.get("/user", (req, res) => {
    res.send(user);
})
app.post("/user", (req, res) => {
    try{
        user.push({...req.body, id: Date.now().toString(36)});
        res.status(201).send({status: 201, user: req.body, message: "user added successfully"});
    }catch(err){
        res.status(400).send({status: 400, message: "Something went wrong"});
    }
})
app.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    user = user.filter(obj => obj.id !== id);
    res.send({message: "User deleted successfully"});
})
app.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const index = user.findIndex(obj => obj.id === id);
    user.splice( index, 1, {...req.body, id});
    res.send({ id, message: "User update successfully"});
})

app.listen(3000, () => {
    console.log("Server running");
});