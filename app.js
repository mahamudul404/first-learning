const getButton = document.getElementById("getDataBtn");
const sendButton = document.getElementById("sendDataBtn");

const sendRequest = function (method, url) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();

  xhr.onload = function () {
    
  };
};

const getData = function () {};

const sendData = function () {};

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
