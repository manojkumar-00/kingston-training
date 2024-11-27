function checkIfEven(number) {
    return new Promise(function executorCB(resolve, reject, abc) {
        (number % 2 === 0)
            ? resolve(`Number ${number} is even.`)
            : reject(`Number ${number} is odd.`);
    });
}

const promiseObj = checkIfEven(6);

promiseObj
    .then(
        function onFullfillment(resolvedValue) {
            console.log("Fullfilment: ", resolvedValue);
            return 10;
        },
        function onRejection(rejectedValue) {
            console.log("Rejection: ", rejectedValue);
        },
    )
    .then(
        function onFullfillment(resolvedValue) {
            console.log("Fullfilment: ", resolvedValue);
        },
        function onRejection(rejectedValue) {
            console.log("Rejection: ", rejectedValue);
        },
    );


console.log(promiseObj);

