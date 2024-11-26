/**
 * Closures in JavaScript
 * A closure is a function that "remembers" its lexical scope even when the function is executed outside that scope.
 * Closures are created every time a function is created, at function creation time.
 * In other words, closures allow a function to access variables from an outer function even after the outer function has finished executing.
 * 
 * Key points about closures:
 * - A closure is a combination of a function and the lexical environment within which that function was declared.
 * - Closures allow functions to maintain access to variables from their outer scopes.
 */

//==============================================================================

/**
 * Basic Closure Example
 * The inner function retains access to the variables of the outer function, even after the outer function has finished executing.
 */

// Outer function
function outerFunction() {
    let outerVariable = "I'm from outer function";

    // Inner function (closure)
    function innerFunction() {
        console.log(outerVariable); // Accessing the outer function's variable
    }

    return innerFunction; // Returning the inner function
}

const closureExample = outerFunction(); // outerFunction executes and returns innerFunction
closureExample(); // Output: "I'm from outer function"

// Explanation: innerFunction remembers the `outerVariable` even after outerFunction finishes executing.

//==============================================================================

/**
 * Closures with Arguments
 * Closures can also work with arguments passed to the outer function.
 */

// Outer function with arguments
function multiplyBy(factor) {
    // Inner function that uses the outer argument
    return function (number) {
        return number * factor; // The inner function remembers the `factor`
    };
}

const multiplyBy2 = multiplyBy(2); // `multiplyBy2` closure remembers factor=2
const multiplyBy5 = multiplyBy(5); // `multiplyBy5` closure remembers factor=5

console.log(multiplyBy2(3)); // Output: 6 (3 * 2)
console.log(multiplyBy5(3)); // Output: 15 (3 * 5)

// Explanation: `multiplyBy2` and `multiplyBy5` are closures that remember their `factor` value.


//==============================================================================

/**
 * Closures in Loops
 * Closures can be tricky when used in loops because they retain the last value of the loop variable after the loop ends.
 * Use closures to capture the value of variables at each iteration.
 */

// Loop with closures
function createCounter() {
    let count = 0;

    return function () {
        count++; // The inner function updates the `count` variable
        console.log(count);
    };
}

const counter = createCounter(); // Closure created
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// Explanation: Each time the counter is called, it retains the updated value of `count` from the outer function.

//==============================================================================

/**
 * Closures and Private Variables
 * Closures allow for data encapsulation and the creation of private variables in JavaScript.
 * This is useful for creating modules and hiding internal implementation details from the outside world.
 */

// Creating a counter with private data using closures
function createPrivateCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            return count;
        },
    };
}

const privateCounter = createPrivateCounter();
privateCounter.increment(); // Output: 1
privateCounter.increment(); // Output: 2
console.log(privateCounter.getCount()); // Output: 2
privateCounter.decrement(); // Output: 1

// Explanation: The `count` variable is private to the `createPrivateCounter` function and cannot be accessed directly.

//==============================================================================

/**
 * Closures in Event Handlers
 * Closures are often used in event handling to maintain access to variables in the outer scope.
 */

// Example with event handler closure
function setupButton() {
    let buttonClicked = 0;

    document.getElementById("myButton").addEventListener("click", function () {
        buttonClicked++;
        console.log(`Button clicked ${buttonClicked} times`);
    });
}

// Explanation: The event handler is a closure that remembers the value of `buttonClicked` from the outer function.

setupButton(); // Call this in a real HTML environment where there is a button with id="myButton".

//==============================================================================

/**
 * The Power of Closures in JavaScript
 * Closures are a fundamental concept and are heavily used in JavaScript for tasks like event handling,
 * callback functions, currying, and data encapsulation.
 */

// Using closures for currying
function add(a) {
    return function (b) {
        return a + b; // Returns a function that "remembers" the value of `a`
    };
}

const add5 = add(5); // Closure that "remembers" 5
console.log(add5(3)); // Output: 8 (5 + 3)

// Using closures for partial application
function multiply(a, b) {
    return a * b;
}

function partiallyApply(fn, a) {
    return function (b) {
        return fn(a, b); // Closure that "remembers" `a`
    };
}

const multiplyBy3 = partiallyApply(multiply, 3);
console.log(multiplyBy3(4)); // Output: 12 (3 * 4)

//==============================================================================

/**
 * Key Takeaways:
 * - A closure allows a function to remember its lexical scope even when executed outside of that scope.
 * - Closures can be used to create private variables, data encapsulation, and event handlers.
 * - Closures are helpful in callbacks, currying, and maintaining state.
 * - Be cautious when using closures in loops, as they can capture the final value of variables.
 */
//==============================================================================