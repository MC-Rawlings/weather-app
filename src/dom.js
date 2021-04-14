import processedWeather from './weather';

const renderWeather = async () => {
  const weather = await processedWeather();
  // const name = document.querySelector('.location');
  // const temp = document.querySelector('.left-content__temp');
  // const weatherMeasurement = document.querySelector('.weather-measurement');
  // const feelsLikeMeasurement = document.querySelector(
  //   '.feels-like__measurement',
  // );
  // const feelsLike = document.querySelector('.feels-like__temp');
  // const tempMin = document.querySelector('.weather-temp-min');
  // const tempMax = document.querySelector('.weather-temp-max');
  // const description = document.querySelector('.left-content__description');
  // const windSpeed = document.querySelector('.weather-wind-speed');
  // const windDirection = document.querySelector('.weather-wind-direction');
  // const weatherIcon = document.querySelector('.left-content__icon');

  // console.log(weather, name, temp, feelsLike, description, weatherIcon);
  // console.log(
  //   weather.name,
  //   weather.temp,
  //   weather.feelsLike,
  //   weather.description,
  //   weather.icon,
  // );
  // console.log(weatherMeasurement);
  // name.textContent = weather.name;
  // temp.textContent = `${weather.temp}`;
  // weatherMeasurement.textContent = 'C\u00B0';
  // feelsLikeMeasurement.textContent = 'C\u00B0';
  // feelsLike.textContent = weather.feelsLike;
  // tempMin.textContent = weather.tempMin;
  // tempMax.textContent = weather.tempMax;
  // description.textContent = weather.description;
  // windSpeed.textContent = weather.speed;
  // windDirection.textContent = weather.deg;
  // weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
};

export default renderWeather;
