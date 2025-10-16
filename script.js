const btn = document.getElementById('getWeatherBtn');
const cityInp = document.getElementById('cityInp');
const weatherRes = document.getElementById('weatherRes');
const API_KEY = 'kiv';

btn.addEventListener('click', () => {
    const city =cityInp.value;
    if (!city) return alert('Enter a city');
})