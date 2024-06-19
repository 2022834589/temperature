const apiKey = '42c697911f3a065857308f3bf1f72b0'; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('weather-location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('weather-description').innerText = data.weather[0].description;
        document.getElementById('weather-temp').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('weather-humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('weather-wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;

        document.querySelector('.weather-result').style.display = 'block';
    } catch (error) {
        alert('An error occurred while fetching the weather data');
        console.error(error);
    }
}
