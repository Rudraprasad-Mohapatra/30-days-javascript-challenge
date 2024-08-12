  const themeSwitcher = document.getElementById("theme-switcher");
  console.log(themeSwitcher);
  const savedTheme = localStorage.getItem("theme");
  console.log(savedTheme);
  
  // Apply the saved theme
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeSwitcher.textContent = "Switch to Light Theme";
  } else {
    document.body.classList.remove("dark-theme");
    themeSwitcher.textContent = "Switch to Dark Theme";
  }

  // Toggle theme and save preference to local storage
  themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      themeSwitcher.textContent = "Switch to Light Theme";
      localStorage.setItem("theme", "dark");
    } else {
      themeSwitcher.textContent = "Switch to Dark Theme";
      localStorage.setItem("theme", "light");
    }
  });


// Registration Functionality
function registerUser(event) {
  event.preventDefault();
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (!username || !email || !password) {
    alert("All fields are required for registration.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some(
    (user) => user.username === username || user.email === email
  );

  if (userExists) {
    alert("Username or email already exists.");
    return;
  }

  users = [...users,{username,email,password}]

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
}

// Login Gunctionality
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (!username || !password) {
    alert("Both username and password are required for login.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    alert("Invalid username or password.");
    return;
  }

  sessionStorage.setItem("loggedInUser", JSON.stringify(user));
  alert(`Welcome, ${username}! You are now logged in.`);
  window.location.href = "dashboard.html";
}


// Event Listeners
if (document.getElementById("registration-form")) {
  document
    .getElementById("registration-form")
    .addEventListener("submit", registerUser);
}
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", loginUser);
}

// Load Profile Data
function loadUserProfile() {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    document.getElementById("profile-username").value = loggedInUser.username;
    document.getElementById("profile-email").value = loggedInUser.email;

    if (loggedInUser.profilePic) {
      document.getElementById("profile-pic").src = loggedInUser.profilePic;
    }
  } else {
    alert("You are not logged in!");
    window.location.href = "login.html";
  }
}