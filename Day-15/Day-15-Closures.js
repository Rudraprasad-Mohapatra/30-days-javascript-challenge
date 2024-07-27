// Day-15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer functions's scope. Call the inner function and log the result.

function chaiFunc() {
  let x = 0;
  return function () {
    x += 1;
    return x;
  };
}

const chaiFuncRes = chaiFunc();

console.log(chaiFuncRes());
console.log(chaiFuncRes());
console.log(chaiFuncRes());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of counter.
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId());

// Task 4: Create a closure that captures a user's name and returns a function that greets user by name.

function createGreeting(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}

const greetHiteshSir = createGreeting("Hitesh Sir");
const Rudraprasad_Mohapatra = createGreeting("Rudraprasad Mohapatra");
greetHiteshSir();
Rudraprasad_Mohapatra();

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each functions should log it's index when called. Use a closure to ensure each function logs the correct index.

const arr = [];
for (let i = 0; i <= 5; i++) {
  function dynamicFunction() {
    const currValue = i;
    console.log(i);
  }
  arr.push(dynamicFunction);
}

arr.forEach((ele) => {
  ele();
});

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const ItemManager = (() => {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`${item} added.`);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },
    listItems: function () {
      console.log("Current Items:", items);
      return items;
    },
  };
})();

ItemManager.addItem("Chai");
ItemManager.addItem("Cofee");
ItemManager.listItems();
ItemManager.removeItem("Chai");
ItemManager.listItems();

// Activity 5: Memoization
// Task 7: Write a function thet memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching from cache:", key);
      return cache.get(key);
    }

    console.log(`computing new result: ${key}`);

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(2, 3));
console.log(memoizeAdd(2, 3));
// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        console.log("Fetching from cache:", key);
        return cache.get(key);
      }

      console.log(`computing new result: ${key}`);
  
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  }
  
  function factorial(a) {
    if(a == 0) return 1;
    if(a == 1) return 1;

    let res = 1;
    for(let i = a; i >= 1; i--){
        res *= i;
    }
    return res;
  }
  
  const memoizeFactorial = memoize(factorial);
  
  console.log(memoizeFactorial(1));
  console.log(memoizeFactorial(2));
  console.log(memoizeFactorial(3));
  console.log(memoizeFactorial(3));
  console.log(memoizeFactorial(4));
  console.log(memoizeFactorial(4));

