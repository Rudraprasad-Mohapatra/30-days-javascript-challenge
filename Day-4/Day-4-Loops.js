// Day 4: Loops
// Task/Activities

// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Task 2: Write a program to print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
// Activity 2: While Loop
// Task 3:
let chaiSum = 0;
let count = 1;
while (count <= 10) {
  chaiSum += count;
  count++;
}
console.log(chaiSum);

// Task 4:
let chaiBackCount = 10;
while (chaiBackCount >= 1) {
  console.log(chaiBackCount);
  chaiBackCount--;
}

// Activity 3: Do... While Loop
// Task 5:
let chai = 1;
do {
  console.log(chai);
  chai++;
} while (chai <= 5);

// Task 6:
let chaiVal = 5
let factorialChai = chaiVal;
let endResChai = 1;
do {
    endResChai *= factorialChai;
    factorialChai--;
} while (factorialChai >= 1);
console.log(`Factorial of ${chaiVal} = ${endResChai}`);


// Activity 4: Nested Loops
// Task 7:
// Write a program to print a pattern using nested for loops
for(let i= 1;i<=5;i++) {
    let chaiRow = ``;
    for (let j = 1; j<=i;j++) {
        chaiRow += " * ";
    }
    console.log(chaiRow);
}

// Activity 5: Loop Control Statements
// Task 8:
for(let i = 1; i <= 10; i++) {
    if (i===5) {
        continue;
    }
    console.log(i);
}

// Task 9:
for(let i = 1; i <= 10; i++) {
    if (i===7) {
        break;
    }
    console.log(i);
}
