/*
Question: Reduce to Find the Sum

Write a function that uses reduce to calculate the sum of all numbers in an array.
*/

function reduceToSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const numbers3 = [1, 2, 3, 4];
console.log(reduceToSum(numbers3)); // Output: 10
