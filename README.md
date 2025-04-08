Here's a complete `README.md` file tailored for your **React Weather Dashboard** project. You can copy-paste this into your project's root directory.

---

```markdown
# 🌤️ Weather Dashboard Web App

A responsive and interactive Weather Dashboard built with **React.js** and styled using **Material UI (MUI)**. It allows users to search any city and view current weather details, a 5-day forecast, and more, all fetched from the OpenWeatherMap API.

## 🔧 Tech Stack Used

- ⚛️ **React.js** – Frontend framework (Create React App)
- 🎨 **MUI (Material-UI)** – Component library for modern UI
- ⚙️ **Axios** – For HTTP requests
- 🌐 **OpenWeatherMap API** – For weather data
- 🌗 **Dark/Light Theme Toggle** – Built using MUI theming
- 🎞️ **Framer Motion / CSS** – For animations and transitions

---

## 🧑‍💻 Features

- 🔍 City search with live weather updates
- ☀️ Current temperature, condition, humidity & wind speed
- 🌤️ 5-Day / 3-Hour Forecast
- 🌓 Theme toggle (Dark / Light Mode)
- 🔄 Refresh current weather
- 🕘 Search history (last 5 searches)
- ⏳ Loading spinner and error handling

---

## 🚀 Live Demo

Check the live version: https://weather-dashboard-two-omega.vercel.app/

---

## 🛠️ Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add OpenWeatherMap API Key

Create a `.env` file in the root of the project:

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

> ✅ Replace `your_api_key_here` with your actual key from OpenWeatherMap.

### 4. Start development server

```bash
npm start
```

---

## 🌐 OpenWeatherMap API Integration

- **Current Weather API**  
  Endpoint: `https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}`

- **5-Day Forecast API**  
  Endpoint: `https://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&appid={API_KEY}`

- **Response Format**: JSON  
- **Units**: Metric (°C, km/h)  
- **Rate Limit** (Free tier):
  - 60 calls/minute
  - 1,000,000 calls/month

### 🔐 API Key Notes

- API key is stored securely via environment variables (`.env`)
- Do not share your API key publicly (keep `.env` out of Git)

---

## 📁 Folder Structure

```
weather-dashboard/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherCard.js
│   │   ├── ForecastCard.js
│   │   └── ThemeToggle.js
│   ├── api.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── .env
├── README.md
└── package.json
`

## 📦 Deployment

App is deployed using **Vercel**:

1. Push your code to GitHub
2. Connect to Vercel
3. Add environment variables in settings
4. Deploy and get your live URL!

---

## 📬 Contact

For questions or contributions, feel free to reach out:

**Madhusmita Sahoo**  

---

> 💡 Feel free to fork, star ⭐, or contribute via pull reques
