window.onload = function () {
  let text = document.getElementById("text");
  text.innerText = "HTML 문서 loaded";
};

const aElement = document.querySelector("a");
aElement.addEventListener("click", () => {
  alert("a element click");
});

const buttonElement = document.querySelector(".btn2");
buttonElement.addEventListener("click", (event) => {
  let val;
  val = event.target;
  val = event.target.className;
  val = event.type;

  // 윈도우로부터 거리 좌표
  val = event.clientY;
  // 요소로부터의 거리 좌표
  val = event.offsetY;

  console.log(val);
});
