// const http = require("http");

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/plane'})
//     res.end("hi NODE JS")
// }).listen(3000,()=>{
//     console.log("server is run");
// })



const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/JSON'})
    res.end("JSON is test")
}).listen(3000,()=>{
    console.log("server is run");
})