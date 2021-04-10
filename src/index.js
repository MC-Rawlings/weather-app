import fetchWeather from './weather';

const getTemp = async () => {
  const weather = await fetchWeather(
    'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab',
  );
  const { temp, temp_min, temp_max } = weather.main;
  console.log(temp, temp_min, temp_max);
};

getTemp();
