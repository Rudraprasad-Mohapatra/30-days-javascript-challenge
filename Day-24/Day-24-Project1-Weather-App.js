// Day-24: Project 1 - Weather App
// tasks/Activities
// Activity 1 : Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the weather app.
// Completed

// Task 2: Add a basic CSS file to style the weather app, including a container for displaying weather information.
// Completed

// Activity 2: Fetching Weather Data
// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.
// Completed

// Task 4: Parse the weather data and display the current temperature, weather condition, and city name on the web page
// Completed

// Activity 3: Adding a Search Functionality
// Task 5: Add an input field and search button to the HTML structure. Style the input and button using CSS.
// Completed

// Task 6: Write a function to fetch and display weather data for a city entered in the search input firld. Log any errors to the console.
// Completed

// Activity 4: Displaying a 5-Day Forecast
// Task 7: use the fetch API to get a 5-day weather forecast from the public weather APi. Log the response data to the console.
// Completed

// Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page.
// Completed

// Activity 5: Enhancing the UI
// Task 9: Add icons or images to represent different weather conditions (e.g./ sunny, rainy, cloudy) based on the weather data.
// Completed

// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.
// Completed

document.getElementById("get-weather-btn").addEventListener("click", () => {
  const city = document.getElementById("city-input").value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const apiKey = "30e4032594d1b099ee371985be148c13";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok" + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    displayWeather(data);

    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) {
      throw new Error(
        "Network response was not ok " + forecastResponse.statusText
      );
    }
    const forecastData = await forecastResponse.json();
    console.log(forecastData);
    displayForecast(forecastData);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

function displayWeather(data) {
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const weatherInfo = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="${data.weather[0].description}">
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
  document.getElementById("weather-info").innerHTML = weatherInfo;
}

function displayForecast(forecastData) {
    const forecastContainer = document.getElementById('forecast-info');
    forecastContainer.innerHTML = ''; // Clear previous forecast data

    const forecastList = forecastData.list.filter((reading) => reading.dt_txt.includes("12:00:00"));

    console.log("forecastList is ",forecastList)
    forecastList.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        const date = new Date(day.dt_txt).toDateString();
        const temp = (day.main.temp - 273.15).toFixed(2);
        const description = day.weather[0].description;
        const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

        forecastItem.innerHTML = `
            <h3>${date}</h3>
            <img src="${iconUrl}" alt="${description}">
            <p>Temperature: ${temp}°C</p>
            <p>Weather: ${description}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}
