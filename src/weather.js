const weatherInfo = (
  location,
  temp,
  feelsLike,
  participation,
  wind,
  windDirection,
) => {
  const toggleTemp = () => temp * (9 / 5) + 32;

  return {
    location,
    temp,
    feelsLike,
    participation,
    wind,
    windDirection,
    toggleTemp,
  };
};

const getWeather = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;

  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // return weatherInfo here
    })
    .catch((error) => {
      console.error(error);
      // figure out why error handling isn't working
    });
};

export default getWeather;
