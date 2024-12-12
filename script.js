
// Elements
const locationElement = document.querySelector("#location");
const weatherInfoElement = document.querySelector("#weather-info");

// Function to get weather data
async function getWeather() {
  const apiKey = "582298ab7ab9be24e8870ad89dfc9dab"; // Replace with your actual OpenWeather API key
  const city = "Kano"; // Default location
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    weatherInfoElement.textContent = "Fetching weather data...";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();

    // Extract data
    const { name, main, weather } = data;
    const temperature = main.temp;
    const humidity = main.humidity;
    const description = weather[0].description;

    // Update UI
    locationElement.textContent = `Location: ${name}`;
    weatherInfoElement.textContent = `Temperature: ${temperature}°C, Humidity: ${humidity}%, Condition: ${description}`;
  } catch (error) {
    weatherInfoElement.textContent = `Error: ${error.message}`;
  }
}

// Fetch weather data on page load
getWeather();
