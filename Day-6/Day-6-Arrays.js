// Day 6: Arrays
// Tasks/Activities

// Activity 1: Array Creation and Access
// Task 1 :
const chai1 = [1, 2, 3, 4, 5];
for (let i = 0; i < chai1.length; i++) {
  console.log(chai1[i]);
}

// Task 2 :
const chai2 = [1, 2, 3, 4, 5];
console.log(
  `First element is ${chai2[0]} and Last element is ${chai2[chai2.length - 1]}`
);

// Activity 2 : Array methods(Basic)
// Task 3:
const chai3 = [1, 2, 3, 4, 5];
chai3.push(6);
console.log(chai3);
// Task 4:
chai3.pop(6);
console.log(chai3);
// Task 5:
chai3.shift();
console.log(chai3);
// Task 6:
chai3.unshift(1);
console.log(chai3);

// Activity 3 : Array methods(Intermediate)
// Task 7:
const originalChai = [1, 2, 3, 4, 5];
const doubledChai = originalChai.map((number) => number * 2);
console.log(doubledChai);

// Task 8:
const filteredChai = originalChai.filter((chai) => chai % 2 == 0);
console.log(filteredChai);

// Task 9:
const reducedChai = originalChai.reduce((chaiAccumulator, chaiCurrentVale) => {
  return chaiAccumulator + chaiCurrentVale;
}, 0);
console.log(reducedChai);

// Activity 4 : Array Iteration
// Task 10 :
for (let i = 0; i < originalChai.length;i++) {
    console.log(`The ${i} index no. is ${originalChai[[i]]}`);
}
// Task 11 :
originalChai.forEach((chai) => {
    console.log(chai);
});

// Activity 5 : Multi-dimensional Arrays
// Task 12 : 
const twodChai = [[1,2],[3,4]];
console.log(`The 2D array is`,twodChai);

console.log("The element at twodChai[1][1] position of twodChai array's element is :", twodChai[1][1]);