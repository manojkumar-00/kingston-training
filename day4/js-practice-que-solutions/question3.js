/*
Count Properties in an Object
Write a function countProperties(obj) that returns the total number of
properties in an object, including nested properties.
const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
countProperties(obj); // Output: 5
*/

function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
            if (typeof obj[key] === "object" && obj[key] !== null) {
                count += countProperties(obj[key]);
            }
        }
    }
    return count;
}

const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(countProperties(obj)); // Output: 5
