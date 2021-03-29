import getWeather from './weather';

const renderWeather = (location) => {
  const name = location.name;
  const temp = location.main.temp;
  console.log(temp);
  console.log(name);
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
