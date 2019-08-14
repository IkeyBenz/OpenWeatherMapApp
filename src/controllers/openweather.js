const weather = require('openweather-apis');
const router = require('express').Router();

weather.setLang('en');
weather.setUnits('imperial');
weather.setAPPID(process.env.OPENWEATHERMAP_API_KEY);


router.get('/api/weather', (req, res) => {
  weather.getAllWeather((_, json) => res.json(json));
});

module.exports = router;
