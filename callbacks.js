const fetchData = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      //the purpose of the error object is to indicate if there was an error
      //and if the request was successful there is no error to report.
      //It's common to pass "undefined" or "null" as the first argument (error object)
      callback(null, request.responseText);
    } else if (request.readyState === 4) {
      //if request is completed but failed
      //pass an error message as the first argument.
      callback('could not fetch data', null);
    }
  });

  request.open('GET', url);
  request.send();
};

//test input
const url = 'https://jsonplaceholder.typicode.com/todos/1';

//using the "error-first callback" pattern
//first argument is the error object, second is the response data.
//The callback function checks for the existence of an error object,
//if it exists, it logs the error message to the console,
//otherwise, it logs the data to the console.
fetchData(url, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
