const getButton = document.getElementById("getDataBtn");
const sendButton = document.getElementById("sendDataBtn");

const getData = function () {
  const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhr.send();

    xhr.onload = function () {
      const result = xhr.responseText;
      console.log(result);
    }
}

const sendData = function () {
  
}

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);