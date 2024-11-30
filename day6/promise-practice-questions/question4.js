/*
Question: Parallel URL Fetching

Write a JavaScript function `fetchMultipleUrls` that takes an array of URLs and downloads the content of each URL in parallel using Promises.
*/

function fetchMultipleUrls(urls) {
    return Promise.all(urls.map(url => fetch(url).then(res => res.json())))
        .then(data => data)
        .catch(error => `Error fetching URLs: ${error.message}`);
}

const urls = ["https://api.example1.com", "https://api.example2.com"];
fetchMultipleUrls(urls).then(console.log);
