/**
 * Async/Await in JavaScript
 * `async` and `await` are used to handle asynchronous operations in a more readable and synchronous-like manner.
 * They were introduced in ES2017 (ES8) and are built on top of Promises.
 * 
 * - `async`: Declares an asynchronous function that implicitly returns a Promise.
 * - `await`: Pauses the execution of an async function until the Promise resolves, and then returns the resolved value.
 * 
 * Syntax:
 *   async function someFunction() { ... }
 *   const result = await someAsyncFunction();
 */

//==============================================================================

/**
 * Basic Syntax of Async/Await
 * An async function always returns a Promise, and `await` can only be used inside async functions.
 */

// A simple async function that returns a promise
async function greet() {
    return "Hello, World!";
}

console.log(greet());

greet().then((message) => {
    console.log(message); // Output: Hello, World!
});

// Using await inside an async function
async function greetWithAwait() {
    const message = await greet();
    console.log(message); // Output: Hello, World!
}

greetWithAwait();

//==============================================================================

/**
 * Awaiting Promises
 * The `await` keyword pauses the execution of an async function until the Promise resolves.
 * It is used to handle asynchronous code in a synchronous manner.
 */

// Example of using await with a promise

async function fetchData() {
    try {
        console.log("Started Fetch Data");
        const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log("res: ", response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error : ', error.message);
    }
}


fetchData();

const url = "https://jsonplaceholder.typicode.com/todos/1";
const fetchResponse = fetch(url);
fetchResponse
    .then(
        (response) => {
            const ans = response.json();
            return ans;
        },
        (error) => console.log(error)
    )
    .then(
        (data) => console.log(data)
    )
    .catch((error) => console.log(error)
    );


//==============================================================================

/**
 * Handling Errors with Async/Await
 * `try...catch` can be used with async/await to handle errors just like synchronous code.
 */

// Async function with error handling
async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/999"); // Invalid URL

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message); // Output: Error fetching data: Network response was not ok
    }
}

fetchDataWithErrorHandling();

//==============================================================================

/**
 * Async/Await with Multiple Promises
 * You can use `await` with multiple asynchronous operations, either sequentially or in parallel.
 */

// Sequential execution (one after the other)
async function sequentialExecution() {
    const first = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const firstData = await first.json();
    console.log(firstData);

    const second = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const secondData = await second.json();
    console.log(secondData);
}

sequentialExecution();

// Parallel execution using Promise.all (runs simultaneously)
async function parallelExecution() {
    const [first, second] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1"),
        fetch("https://jsonplaceholder.typicode.com/todos/2"),
    ]);
    const firstData = await first.json();
    const secondData = await second.json();
    console.log(firstData);
    console.log(secondData);
}

parallelExecution();

//==============================================================================

/**
 * Returning Values from Async Functions
 * An async function always returns a Promise, even if it appears to return a non-Promise value.
 */

// Async function returning a simple value
async function simpleReturn() {
    return 42; // Implicitly wrapped in a Promise
}

simpleReturn().then((value) => {
    console.log(value); // Output: 42
});

// Returning a resolved Promise explicitly
async function returnResolvedPromise() {
    return Promise.resolve("Resolved Value");
}

returnResolvedPromise().then((value) => {
    console.log(value); // Output: Resolved Value
});

//==============================================================================

/**
 * Chaining Async Functions
 * You can chain async functions using `.then()` after an async function call.
 */

// Async function chaining
async function asyncFunction1() {
    return "Step 1";
}

async function asyncFunction2() {
    return "Step 2";
}

async function asyncFunction3() {
    return "Step 3";
}

asyncFunction1()
    .then(result => {
        console.log(result); // Output: Step 1
        return asyncFunction2();
    })
    .then(result => {
        console.log(result); // Output: Step 2
        return asyncFunction3();
    })
    .then(result => {
        console.log(result); // Output: Step 3
    });

//==============================================================================

/**
 * Async/Await in Loops
 * You can use `await` inside loops to handle asynchronous operations sequentially.
 */

// Loop with async/await
async function fetchDataInLoop() {
    const todos = [1, 2, 3];
    for (const id of todos) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        console.log(data);
    }
}

fetchDataInLoop();

//==============================================================================

/**
 * Async Functions and Promise.all
 * `Promise.all` allows multiple asynchronous operations to run in parallel, and waits for all to resolve.
 * It returns an array of results in the same order as the promises passed.
 */

// Example with Promise.all
async function fetchMultipleData() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
    ];
    const promises = urls.map((url) => fetch(url).then((response) => response.json()));
    const results = await Promise.all(promises);
    console.log(results); // Output: [data1, data2]
}

fetchMultipleData();

//==============================================================================

/**
 * Async/Await with setTimeout
 * Use `setTimeout` within an async function to delay execution.
 */

// Using async/await with setTimeout to simulate delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncDelayExample() {
    console.log("Start");
    await delay(2000); // Wait for 2 seconds
    console.log("End"); // Output: Start, then after 2 seconds: End
}

asyncDelayExample();

//==============================================================================

/**
 * Key Takeaways:
 * - `async` functions always return a Promise.
 * - `await` pauses execution of an async function until the Promise resolves, and returns the result.
 * - Use `try...catch` for error handling within async functions.
 * - `await` can be used with multiple promises, either sequentially or in parallel with `Promise.all`.
 * - Async/await improves code readability and helps avoid "callback hell".
 */

//==============================================================================