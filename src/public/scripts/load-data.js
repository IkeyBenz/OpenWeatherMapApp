$(document).ready(async () => {
  let endpoint = '/api/weather';

  if (navigator.geolocation) {
    await new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        endpoint += `?zipcode=${pos.address.postalCode}`;
        resolve();
      });
    });
  }

  const getWeather = fetch(endpoint).then((res) => res.json());

  function displayData(data) {
    const {
      id, main, description, icon,
    } = data.weather[0];
    const { temp } = data.main;

    $('#weather-main').text(main);
    $('#weather-temp').text(temp);
    $('#weather-description').text(description);
    $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${icon}.png`);
    $('input[name="weather_id"]').val(id);
  }

  getWeather.then(displayData);
});
