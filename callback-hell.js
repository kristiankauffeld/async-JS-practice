const fetchData = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      // parse the responseText to a JSON object
      const data = JSON.parse(request.responseText);
      callback(null, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', null);
    }
  });

  request.open('GET', url);
  request.send();
};

//test input
const url = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

//fetch data from several API endpoints in a certain order.
//This approach is known as "callback hell" because of the nested structure
//and it can quickly become difficult to read and maintain.
fetchData(url, (err, data) => {
  console.log(data);
  fetchData(url2, (err, data) => {
    console.log(data);
    fetchData(url3, (err, data) => {
      console.log(data);
    });
  });
});
