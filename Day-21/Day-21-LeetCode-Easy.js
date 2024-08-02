// Day 21: LeetCode Easy
// Tasks/Activities
// Activity 1 : Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target

function findTwoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return null;
}

const nums = [2, 9, 11, 7];
const target = 9;
const result = findTwoSum(nums, target);

console.log(result);

// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" Problem on leetcode.
// Write a function that takes an integer and returns it with it's digits reversed. Handle edge cases like negative numbers and numbers ending in zero.Log the reversed integers for a few test cases.

function reverseInteger(n) {
  const str = n.toString();
  const isNegative = n < 0;
  const reversedStr = (isNegative ? str.slice(1) : str)
    .split("")
    .reverse()
    .join("");
  const reversedInt = parseInt(reversedStr, 10);
  return isNegative ? -reversedInt : reversedInt;
}

const testCases = [123, -123, 1000, -1000, 0];

testCases.forEach((testCase) => {
  const result = reverseInteger(testCase);
  console.log(`Input: ${testCase}, Reversed: ${result}`);
});

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" Problem on leetcode.
// Write a function that takes an integer and returns true if it is a plaindrome, and false otherwise. Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(n) {
  if (n < 0) {
    return false;
  }

  const str = n.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const testCases2 = [121, -121, 123, 0, 1001, -1001, 12321, 123321];

testCases2.forEach((testCase) => {
  const result = isPalindrome(testCase);
  console.log(`Input: ${testCase}, Is Palindrome: ${result}`);
});

// Activity 4: Merge two Sorted Lists
// Task 4: Solve the "Merge two Sorted Lists" problem on leetcode.
// Write a function that takes two sorted linkedlists and returns a new sorted list by merging them.
// Create few test cases with linked lists and log the merged list.

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function createLinkedList(arr) {
  let head = null;
  let current = null;
  arr.forEach((value) => {
    if (head === null) {
      head = new ListNode(value);
      current = head;
    } else {
      current.next = new ListNode(value);
      current = current.next;
    }
  });
  return head;
}

function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 !== null ? l1 : l2;

  return dummy.next;
}

const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList);

const l5 = createLinkedList([]);
const l6 = createLinkedList([0]);

const mergedList3 = mergeTwoLists(l5, l6);

printLinkedList(mergedList3);

// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(',')','{','}','[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for the few test cases.

function isValid(s) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const testCases3 = [
    "()",        // true
    "()[]{}",    // true
    "(]",        // false
    "([)]",      // false
    "{[]}",      // true
    "(({{[[]]}}))",  // true
    "(",         // false
    "",          // true (empty string is considered valid)
    "({[({[({[]})]})]})", // true
];

testCases3.forEach(testCase => {
    const result = isValid(testCase);
    console.log(`Input: "${testCase}", Is Valid: ${result}`);
});
