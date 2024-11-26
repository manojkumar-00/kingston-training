/*
 Find Common Elements
Write a function findCommon(arr1, arr2) that returns an array of common
elements between two arrays using a loop.
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
findCommon(arr1, arr2); // Output: [3, 4]
*/

function findCommon(arr1, arr2) {
    const common = [];
    for (let item of arr1) {
        if (arr2.includes(item)) {
            common.push(item);
        }
    }
    return common;
}


const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(findCommon(arr1, arr2)); 
