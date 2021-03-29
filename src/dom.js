import getWeather from './weather';

/**
 *
 * @param {string} location - location searched by user
 * @returns {void} - renders weather to DOM
 */
const renderWeather = (location) => {
  // Target weather-info DOM elements
  const weatherName = document.querySelector('.weather-name');
  const weatherTemp = document.querySelector('.weather-temp');
  // Grab relevant weather data
  const name = location.name;
  const temp = location.main.temp;
  weatherName.textContent = name;
  weatherTemp.textContent = temp;
};

// Event Listeners
const form = document.querySelector('.search-form');

document.querySelector('#search').addEventListener('click', () => {
  const location = form.elements[0].value;
  getWeather(location);
  // Code here
  form.reset();
});

export default renderWeather;
