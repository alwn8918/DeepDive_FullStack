let x = 0;
const numberUp = () => (x += 1);
console.log(numberUp());
console.log(x);

let y = 0;
const pureNumberUp = (num) => (num += 1);
console.log(pureNumberUp(y));
console.log(y);

const alphabetArray = ["A", "B"];
const addItemToArray = (originalArray, newItem) => {
  originalArray.push(newItem);
  return originalArray;
};

console.log(addItemToArray(alphabetArray, "C"));
console.log(alphabetArray);

const pureAddItemToArray = (originalArray, newItem) => {
  return [...originalArray, newItem];
};

console.log(pureAddItemToArray(alphabetArray, "D"));
console.log(alphabetArray);
