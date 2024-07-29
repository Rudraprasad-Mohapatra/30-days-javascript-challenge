// Day-17-Data-Structures
// Tasks/Activities:

// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  removeNode() {
    if (!this.head) {
      console.log("This list is empty.");
      return;
    }

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
  }

  displayNodes() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }

    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
  }
}

const linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);

linkedList.displayNodes();

linkedList.removeNode();
linkedList.displayNodes();

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element)
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length !== 0) {
      return this.items.pop();
    }
    throw new Error("Stack underflow");
  }

  peek() {
    if (this.items.length !== 0) {
      return this.items[this.items.length - 1];
    }
    throw new Error("Stack is empty.");
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.peek());

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

const str = "Reverse a String.";
const strRevStack = new Stack();
for (let i = 0; i < str.length; i++) {
  strRevStack.push(str[i]);
}

let revString = "";
for (let i = 0; i < str.length; i++) {
  revString += strRevStack.pop();
}

console.log(revString);

// Activity 3 : Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      throw new Error("Queue is Empty");
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      throw new Error("Queue is empty!");
    }
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.front());

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrintJob {
  constructor(id, documentName) {
    this.id = id;
    this.documentName = documentName;
  }

  print() {
    console.log(`Printing job ${this.id}: ${this.documentName}.`);
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
    this.jobCounter = 0;
  }

  addJob(documentName) {
    const job = new PrintJob(++this.jobCounter, documentName);
    this.queue.enqueue(job);
    console.log(`Added job ${job.id}: ${job.documentName}`);
  }

  processJob() {
    if (this.queue.items.length === 0) {
      console.log("No jobs to process.");
      return;
    }

    const job = this.queue.dequeue();
    job.print();
  }
  processAllJobs() {
    while (!(this.queue.items.length === 0)) {
      this.processJob();
    }
  }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Document1.pdf");
printerQueue.addJob("Document2.docx");
printerQueue.addJob("Document3.pptx");

console.log("Processing all jobs:");
printerQueue.processAllJobs();

// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(root);

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal() {
    this.inOrder(this.root);
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order traversal:");
binaryTree.inOrderTraversal();

// Activity 5: Graph
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex1].push(vertex1);
  }

  // Perform BFS traversal from a starting vertex
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList[vertex];
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  shortestPath(start, end) {
    const queue = [start];
    const distances = { [start]: 0 };
    const previous = { [start]: null };

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (vertex === end) {
        // Reconstruct the shortest path
        const path = [];
        let current = end;
        while (current !== null) {
          path.push(current);
          current = previous[current];
        }
        return path.reverse(); // Reverse to get the correct order
      }

      const neighbors = this.adjacencyList[vertex];
      for (const neighbor of neighbors) {
        if (!(neighbor in distances)) {
          distances[neighbor] = distances[vertex] + 1;
          previous[neighbor] = vertex;
          queue.push(neighbor);
        }
      }
    }

    return null; // If there is no path from start to end
  }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

const path = graph.shortestPath("A", "E");
console.log(
  `Shortest path from A to E: ${path ? path.join(" -> ") : "No path found"}`
);
