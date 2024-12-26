// Replace 'YOUR_API_KEY' with your actual OpenWeather API key
const apiKey = '217c853cb167f26e23eb6d7a3699e276';
// Replace 'CITY_NAME' with the name of the specific city you want
const city = 'dubai,UAE';

// Function to fetch and display only the temperature
async function getTemperature() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        displayTemperature(data.main.temp);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        document.getElementById('temperature-container').innerText = 
            'Could not fetch temperature data. Please check your API key or city name.';
    }
}

// Function to display the temperature
function displayTemperature(temp) {
    const tempContainer = document.getElementById('temperature-container');
    tempContainer.innerText = `Temperature in ${city}: ${temp}°C`;
}

// Fetch and display temperature when the page loads
window.addEventListener('DOMContentLoaded', getTemperature);
