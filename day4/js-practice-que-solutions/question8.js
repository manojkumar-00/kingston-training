/*
Sum of Nested Array Elements
Write a function sumNested(arr) that calculates the sum of all numbers in a
nested array using a loop and arrow functions.
const arr = [1, [2, 3], [4, [5]]];
sumNested(arr); // Output: 15
*/

function sumNested(arr) {
    let sum = 0;

    const flatten = (nested) => {
        for (let item of nested) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                sum += item;
            }
        }
    };

    flatten(arr);
    return sum;
}

const arr = [1, [2, 3], [4, [5]]];
console.log(sumNested(arr)); // Output: 15
