/*
Question: Concurrent API Fetching with Promise.all()

Implement a JavaScript function `fetchApiData` that fetches data from multiple APIs concurrently.
*/

function fetchApiData(apiUrls) {
    return Promise.all(apiUrls.map(url =>
        fetch(url).then(res => res.json()).catch(err => `Failed: ${url} (${err.message})`)))
        .then(results => results)
        .catch(error => `Error: ${error.message}`);
}

const apiUrls = ["https://api.example1.com", "https://api.example2.com"];
fetchApiData(apiUrls).then(console.log);
