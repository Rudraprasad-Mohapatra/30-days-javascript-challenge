// Day-20: LocalStorage and SessionStorage
// Tasks/Activities:
// Activity 1: Understanding Localstorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

function saveToLocalStorage() {
  const valueToSave = "Hello, LocalStorage!";
  localStorage.setItem("myValue", valueToSave);
  console.log("Value saved to LocalStorage.");
}

function retrieveFromLocalStorage() {
  const retrievedValue = localStorage.getItem("myValue");
  if (retrievedValue !== null) {
    console.log("Retrieved value from LocalStorage:", retrievedValue);
  } else {
    console.log("No value found in LocalStorage for the key 'myValue'.");
  }
}

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = {
  name: "Rudraprasad Mohapatra",
  profession: "Software Engineer",
  skills: ["JavaScript", "Python", "Java", "MySQL", "MongoDB"],
};

localStorage.setItem("myObject", JSON.stringify(myObject));

const retrievedObjectString = localStorage.getItem("myObject");

const retrievedObject = JSON.parse(retrievedObjectString);

console.log(retrievedObject);

// Activity 2: Using LocalStorage
// Task3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the display the saved data on page load.
document.addEventListener("DOMContentLoaded", (event) => {
  function saveUserInfo(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const userInfo = { name, email };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    displayUserInfo();
  }

  function displayUserInfo() {
    const userInfoDiv = document.getElementById("userInfo");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      userInfoDiv.innerHTML = `
                <h2>Saved User Info:</h2>
                <p><strong>Name:</strong> ${userInfo.name}</p>
                <p><strong>Email:</strong> ${userInfo.email}</p>
            `;
    }
  }

  document.getElementById("userForm").addEventListener("submit", saveUserInfo);

  displayUserInfo();
});

// Task 4: Write a script to remove an item from localStorage . Log the localStorage content before and after removal.
function logLocalStorageContent() {
  console.log("LocalStorage Content:", localStorage);
}

function removeItem() {
  console.log("Before removal:");
  logLocalStorageContent();

  localStorage.removeItem("userInfo");

  console.log("After removal:");
  logLocalStorageContent();
}

const exampleData = {
  name: "Rudraprasad Mohapatra",
  email: "rudra.dev@example.com",
};
localStorage.setItem("userInfo", JSON.stringify(exampleData));

document.getElementById("removeButton").addEventListener("click", removeItem);

logLocalStorageContent();
// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
function saveToSessionStorage() {
  const stringValue = "Hello, this is stored in Session Storage!";
  sessionStorage.setItem("sessionString", stringValue);
  console.log("String value saved to sessionStorage:", stringValue);
}

function retrieveFromSessionStorage() {
  const retrievedValue = sessionStorage.getItem("sessionString");
  console.log("Retrieved value from sessionStorage:", retrievedValue);
}

document
  .getElementById("saveSessionButton")
  .addEventListener("click", saveToSessionStorage);
document
  .getElementById("retrieveSessionButton")
  .addEventListener("click", retrieveFromSessionStorage);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

function saveObjectToSessionStorage() {
  const myObject = {
    name: "Rudraprasad Mohapatra",
    profession: "Software Engineer",
    skills: ["JavaScript", "Python", "Java", "MySQL", "MongoDB"],
  };

  sessionStorage.setItem("myObject", JSON.stringify(myObject));
  console.log("Object saved to sessionStorage:", myObject);
}

function retrieveObjectFromSessionStorage() {
  const retrievedObjectString = sessionStorage.getItem("myObject");

  const retrievedObject = JSON.parse(retrievedObjectString);

  console.log("Object retrieved from sessionStorage:", retrievedObject);
}

document
  .getElementById("saveButton")
  .addEventListener("click", saveObjectToSessionStorage);
document
  .getElementById("retrieveButton")
  .addEventListener("click", retrieveObjectFromSessionStorage);

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.addEventListener("DOMContentLoaded", (event) => {
  function saveSessionUserInfo(event) {
    event.preventDefault();
    const name = document.getElementById("sessionName").value;
    const email = document.getElementById("sessionEmail").value;
    const userInfo = { name, email };

    sessionStorage.setItem("sessionUserInfo", JSON.stringify(userInfo));
    console.log(sessionStorage.getItem("sessionUserInfo"));

    displaySessionUserInfo();
  }

  function displaySessionUserInfo() {
    const userInfoDiv = document.getElementById("sessionUserInfo");
    const userInfo = JSON.parse(sessionStorage.getItem("sessionUserInfo"));

    if (userInfo) {
      userInfoDiv.innerHTML = `
                <h2>Saved User Info:</h2>
                <p><strong>Name:</strong> ${userInfo.name}</p>
                <p><strong>Email:</strong> ${userInfo.email}</p>
            `;
    }
  }

  document
    .getElementById("sessionUserForm")
    .addEventListener("submit", saveSessionUserInfo);

  displaySessionUserInfo();
});
// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal .
function logSessionStorageContent() {
  console.log("Current sessionStorage content:", sessionStorage);
}

function removeSessionStorageItem() {
  console.log("Before removal:");
  logSessionStorageContent();

  sessionStorage.removeItem("uniqueSessionKey");

  console.log("After removal:");
  logSessionStorageContent();
}

const demoObject = { example: "Sample data for sessionStorage" };
sessionStorage.setItem("uniqueSessionKey", JSON.stringify(demoObject));

document
  .getElementById("removeItemButton")
  .addEventListener("click", removeSessionStorageItem);

logSessionStorageContent();

// Activity 5: Comparing LocalStorage and SessionStorage.

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage as sessionStorage . Retrieve and log the values from both storage mechanisms.
function saveToStorage(key, value) {
    localStorage.setItem(key, value);
    
    sessionStorage.setItem(key, value);

    logStoredValues(key);
}

function logStoredValues(key) {
    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);

    console.log("Value from localStorage:", localStorageValue);
    console.log("Value from sessionStorage:", sessionStorageValue);
}

document.getElementById('saveAndRetrieveButton').addEventListener('click', () => {
    const key = 'exampleKey';
    const value = 'exampleValue';
    saveToStorage(key, value);
});
// Tasks 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearAllStorage() {
    localStorage.clear();
    console.log("localStorage cleared.");

    sessionStorage.clear();
    console.log("sessionStorage cleared.");

    verifyStorage();
}

function verifyStorage() {
    const localStorageEmpty = localStorage.length === 0;
    const sessionStorageEmpty = sessionStorage.length === 0;

    // Display and log status
    const statusDiv = document.getElementById('storageStatus');
    statusDiv.innerHTML = `
        <p>LocalStorage is ${localStorageEmpty ? 'empty' : 'not empty'}.</p>
        <p>SessionStorage is ${sessionStorageEmpty ? 'empty' : 'not empty'}.</p>
    `;

    console.log("LocalStorage is empty:", localStorageEmpty);
    console.log("SessionStorage is empty:", sessionStorageEmpty);
}

document.getElementById('clearStorageButton').addEventListener('click', clearAllStorage);
