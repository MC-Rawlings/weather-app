import renderWeather from './dom';

const getWeather = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;

  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.main.temp);
      renderWeather(response);
    })
    .catch((error) => {
      console.log(`Location not found: ${error}`);
    });
};

export default getWeather;
