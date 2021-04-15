const fetchWeather = (url) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((json) => json);

const getWeather = async () => {
  const json = await fetchWeather(
    'https://api.openweathermap.org/data/2.5/weather?q=italy&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab',
  );

  const weather = { ...json };
  return weather;
};

const processedWeather = async () => {
  const weather = await getWeather();
  const {
    temp,
    feels_like: feelsLike,
    temp_min: tempMin,
    temp_max: tempMax,
  } = weather.main;
  const { description, icon } = weather.weather[0];
  const { speed, deg } = weather.wind;
  const { name, dt } = weather;
  const { sunrise, sunset } = weather.sys;

  return {
    name,
    temp,
    feelsLike,
    tempMin,
    tempMax,
    description,
    icon,
    speed,
    deg,
    dt,
    sunrise,
    sunset,
  };
};

export default processedWeather;
