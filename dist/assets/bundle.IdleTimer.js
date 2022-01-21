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

/***/ "./src/js/bundles/helpers/IdleTimer.js":
/*!*********************************************!*\
  !*** ./src/js/bundles/helpers/IdleTimer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass IdleTimer {\n    constructor(cb, interval) {\n        this.idleTimer = null\n        this.timer(cb, interval)\n    }\n\n    timer(cb, interval=500) {\n        clearTimeout(this.idleTimer)\n        this.idleTimer = setTimeout(cb, interval)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IdleTimer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9oZWxwZXJzL0lkbGVUaW1lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWRldi1leGFtcGxlLy4vc3JjL2pzL2J1bmRsZXMvaGVscGVycy9JZGxlVGltZXIuanM/M2MyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJZGxlVGltZXIge1xuICAgIGNvbnN0cnVjdG9yKGNiLCBpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLmlkbGVUaW1lciA9IG51bGxcbiAgICAgICAgdGhpcy50aW1lcihjYiwgaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgdGltZXIoY2IsIGludGVydmFsPTUwMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZGxlVGltZXIpXG4gICAgICAgIHRoaXMuaWRsZVRpbWVyID0gc2V0VGltZW91dChjYiwgaW50ZXJ2YWwpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJZGxlVGltZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/bundles/helpers/IdleTimer.js\n");

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
/******/ 	__webpack_modules__["./src/js/bundles/helpers/IdleTimer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;