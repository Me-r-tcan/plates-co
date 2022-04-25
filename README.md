This is a sample project, created for a case study with Lean Scale

# plates-co

Plates Co are the leading provider of made up dinner plates and they’ve contracted you to
create a proof of concept for their new sales system.

# Running the App

`node .\index.js`

You can see the results in the terminal.

# How it works

- **findProduct**:
  I used this function to find the products I added as json.

- **calculateDeliveryCost**:
  I used this function to find delivery cost.

- **decimalAdjust**:
  I used this function to avoid rounding in price action

- **Basket**:
  - I created a class for basket.
  - I added public add method for this class. If the product was added to the basket before, I increased the quantity of the product, if not, I found the product and added it.
  - I added public total method for this class. I calculated the total price of the items.I checked to see if there is a special offer, and if there is, I applied the special offer. I calculated the delivery cost of the items and add the total price.I formatted the total price and return the formatted price.

# Assumptions

- **Currency**:

  - I assumed that the price to be returned could be requested in other currencies. That's why I created a config file and added language and currency values by default. I returned the data edited with the curreny information of the request using Intl.NumberFormat.

- **Price Rounding**:

  - I assumed that the price should not be rounded.I created the decimalAdjust function for this situation and used it in the formatTotalPrice method.

- **Special Offer**:

  - I assumed that the special offer will only be applied once when only 2 Red plate products are purchased.
