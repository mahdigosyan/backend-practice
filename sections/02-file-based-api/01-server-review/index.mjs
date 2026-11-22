import http, { request } from "node:http"

const PORT = 3001;

const server = http.createServer((req,res)=>{
    const {method , url } = req


    if (method === "GET" && url === "/"){
        res.writeHead(200,{"content-Type":"application/json"})
        res.end(
            JSON.stringify({
                success:true,
                message: "Product API is running"
            }),
        );
        return
    }

    if (method === "GET" && url === "/products"){
        res.writeHead(200,{"content-Type":"application/json"})
        res.end(
            JSON.stringify({
                success : true,
                data:[],
            }),
        );
        return
    }
    res.writeHead(404,{"content-type":"application/json"})
    res.end(
        JSON.stringify({
            success:false,
            message: "Route not found",
        }),
    );
});

server.listen(PORT,()=>{
    console.log("Products API is running at http://localhost:3001");
})