const products = require("./assets/data/products.json");

function findProduct(code) {
  const product = products.find((product) => product.code === code);

  return product;
}

exports.findProduct = findProduct;
