/*
Question: Sequential Asynchronous Operations

Design a JavaScript function `executeOperationsSequentially` that performs a series of asynchronous operations one after the other.
*/

async function executeOperationsSequentially(operations) {
    try {
        let result = null;
        for (const operation of operations) {
            result = await operation(result);
        }
        return result;
    } catch (error) {
        console.error("Error during execution:", error);
    }
}
