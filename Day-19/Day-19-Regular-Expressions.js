// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern(e.g., match all occurences of the word "JavaScript" in a string). Log the matches.

const text1 = "JavaScript is a versatile language. I love JavaScript because JavaScript is powerful.";
const pattern = /JavaScript/g;

const matches1 = text1.match(pattern);
console.log(matches1); // Output: [ 'JavaScript', 'JavaScript', 'JavaScript' ]

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text2 = "The year is 2024. My phone number is 123-456-7890. I have 2 cats and 5 dogs.";
const digitPattern = /\d/g;

const matches2 = text2.match(digitPattern);
console.log(matches2); // Output: [ '2', '0', '2', '4', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '2', '5' ]

// Activity 2: Character classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text3 = "The Quick BRown Fox Jumps Over The Lazy Dog is here.";
const capitalizedWordPattern = /\b[A-Z][a-zA-Z]*\b/g;
const matches3 = text3.match(capitalizedWordPattern);
console.log(matches3);

// Task 4 :Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const text4 = "The year is 2024. My phone number is 123-456-7890. I have 2 cats and 5 dogs.";
const digitSequencePattern = /\d+/g;

const matches4 = text4.match(digitSequencePattern);
console.log(matches4); // Output: [ '2024', '123', '456', '7890', '2', '5' ]

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format(e.g. (123) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
const phonePattern = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches5 = phoneNumber.match(phonePattern);

if (matches5) {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = matches5;
    console.log(`Full Match: ${fullMatch}`);
    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
  } else {
    console.log("No match found.");
  }
// Activity 4; Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the begining of a string. Log the matches.

const text5 = "Hello world, this is a test string. Hello again!";
const pattern5 = /^Hello/;

const match5 = text5.match(pattern5);

if (match5) {
  console.log(`Match found: ${match5}`);
} else {
  console.log("No match found.");
}

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text6 = "This is a test string with the word end";
const pattern6 = /end$/;

const match6 = text6.match(pattern);

if (match6) {
  console.log(`Match found: ${match6[0]}`);
} else {
  console.log("No match found.");
}

// Activity 5:Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const password = "P@ssw0rd"; 
const pattern4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValid = pattern4.test(password);

if (isValid) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}


// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function validateURL(url) {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]+)?(\/.*)?$/;
    const isValid = urlPattern.test(url);
    console.log(`URL: ${url}`);
    console.log(`Is valid: ${isValid}`);
  }
  
  validateURL("http://www.example.com");
  validateURL("https://www.example.com:8080/path/to/resource");