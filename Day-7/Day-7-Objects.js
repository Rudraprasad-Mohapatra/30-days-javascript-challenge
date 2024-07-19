// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// Task 1
const chaiBook = {
  title: "Chai Aur Code",
  author: "Hitesh Choudhary",
  year: 2024,
};

console.log(chaiBook);

// Task 2
console.log(`ChaiBook's title is ${chaiBook.title}.`);
console.log(`ChaiBook's author is ${chaiBook.author}.`);

// Activity 2 : Object Methods
// Task 3
Object.defineProperty(chaiBook, "titleAndAuthorFunc", {
  value: function () {
    return `${this.title} by ${this.author}`;
  },
  writable: true,
  enumerable: true,
  configurable: true,
});

// Task 4
Object.defineProperty(chaiBook, "year", {
  value: null,
});
Object.defineProperty(chaiBook, "updateBookYear", {
  value: function (newYear) {
    this.year = newYear;
  },
});
chaiBook.updateBookYear(2024);

console.log(chaiBook);

// Activity 3 : Nested Objects
// Task 5:
const chaiLibrary = {
  name: "chaiLib",
  books: [
    { title: "chaiBook1" },
    { title: "chaiBook2" },
    { title: "chaiBook3" },
  ],
};

console.log(chaiLibrary);
// Task 6:
console.log(chaiLibrary.name);
chaiLibrary.books.forEach((chaiBook) => {
  console.log(chaiBook.title);
});

// Activity 4 : The This Keyword
// Task 7:
Object.defineProperty(chaiBook, "titleAndYear", {
  value: function () {
    return `${this.title} and ${this.year}`
  },
});

console.log(chaiBook.titleAndYear());

// Activity 5 : The This Keyword
// Task 8:
for(prop in chaiBook) {
    console.log(`${prop} : ${chaiBook[prop]}`)
}
// Task 9:
console.log(Object.keys(chaiBook));
console.log(Object.values(chaiBook));