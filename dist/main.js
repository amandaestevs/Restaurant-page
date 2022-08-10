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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ \"./src/modules/page.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\nloadContent()\r\n\r\nfunction loadContent(){\r\n    let currentTab = document.querySelector('.active');\r\n    if (currentTab.classList.contains('menu')) {\r\n      (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    } else if (currentTab.classList.contains('home')){\r\n        (0,_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    } else if (currentTab.classList.contains('contact')) {\r\n        (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    }\r\n}\r\n\r\nconst links = document.querySelectorAll('.link');\r\nlinks.forEach(link => {\r\n    link.addEventListener('click', () =>{\r\n        if (document.querySelectorAll('.active').length != 0) {\r\n            document.getElementsByClassName('active')[0].classList.remove('active');\r\n        }\r\n    link.classList.add('active');\r\n    loadContent()\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\r\n  const mainContainer = document.querySelector(\".main-content\");\r\n  mainContainer.innerHTML = \"\";\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n\r\n\r\nfunction createHome() {\r\n  const mainContainer = document.querySelector(\".main-content\");\r\n  mainContainer.innerHTML = \"\";\r\n\r\n  const homePage = document.createElement('div');\r\n  homePage.classList.add('home-page');\r\n  mainContainer.append(homePage)\r\n\r\n  createAbout()\r\n  createHours()\r\n  createButton()\r\n}\r\n\r\nfunction createAbout(){\r\n  const homePage = document.querySelector('.home-page');\r\n\r\n  const welcomeMessageContainer = document.createElement('div');\r\n  welcomeMessageContainer.classList.add('message-container');\r\n  homePage.append(welcomeMessageContainer)\r\n\r\n  const messageTitle = document.createElement('h2');\r\n  messageTitle.textContent = \"Welcome to Coffee Times\";\r\n  welcomeMessageContainer.append(messageTitle)\r\n\r\n  const messageParagraph = document.createElement('p');\r\n  messageParagraph.textContent = \"Come try the best coffee in the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"\r\n  welcomeMessageContainer.append(messageParagraph)\r\n\r\n  const homeImage = document.createElement('img');\r\n  homeImage.setAttribute('src', 'img/home-image.jpg');\r\n  homePage.append(homeImage)\r\n}\r\n\r\nfunction createHours(){\r\n  const homePage = document.querySelector('.home-page');\r\n\r\n  const hours= document.createElement('div');\r\n  hours.classList.add('hours');\r\n  homePage.append(hours);\r\n  \r\n  const hoursTitle = document.createElement('h2');\r\n  hoursTitle.textContent = \"Hours\";\r\n  hours.append(hoursTitle)\r\n\r\n  const hoursText = document.createElement('div');\r\n  hoursText.innerHTML = `<div class=\"time\"><div>Weekdays:</div><span>7AM-7PM</span></div><div class=\"time\"><div>Weekends:</div><span>10AM-6PM</span></div>`;\r\n  hours.append(hoursText)\r\n}\r\n\r\nfunction createButton() {\r\n  const homePage = document.querySelector('.home-page');\r\n  const buttonContainer = document.createElement('div');\r\n  buttonContainer.classList.add('home-button');\r\n  homePage.append(buttonContainer);\r\n\r\n  const buttonElement = document.createElement('button');\r\n  buttonElement.innerText = `Order Now`;\r\n  buttonContainer.append(buttonElement);\r\n  \r\n  buttonElement.addEventListener('click', ()=> {\r\n    document.querySelector('.home').classList.remove('active');\r\n    document.querySelector('.menu').classList.add('active');\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  })\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n  const mainContainer = document.querySelector(\".main-content\");\r\n  mainContainer.innerHTML = \"\";\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add('menu-container');\r\n  mainContainer.append(menuContainer);\r\n\r\n  populateMenu()\r\n}\r\n\r\nfunction populateMenu(){\r\n  const menu = document.querySelector('.menu-container');\r\n  const menuTitle = document.createElement('h2');\r\n  menuTitle.textContent = 'Menu';\r\n  menuTitle.classList.add('menu-title');\r\n  menu.append(menuTitle)\r\n\r\n  const coffeeTitle = document.createElement('h3');\r\n  coffeeTitle.classList.add('section-title');\r\n  coffeeTitle.textContent = \"Coffees\";\r\n  menu.append(coffeeTitle)\r\n\r\n  populateCoffeeSection()\r\n\r\n  const pastriesTitle = document.createElement('h3');\r\n  pastriesTitle.classList.add('section-title');\r\n  pastriesTitle.textContent = \"Pastries\";\r\n  menu.append(pastriesTitle)\r\n\r\n  populatePastriesSection()\r\n}\r\n\r\nfunction populateCoffeeSection(){\r\n   const menu = document.querySelector('.menu-container');\r\n   const sectionContainer = document.createElement('div');\r\n   sectionContainer.classList.add('section-container');\r\n   menu.append(sectionContainer)\r\n\r\n   coffees.forEach(coffee =>{\r\n    const itemContainer = document.createElement('div');\r\n    itemContainer.classList.add('item');\r\n\r\n    const name = coffee.name;\r\n    const price = coffee.price;\r\n    const img = coffee.img;\r\n\r\n    itemContainer.innerHTML = `<img src=\"${img}\">\r\n    <div class=\"item-name\">${name}</div>\r\n    <div class=\"item-price\">${price}</div>`\r\n\r\n    sectionContainer.append(itemContainer)\r\n   })\r\n}\r\n\r\nfunction populatePastriesSection(){\r\n  const menu = document.querySelector('.menu-container');\r\n  const sectionContainer = document.createElement('div');\r\n  sectionContainer.classList.add('section-container');\r\n  menu.append(sectionContainer)\r\n\r\n  food.forEach(pastry =>{\r\n    const itemContainer = document.createElement('div');\r\n    itemContainer.classList.add('item');\r\n\r\n    const name = pastry.name;\r\n    const price = pastry.price;\r\n    const img = pastry.img;\r\n\r\n    itemContainer.innerHTML = `<img src=\"${img}\">\r\n    <div class=\"item-name\">${name}</div>\r\n    <div class=\"item-price\">${price}</div>`\r\n\r\n    sectionContainer.append(itemContainer)\r\n   })\r\n}\r\n\r\nfunction itemFactory(name, price, img){\r\n  return{name, price, img}\r\n}\r\n\r\nconst food = []\r\nconst coffees = []\r\n\r\nconst latte = itemFactory('Latte', '$3.00', 'img/latte.jpg')\r\ncoffees.push(latte)\r\n\r\nconst icedLatte = itemFactory('Iced Latte', '$4.00', \"img/iced-latte.jpg\")\r\ncoffees.push(icedLatte)\r\n\r\nconst mocha = itemFactory('Mocha', '$4.00', 'img/mocha.jpg')\r\ncoffees.push(mocha)\r\n\r\nconst flatWhite = itemFactory('Flat White', '$4.00', 'img/flat-white.jpg')\r\ncoffees.push(flatWhite)\r\n\r\nconst croissant = itemFactory('Croissant', '$2.00', 'img/croissant.jpg')\r\nfood.push(croissant)\r\n\r\nconst pretzel = itemFactory('Pretzel', '$3.00', 'img/pretzel.jpg')\r\nfood.push(pretzel)\r\n\r\nconst donut = itemFactory('Donut', '$1.00', 'img/donut.jpg')\r\nfood.push(donut)\r\n\r\nconst macarons = itemFactory('Macarons', '$4.00', 'img/macarons.jpg')\r\nfood.push(macarons)\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\r\n  createHeader()\r\n  createMain()\r\n  createFooter()\r\n}\r\n\r\nconst container = document.getElementById('content');\r\n\r\nfunction createHeader(){\r\n  const headerElem = document.createElement('div');\r\n  headerElem.classList.add('header')\r\n  container.append(headerElem);\r\n  \r\n  const name = document.createElement('h1');\r\n  name.classList.add('name');\r\n  name.textContent = 'Coffee Times';\r\n  headerElem.append(name);\r\n\r\n  const nav = document.createElement('div');\r\n  nav.classList.add('nav');\r\n  nav.innerHTML = `<ul>\r\n  <li class=\"link home active\"><a href=\"#\">Home</a></li>\r\n  <li class=\"link menu\"><a class=\"menu\" href=\"#\">Menu</a></li>\r\n  <li class=\"link contact\"><a href=\"#\">Contact</a></li>\r\n  </ul>`;\r\n  headerElem.append(nav)\r\n}\r\n\r\nfunction createFooter(){\r\n   const footerElem = document.createElement('footer');\r\n   footerElem.innerHTML = '<div>Created by amandaestevs <a href=\"https://github.com/amandaestevs\" target=\"_blank\"><img src=\"img/github-brands.svg\"></a></div>';\r\n   container.append(footerElem);\r\n}\r\n\r\nfunction createMain(){\r\n  const mainContainer = document.createElement('div');\r\n  mainContainer.classList.add('main-content');\r\n  container.append(mainContainer);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page.js?");

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