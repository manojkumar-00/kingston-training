/*
Question: Implement a Custom filter Function

Write your own version of the filter method called customFilter.
*/

function customFilter(array, callback) {
    const result = [];
    for (let element of array) {
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}

const numbers4 = [1, 2, 3, 4, 5];
console.log(customFilter(numbers4, num => num > 2)); 
