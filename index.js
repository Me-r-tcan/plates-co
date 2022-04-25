const Basket = require("./src/basket");

const basket = new Basket();
basket.add("B01");
basket.add("G01");
console.log(basket.getItems());
console.log(basket.total());

console.log("**********************");

const basket2 = new Basket();
basket2.add("R01");
basket2.add("R01");
console.log(basket2.getItems());
console.log(basket2.total());

console.log("**********************");

const basket3 = new Basket();
basket3.add("R01");
basket3.add("G01");
console.log(basket3.getItems());
console.log(basket3.total());

console.log("**********************");

const basket4 = new Basket();
basket4.add("B01");
basket4.add("B01");
basket4.add("R01");
basket4.add("R01");
basket4.add("R01");
console.log(basket4.getItems());
console.log(basket4.total());
