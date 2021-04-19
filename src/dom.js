import processedWeather from './weather';

const renderWeather = async () => {
  const weather = await processedWeather();
  const name = document.querySelector('.weather-main__temp');
  const temp = document.querySelector('.weather-main__temp');
  const feelsLike = document.querySelector('.weather-feels-like__value');
  const description = document.querySelector('.weather-description__value');
  const tempMin = document.querySelector('.weather-min__value');
  const tempMax = document.querySelector('.weather-max__value');
  const weatherIcon = document.querySelector('.weather-main__icon');
  const sunRise = document.querySelector('.weather-sunrise__value');
  const sunSet = document.querySelector('.weather-sunset__value');

  name.textContent = `${weather.name}`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  temp.textContent = `${weather.temp.toFixed(1)}\u00B0`;
  feelsLike.textContent = `${weather.feelsLike.toFixed(1)}\u00B0`;
  description.textContent = `${weather.description}`;
  tempMin.textContent = `${weather.tempMin.toFixed(1)}\u00B0`;
  tempMax.textContent = `${weather.tempMax.toFixed(1)}\u00B0`;
  sunRise.textContent = `${weather.sunrise}`;
  sunSet.textContent = `${weather.sunset}`;
};

export default renderWeather;
