/*
Question: Map to Square Numbers

Write a function that uses map to return a new array containing the squares of each number in an input array.
*/

function mapToSquares(numbers) {
    return numbers.map(num => num * num);
}

const numbers2 = [1, 2, 3, 4];
console.log(mapToSquares(numbers2)); // Output: [1, 4, 9, 16]
