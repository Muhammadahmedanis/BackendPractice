//                                                    WITHOUT EXPRESSJS


// const hello = "Hello World";
// console.log(hello);

// const fs = require('fs');
// const textIn = fs.readFileSync('./text/inp.text', 'utf-8', (err, data) => {
//     // console.log(data);
//     if(data){
//         console.log(data);
//     }else {
//         console.log(err);
//     }
// });
// console.log(textIn);
// const textOut = "This is what we know about the avocado";
// fs.writeFileSync("./text/output.txt", textOut);
// console.log("file written");



const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    console.log(req.url,"req.url");
    if(req.url == '/'){
        res.end("Salam");
    } else if(req.url == '/channa'){
        res.end("channa papri");
    }else {
        res.end("not found");
    }
})

server.listen(3000, '0.0.0.0', (err, data) => {
    console.log("Server listening to port");
    if(err)
        throw err;
})