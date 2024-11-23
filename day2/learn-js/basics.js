// JavaScript Basics: Variables, Data Types, and TDZ

// 1. Variables
// Variables are containers for storing data values. You can declare variables using `var`, `let`, and `const`.

// var newVariable;
// console.log(newVariable);

// newVariable = "Value";
// console.log(newVariable);

// var newVariable;
// console.log(newVariable)


// let userName;
// console.log(userName);

// userName = "New name";
// console.log(userName);

// let userName;


// Example of `var` (Function-scoped, can be redeclared):

// const MAX_AGE = 100;
// // MAX_AGE = 30;

// console.log(MAX_AGE)


// let MAX_AGE = 20;

// let y = 10;
// console.log(y);

// var x = 10;
// console.log(x); // Output: 10

// let city = "Shimla";

// console.log(city.toLowerCase());
// console.log(y.toLowerCase())

// Example of `let` (Block-scoped, cannot be redeclared in the same scope):
// let y = 20;
// console.log(y); // Output: 20

// Example of `const` (Block-scoped, must be initialized during declaration, cannot be reassigned):
// const z = 30;
// console.log(z); // Output: 30

// 2. Data Types
// JavaScript has two categories of data types: Primitive and Reference.

// Primitive Types:
// - String
// let str = 'Hello, World!';
// console.log(str);
// console.log(typeof null); // Output: string
// console.log(typeof undefined); // Output: string

// // - Number
// let num = Number('abc');
// console.log(typeof NaN);
// console.log(num);
// console.log(typeof num); // Output: number

// - BigInt (for very large integers)
// let bigNum = 123456789012345678901234567890n;
// console.log(typeof bigNum); // Output: bigint

// - Boolean
// let isTrue = true;
// console.log(Boolean({}));
// console.log(typeof [])
// console.log(typeof isTrue); // Output: boolean

// - Undefined (a variable declared but not assigned a value)
// let u;
// console.log(typeof u); // Output: undefined

// - Null (represents the absence of any value)
// let n = null;
// console.log(typeof n); // Output: object (This is a known quirk in JavaScript)

// - Symbol (unique and immutable value)
// let sym = Symbol("❌"); // Number('10)
// console.log(sym);
// console.log(typeof sym); // Output: symbol

// Reference Types:
// - Object
// let obj = { name: "John", age: 30 };
// console.log(obj);
// console.log(typeof obj); // Output: object

// - Array (a type of object)
let arr = [1, 2, 3];
console.log(typeof arr); // Output: object

// - Function (also a type of object)
// function greet() {
//     console.log("Hello");
// }
// console.log(typeof greet); // Output: function

// 3. The Temporal Dead Zone (TDZ)
// TDZ refers to the phase where a variable is declared but not initialized yet.
// Accessing a `let` or `const` variable before its declaration will throw a ReferenceError.

// TDZ Example (Uncomment to demonstrate):
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

// The same applies to `const`:
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// const b = 20;

// However, `var` does not have a TDZ and is hoisted with an `undefined` value:
// console.log(c); // Output: undefined
// var c = 30;

// 4. Hoisting
// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compile phase.
// Only the declarations are hoisted, not the initializations.

// Example:
// console.log(hoistedVar); // Output: undefined
// var hoistedVar = "I am hoisted";

// However, `let` and `const` are not initialized, leading to a TDZ:
// console.log(hoistedLet); // ReferenceError
// let hoistedLet = "I am not hoisted";

// 5. Differences between `let`, `const`, and `var`:
// - `var` is function-scoped, while `let` and `const` are block-scoped.
// - `var` can be redeclared, but `let` and `const` cannot in the same scope.
// - `const` must be initialized during declaration and cannot be reassigned.

// Example of Block Scoping:
// if (true) {
//     let blockScoped = "I'm block-scoped!";
//     console.log(blockScoped); // Output: I'm block-scoped!
// }
// console.log(blockScoped); // ReferenceError: blockScoped is not defined
