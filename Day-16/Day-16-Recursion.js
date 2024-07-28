// Day-16:Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion
// Task 1: Write a Recursive function to calculate the factorial of a number. Log the result for the few test cases.

function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers!");
  }
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

try {
  console.log(factorial(5));
  console.log(factorial(-5));
  console.log(factorial(0));
  console.log(factorial(7));
  console.log(factorial(1));
} catch (error) {
  console.error(error.message);
}

// Task 2: Write a Recursive function to calculate the nth Fibonacci number. Log the result for the few test cases.

function fibonacci(n) {
  if (n < 0) {
    throw new Error("Negative number is not allowed !");
  }
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

try {
  console.log(fibonacci(0));
  console.log(fibonacci(1));
  console.log(fibonacci(5));
  console.log(fibonacci(7));
  console.log(fibonacci(10));
} catch (error) {
  console.log(error.message);
}

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases .

function findSumOfArray(arr) {
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    return arr[0] + findSumOfArray(arr.slice(1));
  }
}

// Test cases
console.log(findSumOfArray([1, 2, 3, 4, 5]));
console.log(findSumOfArray([10, 20, 30]));
console.log(findSumOfArray([7, 14, 21, 28]));
console.log(findSumOfArray([5]));
console.log(findSumOfArray([]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases .

function findMax(arr) {
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  }

  // Recursive Case
  // 1. Get the first element of the array
  let firstElement = arr[0];

  // 2. Get the maximum of the rest of the array
  let maxOfRest = findMax(arr.slice(1));

  // 3. Compare the first element with the maximum of the rest of the array
  return firstElement > maxOfRest ? firstElement : maxOfRest;
}

// Test cases
let arr1 = [1, 5, 3, 9, 2];
let arr2 = [7, 2, 8, 6, 4];
let arr3 = [3, 3, 3, 3, 3];

console.log(findMax(arr1));
console.log(findMax(arr2));
console.log(findMax(arr3));

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases .

function revStr(str) {
  if (str.length == 0) {
    return "";
  } else if (str.length == 1) {
    return str;
  }

  return str.charAt(str.length - 1) + revStr(str.substr(0, str.length - 1));
}

console.log(revStr("String"));
console.log(revStr("St"));
console.log(revStr("Str"));
console.log(revStr("S"));
console.log(revStr(""));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPlaindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return checkPlaindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

// Test cases
console.log(checkPlaindrome("racecar"));
console.log(checkPlaindrome("madam"));
console.log(checkPlaindrome("hello"));
console.log(checkPlaindrome("a"));
console.log(checkPlaindrome(""));

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function recursiveBinarySearch(arr, target, low, high) {
  // Base Case
  if (low > high) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((low + high) / 2);

  // Base case: If the middle element is target, return it's index
  if (arr[mid] == target) {
    return mid;
  }

  if (target < arr[mid]) {
    return recursiveBinarySearch(arr, target, low, mid - 1);
  }

  return recursiveBinarySearch(arr, target, mid + 1, high);
}

// Helper function to start the recursive search
function binarySearch(arr, target) {
  return recursiveBinarySearch(arr, target, 0, arr.length - 1);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targets = [3, 7, 11, 20];

// Test cases
targets.forEach((target) => {
  const index = binarySearch(sortedArray, target);
  if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
  } else {
    console.log(`Element ${target} not found`);
  }
});

// Task 8: Write a recursive function to count the occurences of a target element in an array. Log the result for a few test cases.

function countOccurrences(array, target) {
  // Base Case: If the array is empty, return 0
  if (array.length === 0) {
    return 0;
  }

  let count = array[0] === target ? 1 : 0;

  return count + countOccurrences(array.slice(1), target);
}

let array1 = [1, 2, 3, 4, 5, 2, 3, 3];
let target1 = 2;

console.log(
  `Occurrences of ${target1} in [${array1}]:`,
  countOccurrences(array1, target1)
);

let array2 = [5, 5, 5, 5, 5];
let target2 = 5;
console.log(
  `Occurrences of ${target2} in [${array2}]:`,
  countOccurrences(array2, target2)
);

// Activity 5: Tree Traversal(Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Recursive Case: Traverse Left SubTree
  inOrderTraversal(node.left);

  // Process current node (print it's value)
  console.log(node.value);

  // Recursive case: Traverse Right Subtree
  inOrderTraversal(node.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root);

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the nodes as they are visited.

const calculateDepth = (node) => {
  if (node === null) {
    return 0;
  }

  // Logging the current node's value
  console.log(`Visiting node with value: ${node.value}`);

  const leftDepth = calculateDepth(node.left);

  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

const depth = calculateDepth(root);
console.log(`The depth of the binary tree is: ${depth}`);