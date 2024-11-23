// JavaScript Basics: try-catch

// 1. Introduction to try-catch
// The `try-catch` block is used to handle runtime errors without stopping the execution of the program.
// - The `try` block contains code that may throw an error.
// - The `catch` block handles the error if it occurs.

// Syntax:
// try {
//     // Code that may throw an error
// } catch (error) {
//     // Code to handle the error
// }

// Example: Handling an undefined variable
// try {
//     console.log(undeclaredVariable); // This will throw a ReferenceError
// } catch (error) {
//     console.log("An error occurred:", error.message);
// }
// Output: An error occurred: undeclaredVariable is not defined

// 2. Using JavaScript Built-in Functions in try-catch

// Example 1: Parsing JSON safely
// JSON.parse() parses a JSON string into an object but throws an error if the string is invalid.
// try {
//     const jsonString = '{"name": "John", "age": 30}'; // Valid JSON
//     const user = JSON.parse(jsonString);
//     console.log("User:", user);
// } catch (error) {
//     console.log("Error parsing JSON:", error.message);
// }

// Example 2: Handling invalid JSON
// try {
//     const invalidJsonString = '{"name": "John", "age":}'; // Invalid JSON
//     const user = JSON.parse(invalidJsonString);
//     console.log("User:", user);
// } catch (error) {
//     console.log("Error parsing JSON:", error.message);
// }
// Output: Error parsing JSON: Unexpected token } in JSON at position 19

// Example 3: Using `Number` to convert strings to numbers
// try {
//     const input = "abc123"; // Invalid number
//     const convertedNumber = Number(input);
//     if (isNaN(convertedNumber)) {
//         throw new Error("Invalid number format");
//     }
//     console.log("Converted Number:", convertedNumber);
// } catch (error) {
//     console.log("An error occurred:", error.message);
// }
// Output: An error occurred: Invalid number format

// 3. Custom Errors with `throw`
// You can manually throw errors in JavaScript using the `throw` keyword.

// Example: Validating user age
// try {
//     const age = -5;
//     if (age < 0) {
//         throw new Error("Age cannot be negative");
//     }
//     console.log("Valid age:", age);
// } catch (error) {
//     console.log("Error:", error.message);
// }
// Output: Error: Age cannot be negative

// 4. `finally` Block
// The `finally` block contains code that will run regardless of whether an error occurred or not.

// Example:
// try {
//     console.log("Trying some risky operation...");
//     const result = 10 / 2; // No error here
//     console.log("Result:", result);
// } catch (error) {
//     console.log("Error:", error.message);
// } finally {
//     console.log("Execution completed.");
// }
// Output:
// Trying some risky operation...
// Result: 5
// Execution completed.

// Example with error in `try` block:
// try {
//     console.log("Trying some risky operation...");
//     const result = 10 / 0; // No error here (division by zero in JavaScript returns Infinity)
//     if (!isFinite(result)) {
//         throw new Error("Division by zero is not allowed.");
//     }
//     console.log("Result:", result);
// } catch (error) {
//     console.log("Error:", error.message);
// } finally {
//     console.log("Execution completed.");
// }
// Output:
// Trying some risky operation...
// Error: Division by zero is not allowed.
// Execution completed.

// 5. Nesting try-catch Blocks
// You can nest `try-catch` blocks to handle different types of errors separately.

// Example:
// try {
//     try {
//         const user = JSON.parse('{"name": "John"}');
//         console.log("User name:", user.name);
//         console.log("Accessing non-existent property:", user.age.toUpperCase());
//     } catch (innerError) {
//         console.log("Inner error:", innerError.message);
//     }
// } catch (outerError) {
//     console.log("Outer error:", outerError.message);
// }
// Output: Inner error: Cannot read properties of undefined (reading 'toUpperCase')

// 6. Practice Questions

// Q1. Write a program that safely parses a JSON string and logs an error if the JSON is invalid.
// const jsonString = '{"product": "Laptop", "price": 1200}'; // Replace this with invalid JSON to test.
// try {
//     const parsedData = JSON.parse(jsonString);
//     console.log("Parsed Data:", parsedData);
// } catch (error) {
//     console.log("Invalid JSON:", error.message);
// }

// Q2. Create a program that validates an email address format. Throw an error if the format is invalid.
// const email = "user@example.com"; // Replace this with invalid email to test.
// try {
//     if (!email.includes("@") || !email.includes(".")) {
//         throw new Error("Invalid email format");
//     }
//     console.log("Valid email:", email);
// } catch (error) {
//     console.log("Error:", error.message);
// }

// Uncomment each section as needed to demonstrate `try-catch` with various use cases interactively.
