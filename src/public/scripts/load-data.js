$(document).ready(() => {
  const getWeather = fetch('/api/weather').then((res) => res.json());

  function displayData(data) {
    const { main, description, icon } = data.weather[0];

    $('#weather-main').text(main);
    $('#weather-description').text(description);
    $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${icon}.png`);
  }

  getWeather.then(displayData);
});
