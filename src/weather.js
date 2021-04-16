// Utility functions

/**
 * Converts celsius to farhenheith
 *
 * @param {number} temp temperature in celsius
 * @returns {number} temperature in farhenheit
 *
 * @example convertCtoF(12); // expected 53.6F
 */
const convertCtoF = (temp) => {
  const fahrenheit = (temp * (9 / 5)) / 5 + 32;
  return fahrenheit;
};

/**
 * Converts farhenheith to celsius
 *
 * @param {number} temp temperature in farhenheit
 * @returns {number} temperature in celsius
 *
 * @example convertftoC(35); // expected 1.67C
 */
const convertFtoC = (temp) => {
  const celsiuis = (temp - 32) * (9 / 5);
  return celsiuis;
};

/**
 * Dynamically fetches from an API and converts to JSON format.
 *
 * @param {string} url API request
 * @returns {JSON}} API response
 *
 * @example dofetch('https://api.openweathermap.org/data/2.5/weather?q=italy&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab'); // returns weather details in Italy
 *
 */
const doFetch = (url) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fetch(url, { mode: 'cors' })
    .then((response) => response.json())
    .then((json) => json);

const convertUnixToUtc = (unixTime, timezone) => {
  const dateAndTime = new Date((unixTime + timezone) * 1000);

  return dateAndTime.toUTCString();
};

/**
 * Fetches JSON and converts to an object
 *
 * @param {string} location location's name
 * @returns {object} weather details
 *
 * @example getWeather('cape town'); // returns CPT's weather details
 */

const getWeather = async (location = 'cape town') => {
  const json = await doFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`,
  );

  json.dt = convertUnixToUtc(json.dt, json.timezone);
  json.sys.sunrise = convertUnixToUtc(json.sys.sunrise, json.timezone);
  json.sys.sunset = convertUnixToUtc(json.sys.sunset, json.timezone);

  const weather = { ...json };
  return weather;
};

/**
 * Grabs important weather information & processes it
 *
 * @returns {{
 * name: string,
 * temp: number,
 * feelsLike: number,
 * tempMin: number,
 * tempMax: number,
 * description: string,
 * icon: string,
 * dt: number,
 * sunrise: number,
 * sunset: number
 * }} weather details (processed)
 *
 */
const processedWeather = async () => {
  const weather = await getWeather();
  const {
    temp,
    feels_like: feelsLike,
    temp_min: tempMin,
    temp_max: tempMax,
  } = weather.main;
  const { description, icon } = weather.weather[0];
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
    dt,
    sunrise,
    sunset,
  };
};

export default processedWeather;
export { convertCtoF, convertFtoC };
