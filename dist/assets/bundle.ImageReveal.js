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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ImageReveal {\n    constructor(elem, selector) {\n        this.elem = elem\n\n        this.image = document.querySelector(elem.getAttribute(selector))\n    }\n\n    init() {\n        this.attachListeners()\n    }\n\n    attachListeners() {\n        this.elem.addEventListener('mouseenter', () => {\n            this.image.classList.add('reveal')\n        })\n\n        this.elem.addEventListener('mouseleave', () => {\n            this.image.classList.remove('reveal')\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageReveal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9jb21wb25lbnRzL0ltYWdlUmV2ZWFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS13ZWJwYWNrLXRoZW1lLWRldmVsb3BtZW50Ly4vc3JjL2pzL2J1bmRsZXMvY29tcG9uZW50cy9JbWFnZVJldmVhbC5qcz85ZmMyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEltYWdlUmV2ZWFsIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtLCBzZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmVsZW0gPSBlbGVtXG5cbiAgICAgICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbS5nZXRBdHRyaWJ1dGUoc2VsZWN0b3IpKVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKCdyZXZlYWwnKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdyZXZlYWwnKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VSZXZlYWwiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/bundles/components/ImageReveal.js\n");

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