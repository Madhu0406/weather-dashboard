// import React, { useState } from 'react';
// import { Container, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
// import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
// import ThemeToggle from './components/ThemeToggle';
// import { fetchWeather } from './api';

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleSearch = async (city) => {
//     try {
//       const data = await fetchWeather(city);
//       setWeatherData(data);
//     } catch (error) {
//       alert('City not found or API error');
//     }
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container>
//         <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//         <SearchBar onSearch={handleSearch} />
//         {weatherData && <WeatherCard weatherData={weatherData} />}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { Container, CssBaseline, createTheme, ThemeProvider, List, ListItem, ListItemText, Divider, IconButton, CircularProgress } from '@mui/material';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
// import ThemeToggle from './components/ThemeToggle';
// import Forecast from './components/Forecast.js'
// import { fetchWeather, fetchForecast } from './api';

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false);
//   const [recentSearches, setRecentSearches] = useState(() => JSON.parse(localStorage.getItem('recentSearches')) || []);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   useEffect(() => {
//     localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
//   }, [recentSearches]);

//   const handleSearch = async (city) => {
//     setLoading(true);
//     try {
//       const weather = await fetchWeather(city);
//       const forecast = await fetchForecast(city);
//       setWeatherData(weather);
//       setForecastData(forecast);
//       updateRecentSearches(city);
//     } catch (error) {
//       alert('City not found or API error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateRecentSearches = (city) => {
//     setRecentSearches((prevSearches) => {
//       const updatedSearches = [city, ...prevSearches.filter((c) => c !== city)].slice(0, 5);
//       return updatedSearches;
//     });
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//     },
//   });

//   const handleRefresh = () => {
//     if (weatherData) {
//       handleSearch(weatherData.name);
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container>
//         <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//         <SearchBar onSearch={handleSearch} />
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <>
//             {weatherData && (
//               <>
//                 <WeatherCard weatherData={weatherData} />
//                 <IconButton onClick={handleRefresh} color="inherit">
//                   <RefreshIcon />
//                 </IconButton>
//                 <Forecast forecastData={forecastData} />
//               </>
//             )}
//             <Divider />
//             <List>
//               {recentSearches.map((city, index) => (
//                 <ListItem button key={index} onClick={() => handleSearch(city)}>
//                   <ListItemText primary={city} />
//                 </ListItem>
//               ))}
//             </List>
//           </>
//         )}
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default App;

// src/App.js

import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, createTheme, ThemeProvider, Typography, CircularProgress, Box, Chip, Stack } from '@mui/material';

import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ThemeToggle from './components/ThemeToggle';
import ForecastCard from './components/Forecast';
import { fetchWeather, fetchForecast } from './api';
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('weatherSearchHistory')) || [];
    setSearchHistory(history);
  }, []);

  const saveToHistory = (city) => {
    let updatedHistory = [city, ...searchHistory.filter((c) => c !== city)];
    if (updatedHistory.length > 5) updatedHistory = updatedHistory.slice(0, 5);
    setSearchHistory(updatedHistory);
    localStorage.setItem('weatherSearchHistory', JSON.stringify(updatedHistory));
  };

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      const forecast = await fetchForecast(city);
      setWeatherData(data);
      setForecastData(forecast);
      saveToHistory(city);
    } catch (error) {
      alert('City not found or API error');
      setWeatherData(null);
      setForecastData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    if (weatherData?.name) {
      handleSearch(weatherData.name);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#f50057' },
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh', py: 4, px: 2 }}>
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold" color="primary">
            Weather Dashboard
          </Typography>

          <SearchBar onSearch={handleSearch} onRefresh={handleRefresh} />

          {searchHistory.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              {searchHistory.map((city, index) => (
                <Chip
                  key={index}
                  label={city}
                  onClick={() => handleSearch(city)}
                  variant="outlined"
                  color="primary"
                  clickable
                />
              ))}
            </Stack>
          )}

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress size={60} color="secondary" />
            </Box>
          )}

          {!loading && weatherData && (
            <>
              <WeatherCard weatherData={weatherData} />
              <ForecastCard forecast={forecastData} />
            </>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
