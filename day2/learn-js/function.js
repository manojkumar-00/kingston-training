// JavaScript Basics: Functions, Function Expressions, Arrow Functions, and Commonly Used Methods

// 1. Functions
// Functions are reusable blocks of code that perform a specific task. They are declared using the `function` keyword.

// Example of a basic function:
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("John"); // Output: Hello, John!

// 2. Function Expressions
// Functions can also be assigned to a variable. These are called function expressions.

// Example:
// const greet = function(name) {
//     console.log(`Hi, ${name}!`);
// };
// greet("Jane"); // Output: Hi, Jane!

// Note: Function expressions are not hoisted, unlike function declarations.

// 3. Arrow Functions
// Introduced in ES6, arrow functions provide a shorter syntax for writing functions. They do not bind their own `this` keyword.

// Example:
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(5, 3)); // Output: 8

// Single-line arrow functions (implicit return):
// const multiply = (a, b) => a * b;
// console.log(multiply(4, 2)); // Output: 8

// Arrow function with one parameter (parentheses optional):
// const square = num => num * num;
// console.log(square(4)); // Output: 16

// 4. Commonly Used JavaScript Array Methods

// `map`: Creates a new array by applying a function to each element.
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// `filter`: Creates a new array with elements that pass a condition.
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// `reduce`: Reduces an array to a single value by applying a function.
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

// `forEach`: Executes a provided function for each array element.
// numbers.forEach(num => console.log(num));
// Output: 1, 2, 3, 4, 5 (each on a new line)

// `find`: Returns the first element that satisfies a condition.
// const firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven); // Output: 2

// `some`: Checks if at least one element satisfies a condition.
// const hasNegative = numbers.some(num => num < 0);
// console.log(hasNegative); // Output: false

// `every`: Checks if all elements satisfy a condition.
// const allPositive = numbers.every(num => num > 0);
// console.log(allPositive); // Output: true

// `sort`: Sorts an array in place. Can use a compare function for custom sorting.
// const fruits = ["banana", "apple", "cherry"];
// fruits.sort();
// console.log(fruits); // Output: ["apple", "banana", "cherry"]

// `reverse`: Reverses the order of elements in an array.
// fruits.reverse();
// console.log(fruits); // Output: ["cherry", "banana", "apple"]

// 5. Default Parameters
// Functions can have default values for parameters if none are provided during the call.
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }
// greet(); // Output: Hello, Guest!

// 6. Rest Parameters
// Collects all remaining arguments into an array.
// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

// 7. Practice Questions:

// Q1. Write a function that takes an array of numbers and returns a new array with all numbers doubled using `map`.
// const numbers = [1, 2, 3, 4];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers); // Output: [2, 4, 6, 8]

// Q2. Create a function that filters out words shorter than 4 characters from an array using `filter`.
// const words = ["cat", "elephant", "dog", "lion"];
// const longWords = words.filter(word => word.length >= 4);
// console.log(longWords); // Output: ["elephant", "lion"]

// Q3. Write a function using `reduce` to calculate the product of all numbers in an array.
// const numbers = [1, 2, 3, 4];
// const product = numbers.reduce((acc, num) => acc * num, 1);
// console.log(product); // Output: 24

// Uncomment each section as needed during teaching to demonstrate the concepts interactively.
