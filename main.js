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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nconst renderWeather = () => {\n  const form = document.querySelector('.search-form');\n  // const weatherName = document.querySelector('.weather-name');\n  const weatherTemp = document.querySelector('.weather-temp');\n  const weatherFeelsLike = document.querySelector('.weather-feels-like');\n  const weatherDescription = document.querySelector('.weather-description');\n  const weatherTempMin = document.querySelector('.weather-temp-min');\n  const weatherTempMax = document.querySelector('.weather-temp-max');\n  const weatherIcon = document.querySelector('.weather-icon');\n\n  const location = form.elements[0].value;\n\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherTemp)(location).then((temp) => {\n    weatherTemp.textContent = `Temperature: ${temp}`;\n  });\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherFeelsLike)(location).then((temp) => {\n    weatherFeelsLike.textContent = `Feels Like: ${temp}`;\n  });\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherMin)(location).then((temp) => {\n    weatherTempMin.textContent = `Min Temp: ${temp}`;\n  });\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherMax)(location).then((temp) => {\n    weatherTempMax.textContent = `Max Temp: ${temp}`;\n  });\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherDescription)(location).then((description) => {\n    weatherDescription.textContent = description;\n  });\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherIconKey)(location).then((key) => {\n    weatherIcon.src = `http://openweathermap.org/img/wn/${key}@2x.png`;\n  });\n};\n\nconst eventHandlers = (() => {\n  const searchBtn = document.querySelector('#search');\n\n  searchBtn.addEventListener('click', renderWeather);\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventHandlers);\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherTemp\": () => (/* binding */ getWeatherTemp),\n/* harmony export */   \"getWeatherFeelsLike\": () => (/* binding */ getWeatherFeelsLike),\n/* harmony export */   \"getWeatherDescription\": () => (/* binding */ getWeatherDescription),\n/* harmony export */   \"getWeatherMin\": () => (/* binding */ getWeatherMin),\n/* harmony export */   \"getWeatherMax\": () => (/* binding */ getWeatherMax),\n/* harmony export */   \"getWeatherIconKey\": () => (/* binding */ getWeatherIconKey)\n/* harmony export */ });\n/**\n *\n * @param {string} location - location searched by user\n * @returns {void} - calls renderWeather() with relevant location\n */\nconst getWeatherTemp = (location) => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;\n\n  return fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => response.main.temp)\n    .catch((error) => {\n      console.log(`Location not found: ${error}`);\n    });\n};\n\nconst getWeatherFeelsLike = (location) => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;\n\n  return fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => response.main.feels_like)\n    .catch((error) => {\n      console.log(`Location not found: ${error}`);\n    });\n};\n\nconst getWeatherDescription = (location) => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;\n\n  return fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => response.weather[0].main)\n    .catch((error) => {\n      console.log(`Location not found: ${error}`);\n    });\n};\n\nconst getWeatherMin = (location) => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;\n\n  return fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => response.main.temp_min)\n    .catch((error) => {\n      console.log(`Location not found: ${error}`);\n    });\n};\n\nconst getWeatherMax = (location) => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;\n\n  return fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => response.main.temp_max)\n    .catch((error) => {\n      console.log(`Location not found: ${error}`);\n    });\n};\n\nconst getWeatherIconKey = (location) => {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=490f24bcbc3a2ee5cb3e70d10b15bfab`;\n\n  return fetch(url, { mode: 'cors' })\n    .then((response) => response.json())\n    .then((response) => response.weather[0].icon)\n    .catch((error) => {\n      console.log(`Location not found: ${error}`);\n    });\n};\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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