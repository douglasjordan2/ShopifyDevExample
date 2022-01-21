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

/***/ "./src/js/bundles/helpers/ComponentConstructor.js":
/*!********************************************************!*\
  !*** ./src/js/bundles/helpers/ComponentConstructor.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ComponentConstructor(components) {\n    Object.entries(components).forEach(([selector, Component]) => {\n        const dataSelect = 'data-' + selector\n        const matchedElements = document.querySelectorAll('[' + dataSelect + ']')\n\n        matchedElements.forEach(element => {\n            new Component(element, dataSelect).init()\n        })\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentConstructor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9oZWxwZXJzL0NvbXBvbmVudENvbnN0cnVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWRldi1leGFtcGxlLy4vc3JjL2pzL2J1bmRsZXMvaGVscGVycy9Db21wb25lbnRDb25zdHJ1Y3Rvci5qcz9hZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENvbXBvbmVudENvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICBPYmplY3QuZW50cmllcyhjb21wb25lbnRzKS5mb3JFYWNoKChbc2VsZWN0b3IsIENvbXBvbmVudF0pID0+IHtcbiAgICAgICAgY29uc3QgZGF0YVNlbGVjdCA9ICdkYXRhLScgKyBzZWxlY3RvclxuICAgICAgICBjb25zdCBtYXRjaGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbJyArIGRhdGFTZWxlY3QgKyAnXScpXG5cbiAgICAgICAgbWF0Y2hlZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBuZXcgQ29tcG9uZW50KGVsZW1lbnQsIGRhdGFTZWxlY3QpLmluaXQoKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudENvbnN0cnVjdG9yIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/bundles/helpers/ComponentConstructor.js\n");

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
/******/ 	__webpack_modules__["./src/js/bundles/helpers/ComponentConstructor.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;