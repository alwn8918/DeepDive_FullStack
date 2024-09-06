// var: 중복 선언 가능, 재할당 가능, 함수 레벨 스코프
var greeting = "hello";
console.log(greeting);

var greeting = "hi";
console.log(greeting);

greeting = "how are you?";
console.log(greeting);

function func1() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}
// console.log(a);
func1();

// let: 중복 선언 불가능, 재할당 가능, 블록 레벨 스코프
let greeting2 = "hello";
console.log(greeting2);

// let greeting2 = "hi";
// console.log(greeting2);

greeting2 = "how are you?";
console.log(greeting2);

function func2() {
  if (true) {
    let b = "b";
    console.log(b);
  }
  // console.log(b);
}
// console.log(b);
func2();

// const: 중복 선언 불가능, 재할당 불가능, 블록 레벨 스코프
const greeting3 = "hello";
console.log(greeting3);

// const greeting3 = "hi";
// console.log(greeting3);

// greeting3 = "how are you?";
// console.log(greeting3);

function func3() {
  if (true) {
    const c = "c";
    console.log(c);
  }
  // console.log(c);
}
// console.log(c);
func3();
