/*
Question: Implement a Custom reduce Function

Write your own version of the reduce method called customReduce.
*/

function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let element of array) {
        accumulator = callback(accumulator, element);
    }
    return accumulator;
}

const numbers6 = [1, 2, 3, 4];
console.log(customReduce(numbers6, (acc, num) => acc + num, 0)); // Output: 10
