
function customReduceFn(cb, array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];

    let accumulator = array[0];
    let curr = 10;
    for (let i = 1; i < array.length; i++) {
        curr = array[i];
        accumulator = cb(accumulator, curr);
    }
    return accumulator;
}

console.log(customReduceFn(
    function (acc, curr) {
        return acc + curr;
    }, [10, 20, 30, 40, 50]
));





// const numbers = [10, 20, 30, 40, 50];

// let i = 0;
// const result = numbers.reduce(function (acc, curr) {
//     console.log(`Iteration ${i++}: acc = ${acc}, curr = ${curr}`);
//     return acc + curr;
// }, 0);

// console.log(result);