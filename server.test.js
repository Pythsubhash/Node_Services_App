const http=require('http');
const app=require('./app');
const server=http.createServer(app);
server.listen(3002);

console.log("Server is running on 3002");

// var http = require('http');
// var port = process.env.port || 3001
// http.createServer(function(req,res){
//     res.writeHead(200, {'content-Type':'text/plain'});
//     res.end('hello world');
// }).listen(port)
// console.log("Server is running on 3001");