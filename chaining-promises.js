const fetchData = (url) => {
  // Return a new promise that will handle the request
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    // Register an event listener to handle the response
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        // Parse the response text to a JSON object
        const data = JSON.parse(request.responseText);
        // Resolve the promise with the data
        resolve(data);
      } else if (request.readyState === 4) {
        // Reject the promise with an error message
        reject('could not fetch data');
      }
    });
    // Open and send the request
    request.open('GET', url);
    request.send();
  });
};

// Test input
const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todoss/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

// Fetch data from multiple URLs in sequential order
fetchData(url1)
  .then((data) => {
    console.log('promise 1 resolved: ', data);
    // Return a new promise for the next request
    return fetchData(url2);
  })
  .then((data) => {
    console.log('promise 2 resolved: ', data);
    // Return a new promise for the next request
    return fetchData(url3);
  })
  .then((data) => {
    console.log('promise 3 resolved: ', data);
  })
  .catch((err) => {
    console.log('promise rejected: ', err);
  });
// The catch() method at the end of the chain will handle any rejected promise.

/*
If any of the promises in the chain is rejected, the program will immediately jump to the nearest catch() method.
So if the second promise in this example is rejected, then the program will not execute the subsequent then() methods.
*/
