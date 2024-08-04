// Day-23: Leetcode Hard
// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of two sorted arrays. Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
  let mergedArray = [];
  let i = 0,
    j = 0;
  const len1 = nums1.length,
    len2 = nums2.length;

  while (i < len1 && j < len2) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  while (i < len1) {
    mergedArray.push(nums1[i]);
    i++;
  }

  while (j < len2) {
    mergedArray.push(nums2[j]);
    j++;
  }

  const totalLength = mergedArray.length;

  if (totalLength % 2 === 0) {
    const mid1 = mergedArray[Math.floor(totalLength / 2) - 1];
    const mid2 = mergedArray[Math.floor(totalLength / 2)];
    return (mid1 + mid2) / 2;
  } else {
    return mergedArray[Math.floor(totalLength / 2)];
  }
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.0
console.log(findMedianSortedArrays([], [1])); // 1.0
console.log(findMedianSortedArrays([2], [])); // 2.0

//Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode. Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linkedlists into one sorted linked list.Create a few test cases with linked lists and log the merged list.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  compare(a, b) {
    return a.val - b.val;
  }
  insert(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let smallest = index;

    if (
      leftChild < this.heap.length &&
      this.compare(this.heap[leftChild], this.heap[smallest]) < 0
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.compare(this.heap[rightChild], this.heap[smallest]) < 0
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.bubbleDown(smallest);
    }
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
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

function mergeKLists(lists) {
  let minHeap = new MinHeap();

  for (let list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }

  let dummy = new ListNode();
  let current = dummy;

  while (!minHeap.isEmpty()) {
    let minNode = minHeap.extractMin();
    current.next = minNode;
    current = current.next;
    if (minNode.next !== null) {
      minHeap.insert(minNode.next);
    }
  }

  return dummy.next;
}

let list1 = createLinkedList([1, 4, 5]);
let list2 = createLinkedList([1, 3, 4]);
let list3 = createLinkedList([2, 6]);

let mergedList = mergeKLists([list1, list2, list3]);
printLinkedList(mergedList); // 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode. Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for few test cases.

function trap(height) {
  let left = 0,
    right = height.length - 1;
  let left_max = 0,
    right_max = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        waterTrapped += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        waterTrapped += right_max - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([0, 0, 0, 0])); // 0
console.log(trap([3, 0, 2, 0, 4])); // 7
console.log(trap([1, 7, 8, 9, 1, 5, 3, 8])); // 8

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on a nxn chessboard such that no two queens attack eacother, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const columns = new Set();
    const diagonals1 = new Set(); // row - col
    const diagonals2 = new Set(); // row + col

    function backtrack(row) {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (columns.has(col) || diagonals1.has(row - col) || diagonals2.has(row + col)) {
                continue;
            }

            board[row][col] = 'Q';
            columns.add(col);
            diagonals1.add(row - col);
            diagonals2.add(row + col);

            backtrack(row + 1);

            board[row][col] = '.';
            columns.delete(col);
            diagonals1.delete(row - col);
            diagonals2.delete(row + col);
        }
    }

    backtrack(0);
    return solutions;
}

// Test cases
console.log(solveNQueens(4)); // Expected output: solutions for 4x4 board
console.log(solveNQueens(8)); // Expected output: solutions for 8x8 board

// Activity 5: Word Ladder
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few testcases.

function wordLadderLength(beginWord, endWord, wordList) {
    // Convert the wordList into a set for O(1) lookups
    const wordSet = new Set(wordList);
    
    // If the endWord is not in the wordList, return 0
    if (!wordSet.has(endWord)) return 0;
    
    // Initialize the queue for BFS
    const queue = [[beginWord, 1]]; // Each element is [currentWord, currentLength]
    const visited = new Set();
    visited.add(beginWord);
    
    // BFS Loop
    while (queue.length > 0) {
        const [currentWord, currentLength] = queue.shift();
        
        // Generate all possible transformations
        for (let i = 0; i < currentWord.length; i++) {
            for (let char = 'a'.charCodeAt(0); char <= 'z'.charCodeAt(0); char++) {
                const newChar = String.fromCharCode(char);
                if (newChar === currentWord[i]) continue;
                
                const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);
                
                // Check if newWord is the endWord
                if (newWord === endWord) return currentLength + 1;
                
                // If newWord is in the wordSet and not visited
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, currentLength + 1]);
                }
            }
        }
    }
    
    // If we exhaust the queue without finding endWord, return 0
    return 0;
}

console.log(wordLadderLength("hit", "cog", ["hot", "dot", "dog", "cog", "hog"])); // Expected output: 5
console.log(wordLadderLength("hit", "cog", ["hot", "dot", "cog","dog" ])); // Expected output: 4
console.log(wordLadderLength("hit", "cog", ["hot", "dog","dot"])); // Expected output: 0
