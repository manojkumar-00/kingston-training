//==============================================================================

/**
 * Callbacks
 * A callback is a function passed as an argument to another function,
 * to be executed later, usually after some asynchronous operation.
 */

//==============================================================================

/**
 * Basic Example of Callback
 * Syntax: function myFunction(callback) { callback(); }
 */
function doTask(task, callback) {
    console.log(`Starting: ${task}`);
    // callback("Lunch time");
    // callback("Lunch time");
    // callback("Lunch time");02

}

function finishTask(value) {
    console.log("Task completed with value : ", value);
}

doTask("Coding", finishTask);


//==============================================================================

/**
 * Asynchronous Callbacks with setTimeout
 * setTimeout is a common example of using callbacks for asynchronous operations.
 */

console.log("Start of code : ");
function test() {
    console.log("Start");
    setTimeout(() => {
        console.log("Async task 1");
    }, 2010);
    for (let i = 0; i < 5000; i++) {
        // console.log("Value inside loop ", i);
    }
    setTimeout(() => {
        console.log("Async task 2");
    }, 2000);
    console.log("End");
}
test();
console.log("Outside function");


setTimeout(function (message) {
    console.log("Message passed : ", message);
}, 2000);



//==============================================================================

/**
 * Nested Callbacks and Callback Hell
 * Callback hell occurs when multiple nested callbacks create complex, hard-to-read code.
 */

// Example: Fetching data in a nested manner (simulated with setTimeout)
function fetchData(step, callback) {
    setTimeout(() => {
        console.log(`Data fetched for Step ${step}`);
        callback();
    }, 1000);
}

// Nested callbacks leading to callback hell
fetchData(1, () => {
    fetchData(2, () => {
        fetchData(3, () => {
            console.log("All steps completed!");
        });
    });
});


//==============================================================================

/**
 * Issues with Callback Hell
 * - Hard to read and maintain.
 * - Difficult to debug.
 * - Poor error handling.
 */

//==============================================================================

/**
 * Handling Errors in Callbacks
 * A callback function can have parameters to handle errors.
 */

function asyncTaskWithErrorHandling(task, callback) {
    setTimeout(() => {
        const error = (task === "Task 2") ? "Error occurred!" : null;
        const result = `${task} completed`;
        callback(error, result);
    }, 1000);
}

asyncTaskWithErrorHandling("Task 2", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

asyncTaskWithErrorHandling("Task 2", (err, result) => {
    if (err) {
        console.error(err); // Output: Error occurred!
    } else {
        console.log(result);
    }
});

//==============================================================================

/**
 * Refactoring Callback Hell with Named Functions
 * Using named functions can help reduce callback hell and improve readability.
 */

function step1(callback) {
    fetchData(1, callback);
}

function step2(callback) {
    fetchData(2, callback);
}

function step3(callback) {
    fetchData(3, callback);
}

// Refactored code using named functions
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed! (Refactored)");
        });
    });
});
// Output is the same but the code is more readable.

//==============================================================================

/**
 * Transitioning from Callbacks to Promises
 * Promises solve many issues of callbacks, like callback hell and error handling.
 */

function fetchDataPromise(step) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (step === 2) reject("Step 2 failed!"); // Simulate an error
            else resolve(`Data fetched for Step ${step}`);
        }, 1000);
    });
}

fetchDataPromise(1)
    .then((result) => {
        console.log(result);
        return fetchDataPromise(2);
    })
    .then((result) => {
        console.log(result);
        return fetchDataPromise(3);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error); // Output: Step 2 failed!
    });

//==============================================================================

/**
 * Conclusion:
 * - Callbacks are a foundation of asynchronous programming in JavaScript.
 * - Callback hell is a major challenge that arises when callbacks are nested deeply.
 * - Inversion of control is a common issue with callbacks.
 * - Proper error handling is crucial for working with callbacks.
 * - Refactoring with named functions can improve readability.
 * - Promises and async/await (modern JavaScript concepts) provide a cleaner approach to handle async operations.
 */

//==============================================================================
