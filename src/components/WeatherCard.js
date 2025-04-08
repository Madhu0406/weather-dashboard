// // import React from 'react';
// // import { Card, CardContent, Typography } from '@mui/material';

// // const WeatherCard = ({ weatherData }) => {
// //   const { name, main, weather, wind } = weatherData;
  

// //   return (
// //     <Card>
// //       <CardContent>
// //         <Typography variant="h5">{name}</Typography>
// //         <Typography variant="h6">{weather[0].main}</Typography>
// //         <Typography>Temperature: {main.temp}°C</Typography>
// //         <Typography>Humidity: {main.humidity}%</Typography>
// //         <Typography>Wind Speed: {wind.speed} km/h</Typography>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default WeatherCard;


// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   CssBaseline,
//   createTheme,
//   ThemeProvider,
//   Typography,
//   Box,
//   IconButton,
//   Paper,
// } from '@mui/material';
// import SearchBar from './components/SearchBar';
// import WeatherCard from './components/WeatherCard';
// import ThemeToggle from './components/ThemeToggle';
// import { fetchWeather } from './api';
// import RefreshIcon from '@mui/icons-material/Refresh';

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);
//   const [lastCity, setLastCity] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (city) => {
//     setLoading(true);
//     try {
//       const data = await fetchWeather(city);
//       setWeatherData(data);
//       setLastCity(city);
//     } catch (error) {
//       alert('City not found or API error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     if (lastCity) {
//       handleSearch(lastCity);
//     }
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? 'dark' : 'light',
//       primary: {
//         main: '#00bcd4',
//       },
//       secondary: {
//         main: '#f50057',
//       },
//       background: {
//         default: darkMode ? '#121212' : '#e3f2fd',
//         paper: darkMode ? '#1d1d1d' : '#ffffff',
//       },
//     },
//     typography: {
//       fontFamily: `'Poppins', sans-serif`,
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           minHeight: '100vh',
//           background: darkMode
//             ? 'linear-gradient(to right, #1c1c1c, #232526)'
//             : 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
//           py: 4,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Paper elevation={6} sx={{ p: 3, borderRadius: 4 }}>
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Typography variant="h4" color="primary" gutterBottom>
//                 Weather Dashboard
//               </Typography>
//               <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//             </Box>

//             <SearchBar onSearch={handleSearch} />

//             {lastCity && (
//               <Box display="flex" justifyContent="center" mt={2}>
//                 <IconButton onClick={handleRefresh} color="secondary">
//                   <RefreshIcon />
//                 </IconButton>
//               </Box>
//             )}

//             {loading ? (
//               <Typography align="center" mt={4} color="text.secondary">
//                 Fetching weather data...
//               </Typography>
//             ) : (
//               weatherData && <WeatherCard weatherData={weatherData} />
//             )}
//           </Paper>
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default App;


import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 3, borderRadius: 4, backgroundColor: '#ffecb3' }} elevation={5}>
      <CardContent>
        <Typography variant="h4" fontWeight="bold">{name}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
          <img src={icon} alt={weather[0].description} />
          <Box>
            <Typography variant="h5">{weather[0].main}</Typography>
            <Typography variant="h6">{main.temp}°C</Typography>
          </Box>
        </Box>
        <Typography>Humidity: {main.humidity}%</Typography>
        <Typography>Wind Speed: {wind.speed} km/h</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
