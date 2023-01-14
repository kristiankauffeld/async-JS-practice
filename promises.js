const fetchData = (url) => {
  //Return a new promise with resolve and reject callbacks
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      // if the request is successful
      if (request.readyState === 4 && request.status === 200) {
        // parse the responseText to a JSON object
        const data = JSON.parse(request.responseText);
        //resolve the promise with the data
        resolve(data);
      }
      //if the request failed
      else if (request.readyState === 4) {
        //reject the promise with the error message
        reject('could not fetch data');
      }
    });
    //open the request
    request.open('GET', url);
    //send the request
    request.send();
  });
};

//test input
const url = 'https://jsonplaceholder.typicode.com/todos/1';

//Use the .then() method to handle the resolved state of the promise
fetchData(url)
  .then((data) => {
    console.log('promise resolved: ', data);
  })
  //Use the .catch() method to handle the rejected state of the promise
  .catch((err) => {
    console.log('promise rejected: ', err);
  });

/*
  In this code, the fetchData function returns a promise that will be resolved with the data received from a server if the request is successful, 
  or rejected with an error message if the request failed. 
  The .then() method is used to handle the resolved state of the promise, 
  and the .catch() method is used to handle the rejected state of the promise.
  */
