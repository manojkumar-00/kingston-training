// ===================== JavaScript Fundamentals =====================

// ===================== Variables =====================
// Variables are containers for storing data values.
// Declared using var, let, or const.
var globalVar = "I am a var variable (global or function-scoped)";
let blockScopedVar = "I am a let variable (block-scoped)";
const constantVar = "I am a const variable (cannot be reassigned)";

// ===================== Data Types =====================
// JavaScript has dynamic typing. Some common data types:
let numberType = 42; // Number
let stringType = "Hello, World!"; // String
let booleanType = true; // Boolean
let nullType = null; // Null
let undefinedType; // Undefined
let objectType = {
    key: "value",
    name: "Manoj Kumar",
    gender: "Male",
    city: "Shimla",
    is_maried: false,
    friends: ["Manoj", "Manoj Kumar", "Manoj Kumar", "Manoj Kumar"],
    new_obj: {
        checking: "Testing"
    },
    empty_obj: {}
}; // Object
let arrayType = [1, 2, 3]; // Array





console.log(`Object : ${objectType.name}`)

console.log("--------------------------------")

// ===================== Operators =====================
// Arithmetic operators: +, -, *, /, %, ** (exponentiation)
let sum = 5 + 3;
let product = 5 * 3;

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
console.log(5 === "5"); // false (strict equality)

// Logical operators: && (AND), || (OR), ! (NOT)
console.log(true && false); // false
console.log(true || false); // true

// ===================== Control Flow =====================
// Conditional statements: if-else, switch
if (sum > product) {
    console.log("Sum is greater");
} else {
    console.log("Product is greater");
}

// Loops: for, while, do-while
for (let i = 0; i < 3; i++) {
    console.log("For loop iteration:", i);
}

let j = 0;
while (j < 3) {
    console.log("While loop iteration:", j);
    j++;
}

// ===================== Functions =====================
// Functions are blocks of reusable code.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3));

// ===================== JavaScript ES6 Features =====================
// 1. Arrow Functions
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Output: 15

// 2. Template Literals
const templateLiteral = `Sum of 5 and 3 is ${sum}`;
console.log(templateLiteral);

// 3. Destructuring
const { key } = objectType;
console.log(key); // Output: value

const [first, second] = arrayType;
console.log(first, second); // Output: 1, 2

// 4. Spread Syntax
const newArray = [...arrayType, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// ===================== Closures and Scope =====================
// Closures allow a function to remember variables from its scope even when called outside.
function outer() {
    let outerVar = "Outer variable";
    return function inner() {
        console.log(outerVar);
    };
}
const closureFunc = outer();
closureFunc(); // Output: Outer variable

// Scope: Determines variable accessibility (block, function, global)

// ===================== Error Handling in JavaScript =====================
// try-catch is used to handle errors gracefully.
try {
    throw new Error("This is an error!");
} catch (error) {
    console.error("Error caught:", error.message);
} finally {
    console.log("This runs no matter what.");
}


// ===================== Temporal Dead Zone (TDZ) =====================
// TDZ refers to the time between entering a block scope and initializing a variable.
// Accessing a `let` or `const` variable before its declaration results in an error.
console.log("Temporal Dead Zone example:");
// console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = "I'm declared after this line";

// var does not have a TDZ; it is hoisted but initialized to undefined.
console.log(myVarVar); // Output: undefined
var myVarVar = "No TDZ for var!";

// ===================== Auto Globals =====================
// If a variable is assigned without `var`, `let`, or `const`, it becomes a global variable.
// This is bad practice and should be avoided.
function autoGlobalExample() {
    autoGlobal = "I'm an auto global!";
}
autoGlobalExample();
console.log(autoGlobal); // Output: "I'm an auto global!" (Declared globally without intention)

// ===================== Function Expressions =====================
// 1. Named Function Expression
const namedFunc = function myFunction() {
    console.log("I am a named function expression.");
};
namedFunc();
// myFunction(); // ReferenceError: myFunction is not accessible outside the expression

// 2. Anonymous Function Expression
const anonymousFunc = function () {
    console.log("I am an anonymous function expression.");
};
anonymousFunc();

// 3. Immediately Invoked Function Expression (IIFE)
// Runs immediately after it's defined.
(function () {
    console.log("I am an IIFE, executed immediately!");
})();

// ===================== Higher-Order Functions =====================
// Functions that accept other functions as arguments or return functions.
function higherOrderExample(callback) {
    console.log("Inside higherOrderExample");
    callback(); // Execute the passed function
}

higherOrderExample(function () {
    console.log("I am a callback function passed to a higher-order function.");
});

// Returning a function from another function
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// ===================== Callbacks =====================
// A callback is a function passed as an argument to another function.
function loadData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        callback("Data loaded!");
    }, 2000);
}

loadData((message) => console.log(message));

// ===================== setInterval and setTimeout =====================
// setTimeout: Executes a function after a specified delay.
setTimeout(() => {
    console.log("This message is displayed after 3 seconds.");
}, 3000);

// setInterval: Executes a function repeatedly after a specified interval.
let counter = 0;
const intervalId = setInterval(() => {
    console.log("Repeating message:", ++counter);
    if (counter === 3) clearInterval(intervalId); // Stop after 3 iterations
}, 1000);

// ===================== Promises =====================
// Promises represent the eventual completion (or failure) of an asynchronous operation.
const promiseExample = new Promise((resolve, reject) => {
    let isSuccess = true;
    if (isSuccess) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

promiseExample
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise operation complete."));

// ===================== Promise Object =====================
// Static methods of the Promise object: Promise.all, Promise.race, Promise.resolve, Promise.reject

// 1. Promise.all: Resolves when all promises resolve, rejects if any promise rejects.
const promise1 = Promise.resolve("First promise");
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second promise"));
const promise3 = Promise.resolve("Third promise");

Promise.all([promise1, promise2, promise3])
    .then((results) => console.log("Promise.all results:", results))
    .catch((error) => console.error(error));

// 2. Promise.race: Resolves or rejects as soon as one of the promises resolves/rejects.
Promise.race([promise1, promise2, promise3])
    .then((result) => console.log("Promise.race result:", result))
    .catch((error) => console.error(error));

// 3. Promise.resolve: Returns a promise resolved with the given value.
const resolvedPromise = Promise.resolve("I am resolved immediately!");
resolvedPromise.then((value) => console.log(value));

// 4. Promise.reject: Returns a promise rejected with the given reason.
const rejectedPromise = Promise.reject("I am rejected immediately!");
rejectedPromise.catch((error) => console.error(error));

// ===================== Async/Await for Promises =====================
// Async/Await makes working with Promises simpler and more readable.
async function asyncAwaitExample() {
    try {
        const result1 = await promise1;
        console.log("Async/Await - Result 1:", result1);

        const result2 = await promise2;
        console.log("Async/Await - Result 2:", result2);

        const result3 = await promise3;
        console.log("Async/Await - Result 3:", result3);
    } catch (error) {
        console.error("Error in Async/Await:", error);
    }
}

asyncAwaitExample();
