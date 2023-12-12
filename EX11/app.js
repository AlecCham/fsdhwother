async function getWeatherData() {
    try {
        const zipcode = document.getElementById('zipcode').value;
        const apiKey = 'd72729578543cfc435344f99b226b1c9';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);
            const temperatureFahrenheit = ((temperatureCelsius * 9/5) + 32).toFixed(2);
            const lowTemperatureCelsius = (data.main.temp_min - 273.15).toFixed(2);
            const highTemperatureCelsius = (data.main.temp_max - 273.15).toFixed(2);

            const weatherInfo = `Actual temperature: ${temperatureCelsius}°C (${temperatureFahrenheit}°F.)
                                \nLow of the day temperature: ${lowTemperatureCelsius}°C.
                                \nHigh of the day temperature: ${highTemperatureCelsius}°C.`;

            displayData(weatherInfo);
        } else {
            displayData('Error fetching weather data');
        }
    } catch (error) {
        displayData('An error occurred while fetching weather data');
    }
}

function displayData(data) {
    document.getElementById('w').textContent = data;
    console.log(data);
}