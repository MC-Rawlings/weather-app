const fetchWeather = (url) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((json) => json);

const getWeather = async () => {
  const json = await fetchWeather(
    'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab',
  );

  const weather = { ...json };
  return weather;
};

export default getWeather;
