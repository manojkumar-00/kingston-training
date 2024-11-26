/*
Deep Clone of an Object
Create a function deepClone(obj) that creates a deep clone of a nested object
using loops.
const obj = { a: 1, b: { c: 2, d: 3 } };
const clonedObj = deepClone(obj);
console.log(clonedObj); // Output: { a: 1, b: { c: 2, d: 3 } }
*/

function deepClone(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}


const obj = { a: 1, b: { c: 2, d: 3 } };
const clonedObj = deepClone(obj);
console.log(clonedObj);

