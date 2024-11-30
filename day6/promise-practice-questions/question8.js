/*
Question: Repeated Execution with setInterval

Create a JavaScript function `repeatAction` that takes a callback and an interval in milliseconds.
*/

function repeatAction(callback, interval, duration = null) {
    const intervalId = setInterval(callback, interval);
    if (duration) {
        setTimeout(() => clearInterval(intervalId), duration);
    }
}

repeatAction(() => console.log("Action executed"), 1000, 5000);
