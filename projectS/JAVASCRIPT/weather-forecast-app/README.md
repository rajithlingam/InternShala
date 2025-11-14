# Weather Forecast Application (OpenWeather API + Vanilla JavaScript + Tailwind)

A responsive, modern weather dashboard built using **JavaScript**, **Tailwind CSS**, and the **OpenWeatherMap API**.  
Supports real-time current weather, 5-day forecast, geolocation, recent city memory, shimmer loader, and elegant glass UI.

---

## 🚀 Features
- Search weather by **city name**  
- Get weather using **current location (GPS)**  
- **5-Day forecast** (midday snapshots)  
- **Shimmer loading animation**  
- **Recent cities dropdown** (saved in localStorage)  
- **Error handling** for invalid cities, geolocation issues, APIs, etc.  
- Responsive UI with glass effect + soft gradients  
- Weather icons fetched dynamically  
- Clean modular functions for fetching, rendering & validating

---

## 📁 Project Structure
/weather-app  
├─ index.html  
├─ app.js  
└─ style.css (optional, mostly Tailwind is used)

---

## ▶️ How to Run
1. Get an API key from **OpenWeatherMap**  
2. Replace the placeholder inside app.js:  
   - `const API_KEY = "YOUR_API_KEY";`  
3. Open **index.html** in your browser  
4. Search by city or click **Current** for geolocation weather  
5. Recent cities are saved automatically

---

## 🧠 How It Works (Detailed)
### Fetching Weather by City
- Builds two URLs:
  - Current weather API  
  - Forecast API  
- Uses `Promise.all()` to fetch both simultaneously  
- Validates:
  - Empty field  
  - Invalid characters  
  - 404 city not found  

### Fetching Weather by GPS
- Uses browser’s `navigator.geolocation.getCurrentPosition()`  
- If location fails:
  - Displays user-friendly error message  

### Rendering Current Weather
- Displays:
  - City + Country  
  - Temperature  
  - Description  
  - Humidity  
  - Wind Speed  
  - Weather Icon  

### Rendering 5-Day Forecast
- Filters only the **12:00 PM** entries  
- Shows:
  - Date  
  - Temp  
  - Icon  
  - Description  
  - Humidity & Wind  

### Recent City Memory
- Saves last 5 cities in `localStorage`  
- Populates dropdown dynamically  
- Prevents duplicates

---

## 🎨 UI & Styling
- TailwindCSS (CDN)  
- Glassmorphism card  
- Gradient background  
- Shimmer loading animation  
- Fully responsive (mobile → desktop)  
- Clean, readable typography via Google Font **Inter**

---

## 🔧 Input Validation
- No empty strings  
- City must contain letters only (`/^[a-zA-Z\s]+$/`)  
- Shows inline, friendly error messages  

---

## ❗ Error Handling
- Invalid city → “City not found”  
- API error → “Unable to fetch weather”  
- GPS blocked → “Geolocation not supported or permission denied”  
- Network error → retry message  

---

## 📈 Possible Improvements
- Celsius ↔ Fahrenheit toggle  
- Hourly forecast charts  
- Multi-country autocomplete  
- Save favorite cities  
- Offline caching with service workers  
- Convert to React version with reusable components

---

## 👨‍💻 Author
**Rajithlingam Anbumani**

---
