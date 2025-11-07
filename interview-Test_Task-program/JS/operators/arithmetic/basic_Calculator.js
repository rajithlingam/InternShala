/*
Basic Calculator ✅
 Build a simple calculator using JS operators that can add, subtract, multiply, divide two numbers.

Bonus: Handle edge cases like divide by zero.  ✅
*/

const data1 = prompt("Kindly enter the mumber to calculate:");
const data2 = prompt("Kindly enter the mumber to calculate:");

let num1 = Number(data1);
let num2 = Number(data2);

console.log(`add: ${num1 + num2}`);
console.log(`sub: ${num1 - num2}`);
console.log(`multiplication: ${num1 * num2}`);
console.log(` ${num1 ** num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Madulas: ${num1 % num2}`);
