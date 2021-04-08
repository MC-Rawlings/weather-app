import getWeather from './weather';

const renderWeather = () => {
  const form = document.querySelector('.search-form');
  // const weatherName = document.querySelector('.weather-name');
  const weatherTemp = document.querySelector('.weather-temp');
  const weatherFeelsLike = document.querySelector('.weather-feels-like');

  const location = form.elements[0].value;
  getWeather(location).then((weather) => {
    weatherTemp.textContent = weather.temp;
    weatherFeelsLike.textContent = weather.feelsLike;
  });
};

const eventHandlers = (() => {
  const searchBtn = document.querySelector('#search');

  searchBtn.addEventListener('click', renderWeather);
})();

export default eventHandlers;
