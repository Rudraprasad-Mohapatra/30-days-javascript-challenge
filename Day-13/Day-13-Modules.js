// Day 12: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const add = require("./add.js");

const num1 = 5;
const num2 = 7;
const result = add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}.`);

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script
const chaiPerson = require("./chaiPerson.js");
chaiPerson.sayMyName("Hitesh Sir");

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} = require("./mathOperation.js");

const number1 = 12;
const number2 = 4;

console.log(
  `The sum of ${number1} and ${number2} is ${addNumbers(number1, number2)}.`
);
console.log(
  `The difference between ${number1} and ${number2} is ${subtractNumbers(
    number1,
    number2
  )}.`
);
console.log(
  `The product of ${number1} and ${number2} is ${multiplyNumbers(
    number1,
    number2
  )}.`
);
try {
  console.log(
    `The quotient of ${number1} and ${number2} is ${divideNumbers(
      number1,
      number2
    )}.`
  );
} catch (error) {
  console.error(error.message);
}

//Task 4: Create a module that exports single function using default export. Import and use this function in another script.
const greet = require("./greet.js");

const userName = "Rudraprasad Mohapatra";
console.log(greet(userName));

// Activity 3: Importing Entire Modules
// Task 5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const mathHelpers = require("./mathHelper");

const value1 = 20;
const value2 = 4;

console.log(`GOLDEN_RATIO: ${mathHelpers.GOLDEN_RATIO}`);
console.log(`LIGHT_SPEED: ${mathHelpers.LIGHT_SPEED} m/s`);

console.log(
  `The sum of ${value1} and ${value2} is ${mathHelpers.sum(value1, value2)}.`
);
console.log(
  `The difference between ${value1} and ${value2} is ${mathHelpers.difference(
    value1,
    value2
  )}.`
);
console.log(
  `The product of ${value1} and ${value2} is ${mathHelpers.product(
    value1,
    value2
  )}.`
);
try {
  console.log(
    `The quotient of ${value1} and ${value2} is ${mathHelpers.quotient(
      value1,
      value2
    )}.`
  );
} catch (error) {
  console.error(error.message);
}

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g.. lodash) using npm. Import and use a function from this module in a script.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6];

const sum = _.sum(numbers);

console.log(`The sum of the numbers array is: ${sum}`);


// Task 6: Install a third-party module (e.g.. axios) using npm. Import and use this module to make a network request in a script.

// fetchData.js
const axios = require("axios");

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData() {
  try {
    const response = await axios.get(apiUrl);
    console.log("Data fetched from API:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();


// Activity 5 : Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to build multiple JavaScript files into a single file. Write a script to demonstrate the bundling process .

// Completed