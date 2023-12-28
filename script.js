
// Creating a server
// const http = require('http');
// const port = 3001;

// const server = http.createServer((req,res) => {
//         res.write("Hello Node");
//         res.end();
//     });
//     server.listen(port,() => {
//         console.log(`server running at http://localhost:${port}`);
// });



// readline method
// const readline = require("readline");
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question("What is Your Name :" , (name) =>{
//     console.log("Helloo..." + name);
//     rl.close();
// });
// rl.on("close" , () => {
//     console.log("Name Tab Closed Succesfully!!");
//     process.exit(0);
// });



// Files (Reading & Writing Synchronously)
// const fs = require("fs");
// const { readFile } = require('fs/promises');
// let inputtext = fs.readFileSync("./input.txt" , "utf-8");
// console.log(inputtext);
// let outputcont =`Hello this is the output text \n with inner text : ${inputtext} \n ${new Date()}`;
// fs.writeFileSync("./output.txt" , `${outputcont}`);



// Reading and Writing files Asynchronously

// I write  writefile inside the calbck of read because these are asynchronus function so can't understand when it works
//  fs.readFile('./input.txt' , 'utf-8' , (err,data) => {
//     console.log(data)
//     fs.writeFile('./output.txt' , `"${data}"\n output created on : ${new Date()}` , () => {
//         console.log("file written succesfully...")
//     })
// });
// console.log("running....");



// CREATING & ROUTING

// const htmlc = fs.readFileSync('index.html' , 'utf-8')
// const server = http.createServer((req,res) => {
//     let path = req.url;
//     if(path == '/' || path == '/home') {
//         res.end(htmlc);
//     }else if (path == '/about') {
//         // res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write("This Is The About Page...!")
//         res.end();
//     }else if (path == '/contact') {
//         // res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write("This Is The Contact Page...!")
//         res.end();
//     }else{
//         // res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write("Page Not Found...!")
//         res.end();
//     }
// });
// const port = 5000;
// server.listen(port,() => {
//     console.log(`Server is running at http://localhost:${port}`);
// });



// Adding a json file
// let products = JSON.parse(fs.readFileSync('./Data/files.json' , 'utf-8'))
// const server = http.createServer((req,res) => {
//     let path = req.url;
//     if (path === '/') {
//         res.write(htmlc);
//         res.end();
//     }
//     else if(path === '/JSON'){
//         res.writeHead(200 , {'content-type' : 'application/json'})
//         res.write(products)
//         res.end('This is the Product page')
//         // console.log(products)
//     }else{
//         res.write("Not Found!!!") 
//     }
// });
// const port = 4000;
// server.listen(port , () => {
//     console.log(`Server started...  http://localhost:${port}`);
// });


// test1
// const server = http.createServer((req,res) => {
//     if(req.url === '/' || req.url === '/home'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(htmlc)
//         res.end();
//     }
// });
// const port = 4001;
// server.listen(port,() => {
//     console.log(`Server created on : http://localhost:${port}`);
// })


// test2
// const express = require('express');
// let app = express();

// app.get('/' , (req,res) => {
//     res.send('hello node');
// });
// app.get('/about' , (req,res) => {
//     res.send('this is about page')
// })
// const port = 5001;
// app.listen(port, () => {
//     console.log(`Server on http://localhost:${port}`);
// })
