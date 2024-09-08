let val;

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

console.log("list", list);
console.log("listItem", listItem);

val = list.childNodes; // NodeList 반환, line break 포함

val = list.childNodes[0];
val = list.childNodes[0].nodeName;

val = list.childNodes[3];
val = list.childNodes[3].nodeType;
// NodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment Node
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환
val = list.children; // HTML Collection 반환, line break 미포함
val = list.children[1];
list.children[1].textContent = "Hi";

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log("val", val);
