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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass _MutationObserver {\n    constructor(observeElem, cb, disconnect, options) {\n        this.observeElem = observeElem\n        this.disconnect = disconnect || false\n        this.cb = cb\n        this.options = options || {\n            subtree: true,\n            childList: true\n        }\n\n        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver\n    }\n\n    observe() {\n        const observer = new this.MutationObserver(() => {\n            this.cb()\n            if(this.disconnect) {\n                observer.disconnect()\n            }\n        })\n\n        observer.observe(this.observeElem, this.options)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MutationObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9fTXV0YXRpb25PYnNlcnZlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktd2VicGFjay10aGVtZS1kZXZlbG9wbWVudC8uL3NyYy9qcy9idW5kbGVzL19NdXRhdGlvbk9ic2VydmVyLmpzPzg1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgX011dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9ic2VydmVFbGVtLCBjYiwgZGlzY29ubmVjdCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9ic2VydmVFbGVtID0gb2JzZXJ2ZUVsZW1cbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ID0gZGlzY29ubmVjdCB8fCBmYWxzZVxuICAgICAgICB0aGlzLmNiID0gY2JcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7XG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLk11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAgIH1cblxuICAgIG9ic2VydmUoKSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IHRoaXMuTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNiKClcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzY29ubmVjdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGhpcy5vYnNlcnZlRWxlbSwgdGhpcy5vcHRpb25zKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX011dGF0aW9uT2JzZXJ2ZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/bundles/_MutationObserver.js\n");

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