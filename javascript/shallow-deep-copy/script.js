// shallow copy
const aArray = [1,2,3];

// shallow copy with spread operator
const bArray = [...aArray, 4];
console.log('aArray', aArray);
console.log('bArray', bArray);
console.log('aArray===bArray'. aArray===bArray);

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log('cArray',cArray);
console.log('bArray===cArray', bArray===cArray);

// Nested Array and Objects
cArray.push([5,6,7]);
console.log('cArray', cArray);
const dArray = [...cArray, 10];
console.log("dArray", dArray);
dArray[4].push(8);
console.log('cArray', cArray);
console.log("dArray", dArray);

