webpackHotUpdate_N_E("pages/user/ordini",{

/***/ "./pages/user/ordini.js":
/*!******************************!*\
  !*** ./pages/user/ordini.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/ordini.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Ordini = function Ordini() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]),\n      getOrders = _useContext.getOrders;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      orders = _useState[0],\n      setOrders = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function getOrdersFromDB() {\n      return _getOrdersFromDB.apply(this, arguments);\n    }\n\n    function _getOrdersFromDB() {\n      _getOrdersFromDB = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var ordersFromDB;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getOrders();\n\n              case 2:\n                ordersFromDB = _context.sent;\n                setOrders(ordersFromDB);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getOrdersFromDB.apply(this, arguments);\n    }\n\n    getOrdersFromDB();\n  }, []);\n  console.log(orders, 'orders');\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 8\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }\n  }, \"Ordini\"), orders.map(function (order) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 23\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 20\n      }\n    }, order.totalPrice));\n  }));\n};\n\n_s(Ordini, \"hBVZckN2S+bIWPnUZA3qj+Kx4z4=\");\n\n_c = Ordini;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ordini);\n\nvar _c;\n\n$RefreshReg$(_c, \"Ordini\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9vcmRpbmkuanM/MmRmYSJdLCJuYW1lcyI6WyJPcmRpbmkiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJnZXRPcmRlcnMiLCJ1c2VTdGF0ZSIsIm9yZGVycyIsInNldE9yZGVycyIsInVzZUVmZmVjdCIsImdldE9yZGVyc0Zyb21EQiIsIm9yZGVyc0Zyb21EQiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJvcmRlciIsInRvdGFsUHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNDQyx3REFBVSxDQUFDQyxpRUFBRCxDQURYO0FBQUEsTUFDYkMsU0FEYSxlQUNiQSxTQURhOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWRDLE1BRmM7QUFBQSxNQUVOQyxTQUZNOztBQUtyQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsZUFESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUM4QkwsU0FBUyxFQUR2Qzs7QUFBQTtBQUNTTSw0QkFEVDtBQUVHSCx5QkFBUyxDQUFDRyxZQUFELENBQVQ7O0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBS1pELG1CQUFlO0FBQ2xCLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlOLE1BQVosRUFBb0IsUUFBcEI7QUFFRyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFFS0EsTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQUMsS0FBSyxFQUFJO0FBQ2pCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUEsS0FBSyxDQUFDQyxVQUFWLENBRkcsQ0FBUDtBQUlILEdBTEEsQ0FGTCxDQURKO0FBV0YsQ0ExQkQ7O0dBQU1kLE07O0tBQUFBLE07QUE0QlNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9vcmRpbmkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dCdcblxuY29uc3QgT3JkaW5pID0gKCkgPT4ge1xuY29uc3QgeyBnZXRPcmRlcnMgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5jb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pXG5cblxudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPcmRlcnNGcm9tREIoKXtcbiAgICAgICBjb25zdCBvcmRlcnNGcm9tREIgPSBhd2FpdCBnZXRPcmRlcnMoKVxuICAgICAgIHNldE9yZGVycyhvcmRlcnNGcm9tREIpXG4gICAgfVxuICAgIGdldE9yZGVyc0Zyb21EQigpXG59LCBbXSlcblxuY29uc29sZS5sb2cob3JkZXJzLCAnb3JkZXJzJylcblxuICAgcmV0dXJuKFxuICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxoMT5PcmRpbmk8L2gxPlxuICAgICAgICAgICB7b3JkZXJzLm1hcChvcmRlciA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIudG90YWxQcmljZX08L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgfSl9XG4gICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGluaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/ordini.js\n");

/***/ })

})