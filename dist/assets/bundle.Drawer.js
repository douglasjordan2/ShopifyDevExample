/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/bundles/components/Drawer.js":
/*!*********************************************!*\
  !*** ./src/js/bundles/components/Drawer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Drawer {\n    constructor(elem, selector) {\n        this.elem = elem\n        this.options = JSON.parse(elem.getAttribute(selector)) || {}\n\n        this.open = document.querySelector(this.options.open)\n        this.close = document.querySelector(this.options.close)\n    }\n\n    init() {\n        this.attachListeners()\n    }\n\n    attachListeners() {\n        this.open.addEventListener('click', () => {\n            this.elem.classList.add('active')\n        })\n\n        this.close.addEventListener('click', () => {\n            this.elem.classList.remove('active')\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9jb21wb25lbnRzL0RyYXdlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWRldi1leGFtcGxlLy4vc3JjL2pzL2J1bmRsZXMvY29tcG9uZW50cy9EcmF3ZXIuanM/N2YwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEcmF3ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IGVsZW1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShlbGVtLmdldEF0dHJpYnV0ZShzZWxlY3RvcikpIHx8IHt9XG5cbiAgICAgICAgdGhpcy5vcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMub3BlbilcbiAgICAgICAgdGhpcy5jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmNsb3NlKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/bundles/components/Drawer.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/bundles/components/Drawer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;