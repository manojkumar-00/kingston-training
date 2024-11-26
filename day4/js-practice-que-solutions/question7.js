/*
 Filter and Transform Array
Use arrow functions to filter an array for numbers greater than 10 and then
double those numbers.
const numbers = [5, 12, 8, 20, 3];
const result = numbers.filter( your arrow function here ).map( your arrow
function here );
console.log(result); 
*/

const numbers = [5, 12, 8, 20, 3];
const result = numbers
    .filter(num => num > 10)
    .map(num => num * 2);

console.log(result); 
