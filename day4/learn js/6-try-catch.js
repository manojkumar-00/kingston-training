/**
 * try...catch in JavaScript
 * The `try...catch` statement is used to handle exceptions (errors) in JavaScript code.
 * It allows you to run code that might throw an error (inside the `try` block) and handle that error (in the `catch` block).
 * 
 * Syntax:
 * try {
 *     // Code that might throw an error
 * } catch (error) {
 *     // Code to handle the error
 * } finally {
 *     // (Optional) Code that will always execute, regardless of an error
 * }
 */

//==============================================================================

/**
 * Basic try...catch Example
 * Handling an error thrown by invalid JavaScript code.
 */
try {
    let result = 10 / 0; // This doesn't throw an error (returns Infinity)
    console.log("Result:", result);

    nonExistentFunction(); // This throws a ReferenceError
} catch (error) {
    console.log("An error occurred:", error.message);
    // Output: "An error occurred: nonExistentFunction is not defined"
}

// Explanation:
// - The code in the `try` block is executed first.
// - If an error occurs, execution jumps to the `catch` block to handle it.

//==============================================================================

/**
 * Using try...catch with JSON Parsing
 * A common use case is to safely parse JSON strings.
 */
const jsonString = '{ "name": "Alice", "age": 25 }'; // Valid JSON
const invalidJson = '{ name: "Alice", age: 25 }'; // Invalid JSON (missing quotesonst 
try {
    const invalidData = JSON.parse(invalidJson); // Throws a SyntaxError
    console.log("Parsed data:", invalidData);
} catch (error) {
    console.log("JSON parsing error:", error.message);
    console.log(error.stack);

}

// Explanation:
// - The `JSON.parse` method throws an error if the input is invalid JSON.
// - The `try...catch` block handles such errors gracefully.

//==============================================================================

/**
 * Using try...catch with the `finally` Block
 * The `finally` block is executed after the `try` and `catch` blocks, regardless of whether an error occurred.
 */
try {
    console.log("Trying to execute code...");
    throw new Error("An error occurred!"); // Simulate an error
} catch (error) {
    console.log("Caught an error:", error.message);
    // console.log(typeof (error));
    console.log(error);
} finally {
    console.log("This always executes, whether or not an error occurred.");
}

// Output:
// Trying to execute code...
// Caught an error: An error occurred!
// This always executes, whether or not an error occurred.

// Explanation:
// - Use the `finally` block to perform cleanup tasks, like closing a database connection.

//==============================================================================

/**
 * Nested try...catch Blocks
 * You can nest `try...catch` blocks to handle errors at different levels.
 */
try {
    console.log("Outer try block starts...");
    try {
        throw new Error("Inner error!");
    } catch (innerError) {
        console.log("Caught inner error:", innerError.message);
    }
    console.log("Outer try block continues...");
    nonExistentFunction(); // Throws a ReferenceError
} catch (outerError) {
    console.log("Caught outer error:", outerError.message);
}

// Output:
// Outer try block starts...
// Caught inner error: Inner error!
// Outer try block continues...
// Caught outer error: nonExistentFunction is not defined

// Explanation:
// - Inner and outer errors can be handled separately.
// - This allows fine-grained control over error handling.

//==============================================================================

/**
 * Custom Error Handling with try...catch
 * You can throw custom errors and handle them accordingly.
 */
try {
    const age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative!");
    }

    console.log("Valid age:", age);
} catch (error) {
    console.log("Custom error caught:", error.message);
    // Output: "Custom error caught: Age cannot be negative!"
}

// Explanation:
// - The `throw` keyword is used to create custom errors.
// - These errors can be handled in the `catch` block.

//==============================================================================

/**
 * Asynchronous Errors and try...catch
 * Use `try...catch` in `async` functions to handle asynchronous errors.
 */
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data"); // Make an HTTP request
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.log("Error during data fetching:", error.message);
    }
}

fetchData();

// Explanation:
// - The `try...catch` block works with `async`/`await` to handle asynchronous errors.
// - The `fetch` API throws errors for network issues, which are caught in the `catch` block.

//==============================================================================

/**
 * Summary of Key Points:
 * - The `try` block contains code that might throw an error.
 * - The `catch` block handles any error thrown in the `try` block.
 * - The `finally` block (optional) executes code that should run regardless of success or error.
 * - Errors can be thrown manually using the `throw` statement.
 * - Use `try...catch` with `async` functions to handle asynchronous errors.
 * 
 * Common Use Cases:
 * - Safely parsing JSON.
 * - Error handling for invalid inputs.
 * - Gracefully handling asynchronous errors in `async`/`await` code.
 * - Providing fallback logic for failed operations.
 */
