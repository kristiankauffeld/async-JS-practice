url = 'https://jsonplaceholder.typicode.com/todos/1';

// Use the fetch API to make a GET request to the specified url
fetch(url)
  // Handle the promise resolution by receiving the response object
  .then((response) => {
    // check if the response status is ok, if not reject the promise
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // since the response is ok, parse the response body as json
    return response.json();
  })
  // Handle the json data received from the previous then method
  .then((data) => {
    console.log('resolved', data);
  })
  // Handle the promise rejection
  .catch((err) => {
    console.log('rejected', err);
  });

//QUESTION:
//if our program doesn't contain the if-block, and the value of response.ok is false, will the catch() method then still invoke console.log('rejected', err)?

/*
The response.ok property is a boolean that indicates 
whether the response's HTTP status code is in the success range (200-299). 
*/

/*
It's important to note that if the if-block is not present, 
the program will not handle the non-2xx status codes 
and will treat them as successful requests,
so it's a good practice to include the if block to check for the status codes 
as it will allow you to handle errors correctly.
*/

/*
If the value of response.ok is false, it means that the request failed for some reason, 
such as the URL being incorrect, the server returning a 404 error, or the server returning a 500 error.
*/
