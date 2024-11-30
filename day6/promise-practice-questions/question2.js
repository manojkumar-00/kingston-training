/*
Question: Converting Callback-based Functions to Promises

Create a utility function `convertToPromise` that converts any callback-based function into a Promise-based function.
*/

function convertToPromise(callbackBasedFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            callbackBasedFunction(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}
