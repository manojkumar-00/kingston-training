// JavaScript Basics: Conditional Statements and Operators

// 1. `if`, `else if`, and `else`
// Conditional statements control the flow of code based on conditions.

// Example of `if` statement:
// let number = 10;
// if (number > 5) {
//     console.log("The number is greater than 5.");
// }

// Example of `if-else` statement:
// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// Example of `if-else if-else`:
// let marks = 85;
// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 75) {
//     console.log("Grade: B");
// } else {
//     console.log("Grade: C");
// }

// 2. Ternary Operator
// A shorthand for `if-else` statements. Syntax: condition ? value_if_true : value_if_false;

// Example:
// let isRaining = true;
// let message = isRaining ? "Take an umbrella." : "No need for an umbrella.";
// console.log(message); // Output: Take an umbrella.

// 3. Logical Operators
// - Logical AND (`&&`): Returns true if both operands are true.
// let a = true, b = false;
// console.log(a && b); // Output: false

// - Logical OR (`||`): Returns true if at least one operand is true.
// console.log(a || b); // Output: true

// - Logical NOT (`!`): Negates the operand.
// console.log(!a); // Output: false

// 4. Comparison Operators
// Used to compare values and return a boolean result.
// - Equal (`==`) vs. Strict Equal (`===`):
// console.log(5 == "5"); // Output: true (loose equality, type conversion)
// console.log(5 === "5"); // Output: false (strict equality, no type conversion)

// - Not Equal (`!=`) vs. Strict Not Equal (`!==`):
// console.log(5 != "5"); // Output: false
// console.log(5 !== "5"); // Output: true

// - Greater Than (`>`), Less Than (`<`), Greater Than or Equal (`>=`), Less Than or Equal (`<=`):
// console.log(10 > 5); // Output: true
// console.log(5 <= 5); // Output: true

// 5. Switch Statement
// Useful for multiple conditions based on the value of a single variable.

// Example:
// let fruit = "apple";
// switch (fruit) {
//     case "apple":
//         console.log("You chose apple.");
//         break;
//     case "banana":
//         console.log("You chose banana.");
//         break;
//     case "orange":
//         console.log("You chose orange.");
//         break;
//     default:
//         console.log("Unknown fruit.");
// }

// 6. Nullish Coalescing Operator (`??`)
// Returns the right-hand operand if the left-hand operand is `null` or `undefined`.
// let userName = null;
// let defaultName = "Guest";
// console.log(userName ?? defaultName); // Output: Guest

// 7. Optional Chaining (`?.`)
// Allows safe access to deeply nested properties without risking errors.
// let user = { name: "John", address: { city: "New York" } };
// console.log(user?.address?.city); // Output: New York
// console.log(user?.contact?.phone); // Output: undefined

// Practice Questions:

// Q1. Write a program to check if a number is positive, negative, or zero using `if-else if-else`.
// let number = -5;
// if (number > 0) {
//     console.log("Positive number");
// } else if (number < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Zero");
// }

// Q2. Use a ternary operator to check if a person is eligible to vote (age >= 18).
// let age = 17;
// let votingEligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
// console.log(votingEligibility);

// Q3. Create a switch statement to print the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).
// let dayNumber = 3;
// switch (dayNumber) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }




let marks = 76;
let grade = (marks >= 90) ? "A" : ((marks >= 80) ? "B" : ((marks >= 70) ? 'C' : 'D'));
console.log(grade);
