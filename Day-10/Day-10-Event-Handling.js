// Day 10: Event Handling
// Tasks/Activities
// Activity 1 : Basic Event Handling
// Task 1 :
const chaiButton1 = document.getElementById("chaiButton1");
chaiButton1.addEventListener("click", () => {
  const paragraph1 = document.getElementById("paragraph1");
  paragraph1.innerText = "Now you are Chai aur Codians.";
});
// Task 2 :
const chaiImage1 = document.getElementById("chaiImage1");
chaiImage1.addEventListener("dblclick", function () {
  this.classList.toggle("hidden");
});

// Activity 2: Mouse Events
// Task 3 :
document.getElementById("myElement").addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightblue";
});
// Task 4
document.getElementById("myElement").addEventListener("mouseout", function () {
  this.style.backgroundColor = "lightgray";
});

// Activity 3 : Keyboard Events
// Task 5
const myInput = document.getElementById("myInput");

myInput.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});

// Task 6
const output = document.getElementById("output");

myInput.addEventListener("keyup", function () {
  output.textContent = "Current value: " + this.value;
});

// Activity 4: Form Events
// Task 7:
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  console.log(formData.entries());

  console.log(formData);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

// Task 8:
const mySelect = document.getElementById("mySelect");
const displayParagraph = document.getElementById("displayParagraph");

mySelect.addEventListener("change", function () {
  const selectedValue = this.value;
  displayParagraph.textContent = `Selected value: ${selectedValue}`;
});

// Activity 5
// Task 9
document.getElementById("myList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked item text:", event.target.textContent);
  }
});

// Task 10
const parentDiv = document.getElementById("parentDiv");
const myList = document.getElementById("myList");
const addButton = document.getElementById("addButton");

parentDiv.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked item text:", event.target.textContent);
  }
});

addButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Chai " + (myList.children.length + 1);
  myList.appendChild(newItem);
});
