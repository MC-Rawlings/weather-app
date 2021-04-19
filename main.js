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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nconst renderWeather = async (location = 'cape town') => {\n  const weather = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.default)(location);\n  const name = document.querySelector('.location__name');\n  const temp = document.querySelector('.weather-main__temp');\n  const feelsLike = document.querySelector('.weather-feels-like__value');\n  const description = document.querySelector('.weather-description__value');\n  const tempMin = document.querySelector('.weather-min__value');\n  const tempMax = document.querySelector('.weather-max__value');\n  const weatherIcon = document.querySelector('.weather-main__icon');\n  const sunRise = document.querySelector('.weather-sunrise__value');\n  const sunSet = document.querySelector('.weather-sunset__value');\n\n  console.log(weather.name);\n\n  name.textContent = `${weather.name}`;\n  weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;\n  temp.textContent = `${weather.temp.toFixed(1)}\\u00B0`;\n  feelsLike.textContent = `${weather.feelsLike.toFixed(1)}\\u00B0`;\n  description.textContent = `${weather.description}`;\n  tempMin.textContent = `${weather.tempMin.toFixed(1)}\\u00B0`;\n  tempMax.textContent = `${weather.tempMax.toFixed(1)}\\u00B0`;\n  sunRise.textContent = `${weather.sunrise}`;\n  sunSet.textContent = `${weather.sunset}`;\n};\n\n\n\nconst eventListeners = (() => {\n  const searchBtn = document.querySelector('.search-form__btn');\n\n  renderWeather();\n\n  searchBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    renderWeather(e.returnValue);\n  });\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"convertCtoF\": () => (/* binding */ convertCtoF),\n/* harmony export */   \"convertFtoC\": () => (/* binding */ convertFtoC)\n/* harmony export */ });\n// Utility functions\n\n/**\n * Converts celsius to farhenheith\n *\n * @param {number} temp temperature in celsius\n * @returns {number} temperature in farhenheit\n *\n * @example convertCtoF(12); // expected 53.6F\n */\nconst convertCtoF = (temp) => {\n  const fahrenheit = (temp * (9 / 5)) / 5 + 32;\n  return fahrenheit;\n};\n\n/**\n * Converts farhenheith to celsius\n *\n * @param {number} temp temperature in farhenheit\n * @returns {number} temperature in celsius\n *\n * @example convertftoC(35); // expected 1.67C\n */\nconst convertFtoC = (temp) => {\n  const celsiuis = (temp - 32) * (9 / 5);\n  return celsiuis;\n};\n\n/**\n * Dynamically fetches from an API and converts to JSON format.\n *\n * @param {string} url API request\n * @returns {JSON}} API response\n *\n * @example dofetch('https://api.openweathermap.org/data/2.5/weather?q=italy&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab'); // returns weather details in Italy\n *\n */\nconst doFetch = (url) =>\n  // eslint-disable-next-line implicit-arrow-linebreak\n  fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((json) => json);\n\nconst convertUnixToUtc = (unixTime) => {\n  const dateAndTime = new Date(unixTime * 1000);\n\n  return dateAndTime.toLocaleTimeString();\n};\n\n/**\n * Fetches JSON and converts to an object\n *\n * @param {string} location location's name\n * @returns {object} weather details\n *\n * @example getWeather('cape town'); // returns CPT's weather details\n */\n\nconst getWeather = async (location) => {\n  const json = await doFetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`,\n  );\n\n  json.dt = convertUnixToUtc(json.dt, json.timezone);\n  json.sys.sunrise = convertUnixToUtc(json.sys.sunrise, json.timezone);\n  json.sys.sunset = convertUnixToUtc(json.sys.sunset, json.timezone);\n\n  const weather = { ...json };\n  return weather;\n};\n\n/**\n * Grabs important weather information & processes it\n *\n * @returns {{\n * name: string,\n * temp: number,\n * feelsLike: number,\n * tempMin: number,\n * tempMax: number,\n * description: string,\n * icon: string,\n * dt: number,\n * sunrise: number,\n * sunset: number\n * }} weather details (processed)\n *\n */\nconst processedWeather = async (location) => {\n  const weather = await getWeather(location);\n  const {\n    temp,\n    feels_like: feelsLike,\n    temp_min: tempMin,\n    temp_max: tempMax,\n  } = weather.main;\n  const { description, icon } = weather.weather[0];\n  const { name, dt } = weather;\n  const { sunrise, sunset } = weather.sys;\n\n  return {\n    name,\n    temp,\n    feelsLike,\n    tempMin,\n    tempMax,\n    description,\n    icon,\n    dt,\n    sunrise,\n    sunset,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processedWeather);\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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