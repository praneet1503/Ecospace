const apiKey = // #addyourapikeyhere; OpenWeatherMap API Key
const city = "dubai,UAE"; // Replace with your desired city
const units = "metric"; // Use "metric" for Celsius, "imperial" for Fahrenheit

async function fetchTemperature() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
        const data = await response.json();
        if (data.main && data.main.temp) {
            document.getElementById("temperature").innerText = `${data.main.temp}°C`;
        } else {
            document.getElementById("temperature").innerText = "Unable to fetch temperature.";
        }
    } catch (error) {
        document.getElementById("temperature").innerText = "Error fetching data.";
        console.error(error);
    }
}

// Run the fetchTemperature function after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", fetchTemperature);
