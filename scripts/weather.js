// Fetch API
const apiKey = "429ee2e0445f25ca1c558c914a992349";
let city = "houston";
const api = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Get data from api
async function getWeather() {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
}

getWeather();

// Put weather info into DOM element