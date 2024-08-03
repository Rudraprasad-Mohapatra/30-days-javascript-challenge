// Day-22:Leetcode Medium
// Tasks / Activities
// Activity 1: Add Two numbers
// Task1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linkedlist. Create a few test cases with linked lists and log the sum as linkedlist.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(arr) {
  let dummyHead = new ListNode();
  let current = dummyHead;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyHead.next;
}

function printLinkedList(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  console.log(result.join(" -> "));
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }
  return dummyHead.next;
}

let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sumList = addTwoNumbers(l1, l2);
printLinkedList(sumList);

let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);
let sumList2 = addTwoNumbers(l3, l4);
printLinkedList(sumList2);

let l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
let l6 = createLinkedList([9, 9, 9, 9]);
let sumList3 = addTwoNumbers(l5, l6);
printLinkedList(sumList3);

// Activity 2: "Longest Substring Without Repeating Characters" problem on Leetcode. Write function that takes a string and returns the length of the longest substring without repeting characters. Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));

// Activity 3:Container with Most Water
// Task 3: Solve the "Container with Most Water" problem on LeetCode. Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point.Find two lines that together with the x-axis form a container, such that the container holds the most water. Log the maximum amount of water for a few test cases.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let currentHeight = Math.min(height[left], height[right]);
    let currentArea = width * currentHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([1, 2, 4, 3]));

// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem on LeetCode. Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero. Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = 0,
      right = nums.length - 1;
    const target = -nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));


// Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode. Write a function that takes an array of strings and groups anagrams together. Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if(!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 

console.log(groupAnagrams([""])); 

console.log(groupAnagrams(["a"])); 

console.log(groupAnagrams(["abc", "bca", "cab", "bac", "acb", "cba"])); 

console.log(groupAnagrams(["listen", "silent", "enlist", "google", "gogole"])); 