// Day 5: Functions
// Task/Activities

// Activity 1: Function Declaration
// Task 1:
function checkChaiNumber(chaiNum) {
  if (chaiNum % 2 === 0) {
    console.log(`${chaiNum} is even.`);
  } else {
    console.log(`${chaiNum} is odd.`);
  }
}
checkChaiNumber(10);

// Task 2:
function calculateChaiSquareNumber(chaiNum) {
  const chaiSqVal = chaiNum * chaiNum;
  console.log(`${chaiNum}'s square value is ${chaiSqVal}`);
  return chaiSqVal;
}

calculateChaiSquareNumber(10);

// Activity 2: Function Expression
// Task 3:
const findMaxChai = function (chai1, chai2) {
  if (chai1 > chai2) {
    console.log(`Maximum of two numbers ${chai1} and ${chai2} is ${chai1}`);
  } else {
    console.log(`Maximum of two numbers ${chai1} and ${chai2} is ${chai2}`);
  }
};

findMaxChai(10, 12);

//Task 4
const chaiConcatenation = function (chai1, chai2) {
  const concatenateStr = chai1 + chai2;
  console.log(`Concatenated string is  ${concatenateStr}`);
  return concatenateStr;
};

chaiConcatenation("chai1", "chai2");

// Activity 3: Arrow Functions
// Task 5:
const chaiSum = (chai1, chai2) => {
  const chaiSumRes = chai1 + chai2;
  console.log(chaiSumRes);
  return chaiSumRes;
};

chaiSum(12, 13);

// Task 6:
const checkChaiString = (chai) => {
  return chai.includes("o");
};

console.log(checkChaiString("Chao"));

// Activity 5: Higher Order Functions
// Task 9
function repeatChai(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function sayChai() {
  console.log("Hello Chai Aur Code!");
}

repeatChai(sayChai, 5);


// Task 10
function repeatChaiTwoFunc(fn1, fn2, val) {
      let res = fn1(val);
      let finalRes = fn2(res);
      return finalRes;
  }

const tadkaChai = (val) => {
    return val*val;
}

const malaiChai = (val) => {
    return val/2;
}

console.log(repeatChaiTwoFunc(tadkaChai, malaiChai, 8));
