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

/***/ "./src/js/bundles/components/ImageReveal.js":
/*!**************************************************!*\
  !*** ./src/js/bundles/components/ImageReveal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ImageReveal {\n    constructor(elem, selector) {\n        this.elem = elem\n\n        this.image = document.querySelector(elem.getAttribute(selector))\n    }\n\n    init() {\n        this.attachListeners()\n    }\n\n    attachListeners() {\n        this.elem.addEventListener('mouseenter', () => {\n            this.image.classList.add('reveal')\n        })\n\n        this.elem.addEventListener('mouseleave', () => {\n            this.image.classList.remove('reveal')\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageReveal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9jb21wb25lbnRzL0ltYWdlUmV2ZWFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1kZXYtZXhhbXBsZS8uL3NyYy9qcy9idW5kbGVzL2NvbXBvbmVudHMvSW1hZ2VSZXZlYWwuanM/OWZjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbWFnZVJldmVhbCB7XG4gICAgY29uc3RydWN0b3IoZWxlbSwgc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gZWxlbVxuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0uZ2V0QXR0cmlidXRlKHNlbGVjdG9yKSlcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LmFkZCgncmV2ZWFsJylcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgncmV2ZWFsJylcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlUmV2ZWFsIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/bundles/components/ImageReveal.js\n");

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
/******/ 	__webpack_modules__["./src/js/bundles/components/ImageReveal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;