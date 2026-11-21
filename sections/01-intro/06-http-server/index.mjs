import http from "node:http";

const port = 3000;

const server = http.createServer((request,response)=>{
    response.statusCode =200;
    response.setHeader('Content-Typye','text/plain')
    response.end("Hello Node.js")
});

server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

