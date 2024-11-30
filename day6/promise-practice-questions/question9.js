/*
Question: Timeout for API Requests

Write a JavaScript function `fetchWithTimeout` that sends a request to an API but cancels the request if it takes longer than a specified timeout duration.
*/

function fetchWithTimeout(url, timeout) {
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject("Request timed out"), timeout));

    const fetchPromise = fetch(url).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout("https://api.example.com", 5000)
    .then(data => console.log(data))
    .catch(error => console.error(error));
