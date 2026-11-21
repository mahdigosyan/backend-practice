const http = require ('http');
const products = require("./data/product.json");
const ProdoctController = require('./controllers/product.controllers');
const PORT = 3000;
const server = http.createServer((req,res)=>{
    if(req.url == "/api/product"){
        ProdoctController.get(req,res)
    }else{
        res.writeHead(404,{"content-type":"application/json"})
        res.write(
            JSON.stringify({message:"not found"})
        )
        res.end()
    }
   

})
server.listen(PORT)
console.log(`server is runn in ${PORT}`);