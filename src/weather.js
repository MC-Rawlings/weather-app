const fetchWeather = (url) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((json) => json);

export default fetchWeather;
