import getWeather from './weather';

const renderWeather = () => {
  const form = document.querySelector('.search-form');
  // const weatherName = document.querySelector('.weather-name');
  const weatherTemp = document.querySelector('.weather-temp');

  const location = form.elements[0].value;
  getWeather(location).then((temp) => {
    weatherTemp.textContent = temp;
  });
};

const eventHandlers = (() => {
  const searchBtn = document.querySelector('#search');

  searchBtn.addEventListener('click', renderWeather);
})();

export default eventHandlers;
