/**
 *
 * @param {string} location - location searched by user
 * @returns {void} - calls renderWeather() with relevant location
 */
const getWeatherTemp = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;

  return fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => response.main.temp)
    .catch((error) => {
      console.log(`Location not found: ${error}`);
    });
};

const getWeatherFeelsLike = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;

  return fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => response.main.feels_like)
    .catch((error) => {
      console.log(`Location not found: ${error}`);
    });
};

export { getWeatherTemp, getWeatherFeelsLike };
