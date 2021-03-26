// import functions and grab DOM elements
import { addition, subtraction, multiplication, division, toNumber } from './calculator.js';

function init(input1ID, input2ID, buttonID, resultID, operation) {
    const input1 = document.getElementById(input1ID);
    const input2 = document.getElementById(input2ID);
    const button = document.getElementById(buttonID);
    const result = document.getElementById(resultID);
// add the event listener
    button.addEventListener('click', () => {
        const num1 = toNumber(input1);
        const num2 = toNumber(input2);
        result.textContent = operation(num1, num2);
    });

}
// run the function init with the parameters for each operation
init('first-addend', 'second-addend', 'add', 'sum', addition);
init('minuend', 'subtrahend', 'subtract', 'difference', subtraction);
init('multiplicand', 'multiplier', 'multiply', 'product', multiplication);
init('dividend', 'divisor', 'divide', 'quotient', division);

// //declare addition variables
// const firstAddend = document.getElementById('first-addend');
// const secondAddend = document.getElementById('second-addend');
// const add = document.getElementById('add');
// const sum = document.getElementById('sum');
// //create addition function
// add.addEventListener ('click', () => {
//     const num1 = toNumber(firstAddend);
//     const num2 = toNumber(secondAddend);
//     sum.textContent = addition(num1, num2);
// });

// //declare addition variables
// const minuend = document.getElementById('minuend');
// const subtrahend = document.getElementById('subtrahend');
// const subtract = document.getElementById('subtract');
// const difference = document.getElementById('difference');
// //create addition function
// subtract.addEventListener ('click', () => {
//     const num1 = toNumber(minuend);
//     const num2 = toNumber(subtrahend);
//     difference.textContent = subtraction(num1, num2);
// });

// //declare subtraction variables
// const multiplicand = document.getElementById('multiplicand');
// const multiplier = document.getElementById('multiplier');
// const multiply = document.getElementById('multiply');
// const product = document.getElementById('product');
// //call function
// multiply.addEventListener('click', () => {
//     const num1 = toNumber(multiplicand);
//     const num2 = toNumber(multiplier);
//     product.textContent = multiplication(num1, num2);
// });

// //declare division variables
// const dividend = document.getElementById('dividend');
// const divisor = document.getElementById('divisor');
// const divide = document.getElementById('divide');
// const quotient = document.getElementById('quotient');
// //call function
// divide.addEventListener('click', () => {
//     const num1 = toNumber(dividend);
//     const num2 = toNumber(divisor); 
//     quotient.textContent = division(num1, num2);
// });