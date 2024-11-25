/**
 * Functions
 * Syntax: function functionName(parameters) { code  }
 */

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("John"); // Output: Hello, John!

//==============================================================================
/**
 * Function Expressions
 * Syntax: const functionName = function(parameters) { code  }
 * Note: Function expressions are not hoisted, unlike function declarations.
 */

// greet(); // ReferenceError: greet is not defined
// const greet = function (name) {
//     console.log(`Hi, ${name}!`);
// };
// greet("Jane"); // Output: Hi, Jane!
// console.log(typeof greet);

// console.log(greetFn("123"));

//==============================================================================
/**
 * IIFE Expressions
 * Immediately Invoked Function Expression (IIFE)
 * Syntax: (function() { code  })()
 */

// console.log("Start");
// (function (x) {
//     console.log("I am an IIFE, executed immediately!", x);
//     return 10;
// })(10);
// console.log("End");


// (function sum(a, b) {
//     console.log(a + b);
// })(1, 2);

//==============================================================================

/**
 * Arrow Functions
 * Syntax: const functionName = (parameters) => { code  }
 */

// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(5, 3)); // Output: 8

// const greet = (name) => console.log(`Hello, ${name}`);
// greet();

// Single-line arrow functions (return keyword optional):
// const multiply = (a, b) => a * b;
// console.log(multiply(4, 2)); // Output: 8

// Arrow function with one parameter (parentheses optional):
// const square = num => num * num;
// console.log(square(4)); // Output: 16

//==============================================================================

// Default Parameters

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }
// greet(); // Output: Hello, Guest!

// function add(a, x = 1, b, c) {
//     console.log(x);
//     console.log(c);
//     return a + b + c + x;
// }
// // console.log(add({ a = 1, b = 2, c = 3 }));
// console.log(1 + undefined);
//

// console.log(a);

// const a = function () {
//     console.log("helo");
// }

// const b = (a,b) => { }

// function checking() {

//     //this:
//     test = function abc() {
//         console.log("Test");
//     }
//     test();
// }

// test();

//==============================================================================

// Commonly Used JavaScript Array Methods

// `map`: Creates a new array by applying a function to each element.

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);
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

//Example: Odd behaviour, not in lexiographical order
// const numbers = [1, 2, 10, 11, 12, 3, 4, 5];
// numbers.sort();
// console.log(numbers); // Output: [1, 10, 11, 12, 2, 3, 4, 5]

//Not in lexiographical order
// const numbers = [1, 2, 10, 11, 12, 3, 4, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 2, 3, 4, 5, 10, 11, 12]

// `reverse`: Reverses the order of elements in an array.
// fruits.reverse();
// console.log(fruits); // Output: ["cherry", "banana", "apple"]

//==============================================================================

/**
 * Explanation:
 * The rest operator gathers all arguments passed to the function into an array.
 * Use case: Sum all numbers passed as arguments.
 */
// function sumAll(...numbers) {
//     console.log(typeof numbers);
//     console.log(numbers);
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15


/**
 * Explanation:
 * Use the rest operator to gather remaining items when destructuring an array.
 * Use case: Separate the first two elements and collect the rest.
 */
// const colors = ["red", "blue", "green", "yellow", "purple"];
// const [primary1, primary2, ...secondaryColors] = colors;

// console.log(primary1, primary2); // Output: red blue
// console.log(secondaryColors);   // Output: ["green", "yellow", "purple"]


/**
 * Explanation:
 * Gather all names after the first argument using the rest operator.
 * Use case: Dynamically greet multiple people.
 */
// function greetAll(greeting, ...names) {
//     return `${greeting}, ${names.join(", ")}!`;
// }

// console.log(greetAll("Hello", "Alice", "Bob", "Charlie")); // Output: Hello, Alice, Bob, Charlie!


//==============================================================================
// Spread Operator
/**
 * Explanation:
 * The spread operator expands array elements into individual items.
 * Use case: Merge two arrays into one.
 */
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];

// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

/**
 * Explanation:
 * Combine multiple objects into one using the spread operator to collect dynamic properties.
 * Use case: Dynamically add new properties to an object.
 */
// function addProperties(baseObject, ...extraProps) {
//     console.log({ ...baseObject, newProperty: "New property value" })
//     return { ...baseObject, ...extraProps };
// }

// const base = { name: "John" };
// const result = addProperties(base, { age: 25 }, { city: "New York" });
// console.log(result); // Output: { name: 'John', age: 25, city: 'New York' }


/**
 * Explanation:
 * The spread operator creates a shallow copy of an array.
 * Use case: Modify a copy without affecting the original array.
 */
// const original = [10, 20, 30];
// const copy = [...original];
// copy.push(40);

// console.log(original); // Output: [10, 20, 30]
// console.log(copy);     // Output: [10, 20, 30, 40]

/**
 * Explanation:
 * The spread operator expands object properties into another object.
 * Use case: Combine two objects into one.
 */
// const obj1 = { name: "Alice", age: 25 };
// const obj2 = { city: "New York", country: "USA" };
// const merged = { ...obj1, ...obj2 };

// console.log(merged); // Output: { name: 'Alice', age: 25, city: 'New York', country: 'USA' }


//==============================================================================
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
// const numbersForProduct = [1, 2, 3, 4];
// const product = numbersForProduct.reduce((acc, num) => acc * num, 1);
// console.log(product); // Output: 24

// Q4. Use the spread operator to merge two arrays into one.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Q5. Use the spread operator to create a shallow copy of an array and modify the copy.
// const originalArray = [10, 20, 30];
// const copiedArray = [...originalArray];
// copiedArray.push(40);
// console.log("Original:", originalArray); // Output: [10, 20, 30]
// console.log("Copy:", copiedArray);      // Output: [10, 20, 30, 40]

//=================================================================================


// function hof(a, b, sum) {
//     console.log(typeof sum);
//     return sum(a, b);
// }

// function sum(a, b) {
//     return a + b;
// }

// console.log(hof(10, 20, function sum(a, b) {
//     return a + b;
// }));
// function hof() {
//     return function sum(a, b) {
//         return a + b;
//     }
// }
// const value = hof();
// console.log(typeof value);
// console.log(value(10, 50));

// function sum(a, b, ...values) {
//     console.log(a);
//     console.log(b);
//     console.log(values);
// }

// sum(10, 20, 30, 40, 50);


// function restFn(a, ...values, c) {
//     console.log(a);
//     console.log(values);
//     console.log(c);
// }

// console.log(restFn(10, 20, 30, 40, 50));



