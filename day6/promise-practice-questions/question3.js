/*
Question: HTTP GET Request with Promises

Write a JavaScript function `fetchData` that sends an HTTP GET request to a specified URL and returns a Promise.
*/

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error.message));
    });
}

fetchData("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(error => console.error(error));
