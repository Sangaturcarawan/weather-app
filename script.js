const btn = document.getElementById('getWeatherBtn');
const cityInp = document.getElementById('cityInp');
const weatherRes = document.getElementById('weatherRes');
const API_KEY = '2102fc0b219f5cb4f7a7b15cc29f7a59';

btn.addEventListener('click', () => {
    const city =cityInp.value;
    if (!city) return alert('Enter a city');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => resizeBy.json())
        .then(data => {
            if(data.cod !== 200) {
                weatherRes.textContent = 'City not found';
                return;
            }
            weatherRes.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                `;
        })
        .catch(err => {
            weatherRes.textContent = 'Error fetching weather';
            console.error(err);
        });
    });

// const data = 

// {"coord":{
//     "lon":103.8501,
//     "lat":1.2897},
// "weather":[{
//     "id":803,
//     "main":"Clouds",
//     "description":"broken clouds",
//     "icon":"04n"}],
// "base":"stations",
// "main":{
//     "temp":26.97,
//     "feels_like":30.15,
//     "temp_min":26.92,
//     "temp_max":26.97,
//     "pressure":1007,
//     "humidity":85,
//     "sea_level":1007,
//     "grnd_level":1007},
// "visibility":10000,
// "wind":{
//     "speed":1.54,
//     "deg":330},
// "clouds":{"all":75},
// "dt":1760639216,
// "sys":{
//     "type":1,
//     "id":9470,
//     "country":"SG",
//     "sunrise":1760654838,
//     "sunset":1760698341},
// "timezone":28800,
// "id":1880252,
// "name":"Singapore",
// "cod":200}