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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ComponentConstructor {\n    constructor(components) {\n        this.components = components\n    }\n\n    init() {\n        this.components.forEach(component => {\n            const dataSelect = 'data-' + component.selector\n            const matchedElements = document.querySelectorAll('[' + dataSelect + ']')\n        \n            matchedElements.forEach(element => {\n                const _component = new component.class(element, dataSelect)\n                _component.init()\n            })\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentConstructor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9Db21wb25lbnRDb25zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXdlYnBhY2stdGhlbWUtZGV2ZWxvcG1lbnQvLi9zcmMvanMvYnVuZGxlcy9Db21wb25lbnRDb25zdHJ1Y3Rvci5qcz85NjdmIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbXBvbmVudENvbnN0cnVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHNcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YVNlbGVjdCA9ICdkYXRhLScgKyBjb21wb25lbnQuc2VsZWN0b3JcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1snICsgZGF0YVNlbGVjdCArICddJylcbiAgICAgICAgXG4gICAgICAgICAgICBtYXRjaGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBfY29tcG9uZW50ID0gbmV3IGNvbXBvbmVudC5jbGFzcyhlbGVtZW50LCBkYXRhU2VsZWN0KVxuICAgICAgICAgICAgICAgIF9jb21wb25lbnQuaW5pdCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Q29uc3RydWN0b3IiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/bundles/ComponentConstructor.js\n");

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