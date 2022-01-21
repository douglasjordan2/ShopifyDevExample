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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass _MutationObserver {\n    constructor(observeElem, cb, disconnect, options) {\n        this.observeElem = observeElem\n        this.disconnect = disconnect || false\n        this.cb = cb\n        this.options = options || {\n            subtree: true,\n            childList: true\n        }\n\n        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver\n    }\n\n    observe() {\n        const observer = new this.MutationObserver(() => {\n            this.cb()\n            if(this.disconnect) {\n                observer.disconnect()\n            }\n        })\n\n        observer.observe(this.observeElem, this.options)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MutationObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9fTXV0YXRpb25PYnNlcnZlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktZGV2LWV4YW1wbGUvLi9zcmMvanMvYnVuZGxlcy9fTXV0YXRpb25PYnNlcnZlci5qcz84NTBmIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIF9NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihvYnNlcnZlRWxlbSwgY2IsIGRpc2Nvbm5lY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlRWxlbSA9IG9ic2VydmVFbGVtXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCA9IGRpc2Nvbm5lY3QgfHwgZmFsc2VcbiAgICAgICAgdGhpcy5jYiA9IGNiXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5NdXRhdGlvbk9ic2VydmVyID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgICB9XG5cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyB0aGlzLk11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYigpXG4gICAgICAgICAgICBpZih0aGlzLmRpc2Nvbm5lY3QpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMub2JzZXJ2ZUVsZW0sIHRoaXMub3B0aW9ucylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9NdXRhdGlvbk9ic2VydmVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/bundles/_MutationObserver.js\n");

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