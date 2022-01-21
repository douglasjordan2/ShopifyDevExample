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

/***/ "./src/js/bundles/ComponentConstructor.js":
/*!************************************************!*\
  !*** ./src/js/bundles/ComponentConstructor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ComponentConstructor(components) {\n    Object.entries(components).forEach(([selector, Component]) => {\n        const dataSelect = 'data-' + selector\n        const matchedElements = document.querySelectorAll('[' + dataSelect + ']')\n\n        matchedElements.forEach(element => {\n            const component = new Component(element, dataSelect)\n            component.init()\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentConstructor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9Db21wb25lbnRDb25zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWRldi1leGFtcGxlLy4vc3JjL2pzL2J1bmRsZXMvQ29tcG9uZW50Q29uc3RydWN0b3IuanM/OTY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDb21wb25lbnRDb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoY29tcG9uZW50cykuZm9yRWFjaCgoW3NlbGVjdG9yLCBDb21wb25lbnRdKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTZWxlY3QgPSAnZGF0YS0nICsgc2VsZWN0b3JcbiAgICAgICAgY29uc3QgbWF0Y2hlZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycgKyBkYXRhU2VsZWN0ICsgJ10nKVxuXG4gICAgICAgIG1hdGNoZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChlbGVtZW50LCBkYXRhU2VsZWN0KVxuICAgICAgICAgICAgY29tcG9uZW50LmluaXQoKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudENvbnN0cnVjdG9yIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/bundles/ComponentConstructor.js\n");

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
/******/ 	__webpack_modules__["./src/js/bundles/ComponentConstructor.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;