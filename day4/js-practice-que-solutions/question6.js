/*
Reverse an Object
Write a function reverseObject(obj) that reverses the key-value pairs in an
object.
const obj = { a: 1, b: 2, c: 3 };
reverseObject(obj); // Output: { 1: 'a', 2: 'b', 3: 'c' }
*/

function reverseObject(obj) {
    const reversed = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            reversed[obj[key]] = key;
        }
    }
    return reversed;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(reverseObject(obj)); 
