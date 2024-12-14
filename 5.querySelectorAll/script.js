//!Select all product cards
const productCardsEl = document.querySelectorAll(".product-card")
// console.log(productCardsEl);

//!Extract all the names of the products
const productNameEl = document.querySelectorAll(".product-name")
// console.log(productNameEl);
//?Looping over productNameEl
productNameEl.forEach((name) => {
    // console.log(name);
    // console.log(name.innerHTML);
})

//! Select all the prices of laptop category product
const priceEl = document.querySelectorAll("[data-category='laptop'] .product-price")
// console.log(priceEl);
//?Loopint to print the price
priceEl.forEach((price) => {
    // console.log(price.innerHTML);
})

//! Select all products above 4.5 rating
const highestRating = document.querySelectorAll("[data-rating='4.7'], [data-rating='4.8']")
// console.log(highestRating);
highestRating.forEach((el) => {
    console.log(el.innerHTML);
})