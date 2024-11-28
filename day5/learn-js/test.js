//download file... write file...

function downloadFile(api) {
    return new Promise(function executorFn(resolve, reject) {
        console.log("Started downloading from ... ", api);
        setTimeout(function cb() {
            const downloadedFile = "file1.jpg";
            resolve(downloadedFile)
        }, 3000);
    });
}

function writeFile(fileName) {
    return new Promise(function executorFn(resolve, reject) {
        console.log("Started writing from ... ", fileName);
        setTimeout(function cb() {
            resolve('Success')
        }, 5000);
    });
}

const downloadObj = downloadFile('example.com');

downloadObj
    .then(
        function onFullfillment(resolvedValue) {
            console.log("Donwload Successful file name: ", resolvedValue);
            const writingObj = writeFile('file1.jpg');
            return Promise.reject(writingObj);
        },
        function onRejection(rejectedValue) {
            console.log("Donwload failed file name: ", rejectedValue);
        }
    )
    .then(
        function onFullfillment(resolvedValue) {
            console.log("writing Successful at location: ", resolvedValue);
        },
        // function onRejection(rejectedValue) {
        //     console.log("writing failed with error: ", rejectedValue);
        // }
    )
    .catch(
        function onRejection(rejectedValue) {
            console.log("writing failed with error: ", rejectedValue);
        }
    );



// writingObj
//     .then(
//         function onFullfillment(resolvedValue) {
//             console.log("writing Successful at location: ", resolvedValue);

//         },
//         function onRejection(rejectedValue) {
//             console.log("writing failed with error: ", rejectedValue);
//         }
//     )







// function checkIfEven(number) {
//     return new Promise(function executorCB(resolve, reject, abc) {
//         (number % 2 === 0)
//             ? resolve(`Number ${number} is even.`)
//             : reject(`Number ${number} is odd.`);
//     });
// }

// const promiseObj = checkIfEven(6);

// promiseObj
//     .then(
//         function onFullfillment(resolvedValue) {
//             console.log("Fullfilment: ", resolvedValue);
//             return 10;
//         },
//         function onRejection(rejectedValue) {
//             console.log("Rejection: ", rejectedValue);
//         },
//     )
//     .then(
//         function onFullfillment(resolvedValue) {
//             console.log("Fullfilment: ", resolvedValue);
//         },
//         function onRejection(rejectedValue) {
//             console.log("Rejection: ", rejectedValue);
//         },
//     );


// console.log(promiseObj);

