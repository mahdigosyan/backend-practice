import http from "node:http";

const port = 3000;

const server = http.createServer((request,response)=>{
    console.log("Method:",request.method);
    console.log("URL:",request.url);


    response.setHeader("content-Type","text/plain")


    if (request.method === "GET" && request.url=== "/"){
        response.statusCode = 200;
        response.end("welcome to the Product API")
        return;
    }

    if(request.method === "GET" && request.url=== "/products"){
        response.statusCode = 200;
        response.end("Here are all products")
        return;
    }
    if (request.method === "POST" && request.url === "/products") {
        response.statusCode = 201;
        response.end("Product created");
        return;
  }

    response.statusCode = 404;
    response.end("Route not found")
});

server.listen(port,()=>{
    console.log("server is run");
})