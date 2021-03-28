const weatherInfo = (location, temp, feelsLike, windSpeed, windDirection) => {
  const toggleTemp = () => temp * (9 / 5) + 32;

  return {
    location,
    temp,
    feelsLike,
    windSpeed,
    windDirection,
    toggleTemp,
  };
};

const getWeather = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;

  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(location);
      console.log(response.main.temp);
      console.log(response.main.feels_like);
      console.log(response.wind.speed);
      console.log(response.wind.deg);
      // create weatherInfo here
      return weatherInfo(
        location,
        response.main.temp,
        response.main.feels_like,
        response.wind.speed,
        response.wind.deg,
      );
    })
    .catch((error) => {
      // figure out why error handling isn't working
      alert('Location not found: ' + location);
    });
};

export default getWeather;
