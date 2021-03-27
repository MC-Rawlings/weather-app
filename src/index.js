fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=cape%20town&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab',
  { mode: 'cors' },
).then((response) => response.json().then((response) => {
  console.log(response);
})