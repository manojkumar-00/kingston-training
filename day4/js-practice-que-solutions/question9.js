/*
Find Unique Strings
Write an arrow function uniqueStrings(arr) that returns an array of unique
strings from the input array.
const arr = ["apple", "banana", "apple", "orange"];
uniqueStrings(arr); // Output: ["apple", "banana", "orange"]
*/

const uniqueStrings = (arr) => [...new Set(arr)];

const arr = ["apple", "banana", "apple", "orange"];
console.log(uniqueStrings(arr)); 
