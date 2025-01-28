const getButton = document.getElementById("getDataBtn");
const sendButton = document.getElementById("sendDataBtn");

const sendRequest = function (method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = function () {
      resolve(xhr.response);
    };
  });
  return promise;
};

const getData = function () {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
    (responseData) => {
      console.log(responseData);
    }
  );
};

const sendData = function () {};

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
