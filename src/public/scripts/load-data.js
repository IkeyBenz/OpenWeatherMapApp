$(document).ready(async () => {
  let endpoint = '/api/weather';

  if (navigator.geolocation) {
    await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then((pos) => {
      endpoint += `?zipcode=${pos.address.postalCode}`;
    }).catch(() => {
      alert('You have not allowed us to use your current location. Service denied.');
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
