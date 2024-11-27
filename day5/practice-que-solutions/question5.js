/*
Question: Implement a Custom map Function

Write your own version of the map method called customMap.
*/

function customMap(array, callback) {
    const result = [];
    for (let element of array) {
        result.push(callback(element));
    }
    return result;
}

const numbers5 = [1, 2, 3];
console.log(customMap(numbers5, num => num * 3)); // Output: [3, 6, 9]
