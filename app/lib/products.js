// dummy products data
const products = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 29.99,
    stock: 50,
    image: "tshirt.png",
  },
  {
    id: 2,
    name: "Wide Denim Jeans",
    price: 69.99,
    stock: 30,
    image: "jeans.png",
  },
  {
    id: 3,
    name: "Minimal Leather Wallet",
    price: 39.99,
    stock: 20,
    image: "wallet.png",
  },
  {
    id: 4,
    name: "Campus Backpack",
    price: 79.99,
    stock: 15,
    image: "backpack.png",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  const productId = parseInt(id, 10);
  return products.find((product) => product.id === productId);
}
