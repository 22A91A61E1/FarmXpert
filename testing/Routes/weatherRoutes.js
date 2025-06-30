// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const apiKey = process.env.OPENWEATHER_KEY;

//     const lat = req.query.lat;
//     const lon = req.query.lon;
//     const city = req.query.city || 'Hyderabad'; // fallback city

//     let url = '';

//     if (lat && lon) {
//       url = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey};
//     } else {
//       url = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};
//     }

//     const response = await axios.get(url);
//     const { temp, humidity } = response.data.main;
//     const weather = response.data.weather[0].main;
//     const windSpeed = (response.data.wind.speed * 3.6).toFixed(1); // m/s to km/h
//     const location = response.data.name;

//     // 🧠 Rule-based AI logic for pesticide spraying
//     let spraySafe = "Yes, it's safe to spray";

//     if (humidity > 80 || weather.toLowerCase() === "rain") {
//       spraySafe = "No, avoid spraying due to high humidity or rain";
//     } else if (temp < 15 || temp > 35) {
//       spraySafe = "No, not ideal temperature for spraying";
//     } else if (windSpeed > 15) {
//       spraySafe = "No, avoid spraying due to high wind";
//     }

//     // Final response
//     res.json({
//       temperature: temp,
//       humidity,
//       weather,
//       windSpeed,
//       location,
//       spraySafe
//     });

//   } catch (error) {
//     console.error('Error fetching weather:', error.message);
//     res.status(500).json({ error: 'Failed to fetch weather data' });
//   }
// });

// module.exports = router;









const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const apiKey = process.env.OPENWEATHER_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Missing OpenWeather API Key' });
    }

    const lat = req.query.lat;
    const lon = req.query.lon;
    const city = req.query.city || 'Hyderabad'; // fallback city

    let url = '';

    if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    }

    const response = await axios.get(url);
    const { temp, humidity } = response.data.main;
    const weather = response.data.weather[0].main;
    const windSpeed = (response.data.wind.speed * 3.6).toFixed(1); // m/s to km/h
    const location = response.data.name;

    // 🧠 Rule-based logic for pesticide spraying
    let spraySafe = "✅ Yes, it's safe to spray";

    if (humidity > 80 || weather.toLowerCase() === "rain") {
      spraySafe = "❌ No, avoid spraying due to high humidity or rain";
    } else if (temp < 15 || temp > 35) {
      spraySafe = "❌ No, not ideal temperature for spraying";
    } else if (windSpeed > 15) {
      spraySafe = "❌ No, avoid spraying due to high wind";
    }

    res.json({
      temperature: temp,
      humidity,
      weather,
      windSpeed,
      location,
      spraySafe,
    });

  } catch (error) {
    console.error('❌ Error fetching weather:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;
