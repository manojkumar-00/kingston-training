/**
 * Iterators and Generators
 * Iterators:
 * - An object that adheres to the iterator protocol (has a `next` method).
 * - The `next` method returns an object with `value` and `done` properties.
 * 
 * Generators:
 * - A special function used to generate iterators.
 * - Defined using `function*` syntax.
 */

//==============================================================================

/**
 * Custom Iterator: Manual Implementation
 * Example: Create an iterator for a range of numbers.
 */

function createRangeIterator(start, end) {
    let current = start;
    return {
        next() {
            if (current <= end) {
                return { value: current++, done: false };
            }
            return { value: undefined, done: true };
        },
    };
}

const rangeIterator = createRangeIterator(1, 5);
console.log(rangeIterator.next()); // { value: 1, done: false }
console.log(rangeIterator.next()); // { value: 2, done: false }
console.log(rangeIterator.next()); // { value: 3, done: false }
console.log(rangeIterator.next()); // { value: 4, done: false }
console.log(rangeIterator.next()); // { value: 5, done: false }
console.log(rangeIterator.next()); // { value: undefined, done: true }

//==============================================================================

/**
 * Generators: Simplified Iterators
 * A generator function automatically returns and special iterator object called is generator.
 * Syntax: `function* generatorFunction() { ... }`
 */

function* simpleGenerator() {
    // return 10;
    console.log("before yield 1");
    yield 1; // Pauses execution and returns 1
    console.log("before yield 2");

    yield 2; // Pauses execution and returns 2
    console.log("before yield 3");

    yield 3; // Pauses execution and returns 3

}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(typeof gen);


//==============================================================================

/**
 * Generator Example: Infinite Sequence
 * Use case: Generate an infinite sequence of numbers.
 */

function* infiniteSequence() {
    let num = 1;
    while (true) {
        yield num++;
    }
}

const infiniteGen = infiniteSequence();
console.log(infiniteGen.next().value); // 1
console.log(infiniteGen.next().value); // 2
console.log(infiniteGen.next().value); // 3
// ...continues infinitely

//==============================================================================

/**
 * Passing Arguments to Generators
 * Generators can accept arguments and modify behavior dynamically.
 */

function* dynamicGenerator(start) {
    let current = start;
    while (true) {
        const increment = yield current;
        current += increment ?? 1; // Default increment is 1
    }
}

const dynamicGen = dynamicGenerator(10);
console.log(dynamicGen.next().value); // 10
console.log(dynamicGen.next(2).value); // 12
console.log(dynamicGen.next(3).value); // 15

//==============================================================================

/**
 * Returning Values from Generators
 * Generators can use `return` to provide a final value.
 */

function* returnExample() {
    yield "First";
    yield "Second";
    return "Done";
}

const returnGen = returnExample();
console.log(returnGen.next()); // { value: "First", done: false }
console.log(returnGen.next()); // { value: "Second", done: false }
console.log(returnGen.next()); // { value: "Done", done: true }

//==============================================================================

/**
 * Iterating Over Generators
 * Generators implement the iterable protocol, allowing them to be used in `for...of` loops.
 */

function* iterableGenerator() {
    yield "Hello";
    yield "World";
    yield "!";
}

for (const value of iterableGenerator()) {
    console.log(value);
}
// Output:
// Hello
// World
// !

//==============================================================================

/**
 * Delegating Generators
 * Use case: Compose generators by delegating to another generator.
 */

function* subGenerator() {
    yield "Sub 1";
    yield "Sub 2";
}

function* mainGenerator() {
    yield "Main 1";
    yield* subGenerator(); // Delegates to subGenerator
    yield "Main 2";
}

const mainGen = mainGenerator();
for (const value of mainGen) {
    console.log(value);
}
// Output:
// Main 1
// Sub 1
// Sub 2
// Main 2

//==============================================================================

/**
 * Generator Example: Fibonacci Sequence
 * Generates an infinite Fibonacci sequence.
 */

function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fibGen = fibonacciGenerator();
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5

//==============================================================================

/**
 * Async Generators (ES2018)
 * Asynchronous generators work with `await` inside the generator body.
 */

async function* asyncGenerator() {
    for (let i = 1; i <= 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async delay
        yield i;
    }
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value); // Output: 1, 2, 3 (with a delay of 1 second between each)
    }
})();

//==============================================================================

/**
 * Key Takeaways:
 * - Iterators allow sequential access to data.
 * - Generators simplify iterator creation and provide additional features like pausing, resuming, and delegating.
 * - They are useful in use cases like infinite sequences, lazy evaluation, and asynchronous data streams.
 */
