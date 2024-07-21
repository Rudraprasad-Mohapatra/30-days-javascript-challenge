// Day 9: DOM Manipulation
// Tasks / Activities :
// Activity 1 : Selecting and Manipulating Elements
// Task 1 :
function changeText() {
    const element = document.getElementById("myChaiElement");
    element.textContent = "New Chai Text Content";
}

// Task 2:
function changeBackgroundColor() {
    const chaiButton = document.getElementsByClassName('chaiButton')[0];
    chaiButton.style.backgroundColor = "red";
}

// Activity 2
// Task 3
function chaiAppenDiv() {
    const newChaiElement = document.createElement('div');
    newChaiElement.textContent = 'New Chai Element Div Appended.';
    document.body.appendChild(newChaiElement);
}
// Task 4
function addChaiListItem() {
    const newChaiListItem = document.createElement('li');
    newChaiListItem.textContent = 'New Chai.';

    const chaiList = document.getElementById('myChaiList');

    chaiList.appendChild(newChaiListItem);
}

// Activity 3 : Removing Elements
// Task 5
function removeChaiElement() {
    const removingElement = document.getElementById("clickToRemove");
    if(removingElement && removingElement.parentNode)
    removingElement.parentNode.removeChild(removingElement);
} 
// Task 6
function removeChaiLastChild() {
    const chaiList = document.getElementById("myChaiList");
    if(chaiList.lastElementChild)
    chaiList.removeChild(chaiList.lastElementChild);
} 

// Activity 4 : Modifying Attributes and Classes
// Task 7
function changeChaiImageSource () {
    const image = document.getElementById('HiteshSirImage');
    
    image.src = 'https://yt3.googleusercontent.com/ytc/AIdro_k8WWdesIQosU5WUlHsVDJ4a6lo8tRCGvyOfWKkC0qbG8o=s900-c-k-c0x00ffffff-no-rj';
}

// Task 8
function addClass() {
    const element = document.getElementById('myDiv');
    element.classList.add('highlight');
}

function removeClass() {
    const element = document.getElementById('myDiv');
    
    element.classList.remove('highlight');
}

function toggleClass() {
    const element = document.getElementById('myDiv');
    element.classList.toggle('highlight');
}

// Activity 5: Event Handling
// Task 9
function changeText() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'Chai Text has been changed!';
}

const button = document.getElementById('myButton');
button.addEventListener('click', changeText);

// Task 10
// Function to change the border color
function changeBorderColor() {
    const element = document.getElementById('myElement');
    element.style.borderColor = 'red'; // Change the border color to red
}

// Function to revert the border color
function revertBorderColor() {
    const element = document.getElementById('myElement');
    element.style.borderColor = 'black'; // Revert the border color to black
}

// Select the element
const myElement = document.getElementById('myElement');

// Add mouseover event listener
myElement.addEventListener('mouseover', changeBorderColor);

// Add mouseout event listener to revert the color when the mouse is out
myElement.addEventListener('mouseout', revertBorderColor);

