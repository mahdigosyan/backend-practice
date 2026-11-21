const products = [
  { id: 1, name: "Keyboard", price: 45 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Monitor", price: 220 },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

export function getTotalPrice() {
  return products.reduce((total, product) => total + product.price, 0);
}
