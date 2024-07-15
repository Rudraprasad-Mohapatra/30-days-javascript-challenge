// Day 3: Control Structures
// Task/Activities
// Activity 1: if-Else Statements

// Task 1:
const chai1 = 10;
if(chai1 > 0){
    console.log("Number is Positive");
}
else if(chai1 < 0){
    console.log("Number is Negative");
}
else if(chai1 === 0){
    console.log("Number is Zero");
}

// Task 2:
const personAge = 19 ;
if(personAge < 18){
    console.log("Person can't vote.");
}
else if(personAge >= 18){
    console.log("Person can vote.");
}

// Activity 2: Nested If-Else Statements
// Task 3:
const chai2 = 5;
const chai3 = 6;
const chai4 = 7;

if(chai2 > chai3){
    if(chai2 > chai4){
        console.log("chai2 is largest.");
    }
} else if(chai3 > chai4){
    console.log("chai3 is largest.")
}else {
    console.log("chai4 is largest.")
}

// Activity 3: Switch Case
// Task 4: 
switch (1) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        break;
}

// Task 5: 
switch (90) {
    case 90:
        console.log("A")
        break;
    case 80:
        console.log("B")
        break;
    case 70:
        console.log("C")
        break;
    case 60:
        console.log("D")
        break;
    case 50:
        console.log("F")
        break;

    default:
        break;
}

// Activity 4: Conditional (Ternary) Operator
// Task 6:
const chai = 5;
console.log(chai%2==0 ? "Number is even" : "Number is odd");

// Activity 5: Combining Conditions
// Task 7:
const chaiCodeYear = 2024;
if(chaiCodeYear % 4 === 0 ) {
    if(chaiCodeYear % 100 === 0 ) {
        if(chaiCodeYear % 400 === 0 ) {
            console.log("ChaiCodeYear is a Leap Year.");
        } else {
            console.log("ChaiCodeYear is not a Leap Year.");
        }
    } else {
        console.log("ChaiCodeYear is a Leap Year.");
    }
} else {
    console.log("ChaiCodeYear is not a Leap Year.");
}
