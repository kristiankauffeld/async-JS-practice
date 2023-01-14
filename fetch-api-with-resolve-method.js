//same code as in 'fetch-api.js' but the difference is that this program uses a resolve method
//The resolve function is a utility function

const resolve = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error fetching data, status code: ' + response.status);
  }
};

const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
  .then(resolve)
  .then((data) => {
    console.log('promise resolved: ', data);
  })
  .catch((err) => {
    console.log('promise rejected: ', err);
  });
