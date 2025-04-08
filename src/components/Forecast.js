// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';

// const Forecast = ({ forecastData }) => {
//   if (!forecastData) return null;

//   const dailyForecast = forecastData.list.filter((reading) => reading.dt_txt.includes('12:00:00'));

//   return (
//     <Grid container spacing={2}>
//       {dailyForecast.map((weather, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">{new Date(weather.dt_txt).toDateString()}</Typography>
//               <Typography>Temp: {weather.main.temp}°C</Typography>
//               <Typography>Condition: {weather.weather[0].main}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Forecast;

// import React from 'react';
// import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

// const ForecastCard = ({ forecast }) => {
//   return (
//     <Box sx={{ mt: 4 }}>
//       <Typography variant="h5" gutterBottom>5-Day Forecast</Typography>
//       <Grid container spacing={2}>
//         {forecast.map((day, index) => (
//           <Grid item xs={6} sm={4} md={2.4} key={index}>
//             <Card sx={{ backgroundColor: '#fce4ec' }} elevation={3}>
//               <CardContent>
//                 <Typography variant="subtitle1">{day.date}</Typography>
//                 <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt={day.weather} />
//                 <Typography>{day.temp}°C</Typography>
//                 <Typography variant="body2">{day.weather}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ForecastCard;

// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';

// const Forecast = ({ forecast }) => {
//   if (!forecast || forecast.length === 0) return null;

//   return (
//     <Card sx={{ mt: 4 }}>
//       <CardContent>
//         <Typography variant="h6" gutterBottom color="primary">
//           5-Day Forecast (Every 3 Hours)
//         </Typography>
//         <Grid container spacing={2}>
//           {forecast.slice(0, 8).map((item, index) => (
//             <Grid item xs={6} sm={3} md={2} key={index}>
//               <Card sx={{ p: 1, textAlign: 'center' }}>
//                 <Typography variant="body2">{item.dt_txt}</Typography>
//                 <img
//                   src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
//                   alt="icon"
//                   style={{ width: 40 }}
//                 />
//                 <Typography variant="body2">{item.main.temp}°C</Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default Forecast;

import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const ForecastCard = ({ forecast }) => {
  if (!forecast || !Array.isArray(forecast)) return null;

  // Filter to show only one reading per day (around 12:00 PM)
  const dailyForecast = forecast.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 5);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom textAlign="center" color="secondary">
        5-Day Forecast
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {dailyForecast.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={2.4}>
            <Card
              sx={{
                background: 'linear-gradient(to top right, #e1bee7, #ce93d8)',
                borderRadius: 4,
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
                },
              }}
              elevation={6}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {new Date(item.dt_txt).toDateString()}
                </Typography>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].main}
                  style={{ width: 60 }}
                />
                <Typography variant="h6">{item.main.temp.toFixed(1)}°C</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.weather[0].main}
                </Typography>
                <Typography variant="caption" display="block" mt={1}>
                  {item.wind.speed} km/h wind
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ForecastCard;
