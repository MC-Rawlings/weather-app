import { doFetch } from './utils/utils';
import {
  getWeatherTemp,
  getWeatherFeelsLike,
  getWeatherDescription,
  getWeatherMin,
  getWeatherMax,
  getWeatherIconKey,
} from './weather';

const renderWeather = () => {
  const form = document.querySelector('.search-form');
  // const weatherName = document.querySelector('.weather-name');
  const weatherTemp = document.querySelector('.weather-temp');
  const weatherFeelsLike = document.querySelector('.weather-feels-like');
  const weatherDescription = document.querySelector('.weather-description');
  const weatherTempMin = document.querySelector('.weather-temp-min');
  const weatherTempMax = document.querySelector('.weather-temp-max');
  const weatherIcon = document.querySelector('.weather-icon');

  const location = form.elements[0].value;

  getWeatherTemp(location).then((temp) => {
    weatherTemp.textContent = `Temperature: ${temp}`;
  });
  getWeatherFeelsLike(location).then((temp) => {
    weatherFeelsLike.textContent = `Feels Like: ${temp}`;
  });
  getWeatherMin(location).then((temp) => {
    weatherTempMin.textContent = `Min Temp: ${temp}`;
  });
  getWeatherMax(location).then((temp) => {
    weatherTempMax.textContent = `Max Temp: ${temp}`;
  });
  getWeatherDescription(location).then((description) => {
    weatherDescription.textContent = description;
  });
  getWeatherIconKey(location).then((key) => {
    weatherIcon.src = `http://openweathermap.org/img/wn/${key}@2x.png`;
  });
};

const eventHandlers = (() => {
  const searchBtn = document.querySelector('#search');

  searchBtn.addEventListener('click', renderWeather);
})();

const handleFetch = async () => {
  console.log('Handling fetch');
  //
  const weatherData = await doFetch(
    'https://aapi.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab',
  );
  const icons = await doFetch(
    'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab',
  );

  const consolidatedWeatherData = { ...weatherData, ...icons };
  console.log(weatherData);
  console.log(consolidatedWeatherData);
};

handleFetch();

export default eventHandlers;
