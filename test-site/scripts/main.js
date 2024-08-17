let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/11.jpg") {
    myImage.setAttribute("src", "images/22.png");
  } else {
    myImage.setAttribute("src", "images/11.jpg");
  }
};

let Button12 = document.querySelectorAll("button");
let myButton = Button12[1];
let myHeading1 = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading1.textContent = "Mozilla 酷毙了，" + myName;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading1.textContent = "Mozilla 酷毙了，" + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };
  