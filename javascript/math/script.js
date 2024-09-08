const num1 = 10;
const num2 = 20;

let val;
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // 나머지 연산자

// Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4); // 반올림
val = Math.ceil(2.4); // 올림
val = Math.floor(2.8); // 버림
val = Math.abs(-2); // 절댓값
val = Math.min(2, 3, 4, 5, 6, 7, 8, -1); // 가장 작은 수
val = Math.max(2, 3, 4, 5, 6, 7, 8); // 가장 큰 수
val = Math.random(); // 0~1 랜덤

// 1 ~ 20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);
