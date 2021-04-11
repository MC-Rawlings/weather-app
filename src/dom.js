import processedWeather from './weather';

const renderWeather = async () => {
  const weather = await processedWeather();
  const name = document.querySelector('.weather-name');
  const temp = document.querySelector('.weather-temp');
  const feelsLike = document.querySelector('.weather-feels-like');
  const tempMin = document.querySelector('.weather-temp-min');
  const tempMax = document.querySelector('.weather-temp-max');
  const description = document.querySelector('.weather-description');
  const windSpeed = document.querySelector('.weather-wind-speed');
  const windDirection = document.querySelector('.weather-wind-direction');
  const weatherIcon = document.querySelector('.weather-icon');

  name.textContent = weather.name;
  temp.textContent = weather.temp;
  feelsLike.textContent = weather.feelsLike;
  tempMin.textContent = weather.tempMin;
  tempMax.textContent = weather.tempMax;
  description.textContent = weather.description;
  windSpeed.textContent = weather.speed;
  windDirection.textContent = weather.deg;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
};

export default renderWeather;
