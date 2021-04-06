import { getWeatherTemp, getWeatherFeelsLike } from './weather';

const renderWeather = () => {
  const form = document.querySelector('.search-form');
  // const weatherName = document.querySelector('.weather-name');
  const weatherTemp = document.querySelector('.weather-temp');
  const weatherFeelsLike = document.querySelector('.weather-feels-like');

  const location = form.elements[0].value;
  getWeatherTemp(location).then((temp) => {
    weatherTemp.textContent = temp;
  });
  getWeatherFeelsLike(location).then((temp) => {
    weatherFeelsLike.textContent = temp;
  });
};

const eventHandlers = (() => {
  const searchBtn = document.querySelector('#search');

  searchBtn.addEventListener('click', renderWeather);
})();

export default eventHandlers;
