// Day 18: Algorithms
// Tasks/Activities
// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n; i++) {
    swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);

console.log("Sorted array:", sortedNumbers);

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

const numbers2 = [64, 25, 12, 22, 11];
const sortedNumbers2 = selectionSort(numbers2);
console.log("Sorted Array:", sortedNumbers2);

// Task 3: Implement the quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find the target value in an array. Log the index of the target value.
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers3 = [5, 3, 7, 1, 9, 2];
const target = 1;
const index = linearSearch(numbers3, target);
console.log(`The index of ${target} is ${index}.`);

// Task 5: Implement the binary search algorithm to find the target value in an array. Log the index of the target value.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const array2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target2 = 13;
const index2 = binarySearch(array, target);
console.log(`Index of ${target}: ${index}`);

// String Algorithms
// Task 6: Write a function to count the occurences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
  const charCount = {};

  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  console.log(charCount);
}

countCharacterOccurrences("hello welcome to chai world!");

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestUniqueSubstring(s) {
  let start = 0; // Start index of the sliding window
  let maxLength = 0; // Length of the longest substring found
  let longestSubstring = ""; // The longest substring without repeating characters
  const map = new Map(); // Map to store the last index of each character

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (map.has(char)) {
      // Move the start index to the right of the last occurrence of the current character
      start = Math.max(map.get(char) + 1, start);
    }

    map.set(char, end); // Update the last index of the current character

    // Update maxLength and longestSubstring if we find a longer substring
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longestSubstring = s.substring(start, end + 1);
    }
  }

  console.log(
    `Longest substring without repeating characters: "${longestSubstring}"`
  );
  console.log(`Length of the substring: ${maxLength}`);
  return { longestSubstring, maxLength };
}

longestUniqueSubstring("abcabcbb"); // Output: "abc", 3

// Activity 4: Array Algorithms
// Tasks 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // To handle cases where k is larger than array length
  if (k < 0) k += n; // To handle negative k values

  // Rotate the array
  const rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));

  return rotatedArray;
}

const array4 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const result = rotateArray(array4, k);
console.log(result); // Output: [5, 6, 7, 1, 2, 3, 4]

// Tasks 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Compare elements from both arrays and push the smaller one into mergedArray
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, add them
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage
const array11 = [1, 3, 5, 7];
const array12 = [2, 4, 6, 8];
const result1 = mergeSortedArrays(array11, array12);
console.log(result1);

// Activity5: Dynamic Programming
// Tasks 10: Write a function to solve the Fibonacci sequence using Dynamic Programming. Log the Fibonacci numbers.
function fibonacci(n) {
  if (n < 0) return "Invalid Input";

  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

for (let i = 0; i < 10; i++) {
  console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
}

// Tasks 11: Write a function to solve the Knapsack problem using Dynamic Programming. Log the maximum value that can be obtained.

function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [3, 4, 5, 8];
const weights = [2, 3, 4, 5];
const capacity = 5;

console.log("Maximum value:", knapsack(values, weights, capacity)); // Output: 8
