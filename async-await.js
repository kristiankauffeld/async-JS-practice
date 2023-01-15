const url = 'https://jsonplaceholder.typicode.com/todos/1';

//Function that returns a promise which when resolved returns the data fetched from the API
const fetchData = async (url) => {
  //fetch data from the API
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  //response.json() returns a promise so that is why we need to use the 'await' keyword
  // parse the response body as json
  const data = await response.json();

  return data;
};

//Using the then() method to resolve the promise returned from the fetchData() function
fetchData(url).then((data) => {
  console.log('resolved', data);
});

//QUESTION 1:
//why isn't it enough to just return the response variable? Why do we need to return the data variable?

/*
The response variable is an object that contains metadata about the request, such as
the status code, headers, etc. While it can be useful to access this information, typically
what we're interested in is the data returned by the API, which is stored in the 
response.body property.  By calling the response.json() method, we're parsing the 
data in the body of the response and returning it as a JavaScript object. 
*/

//QUESTION 2:
//Why is it necessary to parse the response.body property?

/*
The response.body property is a stream of the response body. This means that it is not
directly accessible as a JavaScript object and needs to be read and parsed.
*/

//QUESTION 3:
//what does it mean that the response.body is a stream of the response body?

/*
This means that the data is not loaded all at once, but instead is loaded in chunks as it becomes available.
This allows for more efficient handling of large amounts of data and reduces memory usage, 
as the data is only loaded as it is needed. 
*/
