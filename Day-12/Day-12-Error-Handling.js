// Day 11: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to console
const makeChai = () => {
  throw new Error("Oops, we ran out of chai leaves!");
};

const prpareChai = () => {
  try {
    makeChai();
  } catch (error) {
    console.error("Error while preparing chai:", error.message);
  }
};

prpareChai();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

const chaiDivide = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return numerator / denominator;
};

const handleDivision = (numerator, denominator) => {
  try {
    const result = chaiDivide(numerator, denominator);
    console.log(`Result of division: ${result}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

handleDivision(10, 2);
handleDivision(10, 0);

//   Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
const processData = () => {
  try {
    console.log("Entering try block");
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Entering catch block");
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Entering finally block");
    console.log("Cleanup or final actions here");
  }
};

processData();

// Activity 3 : Custom Error Objects
// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block .
class chaiError extends Error {
  constructor(message) {
    super(message);
    this.name = "chaiError";
  }
}

const makeChai2 = () => {
  throw new chaiError("Failed to make chai due to missing ingredients");
};

const prepareChai = () => {
  try {
    makeChai2();
  } catch (error) {
    if (error instanceof chaiError) {
      console.error("Caught a ChaiError:", error.message);
    } else {
      console.error("Caught an unexpected error:", error.message);
    }
  }
};

prepareChai();

// Task 5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateUserInput = (input) => {
  if (!input || input.trim() === "") {
    throw new ValidationError("Input cannot be empty.");
  }
  return "Input is valid.";
};

const handleUserInput = (input) => {
  try {
    const result = validateUserInput(input);
    console.log(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
  }
};

handleUserInput("");
handleUserInput("Hello");

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

const randomPromise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.5;

  setTimeout(() => {
    if (shouldResolve) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise was rejected.");
    }
  }, 2000);
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });

//Task 7 : Use try-catch within async function to handle errors from a promise that randomly resolves or rejects and log the error message.

const randomPromise2 = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.5;

  setTimeout(() => {
    if (shouldResolve) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise was rejected.");
    }
  }, 2000);
});

const handleRandomPromise2 = async () => {
  try {
    const result = await randomPromise2;
    console.log(result);
  } catch (error) {
    console.error("caught an error:", error);
  }
};

handleRandomPromise2();

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the the error using .catch(). Log an appropriate error message to the console.

const fetchInvalidData = () => {
  fetch("https://invalid-url.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data fetched from API:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error.message);
    });
};

fetchInvalidData();

// Task 9: Use the fetch API to request data from an Invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const fetchInvalidData2 = async () => {
  try {
    const response = await fetch('https://invalid-url.example.com/data');
    if(!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    const data = await response.json();
    console.log('Data fetched from API', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchInvalidData2();