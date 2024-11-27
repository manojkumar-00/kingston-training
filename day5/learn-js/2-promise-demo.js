/**
 * Promises: They are special type of objects in JS that acts as a placeholder for the data (or task i.e. deffered task) we hope to get back sometime in future.
 * A Promise in JavaScript represents a value that may be available now, in the future, or never.
 * It allows us to handle asynchronous operations more effectively compared to callbacks.
 *
 * States of a Promise:
 * - Pending: Initial state, neither fulfilled nor rejected.
 * - Fulfilled: Operation completed successfully.
 * - Rejected: Operation failed.
 * 
 */


//==============================================================================

/**
 * Creating and Using Promises
 * Syntax: const promise = new Promise((resolve, reject) => { ... });
 */


function promiseDemo() {
    return new Promise(function executorFn(resolve, reject) {
        console.log("Start of promise executor function");
        setTimeout(function cb() {
            console.log("Completed task, now resolving it ");
            reject("File downloaded: file.jpg");
            resolve("file.jpg");
        }, 5000);
        console.log("End of promise executor function")
    });
}

const promiseObj = promiseDemo();
console.log(promiseObj)
promiseObj
    .then(
        function onFullfillment(resolvedValue) {
            console.log("Fullfilment: ", resolvedValue);
        },
        function onRejection(rejectedValue) {
            console.log("Rejection: ", rejectedValue);
        },
    );

//==============================================================================


const myPromise = new Promise((resolve, reject) => {
    const success = false; // Simulate success or failure
    if (success) {
        resolve("Promise fulfilled!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(
        (result) => {
            console.log("Resolved with value : ", result);
        },
        (result) => {
            console.log("Rejected with value : ", result);
        })
    .catch((error) => {
        console.log("Called catch");
        console.error(error);
    });

//==============================================================================

/**
 * Chaining Promises
 * Promises can be chained to perform sequential asynchronous operations.
 */

function asyncTask(step) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step ${step} completed`);
            resolve(step + 1);
        }, 1000);
    });
}

asyncTask(1)
    .then((nextStep) => asyncTask(nextStep))
    .then((nextStep) => asyncTask(nextStep))
    .then((nextStep) => console.log(`Final Step: ${nextStep}`))
    .catch((error) => console.error(error));


//==============================================================================

/**
 * Error Handling in Promises
 * Errors can be caught using the `catch` method in a promise chain.
 */

function asyncTaskWithError(step) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (step === 2) reject(`Error at Step ${step}`);
            else resolve(step + 1);
        }, 1000);
    });
}

asyncTaskWithError(1)
    .then((nextStep) => asyncTaskWithError(nextStep))
    .then((nextStep) => asyncTaskWithError(nextStep)) // Step 2 will throw an error
    .catch((error) => console.error(error)) // Output: Error at Step 2
    .finally(() => console.log("Cleanup tasks, if any"));

//==============================================================================

/**
 * The `finally` Method
 * Executes after a promise is settled, regardless of its result.
 */

new Promise((resolve, reject) => {
    reject("Something went wrong!");
})
    .catch((error) => console.error(error)) // Output: Something went wrong!
    .finally(() => console.log("Execution complete")); // Output: Execution complete

//==============================================================================

/**
 * Converting Callbacks to Promises
 * Promises can be used to wrap callback-based functions.
 */

function callbackToPromise(task, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = task === "Task 2" ? "Error occurred!" : null;
            if (error) reject(error);
            else resolve(`${task} completed`);
        }, 1000);
    });
}

// Using the converted promise
callbackToPromise("Task 2")
    .then(
        (result) => console.log('Resolved : ', result),
        // (result) => console.log('Rejected : ', result) //comment out
    )
    .catch((error) => console.error("Error occured : ", error));

//==============================================================================

/**
 * Promise.all
 * Runs multiple promises in parallel and resolves when all are fulfilled.
 */

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 1500));

Promise.all([promise1, promise2, promise3])
    .then((results) => console.log(results)) // Output: ["Task 1 done", "Task 2 done", "Task 3 done"]
    .catch((error) => console.error(error));

//==============================================================================

/**
 * Promise.race
 * Resolves or rejects as soon as the first promise in the iterable settles.
 */

const racePromise1 = new Promise((resolve) => setTimeout(() => resolve("Fastest!"), 1000));
const racePromise2 = new Promise((resolve) => setTimeout(() => resolve("Slower..."), 2000));

Promise.race([racePromise1, racePromise2])
    .then((result) => console.log(result)) // Output: Fastest!
    .catch((error) => console.error(error));

//==============================================================================

/**
 * Promise.any (ES2021)
 * Resolves as soon as the first promise is fulfilled, ignoring rejections.
 */

const anyPromise1 = new Promise((_, reject) => setTimeout(() => reject("Failed 1"), 1000));
const anyPromise2 = new Promise((resolve) => setTimeout(() => resolve("Success!"), 2000));
const anyPromise3 = new Promise((_, reject) => setTimeout(() => reject("Failed 3"), 1500));

Promise.any([anyPromise1, anyPromise2, anyPromise3])
    .then((result) => console.log(result)) // Output: Success!
    .catch((error) => console.error(error));

//==============================================================================

/**
 * Conclusion:
 * - Promises provide a cleaner, more manageable way to handle asynchronous code.
 * - Key methods include `then`, `catch`, `finally`, `all`, `race`, and `any`.
 * - Promises reduce callback hell and improve error handling.
 * - But promises hell is still a challenge.
 * - Transitioning to promises is essential for modern JavaScript development.
 */

//==============================================================================