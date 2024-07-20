// Day 8: ES6 + Features
// Tasks/Activities:
// Activity 1: Template Literals
// Task 1
// Use template literals to create a string that includes variables for a person's name and age and log the string to the console
const chai = "Malai Chai";
const chaiPrice = 5;

const chaiInfo = `This is ${chai} with price ${chaiPrice}.`;
console.log(chaiInfo);

// Task 2
let chaiCompleteInfo = `This is ${chai}.
It's price is ${chaiPrice}.`;
console.log(chaiCompleteInfo);

// Activity 2: Destructuring
// Task 3
const chaiArray = [1, 2, 3, 4, 5];
const [ele1, ele2] = [...chaiArray];
console.log(ele1, ele2);
// Task 4
const chaiBookObject = { title: "ChaiBook", author: "Hitesh Choudhary" };
const { title, author } = {...chaiBookObject};
console.log(title, author);

// Activity 3: Spread and rest Operators
// Task 5 :
const newChaiArray = [...chaiArray,6,7];
console.log(newChaiArray);
// Task 6 :
const chaiRestOperator = (...chaiRestArray) => {
    let chaiSumVal = 0;
    chaiRestArray.forEach((cuttingChai) => {
        chaiSumVal += cuttingChai;
    })
    return chaiSumVal;
}

console.log(chaiRestOperator(1,2));
console.log(chaiRestOperator(1,2,3));

// Activity 4: Default Parameters
// Task 7 :
function chaiFunc(chaiParam1, chaiParam2 = 1) {
    return chaiParam1 * chaiParam2;
}

console.log(chaiFunc(2));
console.log(chaiFunc(2,4));

// Activity 5: Enhanced Object Literals
// Task 8 :
const chaiName = "Chai aur Code";
const chaiCost = 30;
const chaiFrom = "Odisha";

const chaiObject = {
    chaiName,
    chaiCost,
    chaiFrom,
    chaiGreet() {
        console.log(`Hello, I am ${this.chai} .`);
    },
    updateChaiCost(newChaiCost) {
        this.chaiCost = newChaiCost;
        console.log(`The new cost of ${chaiName} is ${this.chaiCost} .`);
    }
}

console.log(chaiObject);

// Task 9 :
const chaiProp1 = "chaiFirstName";
const chaiProp2 = "chaiLastName";
const chaiProp3 = "price";

const wowChaiObj = {
    [chaiProp1] : "Chai Aur",
    [chaiProp2] : "Code",
    [chaiProp3] : 50,
    chaiGreet() {
        console.log(`Hi I am chai from ${this.chaiFirstName} ${this.chaiLastName} with price ${this.price} .`)
    }
}

console.log(wowChaiObj);