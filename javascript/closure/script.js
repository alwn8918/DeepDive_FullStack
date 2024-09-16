function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer: " + outerVariable);
    console.log("Inner: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

let a = "a";

function FunctionA() {
  let b = "b";
  function FunctionB() {
    let c = "c";
    console.log(a, b, c);
  }
  FunctionB();
  console.log(a, b);
}

FunctionA();
