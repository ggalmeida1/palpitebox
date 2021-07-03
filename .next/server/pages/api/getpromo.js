/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/getpromo";
exports.ids = ["pages/api/getpromo"];
exports.modules = {

/***/ "./pages/api/getpromo.js":
/*!*******************************!*\
  !*** ./pages/api/getpromo.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(process.env.SHEET_DOC_ID);\n\nconst fromBase64 = value => {\n  const buff = Buffer.from(value, 'base64');\n  return buff.toString('ascii');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    await doc.useServiceAccountAuth({\n      client_email: process.env.SHEET_CLIENT_EMAIL,\n      private_key: process.env.SHEET_PRIVATE_KEY\n    });\n    await doc.loadInfo();\n    const sheet = doc.sheetsByIndex[2];\n    await sheet.loadCells('A3:B3');\n    const mostrarPromocaoCell = sheet.getCell(2, 0);\n    const textoCell = sheet.getCell(2, 1);\n    res.end(JSON.stringify({\n      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',\n      message: textoCell.value\n    }));\n  } catch (err) {\n    res.end(JSON.stringify({\n      showCoupon: false,\n      message: ''\n    }));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWxwaXRlYm94Ly4vcGFnZXMvYXBpL2dldHByb21vLmpzP2JmYTEiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJwcm9jZXNzIiwiZW52IiwiU0hFRVRfRE9DX0lEIiwiZnJvbUJhc2U2NCIsInZhbHVlIiwiYnVmZiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNsaWVudF9lbWFpbCIsIlNIRUVUX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiU0hFRVRfUFJJVkFURV9LRVkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImxvYWRDZWxscyIsIm1vc3RyYXJQcm9tb2Nhb0NlbGwiLCJnZXRDZWxsIiwidGV4dG9DZWxsIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dDb3Vwb24iLCJtZXNzYWdlIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyxJQUFJQyxpRUFBSixDQUFzQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQWxDLENBQVo7O0FBRUEsTUFBTUMsVUFBVSxHQUFHQyxLQUFLLElBQUk7QUFDeEIsUUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBWixFQUFtQixRQUFuQixDQUFiO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRyxRQUFMLENBQWMsT0FBZCxDQUFQO0FBQ0gsQ0FIRDs7QUFLQSwrREFBZSxPQUFNQyxHQUFOLEVBQVdDLEdBQVgsS0FBbUI7QUFDOUIsTUFBSTtBQUNBLFVBQU1aLEdBQUcsQ0FBQ2EscUJBQUosQ0FBMEI7QUFDNUJDLGtCQUFZLEVBQUVaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxrQkFERTtBQUU1QkMsaUJBQVcsRUFBRWQsT0FBTyxDQUFDQyxHQUFSLENBQVljO0FBRkcsS0FBMUIsQ0FBTjtBQUlBLFVBQU1qQixHQUFHLENBQUNrQixRQUFKLEVBQU47QUFFQSxVQUFNQyxLQUFLLEdBQUduQixHQUFHLENBQUNvQixhQUFKLENBQWtCLENBQWxCLENBQWQ7QUFDQSxVQUFNRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBTjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBQTVCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWdCLENBQWhCLENBQWxCO0FBRUFYLE9BQUcsQ0FBQ2EsR0FBSixDQUFRQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsZ0JBQVUsRUFBRU4sbUJBQW1CLENBQUNoQixLQUFwQixLQUE4QixZQUR2QjtBQUVuQnVCLGFBQU8sRUFBRUwsU0FBUyxDQUFDbEI7QUFGQSxLQUFmLENBQVI7QUFLSCxHQWxCRCxDQWtCQyxPQUFNd0IsR0FBTixFQUFVO0FBQ1BsQixPQUFHLENBQUNhLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGdCQUFVLEVBQUUsS0FETztBQUVuQkMsYUFBTyxFQUFFO0FBRlUsS0FBZixDQUFSO0FBSUg7QUFDSixDQXpCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9nZXRwcm9tby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0IH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0J1xuXG5jb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQocHJvY2Vzcy5lbnYuU0hFRVRfRE9DX0lEKVxuXG5jb25zdCBmcm9tQmFzZTY0ID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IGJ1ZmYgPSBCdWZmZXIuZnJvbSh2YWx1ZSwgJ2Jhc2U2NCcpXG4gICAgcmV0dXJuIGJ1ZmYudG9TdHJpbmcoJ2FzY2lpJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKHtcbiAgICAgICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuU0hFRVRfQ0xJRU5UX0VNQUlMLFxuICAgICAgICAgICAgcHJpdmF0ZV9rZXk6IHByb2Nlc3MuZW52LlNIRUVUX1BSSVZBVEVfS0VZXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpXG4gICAgXG4gICAgICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMl1cbiAgICAgICAgYXdhaXQgc2hlZXQubG9hZENlbGxzKCdBMzpCMycpXG4gICAgXG4gICAgICAgIGNvbnN0IG1vc3RyYXJQcm9tb2Nhb0NlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDApXG4gICAgICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwxKVxuXG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2hvd0NvdXBvbjogbW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gJ1ZFUkRBREVJUk8nLFxuICAgICAgICAgICAgbWVzc2FnZTogdGV4dG9DZWxsLnZhbHVlXG4gICAgICAgIH0pKVxuXG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2hvd0NvdXBvbjogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICB9KSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/getpromo.js\n");

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("google-spreadsheet");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/getpromo.js"));
module.exports = __webpack_exports__;

})();