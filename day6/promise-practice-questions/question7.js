/*
Question: Retrying API Requests on Failure

Write a JavaScript function `retryApiRequest` that sends a request to an API and retries a specified number of times if the request fails.
*/

async function retryApiRequest(url, retries) {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            attempt++;
            if (attempt === retries) throw new Error("All retries failed");
        }
    }
}
