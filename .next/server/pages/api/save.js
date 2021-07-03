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
exports.id = "pages/api/save";
exports.ids = ["pages/api/save"];
exports.modules = {

/***/ "./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(process.env.SHEET_DOC_ID);\n\nconst genCupom = () => {\n  const code = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();\n  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    await doc.useServiceAccountAuth({\n      client_email: process.env.SHEET_CLIENT_EMAIL,\n      private_key: process.env.SHEET_PRIVATE_KEY\n    });\n    await doc.loadInfo();\n    const sheet = doc.sheetsByIndex[1];\n    const data = JSON.parse(req.body); //console.log(data)\n\n    const sheetConfig = doc.sheetsByIndex[2];\n    await sheetConfig.loadCells('A3:B3');\n    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);\n    const textoCell = sheetConfig.getCell(2, 1);\n    let Cupom = '';\n    let Promo = '';\n\n    if (mostrarPromocaoCell.value === 'VERDADEIRO') {\n      Cupom = genCupom();\n      Promo = textoCell.value;\n    }\n\n    await sheet.addRow({\n      Nome: data.Nome,\n      Email: data.Email,\n      WhatsApp: data.WhatsApp,\n      Nota: parseInt(data.Nota),\n      'Data Preenchimento': moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm'),\n      Cupom,\n      Promo\n    });\n    res.end(JSON.stringify({\n      showCoupon: Cupom !== '',\n      Cupom,\n      Promo\n    }));\n  } catch (err) {\n    console.log(err);\n    res.end('error');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWxwaXRlYm94Ly4vcGFnZXMvYXBpL3NhdmUuanM/YWM1OCJdLCJuYW1lcyI6WyJkb2MiLCJHb29nbGVTcHJlYWRzaGVldCIsInByb2Nlc3MiLCJlbnYiLCJTSEVFVF9ET0NfSUQiLCJnZW5DdXBvbSIsImNvZGUiLCJwYXJzZUludCIsIm1vbWVudCIsImZvcm1hdCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJjbGllbnRfZW1haWwiLCJTSEVFVF9DTElFTlRfRU1BSUwiLCJwcml2YXRlX2tleSIsIlNIRUVUX1BSSVZBVEVfS0VZIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNoZWV0Q29uZmlnIiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJDdXBvbSIsIlByb21vIiwidmFsdWUiLCJhZGRSb3ciLCJOb21lIiwiRW1haWwiLCJXaGF0c0FwcCIsIk5vdGEiLCJlbmQiLCJzdHJpbmdpZnkiLCJzaG93Q291cG9uIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLGlFQUFKLENBQXNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBbEMsQ0FBWjs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNuQixRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsNkNBQU0sR0FBR0MsTUFBVCxDQUFnQixpQkFBaEIsQ0FBRCxDQUFSLENBQTZDQyxRQUE3QyxDQUFzRCxFQUF0RCxFQUEwREMsV0FBMUQsRUFBYjtBQUNBLFNBQU9MLElBQUksQ0FBQ00sTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLElBQW9CLEdBQXBCLEdBQTBCTixJQUFJLENBQUNNLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUExQixHQUE4QyxHQUE5QyxHQUFvRE4sSUFBSSxDQUFDTSxNQUFMLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBM0Q7QUFDSCxDQUhEOztBQUtBLCtEQUFlLE9BQU1DLEdBQU4sRUFBV0MsR0FBWCxLQUFtQjtBQUU5QixNQUFJO0FBQ0EsVUFBTWQsR0FBRyxDQUFDZSxxQkFBSixDQUEwQjtBQUM1QkMsa0JBQVksRUFBRWQsT0FBTyxDQUFDQyxHQUFSLENBQVljLGtCQURFO0FBRTVCQyxpQkFBVyxFQUFFaEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQjtBQUZHLEtBQTFCLENBQU47QUFJQSxVQUFNbkIsR0FBRyxDQUFDb0IsUUFBSixFQUFOO0FBQ0EsVUFBTUMsS0FBSyxHQUFHckIsR0FBRyxDQUFDc0IsYUFBSixDQUFrQixDQUFsQixDQUFkO0FBQ0EsVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osR0FBRyxDQUFDYSxJQUFmLENBQWIsQ0FQQSxDQVFBOztBQUVBLFVBQU1DLFdBQVcsR0FBRzNCLEdBQUcsQ0FBQ3NCLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBcEI7QUFDQSxVQUFNSyxXQUFXLENBQUNDLFNBQVosQ0FBc0IsT0FBdEIsQ0FBTjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHRixXQUFXLENBQUNHLE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUdKLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixDQUFwQixFQUFzQixDQUF0QixDQUFsQjtBQUVBLFFBQUlFLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsUUFBSUosbUJBQW1CLENBQUNLLEtBQXBCLEtBQThCLFlBQWxDLEVBQWdEO0FBQzVDRixXQUFLLEdBQUczQixRQUFRLEVBQWhCO0FBQ0E0QixXQUFLLEdBQUdGLFNBQVMsQ0FBQ0csS0FBbEI7QUFDSDs7QUFFRCxVQUFNYixLQUFLLENBQUNjLE1BQU4sQ0FBYTtBQUNmQyxVQUFJLEVBQUViLElBQUksQ0FBQ2EsSUFESTtBQUVmQyxXQUFLLEVBQUVkLElBQUksQ0FBQ2MsS0FGRztBQUdmQyxjQUFRLEVBQUVmLElBQUksQ0FBQ2UsUUFIQTtBQUlmQyxVQUFJLEVBQUVoQyxRQUFRLENBQUNnQixJQUFJLENBQUNnQixJQUFOLENBSkM7QUFLZiw0QkFBc0IvQiw2Q0FBTSxHQUFHQyxNQUFULENBQWdCLGtCQUFoQixDQUxQO0FBTWZ1QixXQU5lO0FBT2ZDO0FBUGUsS0FBYixDQUFOO0FBU0FuQixPQUFHLENBQUMwQixHQUFKLENBQVFoQixJQUFJLENBQUNpQixTQUFMLENBQWU7QUFDbkJDLGdCQUFVLEVBQUVWLEtBQUssS0FBSyxFQURIO0FBRW5CQSxXQUZtQjtBQUduQkM7QUFIbUIsS0FBZixDQUFSO0FBTUgsR0F0Q0QsQ0FzQ0MsT0FBTVUsR0FBTixFQUFXO0FBQ1JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0E3QixPQUFHLENBQUMwQixHQUFKLENBQVEsT0FBUjtBQUNIO0FBQ0osQ0E1Q0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2F2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0IH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0J1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldChwcm9jZXNzLmVudi5TSEVFVF9ET0NfSUQpXG5cbmNvbnN0IGdlbkN1cG9tID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvZGUgPSBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoJ1lZTU1EREhIbW1zc1NTUycpKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiBjb2RlLnN1YnN0cigwLCA0KSArICctJyArIGNvZGUuc3Vic3RyKDQsIDQpICsgJy0nICsgY29kZS5zdWJzdHIoOCwgNClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMocmVxLCByZXMpID0+IHtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoe1xuICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXG4gICAgICAgICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuU0hFRVRfUFJJVkFURV9LRVlcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgZG9jLmxvYWRJbmZvKClcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsxXVxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgIGNvbnN0IHNoZWV0Q29uZmlnID0gZG9jLnNoZWV0c0J5SW5kZXhbMl1cbiAgICAgICAgYXdhaXQgc2hlZXRDb25maWcubG9hZENlbGxzKCdBMzpCMycpXG4gICAgXG4gICAgICAgIGNvbnN0IG1vc3RyYXJQcm9tb2Nhb0NlbGwgPSBzaGVldENvbmZpZy5nZXRDZWxsKDIsIDApXG4gICAgICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0Q29uZmlnLmdldENlbGwoMiwxKVxuXG4gICAgICAgIGxldCBDdXBvbSA9ICcnXG4gICAgICAgIGxldCBQcm9tbyA9ICcnXG4gICAgICAgIGlmIChtb3N0cmFyUHJvbW9jYW9DZWxsLnZhbHVlID09PSAnVkVSREFERUlSTycpIHtcbiAgICAgICAgICAgIEN1cG9tID0gZ2VuQ3Vwb20gKClcbiAgICAgICAgICAgIFByb21vID0gdGV4dG9DZWxsLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBzaGVldC5hZGRSb3coe1xuICAgICAgICAgICAgTm9tZTogZGF0YS5Ob21lLFxuICAgICAgICAgICAgRW1haWw6IGRhdGEuRW1haWwsXG4gICAgICAgICAgICBXaGF0c0FwcDogZGF0YS5XaGF0c0FwcCxcbiAgICAgICAgICAgIE5vdGE6IHBhcnNlSW50KGRhdGEuTm90YSksXG4gICAgICAgICAgICAnRGF0YSBQcmVlbmNoaW1lbnRvJzogbW9tZW50KCkuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJyksXG4gICAgICAgICAgICBDdXBvbSxcbiAgICAgICAgICAgIFByb21vXG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2hvd0NvdXBvbjogQ3Vwb20gIT09ICcnLFxuICAgICAgICAgICAgQ3Vwb20sXG4gICAgICAgICAgICBQcm9tb1xuICAgICAgICB9KSlcblxuICAgIH1jYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZXMuZW5kKCdlcnJvcicpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/save.js\n");

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("google-spreadsheet");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/save.js"));
module.exports = __webpack_exports__;

})();