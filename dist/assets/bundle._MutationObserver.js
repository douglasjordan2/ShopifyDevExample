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

/***/ "./src/js/bundles/_MutationObserver.js":
/*!*********************************************!*\
  !*** ./src/js/bundles/_MutationObserver.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass _MutationObserver {\n    constructor(observeElem, cb, options) {\n        this.observeElem = observeElem\n        this.cb = cb\n        this.options = options || {\n            subtree: true,\n            childList: true\n        }\n\n        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver\n    }\n\n    observe() {\n        const observer = new this.MutationObserver(this.cb)\n        observer.observe(this.observeElem, this.options)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MutationObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9fTXV0YXRpb25PYnNlcnZlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXdlYnBhY2stdGhlbWUtZGV2ZWxvcG1lbnQvLi9zcmMvanMvYnVuZGxlcy9fTXV0YXRpb25PYnNlcnZlci5qcz84NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIF9NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihvYnNlcnZlRWxlbSwgY2IsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlRWxlbSA9IG9ic2VydmVFbGVtXG4gICAgICAgIHRoaXMuY2IgPSBjYlxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICAgfVxuXG4gICAgb2JzZXJ2ZSgpIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgdGhpcy5NdXRhdGlvbk9ic2VydmVyKHRoaXMuY2IpXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcy5vYnNlcnZlRWxlbSwgdGhpcy5vcHRpb25zKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX011dGF0aW9uT2JzZXJ2ZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/bundles/_MutationObserver.js\n");

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
/******/ 	__webpack_modules__["./src/js/bundles/_MutationObserver.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;