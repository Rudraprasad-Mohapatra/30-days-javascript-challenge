// Day 25: Project 2 - Movie Search App
// Tasks/Activities
// Activity 1: Setting Up the Project
// Task 1: Initialize a new project directory and set up the basic HTML structure for the movie search app.
// Completed

// Task 2: Add a basic CSS file to style the movie search app, including a container for displaying movie search results.
// Completed

// Activity 2: Fetching Movie Data
// Task 3: Use the fetch API to get movie data from a public movie API (e.g., OMDB API or The Movie Database API). Log the response data to the console.
// Completed

// Task 4: Parse the movie data and display the movie title, poster, and release year on the webpage.
// Completed

// Activity 3: Adding Search Functionality
// Task 5: Add an input field and search button to the HTML structure. Style the input and button using CSS.
// Completed

// Task 6: Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console.
// Completed

// Activity 4: Displaying Detailed Movie Information
// Task 7: Modify the search results to include a "More Info" button for each movie. When Clicked, fetch and display additional details about the movie, such as the plot, director and actors.

// Task 8: Create a modal or a new section on the page to display the detailed movie information .

// Activity 5: Enhancing the UI
// Task 9: Add CSS styles to improve the layout and design of the search results and detailed movie information.

// Task 10: Add CSS animations or transition to make the movie search app more interactive and visually appealing.

document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-input").value;
  if (query) {
    fetchMovies(query);
  }
});

function fetchMovies(query) {
  const apiKey = "f22e379d";
  const apiUrl = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.Response === "True") {
        displayMovies(data.Search);
      } else {
        document.getElementById("movie-results").innerHTML =
          "<p>No movies found</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayMovies(movies) {
  const movieResults = document.getElementById("movie-results");
  movieResults.innerHTML = ""; // Clear previous results

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
            <img src="${
              movie.Poster !== "N/A" ? movie.Poster : "img/placeholder.png"
            }" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <div class="more-info" id="more-info-${movie.imdbID}"></div>
             <button class="more-info-button" data-imdbid="${
               movie.imdbID
             }">More Info</button>
             <button class="detailed-info-button" data-imdbid="${
               movie.imdbID
             }">Detailed Info</button>
        `;

    movieResults.appendChild(movieCard);
  });

  document.querySelectorAll(".more-info-button").forEach((button) => {
    button.addEventListener("click", function () {
      const imdbID = this.getAttribute("data-imdbid");
      const moreInfoDiv = document.getElementById(`more-info-${imdbID}`);

      if (moreInfoDiv.classList.contains("visible")) {
        moreInfoDiv.classList.remove("visible");
        this.textContent = "More Info";
      } else {
        fetchMovieDetails(imdbID, moreInfoDiv, this);
      }
    });
  });

  document.querySelectorAll(".detailed-info-button").forEach((button) => {
    button.addEventListener("click", function () {
      const imdbID = this.getAttribute("data-imdbid");
      fetchMovieDetailsForModal(imdbID);
    });
  });
}

function fetchMovieDetails(imdbID, moreInfoDiv, button) {
  const apiKey = "f22e379d";
  const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        moreInfoDiv.innerHTML = `
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                `;
        moreInfoDiv.classList.add("visible");
        button.textContent = "Less Info";
      } else {
        moreInfoDiv.innerHTML = "<p>Movie details not found</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function fetchMovieDetailsForModal(imdbID) {
  const apiKey = "f22e379d";
  const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovieModal(data);
      } else {
        document.getElementById("modal-content").innerHTML =
          "<p>Movie details not found</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayMovieModal(movie) {
  document.getElementById(
    "modal-title"
  ).textContent = `${movie.Title} (${movie.Year})`;
  document.getElementById("modal-director").textContent = movie.Director;
  document.getElementById("modal-actors").textContent = movie.Actors;
  document.getElementById("modal-plot").textContent = movie.Plot;

  const modal = document.getElementById("movie-modal");
  modal.style.display = "block";

  // Close the modal when the user clicks on (x)
  document.querySelector(".close-btn").onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
