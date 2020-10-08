webpackHotUpdate_N_E("pages/carrello",{

/***/ "./pages/carrello.js":
/*!***************************!*\
  !*** ./pages/carrello.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/carrello.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Carrello = function Carrello() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart;\n\n  var removeProduct = function removeProduct(product) {\n    var updateArray = productsInCart.filter(function (element) {\n      return element._id === product._id;\n    });\n    console.log(updateArray);\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Carrello\"), productsInCart && productsInCart.map(function (product) {\n    return __jsx(\"div\", {\n      key: product._id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, product.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, product.boughtQuantity), __jsx(\"button\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, \"x\"));\n  }));\n};\n\n_s(Carrello, \"ChmtBI46YfFg8SaPaqAEXDTACt4=\");\n\n_c = Carrello;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrello);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carrello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FycmVsbG8uanM/MjA3NSJdLCJuYW1lcyI6WyJDYXJyZWxsbyIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsImFkZFRvQ2FydCIsInByb2R1Y3RzSW5DYXJ0IiwicmVtb3ZlUHJvZHVjdCIsInByb2R1Y3QiLCJ1cGRhdGVBcnJheSIsImZpbHRlciIsImVsZW1lbnQiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwibmFtZSIsImJvdWdodFF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsb0JBQ2lCQyx3REFBVSxDQUFDQyxpRUFBRCxDQUQzQjtBQUFBLE1BQ2JDLFNBRGEsZUFDYkEsU0FEYTtBQUFBLE1BQ0ZDLGNBREUsZUFDRkEsY0FERTs7QUFHckIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPLEVBQUk7QUFDL0IsUUFBTUMsV0FBVyxHQUFHSCxjQUFjLENBQUNJLE1BQWYsQ0FBc0IsVUFBQUMsT0FBTyxFQUFJO0FBQ25ELGFBQU9BLE9BQU8sQ0FBQ0MsR0FBUixLQUFnQkosT0FBTyxDQUFDSSxHQUEvQjtBQUNELEtBRm1CLENBQXBCO0FBR0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaO0FBQ0QsR0FMRDs7QUFPQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdILGNBQWMsSUFBSUEsY0FBYyxDQUFDUyxHQUFmLENBQW1CLFVBQUFQLE9BQU8sRUFBSTtBQUMvQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxPQUFPLENBQUNJLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlKLE9BQU8sQ0FBQ1EsSUFBWixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJUixPQUFPLENBQUNTLGNBQVosQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRixDQURGO0FBT0QsR0FSa0IsQ0FGckIsQ0FERjtBQWNELENBeEJEOztHQUFNZixROztLQUFBQSxRO0FBeUJTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhcnJlbGxvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcblxuY29uc3QgQ2FycmVsbG8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWRkVG9DYXJ0LCBwcm9kdWN0c0luQ2FydCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcblxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gcHJvZHVjdCA9PiB7XG4gICAgY29uc3QgdXBkYXRlQXJyYXkgPSBwcm9kdWN0c0luQ2FydC5maWx0ZXIoZWxlbWVudCA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudC5faWQgPT09IHByb2R1Y3QuX2lkXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVBcnJheSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYXJyZWxsbzwvaDE+XG4gICAgICB7cHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0Ll9pZH0+XG4gICAgICAgICAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmJvdWdodFF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgIDxidXR0b24+eDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FycmVsbG9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/carrello.js\n");

/***/ })

})