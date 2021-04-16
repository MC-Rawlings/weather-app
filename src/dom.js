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
  // const weatherIcon = document.querySelector('.left-content__icon');

  // console.log(weather, name, temp, feelsLike, description, weatherIcon);
  console.log(
    weather.name,
    weather.temp,
    weather.feelsLike,
    weather.description,
    weather.icon,
    weather.dt,
    weather.sunrise,
    weather.sunset,
  );
};

export default renderWeather;
