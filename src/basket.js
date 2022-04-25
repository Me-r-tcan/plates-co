const { calculateDeliveryCost } = require("./delivery");
const config = require("./config");
const { findProduct } = require("./product");
const decimalAdjust = require("./utils/decimalAdjust");

class Basket {
  #items;
  #totalPrice;
  #formattedTotalPrice;
  #specialOfferProduct;

  constructor() {
    this.#items = [];
    this.#totalPrice = 0;
    this.#formattedTotalPrice = "";
    this.#specialOfferProduct = "R01";
  }

  add(code) {
    const itemIndex = this.#getItemIndex(code);

    if (itemIndex !== -1) {
      this.#items[itemIndex].quantity += 1;
    } else {
      const product = findProduct(code);
      product.quantity = 1;
      this.#items.push(product);
    }
  }

  total() {
    this.#calculateItems();

    if (this.#checkSpecialOffer()) {
      this.#calculateSpecialOffer();
    }

    this.#addDeliveryCost();
    this.#formatTotalPrice();

    return this.#formattedTotalPrice;
  }

  getItems() {
    return this.#items;
  }

  #getItemIndex(code) {
    return this.#items.findIndex((item) => item.code === code);
  }

  #calculateItems() {
    this.#totalPrice = 0;
    this.#items.forEach((item) => {
      let amount = item.price * item.quantity;
      this.#totalPrice += amount;
    });
  }

  #addDeliveryCost() {
    this.#totalPrice += calculateDeliveryCost(this.#totalPrice);
  }

  #checkSpecialOffer() {
    const itemIndex = this.#getItemIndex(this.#specialOfferProduct);

    if (itemIndex !== -1) {
      return this.#items[itemIndex].quantity >= 2;
    }

    return false;
  }

  #calculateSpecialOffer() {
    const product = findProduct(this.#specialOfferProduct);
    const discountPrice = product.price / 2;
    this.#totalPrice -= discountPrice;
  }

  #formatTotalPrice() {
    const format = new Intl.NumberFormat(config.locale.language, {
      style: "currency",
      currency: config.locale.currency,
    });

    this.#formattedTotalPrice = format.format(
      decimalAdjust(this.#totalPrice, -2)
    );
  }
}

module.exports = Basket;
