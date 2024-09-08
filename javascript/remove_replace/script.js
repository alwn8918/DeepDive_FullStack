const listParent = document.querySelector("ul");
const list = document.querySelectorAll("li");

// 요소 삭제
listParent.removeChild(list[1]);

const oldElement = document.getElementById("A");
const newElement = document.createElement("span");
newElement.textContent = "Hi";

// 요소 교체
oldElement.parentNode.replaceChild(newElement, oldElement);
