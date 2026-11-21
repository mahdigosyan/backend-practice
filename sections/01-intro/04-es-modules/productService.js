const products = [
    {id:1,name:"keyboard",price:45},
    {id:2,name:"Mouse",price:25}
];

export function getAllProducts(){
    return products;
}

export function getProductsById(id){
    return products.find((products)=> products.id=== Number(id))

}

