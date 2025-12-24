let phonePrice = 119.95;

let phones = 30;

let taxRate = 0.05;

let totalPrice = phonePrice * phones;
let tax = totalPrice * taxRate;

let finalPrice = totalPrice + tax;

console.log("Total price without tax: $" + totalPrice);
console.log("Total tax: $" + tax);
console.log("Final price: $" + finalPrice);