// Day 14: Classes
// Tasks/Activities:

// Activity 1: Class Definition
// Task 1: Define a class Peron with Properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static getGenericGreeting() {
    return "Hello! Welcome to our platform.";
  }
}

const chaiPerson = new Person("Rudraprasad Mohapatra", 20);
console.log(chaiPerson.getGreeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.updateAge = function (newAge) {
  this.age = newAge;
  console.log(`Updated age: ${this.age}`);
};
chaiPerson.updateAge(21);

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }

  static getStudentCount() {
    return `Total number of students: ${Student.studentCount}`;
  }
}

const student = new Student("Rudraprasad Mohapatra", 21, "2001229042");

console.log(student.getStudentId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting mesage .
Student.prototype.getGreeting = function () {
  const personStudentGreeting = Person.prototype.getGreeting.call(this);
  console.log(personStudentGreeting);
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
};

const student2 = new Student("Rudraprasad Mohapatra", 21, "2001229042");
console.log(student2.getGreeting());

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the person class that returns a generaic greeting message. Call this static method without creating an instance of the class and log the message.
// Static Method getGenericGreeting added to Person class .
const genericGreeting = Person.getGenericGreeting();
console.log(genericGreeting);

// Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

// Static Property added to track the number of students created .

console.log(Student.getStudentCount());

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    if (firstName && lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    } else {
      console.error(
        "Please provide both first name and last name separated by a space."
      );
    }
  }
}

const person4 = new person("Rudraprasad", "Mohapatra", 20);

console.log(person4.fullName);

// Task 8: Add a setter method to the person class to update the name properties(fisrtName and lastName).Update the name using the setter and log the updated full name.

person4.fullName = "Raja Rudra";
console.log(person4.fullName);

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fileds for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;

  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error("Deposit amount must be positive");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.error("Withdrawal amount must be positive");
      return;
    }
    if (amount > this.#balance) {
      console.error("Insufficient funds");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrew ${amount}. New balance is ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const myAccount = new Account(1000);
console.log(`Current balance is ${myAccount.getBalance()}`);

myAccount.deposit(500);
console.log(`Current balance is ${myAccount.getBalance()}`);

myAccount.withdraw(200);
console.log(`Current balance is ${myAccount.getBalance()}`);
