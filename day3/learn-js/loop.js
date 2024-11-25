/**
 * For Loop
 * Syntax: for (initialization; condition; increment/decrement) { code  }
 */


// for (let i = 1; i <= 5; i++) {
//     console.log("Iteration:", i);
// }

/**
 * While Loop
 * Syntax: while (condition) { code  }
 */

// let count = 1;
// while (count <= 5) {
//     console.log("Count:", count);
//     count++;
// }


/**
 * do-while Loop
 * Syntax: do { code  } while (condition);
 */
// let num = 1;
// do {
//     console.log("Number:", num);
//     num++;
// } while (num <= 5);

/**
 * for...of Loop
 * Used to iterate over iterable objects like arrays, strings, etc.
 * Syntax: for (const element of iterable) { code  }
 */

const instituteName = "Kingston University";

// for (let i = 0; i <= instituteName.length - 1; i++) {
//     console.log(` i = ${i} , char = ${instituteName[i]}`)
// }
// 'use strict';

// function test() {
//     a;
//     if (true) {
//         a = 10;
//     }
//     console.log(a);
// }

// test();
// console.log(a);



// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// Example 2:
// const word = "JavaScript";
// for (const char of word) {
//     console.log(char);
// }

/**
 * for...in Loop
 * Used to iterate over the properties (keys) of an object.
 * Syntax: for (const key in object) { code  }
 */

const student = {
    name: "John",
    age: 21,
    grade: "A",
};
// console.log("Name : ", student.name);

// student.name
// for (const key in student) {
//     console.log(key, ":", `${student[key]} `);
// }

/**
 * break
 * continue
 */

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i); // Output: 1, 2, 3, 4
// }

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i); // Output: 1, 2, 4, 5
// }

// console.log(student.length)


/**
 * Que 1: Create a program using a `for...in ` loop to count the number of properties in an object.
 */

// const car = { brand: "Toyota", model: "Corolla", year: 2021 };
// let count = 0;
// for (const key in car) {
//     count++;
// }
// console.log("Number of properties:", count);


/**
 * Que 2: Print 0 1 2 3 ...to n and n-1 n-2 n-3 to 2 1 0 using single loop
 * Example: n = 5, Output: 0 1 2 3 4 5 4 3 2 1 0
 */

// let n = 5;
// let flag = false;

// let i = 0;
// while (i >= 0) {

//     if (i == n) flag = true;

//     console.log(i);

//     if (!flag) i++;
//     else i--;
// }
