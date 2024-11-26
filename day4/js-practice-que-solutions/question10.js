/*
Sort Objects by a Key
Write an arrow function sortByKey(arr, key) that sorts an array of objects by
a specific key in ascending order.
const users = [
{ name: "Alice", age: 30 },
{ name: "Bob", age: 25 },
{ name: "Charlie", age: 35 }
];
sortByKey(users, 'age');
*/

const sortByKey = (arr, key) => arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));

const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log(sortByKey(users, 'age'));

