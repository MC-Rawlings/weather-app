/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nconst renderWeather = async () => {\n  const weather = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.default)();\n  // const name = document.querySelector('.location');\n  // const temp = document.querySelector('.left-content__temp');\n  // const weatherMeasurement = document.querySelector('.weather-measurement');\n  // const feelsLikeMeasurement = document.querySelector(\n  //   '.feels-like__measurement',\n  // );\n  // const feelsLike = document.querySelector('.feels-like__temp');\n  // const tempMin = document.querySelector('.weather-temp-min');\n  // const tempMax = document.querySelector('.weather-temp-max');\n  // const description = document.querySelector('.left-content__description');\n  // const windSpeed = document.querySelector('.weather-wind-speed');\n  // const windDirection = document.querySelector('.weather-wind-direction');\n  // const weatherIcon = document.querySelector('.left-content__icon');\n\n  // console.log(weather, name, temp, feelsLike, description, weatherIcon);\n  console.log(\n    weather.name,\n    weather.temp,\n    weather.feelsLike,\n    weather.description,\n    weather.icon,\n    weather.speed,\n    weather.deg,\n    weather.dt,\n    weather.sunrise,\n    weather.sunset,\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Dynamically fetches from an API and converts to JSON format.\n *\n * @param {string} url API request\n * @returns {JSON}} API response\n *\n * @example dofetch('https://api.openweathermap.org/data/2.5/weather?q=italy&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab'); // returns weather details in Italy\n *\n */\nconst doFetch = (url) =>\n  // eslint-disable-next-line implicit-arrow-linebreak\n  fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((json) => json);\n\nconst convertUnixToUtc = (unixTime, timezone) => {\n  const dateAndTime = new Date((unixTime + timezone) * 1000);\n\n  return dateAndTime;\n};\n\n/**\n * Fetches JSON and converts to an object\n *\n * @param {string} location location's name\n * @returns {object} weather details\n *\n * @example getWeather('cape town'); // returns CPT's weather details\n */\nconst getWeather = async (location = 'london') => {\n  const json = await doFetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`,\n  );\n\n  json.dt = convertUnixToUtc(json.dt, json.timezone).toLocaleString();\n  json.sys.sunrise = convertUnixToUtc(\n    json.sys.sunrise,\n    json.timezone,\n  ).toUTCString();\n  json.sys.sunset = convertUnixToUtc(\n    json.sys.sunset,\n    json.timezone,\n  ).toUTCString();\n  console.log(json.dt);\n  console.log(json.sys.sunrise);\n  console.log(json.sys.sunset);\n\n  const weather = { ...json };\n  return weather;\n};\n\n/**\n * Grabs important weather information & processes it\n *\n * @returns {{\n * name: string,\n * temp: number,\n * feelsLike: number,\n * tempMin: number,\n * tempMax: number,\n * description: string,\n * icon: string,\n * speed: number,\n * deg: number,\n * dt: number,\n * sunrise: number,\n * sunset: number\n * }} weather details (processed)\n *\n */\nconst processedWeather = async () => {\n  const weather = await getWeather();\n  const {\n    temp,\n    feels_like: feelsLike,\n    temp_min: tempMin,\n    temp_max: tempMax,\n  } = weather.main;\n  const { description, icon } = weather.weather[0];\n  const { speed, deg } = weather.wind;\n  const { name, dt } = weather;\n  const { sunrise, sunset } = weather.sys;\n\n  return {\n    name,\n    temp,\n    feelsLike,\n    tempMin,\n    tempMax,\n    description,\n    icon,\n    speed,\n    deg,\n    dt,\n    sunrise,\n    sunset,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processedWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;