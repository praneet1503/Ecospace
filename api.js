// Your OpenWeatherMap API key and city information
const apiKey = '217c853cb167f26e23eb6d7a3699e276'; // Your API key
const city = 'Dubai,ae'; // Change the city to Dubai, UAE
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data from OpenWeatherMap
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const temp = data.main.temp;
    document.getElementById('temperature').innerText = `The temperature in ${city} is ${temp}°C`;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById('temperature').innerText = 'Failed to load temperature';
  });
