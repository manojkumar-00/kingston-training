/*
Write a function mergeObjects(obj1, obj2) that takes two objects and merges
their properties.
If both objects have the same key, the value in the second object should
overwrite the one in the first.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
mergeObjects(obj1, obj2); // Output: { a: 1, b: 3, c: 4 }
*/

const obj1 = { a: 1, b: 2, d: 4 };
const obj2 = { b: 3, c: 4, e: 5 };
function mergeObjects(obj1, obj2) {
    const merged = Object.assign({}, obj1, obj2);
    return merged;
}

console.log({ ...obj1, ...obj2 });
// console.log(mergeObjects(obj1, obj2)); 