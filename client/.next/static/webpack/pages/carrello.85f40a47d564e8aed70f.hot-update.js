webpackHotUpdate_N_E("pages/carrello",{

/***/ "./pages/carrello.js":
/*!***************************!*\
  !*** ./pages/carrello.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/carrello.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Carrello = function Carrello() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__[\"CartContext\"]),\n      updateCart = _useContext.updateCart,\n      productsInCart = _useContext.productsInCart,\n      setProductsInCart = _useContext.setProductsInCart;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    productsInCart.forEach(function (product) {\n      document.getElementById(product._id).value = product.boughtQuantity;\n    });\n    calculateTotalPrice();\n  }, [productsInCart]);\n\n  var removeProduct = function removeProduct(product) {\n    var updateArray = productsInCart.filter(function (element) {\n      return element._id !== product._id;\n    });\n    setProductsInCart(updateArray);\n  };\n\n  var calculateTotalPrice = function calculateTotalPrice() {\n    var totalPrice = 0;\n    productsInCart.forEach(function (product) {\n      totalPrice += product.boughtQuantity * product.price;\n    });\n    console.log(productsInCart, 'tot price produc');\n    console.log(totalPrice, 'tot price');\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Carrello\"), productsInCart && productsInCart.map(function (product) {\n    return __jsx(\"div\", {\n      key: product._id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    }, product.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 16\n      }\n    }, \"Prezzo: \"), \"\\u20AC \", product.price), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, __jsx(\"strong\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 16\n      }\n    }, \"Subtotale: \"), \"\\u20AC \", product.price * product.boughtQuantity), __jsx(\"input\", {\n      onChange: function onChange() {\n        return updateCart(product, document.getElementById(product._id).value);\n      },\n      type: \"number\",\n      id: product._id,\n      min: \"0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      onClick: function onClick() {\n        return removeProduct(product);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, \"x\"));\n  }), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, \"Total price\"));\n};\n\n_s(Carrello, \"yEj4FlhJoQ+mytqziUs8rCNzD9M=\");\n\n_c = Carrello;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carrello);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carrello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FycmVsbG8uanM/MjA3NSJdLCJuYW1lcyI6WyJDYXJyZWxsbyIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsInVwZGF0ZUNhcnQiLCJwcm9kdWN0c0luQ2FydCIsInNldFByb2R1Y3RzSW5DYXJ0IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsInByb2R1Y3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiX2lkIiwidmFsdWUiLCJib3VnaHRRdWFudGl0eSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJyZW1vdmVQcm9kdWN0IiwidXBkYXRlQXJyYXkiLCJmaWx0ZXIiLCJlbGVtZW50IiwidG90YWxQcmljZSIsInByaWNlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxvQkFDcUNDLHdEQUFVLENBQUNDLGlFQUFELENBRC9DO0FBQUEsTUFDYkMsVUFEYSxlQUNiQSxVQURhO0FBQUEsTUFDREMsY0FEQyxlQUNEQSxjQURDO0FBQUEsTUFDZUMsaUJBRGYsZUFDZUEsaUJBRGY7O0FBR3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsa0JBQWMsQ0FBQ0csT0FBZixDQUF1QixVQUFBQyxPQUFPLEVBQUk7QUFDaENDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxHQUFoQyxFQUFxQ0MsS0FBckMsR0FBNkNKLE9BQU8sQ0FBQ0ssY0FBckQ7QUFDRCxLQUZEO0FBR0FDLHVCQUFtQjtBQUNwQixHQUxRLEVBS04sQ0FBQ1YsY0FBRCxDQUxNLENBQVQ7O0FBT0EsTUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBUCxPQUFPLEVBQUk7QUFDL0IsUUFBTVEsV0FBVyxHQUFHWixjQUFjLENBQUNhLE1BQWYsQ0FBc0IsVUFBQUMsT0FBTyxFQUFJO0FBQ25ELGFBQU9BLE9BQU8sQ0FBQ1AsR0FBUixLQUFnQkgsT0FBTyxDQUFDRyxHQUEvQjtBQUNELEtBRm1CLENBQXBCO0FBR0FOLHFCQUFpQixDQUFDVyxXQUFELENBQWpCO0FBQ0QsR0FMRDs7QUFPQSxNQUFNRixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaEMsUUFBSUssVUFBVSxHQUFHLENBQWpCO0FBQ0FmLGtCQUFjLENBQUNHLE9BQWYsQ0FBdUIsVUFBQUMsT0FBTyxFQUFJO0FBQ2hDVyxnQkFBVSxJQUFJWCxPQUFPLENBQUNLLGNBQVIsR0FBeUJMLE9BQU8sQ0FBQ1ksS0FBL0M7QUFDRCxLQUZEO0FBR0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsY0FBWixFQUE0QixrQkFBNUI7QUFDQWlCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaLEVBQXdCLFdBQXhCO0FBQ0QsR0FQRDs7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdmLGNBQWMsSUFBSUEsY0FBYyxDQUFDbUIsR0FBZixDQUFtQixVQUFBZixPQUFPLEVBQUk7QUFDL0MsV0FDRTtBQUFLLFNBQUcsRUFBRUEsT0FBTyxDQUFDRyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJSCxPQUFPLENBQUNnQixJQUFaLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxhQUErQmhCLE9BQU8sQ0FBQ1ksS0FBdkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFILGFBQWtDWixPQUFPLENBQUNZLEtBQVIsR0FBZ0JaLE9BQU8sQ0FBQ0ssY0FBMUQsQ0FIRixFQUlFO0FBQU8sY0FBUSxFQUFFO0FBQUEsZUFBTVYsVUFBVSxDQUFDSyxPQUFELEVBQVVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsT0FBTyxDQUFDRyxHQUFoQyxFQUFxQ0MsS0FBL0MsQ0FBaEI7QUFBQSxPQUFqQjtBQUF3RixVQUFJLEVBQUMsUUFBN0Y7QUFBc0csUUFBRSxFQUFFSixPQUFPLENBQUNHLEdBQWxIO0FBQXVILFNBQUcsRUFBQyxHQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1JLGFBQWEsQ0FBQ1AsT0FBRCxDQUFuQjtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRixDQURGO0FBVUQsR0FYa0IsQ0FGckIsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLENBREY7QUFtQkQsQ0E3Q0Q7O0dBQU1SLFE7O0tBQUFBLFE7QUE4Q1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FycmVsbG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NhcnRDb250ZXh0J1xuXG5jb25zdCBDYXJyZWxsbyA9ICgpID0+IHtcbiAgY29uc3QgeyB1cGRhdGVDYXJ0LCBwcm9kdWN0c0luQ2FydCwgc2V0UHJvZHVjdHNJbkNhcnQgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9kdWN0c0luQ2FydC5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvZHVjdC5faWQpLnZhbHVlID0gcHJvZHVjdC5ib3VnaHRRdWFudGl0eVxuICAgIH0pXG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpXG4gIH0sIFtwcm9kdWN0c0luQ2FydF0pXG5cbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IHByb2R1Y3QgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUFycmF5ID0gcHJvZHVjdHNJbkNhcnQuZmlsdGVyKGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuX2lkICE9PSBwcm9kdWN0Ll9pZFxuICAgIH0pXG4gICAgc2V0UHJvZHVjdHNJbkNhcnQodXBkYXRlQXJyYXkpXG4gIH1cblxuICBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKCkgPT4ge1xuICAgIGxldCB0b3RhbFByaWNlID0gMFxuICAgIHByb2R1Y3RzSW5DYXJ0LmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICB0b3RhbFByaWNlICs9IHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgKiBwcm9kdWN0LnByaWNlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0c0luQ2FydCwgJ3RvdCBwcmljZSBwcm9kdWMnKVxuICAgIGNvbnNvbGUubG9nKHRvdGFsUHJpY2UsICd0b3QgcHJpY2UnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNhcnJlbGxvPC9oMT5cbiAgICAgIHtwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuX2lkfT5cbiAgICAgICAgICAgIDxwPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5QcmV6em86IDwvc3Ryb25nPuKCrCB7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICA8cD48c3Ryb25nPlN1YnRvdGFsZTogPC9zdHJvbmc+4oKsIHtwcm9kdWN0LnByaWNlICogcHJvZHVjdC5ib3VnaHRRdWFudGl0eX08L3A+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eygpID0+IHVwZGF0ZUNhcnQocHJvZHVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvZHVjdC5faWQpLnZhbHVlKX0gdHlwZT0nbnVtYmVyJyBpZD17cHJvZHVjdC5faWR9IG1pbj0nMCcgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+eDwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPGgyPlRvdGFsIHByaWNlPC9oMj5cblxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDYXJyZWxsb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/carrello.js\n");

/***/ })

})