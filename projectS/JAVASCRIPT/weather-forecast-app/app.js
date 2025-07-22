// Weather Forecast Application JS (Assignment-Ready)
const API_KEY = "91bd9153b3e8e5ddd4b8fd091ac832b8";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const currentBtn = document.getElementById("currentBtn");
const recentCities = document.getElementById("recentCities");
const weatherDisplay = document.getElementById("weatherDisplay");
const loader = document.getElementById("loader");

// Show shimmer loader
function showLoader() {
  loader.classList.remove("hidden");
  weatherDisplay.innerHTML = "";
}

// Hide shimmer loader
function hideLoader() {
  loader.classList.add("hidden");
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return showError("Please enter a city name.");
  if (!/^[a-zA-Z\s]+$/.test(city)) return showError("City should contain only letters.");
  fetchWeatherByCity(city);
});

currentBtn.addEventListener("click", () => {
  if (!navigator.geolocation) return showError("Geolocation not supported.");
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    fetchWeatherByCoords(latitude, longitude);
  });
});

recentCities.addEventListener("change", () => {
  const city = recentCities.value;
  if (city) fetchWeatherByCity(city);
});

function fetchWeatherByCity(city) {
  showLoader();
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  Promise.all([fetch(currentUrl), fetch(forecastUrl)])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(([current, forecast]) => {
      if (current.cod !== 200) throw new Error("City not found.");
      renderCurrentWeather(current);
      renderForecast(forecast);
      updateRecentCities(current.name);
    })
    .catch(err => showError(err.message))
    .finally(() => hideLoader());
}

function fetchWeatherByCoords(lat, lon) {
  showLoader();
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) throw new Error("Unable to find location.");
      renderCurrentWeather(data);
      fetchWeatherByCity(data.name); // Trigger forecast and recent handling
    })
    .catch(() => showError("Failed to get weather for your location."))
    .finally(() => hideLoader());
}

function renderCurrentWeather(data) {
  const html = `
    <div class="text-center">
      <h2 class="text-xl font-semibold">${data.name}, ${data.sys.country}</h2>
      <p class="text-2xl">${data.main.temp} °C</p>
      <p class="capitalize">${data.weather[0].description}</p>
      <img class="mx-auto mt-2" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].main}" />
      <p class="text-sm text-yellow-400 mt-2">Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s</p>
    </div>
  `;
  weatherDisplay.innerHTML = html;
}

function renderForecast(data) {
  const filtered = data.list.filter(i => i.dt_txt.includes("12:00:00")).slice(0, 5);
  const cards = filtered.map(item => {
    const date = new Date(item.dt_txt);
    return `
      <div class="bg-yellow-300 rounded p-4 shadow text-center">
        <p class="font-semibold">${date.toDateString()}</p>
        <img class="mx-auto" src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="icon" />
        <p class="text-lg font-bold">${item.main.temp} °C</p>
        <p class="capitalize text-pink-600">${item.weather[0].description}</p>
        <p class="text-sm text-gray-500">💧 ${item.main.humidity}% | 💨 ${item.wind.speed} m/s</p>
      </div>
    `;
  }).join("");

  weatherDisplay.innerHTML += `
    <h3 class="text-xl font-bold mt-6 mb-2">5-Day Forecast</h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
  `;
}

function showError(message) {
  weatherDisplay.innerHTML = `<p class="text-red-500 text-center">❌ ${message}</p>`;
  hideLoader();
}

function updateRecentCities(city) {
  let cities = JSON.parse(localStorage.getItem("recentCities")) || [];
  cities = [city, ...cities.filter(c => c !== city)].slice(0, 5);
  localStorage.setItem("recentCities", JSON.stringify(cities));
  populateDropdown();
}

function populateDropdown() {
  const cities = JSON.parse(localStorage.getItem("recentCities")) || [];
  if (cities.length === 0) {
    recentCities.classList.add("hidden");
    return;
  }
  recentCities.classList.remove("hidden");
  recentCities.innerHTML = `<option disabled selected>Choose Recent City</option>` +
    cities.map(c => `<option value="${c}">${c}</option>`).join("");
}

cityInput.focus();
populateDropdown();