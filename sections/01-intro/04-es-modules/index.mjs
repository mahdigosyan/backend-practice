import {
  getAllProducts,
  getProductById,
  getTotalPrice,
} from "./productService.mjs";

console.log("--- ES Modules Practice ---");

console.log("All products:");
console.log(getAllProducts());

console.log("\nProduct with ID 2:");
console.log(getProductById(2));

console.log("\nProduct with ID 99:");
console.log(getProductById(99));

console.log("\nTotal price:");
console.log(getTotalPrice());
