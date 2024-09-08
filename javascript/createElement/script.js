// Element 생성
const li = document.createElement("li");
// class 추가
li.className = "list-group-item";
// id 추가
li.id = "new-item";
// 속성 추가
li.setAttribute("name", "New list item");

// link element 생성
const link = document.createElement("a");
link.classList = "alarm-item";
link.innerHTML = "<i class='bi-alarm'></i>";

document.querySelector("ul.list-group").appendChild(li);
li.appendChild(link);
