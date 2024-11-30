/*
Question: Delayed Callback Execution

Write a JavaScript function `executeWithDelay` that accepts a callback function as an argument and ensures it is executed after exactly 2 seconds.
*/

function executeWithDelay(callback) {
    if (typeof callback !== "function") {
        throw new Error("Argument must be a valid callback function");
    }
    setTimeout(() => {
        callback("Callback executed after 2 seconds");
    }, 2000);
}

executeWithDelay((message) => console.log(message));
