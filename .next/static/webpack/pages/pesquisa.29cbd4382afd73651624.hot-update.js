/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pesquisa",{

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_gabriel_palpitebox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gabriel_palpitebox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_gabriel_palpitebox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_gabriel_palpitebox_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/gabriel/palpitebox/pages/pesquisa.js\",\n    _this = undefined;\n\n\n\n\nvar Pesquisa = function Pesquisa() {\n  var save = /*#__PURE__*/function () {\n    var _ref = (0,_Users_gabriel_palpitebox_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_gabriel_palpitebox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var form, response, data;\n      return _Users_gabriel_palpitebox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              form = {\n                Nome: 'aaa',\n                Email: 'bbb',\n                Whatsapp: 'cccc'\n              };\n              _context.next = 3;\n              return fetch('/api/save', {\n                method: 'POST',\n                body: JSON.stringify(form)\n              });\n\n            case 3:\n              response = _context.sent;\n              data = response.json();\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function save() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"pt-6\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-center font-bold my-4 text-2xl\",\n      children: \" Cr\\xEDticas e sugest\\xF5es \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"text-center mb-6\",\n      children: [\"O restaurante x sempre busca por atender melhor seus clientes. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 104\n      }, _this), \"Por isso, estamos sempre abertos a ouvir a sua opini\\xE3o \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"w-1/5 mx-auto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        className: \"font-bold\",\n        children: \"Seu nome: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        className: \"p-4 block shadow bg-blue-100 my-2 rounded\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-6\",\n        onClick: save,\n        children: \" Salvar \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Pesquisa;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pesquisa);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pesquisa\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVzcXVpc2EuanM/YzUxNSJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInNhdmUiLCJmb3JtIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLE1BQU1DLElBQUk7QUFBQSxxUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMsa0JBREcsR0FDSTtBQUNUQyxvQkFBSSxFQUFFLEtBREc7QUFFVEMscUJBQUssRUFBRSxLQUZFO0FBR1RDLHdCQUFRLEVBQUU7QUFIRCxlQURKO0FBQUE7QUFBQSxxQkFNY0MsS0FBSyxDQUFDLFdBQUQsRUFBYztBQUN0Q0Msc0JBQU0sRUFBRSxNQUQ4QjtBQUV0Q0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLElBQWY7QUFGZ0MsZUFBZCxDQU5uQjs7QUFBQTtBQU1IUyxzQkFORztBQVVIQyxrQkFWRyxHQVVJRCxRQUFRLENBQUNFLElBQVQsRUFWSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFKWixJQUFJO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBWUEsc0JBQ0E7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFHLGVBQVMsRUFBQyxrQkFBYjtBQUFBLGlHQUErRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBSUk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNJO0FBQU8saUJBQVMsRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQVEsaUJBQVMsRUFBQyx5RUFBbEI7QUFBNEYsZUFBTyxFQUFFQSxJQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBWUgsQ0F6QkQ7O0tBQU1ELFE7QUEyQk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9wZXNxdWlzYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgUGVzcXVpc2EgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHtcbiAgICAgICAgICAgIE5vbWU6ICdhYWEnLFxuICAgICAgICAgICAgRW1haWw6ICdiYmInLFxuICAgICAgICAgICAgV2hhdHNhcHA6ICdjY2NjJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2F2ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdC02Jz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgZm9udC1ib2xkIG15LTQgdGV4dC0yeGwnPiBDcsOtdGljYXMgZSBzdWdlc3TDtWVzIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNic+TyByZXN0YXVyYW50ZSB4IHNlbXByZSBidXNjYSBwb3IgYXRlbmRlciBtZWxob3Igc2V1cyBjbGllbnRlcy4gPGJyIC8+XG4gICAgICAgICAgICBQb3IgaXNzbywgZXN0YW1vcyBzZW1wcmUgYWJlcnRvcyBhIG91dmlyIGEgc3VhIG9waW5pw6NvIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMS81IG14LWF1dG8nPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5TZXUgbm9tZTogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbXktMiByb3VuZGVkJy8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAgcHgtMTIgcHktNCBmb250LWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6c2hhZG93IG1iLTYnIG9uQ2xpY2s9e3NhdmV9PiBTYWx2YXIgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVzcXVpc2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pesquisa.js\n");

/***/ })

});