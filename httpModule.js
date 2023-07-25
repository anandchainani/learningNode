//setting up http server requires you to import http module
const http = require('http');

//creating a server
const server = http.createServer((req,res)=>{
    res.write('welcome to our home page');
    res.end()
})

server.listen(5000);