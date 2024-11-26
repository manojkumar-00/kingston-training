/*
Group By Property
Write a function groupByProperty(arr, prop) that groups objects in an array by
a specific property.
const data = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 25 }
];
groupByProperty(data, 'age');
*/

// function groupByProperty(arr, prop) {
//     const grouped = {};
//     for (let item of arr) {
//         const key = item[prop];
//         if (!grouped[key]) {
//             grouped[key] = [];
//         }
//         grouped[key].push(item);
//     }
//     return grouped;
// }


// const data = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 }
// ];
// console.log(groupByProperty(data, 'name'));

const calulateSum = function sum(a, b) {
    return a + b;
}
console.log(calulateSum(10, 20));

const calulateSum2 = (a, b) => {
    return a + b;
}
console.log(calulateSum2(10, 20));

function hof(a, b, sum) {
    let ans = sum(a, b);
    console.log(ans);
}
function sum(a, b) {
    return a + b;
}
hof(1, 2, sum);