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

/***/ "./src/js/bundles/helpers/MutationObserver.js":
/*!****************************************************!*\
  !*** ./src/js/bundles/helpers/MutationObserver.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MutationObserver {\n    constructor(observeElem, cb, disconnect, options) {\n        this.observeElem = observeElem\n        this.cb = cb\n        this.disconnect = disconnect || false\n        this.options = options || {\n            subtree: true,\n            childList: true\n        }\n\n        this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver\n        this.init()\n    }\n\n    init() {\n        this.observer = new this.MutationObserver(async () => {\n            await this.cb()\n\n            if(this.disconnect) {\n                this.stop()\n            }\n        })\n\n        this.observe()\n    }\n\n    observe() {\n        this.observer.observe(this.observeElem, this.options)\n    }\n\n    stop() {\n        this.observer.disconnect()\n    }\n\n    reload() {\n        this.stop()\n        this.observe()\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutationObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy9oZWxwZXJzL011dGF0aW9uT2JzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWRldi1leGFtcGxlLy4vc3JjL2pzL2J1bmRsZXMvaGVscGVycy9NdXRhdGlvbk9ic2VydmVyLmpzP2JhODEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3Iob2JzZXJ2ZUVsZW0sIGNiLCBkaXNjb25uZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZUVsZW0gPSBvYnNlcnZlRWxlbVxuICAgICAgICB0aGlzLmNiID0gY2JcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ID0gZGlzY29ubmVjdCB8fCBmYWxzZVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHtcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyB0aGlzLk11dGF0aW9uT2JzZXJ2ZXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jYigpXG5cbiAgICAgICAgICAgIGlmKHRoaXMuZGlzY29ubmVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5vYnNlcnZlKClcbiAgICB9XG5cbiAgICBvYnNlcnZlKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5vYnNlcnZlRWxlbSwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfVxuXG4gICAgcmVsb2FkKCkge1xuICAgICAgICB0aGlzLnN0b3AoKVxuICAgICAgICB0aGlzLm9ic2VydmUoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXV0YXRpb25PYnNlcnZlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/bundles/helpers/MutationObserver.js\n");

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
/******/ 	__webpack_modules__["./src/js/bundles/helpers/MutationObserver.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;