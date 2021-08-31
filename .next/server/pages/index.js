module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_home_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/home.style */ \"./styles/home.style.js\");\n\nvar _jsxFileName = \"/home/felipe-a-ribeiro/Desktop/projeto-manu/projet-marvel/pages/index.jsx\";\n\n\n // import styles from '../styles/Home.module.css'\n\nfunction Home() {\n  const {\n    0: nameHero,\n    1: setNameHero\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n\n  async function updateInput(e) {\n    setNameHero(e.target.value);\n    await resultBusca();\n  }\n\n  function resultBusca() {\n    window.location.href = `/heroes?name=${nameHero}`;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_home_style__WEBPACK_IMPORTED_MODULE_3__[\"DivGeneral\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Marvel\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/captain-america.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: \"logo-mobile\",\n        src: \"/marvel_mobile.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_home_style__WEBPACK_IMPORTED_MODULE_3__[\"SearchHero\"], {\n      className: \"buscaHerois\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_home_style__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n        type: \"text\",\n        name: \"NameHero\",\n        placeholder: \"Name's heros\",\n        onChange: e => {\n          setNameHero(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_home_style__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        onClick: event => {\n          event.preventDefault();\n          resultBusca();\n        },\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lIiwibmFtZUhlcm8iLCJzZXROYW1lSGVybyIsInVzZVN0YXRlIiwidXBkYXRlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXN1bHRCdXNjYSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxFQUF4Qzs7QUFFQSxpQkFBZUMsV0FBZixDQUEyQkMsQ0FBM0IsRUFBOEI7QUFDNUJILGVBQVcsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNBLFVBQU1DLFdBQVcsRUFBakI7QUFDRDs7QUFJRCxXQUFTQSxXQUFULEdBQXVCO0FBQ3JCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXdCLGdCQUFlVixRQUFTLEVBQWhEO0FBRUQ7O0FBRUQsc0JBRUUscUVBQUMsNkRBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLFdBQUcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBU0UscUVBQUMsNkRBQUQ7QUFBYyxlQUFTLEVBQUMsYUFBeEI7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUFTLFlBQUksRUFBQyxNQUFkO0FBQXFCLFlBQUksRUFBQyxVQUExQjtBQUFxQyxtQkFBVyxFQUFDLGNBQWpEO0FBQWdFLGdCQUFRLEVBQUdJLENBQUQsSUFBTztBQUMvRUgscUJBQVcsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNEO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMseURBQUQ7QUFBVSxlQUFPLEVBQUdLLEtBQUQsSUFBVztBQUM1QkEsZUFBSyxDQUFDQyxjQUFOO0FBQ0FMLHFCQUFXO0FBQ1osU0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBc0JEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4uL3N0eWxlcy9ob21lLnN0eWxlJ1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmFtZUhlcm8sIHNldE5hbWVIZXJvXSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5wdXQoZSkge1xuICAgIHNldE5hbWVIZXJvKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBhd2FpdCByZXN1bHRCdXNjYSgpO1xuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHJlc3VsdEJ1c2NhKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9oZXJvZXM/bmFtZT0ke25hbWVIZXJvfWA7XG5cbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8Uy5EaXZHZW5lcmFsPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYXJ2ZWw8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9jYXB0YWluLWFtZXJpY2EucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLW1vYmlsZVwiIHNyYz1cIi9tYXJ2ZWxfbW9iaWxlLmpwZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTLlNlYXJjaEhlcm8gY2xhc3NOYW1lPVwiYnVzY2FIZXJvaXNcIj5cbiAgICAgICAgPFMuSW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiTmFtZUhlcm9cIiBwbGFjZWhvbGRlcj1cIk5hbWUncyBoZXJvc1wiIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldE5hbWVIZXJvKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX0gLz5cbiAgICAgICAgPFMuQnV0dG9uIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmVzdWx0QnVzY2EoKTtcbiAgICAgICAgfX0+U2VhcmNoPC9TLkJ1dHRvbj5cbiAgICAgIDwvUy5TZWFyY2hIZXJvPlxuICAgIDwvUy5EaXZHZW5lcmFsPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./styles/home.style.js":
/*!******************************!*\
  !*** ./styles/home.style.js ***!
  \******************************/
/*! exports provided: DivGeneral, SearchHero, Input, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivGeneral\", function() { return DivGeneral; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchHero\", function() { return SearchHero; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DivGeneral = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"homestyle__DivGeneral\",\n  componentId: \"sc-1o96tk9-0\"\n})([\"min-height:100vh;padding:0 0.5rem;display:flex;flex-direction:column;justify-content:top;align-items:center;\"]);\nconst SearchHero = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"homestyle__SearchHero\",\n  componentId: \"sc-1o96tk9-1\"\n})([\"margin-top:7%;display:flex;flex-direction:column;align-items:center;justify-content:center;width:50%;height:60px;\"]);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({\n  displayName: \"homestyle__Input\",\n  componentId: \"sc-1o96tk9-2\"\n})([\"width:39%;height:40px;border:1px solid #000;border-radius:5px;\"]);\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"homestyle__Button\",\n  componentId: \"sc-1o96tk9-3\"\n})([\"background:#000;width:40%;height:40px;margin-top:5px;border:2px solid #FFF;border-radius:5px;text-decoration:none;color:red;font-weight:bold;cursor:pointer;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZS5zdHlsZS5qcz82YTU1Il0sIm5hbWVzIjpbIkRpdkdlbmVyYWwiLCJzdHlsZWQiLCJkaXYiLCJTZWFyY2hIZXJvIiwiSW5wdXQiLCJpbnB1dCIsIkJ1dHRvbiIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFVBQVUsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSEFBaEI7QUFTQSxNQUFNQyxVQUFVLEdBQUdGLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUhBQWhCO0FBVUEsTUFBTUUsS0FBSyxHQUFHSCx3REFBTSxDQUFDSSxLQUFWO0FBQUE7QUFBQTtBQUFBLHNFQUFYO0FBT0EsTUFBTUMsTUFBTSxHQUFHTCx3REFBTSxDQUFDTSxNQUFWO0FBQUE7QUFBQTtBQUFBLG9LQUFaIiwiZmlsZSI6Ii4vc3R5bGVzL2hvbWUuc3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgRGl2R2VuZXJhbCA9IHN0eWxlZC5kaXZgXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoSGVybyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogNyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgd2lkdGg6IDM5JTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/home.style.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });