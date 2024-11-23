// JavaScript Basics: Loops

// 1. `for` Loop
// A `for` loop is used when the number of iterations is known.

// Syntax: for (initialization; condition; increment/decrement) { /* code */ }

// Example:
// for (let i = 1; i <= 5; i++) {
//     console.log("Iteration:", i);
// }

// 2. `while` Loop
// A `while` loop is used when the number of iterations is not fixed. It executes as long as the condition is true.

// Syntax: while (condition) { /* code */ }

// Example:
// let count = 1;
// while (count <= 5) {
//     console.log("Count:", count);
//     count++;
// }

// 3. `do-while` Loop
// Similar to `while`, but it ensures the block is executed at least once before checking the condition.

// Syntax: do { /* code */ } while (condition);

// Example:
// let num = 1;
// do {
//     console.log("Number:", num);
//     num++;
// } while (num <= 5);

// 4. `for...of` Loop
// Used to iterate over iterable objects like arrays, strings, etc.

// Example with an array:
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// Example with a string:
// const word = "JavaScript";
// for (const char of word) {
//     console.log(char);
// }

// 5. `for...in` Loop
// Used to iterate over the properties (keys) of an object.

// Example:
// const student = { name: "John", age: 21, grade: "A" };
// for (const key in student) {
//     console.log(key, ":", student[key]);
// }

// 6. Breaking Out of Loops (`break`)
// The `break` statement is used to exit a loop before it completes all iterations.

// Example:
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i); // Output: 1, 2, 3, 4
// }

// 7. Skipping Iterations (`continue`)
// The `continue` statement skips the current iteration and moves to the next one.

// Example:
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i); // Output: 1, 2, 4, 5
// }

// 8. Nested Loops
// Loops inside loops are called nested loops.

// Example:
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

// Practice Questions:

// Q1. Write a program using a `for` loop to print the multiplication table of a given number (e.g., 5).
// let number = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// Q2. Use a `while` loop to calculate the sum of natural numbers up to `n`.
// let n = 5;
// let sum = 0;
// let i = 1;
// while (i <= n) {
//     sum += i;
//     i++;
// }
// console.log("Sum of natural numbers up to", n, "is:", sum);

// Q3. Create a program using a `for...in` loop to count the number of properties in an object.
// const car = { brand: "Toyota", model: "Corolla", year: 2021 };
// let count = 0;
// for (const key in car) {
//     count++;
// }
// console.log("Number of properties:", count);

// Uncomment each section as needed during teaching to demonstrate the concepts interactively.
