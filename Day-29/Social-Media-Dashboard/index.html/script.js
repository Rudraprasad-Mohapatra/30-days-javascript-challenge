document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.querySelector(".dashboard");
    const loginContainer = document.querySelector(".login-container");

    // Check if a user is already logged in
    const loggedInUser = sessionStorage.getItem("username");
    if (loggedInUser) {
        showDashboard(loggedInUser);
    }

    // Handle login form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Basic validation (expand this with actual authentication logic)
        if (username && password) {
            // Store user in session storage
            sessionStorage.setItem("username", username);

            // Show the dashboard
            showDashboard(username);
        } else {
            alert("Please enter a valid username and password.");
        }
    });

    function showDashboard(username) {
        loginContainer.style.display = "none"; // Hide the login form
        dashboard.style.display = "block"; // Show the dashboard
        alert(`Welcome, ${username}!`); // Greet the user
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('postsContainer');

    let posts = [];

    // Handle form submission to create a new post
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const content = document.getElementById('postContent').value;
        const image = document.getElementById('postImage').value;

        // Create a new post object with username and timestamp
        const newPost = {
            content,
            image,
            username: sessionStorage.getItem('username'),
            date: new Date().toLocaleString(),
            likes: 0,
            comments: []
        };

        // Add the new post to the posts array
        posts.push(newPost);

        // Clear the form fields
        postForm.reset();

        // Display the new post in the feed
        displayPosts();
    });

    function displayPosts() {
        postsContainer.innerHTML = '';  // Clear the current posts

        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <div class="post-header">
                    <strong>${post.username}</strong> <small>${post.date}</small>
                </div>
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image" />` : ''}
                <div class="post-actions">
                    <button class="like-btn" data-index="${index}">Like (${post.likes})</button>
                    <button class="comment-btn" data-index="${index}">Comment (${post.comments.length})</button>
                </div>
                <div class="comments-section">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                    <input type="text" placeholder="Add a comment..." class="comment-input" data-index="${index}">
                    <button class="add-comment-btn" data-index="${index}">Add Comment</button>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });

        // Add event listeners for like and comment buttons
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', handleLike);
        });

        document.querySelectorAll('.add-comment-btn').forEach(btn => {
            btn.addEventListener('click', handleAddComment);
        });
    }

    function handleLike(event) {
        const postIndex = event.target.dataset.index;
        posts[postIndex].likes += 1;
        displayPosts();  // Re-render the posts to update the like count
    }

    function handleAddComment(event) {
        const postIndex = event.target.dataset.index;
        const commentInput = document.querySelector(`.comment-input[data-index="${postIndex}"]`);
        const commentText = commentInput.value.trim();

        if (commentText) {
            posts[postIndex].comments.push(commentText);
            commentInput.value = '';  // Clear the input field
            displayPosts();  // Re-render the posts to update the comment section
        }
    }
});
