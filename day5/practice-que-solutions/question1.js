/*
Question: Filter Even Numbers

Write a function that uses filter to return only the even numbers from an array of integers.
*/

function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}

const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers1)); // Output: [2, 4, 6]
