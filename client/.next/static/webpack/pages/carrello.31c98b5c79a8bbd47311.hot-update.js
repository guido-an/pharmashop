webpackHotUpdate_N_E("pages/carrello",{

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar CartContextProvider = function CartContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsInCart = _useState[0],\n      setProductsInCart = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      renderPage = _useState2[0],\n      setRenderPage = _useState2[1]; // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  var addProductToLocalStorage = function addProductToLocalStorage() {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product, quantity) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              product.boughtQuantity = quantity;\n              productsInCart.forEach(function (productInCart) {\n                if (productInCart._id === product._id) {\n                  product.boughtQuantity = productInCart.boughtQuantity + product.boughtQuantity;\n                }\n              });\n\n              if (!productsInCart) {\n                setProductsInCart([product]);\n              } else {\n                setProductsInCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart), [product]));\n              }\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addToCart(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart: productsInCart,\n      addToCart: addToCart\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(CartContextProvider, \"vNR45zmcJJq5eOzokrJVaM32kdw=\");\n\n_c = CartContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/NGM5NCJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInJlbmRlclBhZ2UiLCJzZXRSZW5kZXJQYWdlIiwidXNlRWZmZWN0IiwicHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5IiwiYm91Z2h0UXVhbnRpdHkiLCJmb3JFYWNoIiwicHJvZHVjdEluQ2FydCIsIl9pZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDNUJDLGNBRDRCO0FBQUEsTUFDWkMsaUJBRFk7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsS0FBRCxDQUZUO0FBQUEsTUFFNUJHLFVBRjRCO0FBQUEsTUFFaEJDLGFBRmdCLGtCQUVpQjs7O0FBRXBEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyx3QkFBd0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFqQztBQUNBUixxQkFBaUIsQ0FBQ0ksd0JBQUQsQ0FBakI7QUFDQUYsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1PLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQyxRQUFJUixVQUFKLEVBQWdCO0FBQ2RTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DWixjQUFwQztBQUNBUSxrQkFBWSxDQUFDSyxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q1AsSUFBSSxDQUFDUSxTQUFMLENBQWVkLGNBQWYsQ0FBdkM7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsTUFBTWUsU0FBUztBQUFBLGdNQUFHLGlCQUFPQyxPQUFQLEVBQWdCQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCRCxxQkFBTyxDQUFDRSxjQUFSLEdBQXlCRCxRQUF6QjtBQUNBakIsNEJBQWMsQ0FBQ21CLE9BQWYsQ0FBdUIsVUFBQUMsYUFBYSxFQUFJO0FBQ3RDLG9CQUFJQSxhQUFhLENBQUNDLEdBQWQsS0FBc0JMLE9BQU8sQ0FBQ0ssR0FBbEMsRUFBdUM7QUFDckNMLHlCQUFPLENBQUNFLGNBQVIsR0FBeUJFLGFBQWEsQ0FBQ0YsY0FBZCxHQUErQkYsT0FBTyxDQUFDRSxjQUFoRTtBQUNEO0FBQ0YsZUFKRDs7QUFLQSxrQkFBSSxDQUFDbEIsY0FBTCxFQUFxQjtBQUNuQkMsaUNBQWlCLENBQUMsQ0FBQ2UsT0FBRCxDQUFELENBQWpCO0FBQ0QsZUFGRCxNQUVPO0FBQ0xmLGlDQUFpQix3R0FBS0QsY0FBTCxJQUFxQmdCLE9BQXJCLEdBQWpCO0FBQ0Q7O0FBWGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEQsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmLENBakJtQyxDQThCbkM7OztBQUNBTCwwQkFBd0I7QUFFeEIsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFVixvQkFBYyxFQUFkQSxjQUFGO0FBQWtCZSxlQUFTLEVBQVRBO0FBQWxCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLEtBQUssQ0FBQ3dCLFFBRFQsQ0FERjtBQUtELENBdENEOztHQUFNekIsbUI7O0tBQUFBLG1CO0FBd0NTQSxrRkFBZiIsImZpbGUiOiIuL2NvbnRleHRzL0NhcnRDb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQUF9BUEksXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxufSlcblxuY29uc3QgQ2FydENvbnRleHRQcm92aWRlciA9IHByb3BzID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzSW5DYXJ0LCBzZXRQcm9kdWN0c0luQ2FydF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3JlbmRlclBhZ2UsIHNldFJlbmRlclBhZ2VdID0gdXNlU3RhdGUoZmFsc2UpIC8vIHdpdGhvdXQgdGhpcyBsb2NhbFN0b3JhZ2UgaW4gYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlIHdvdWxkIGJlIHVuZGVmaW5lZCAocmVuZGVyZWQgb24gdGhlIHNlcnZlcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzSW5DYXJ0JykpXG4gICAgc2V0UHJvZHVjdHNJbkNhcnQocHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKVxuICAgIHNldFJlbmRlclBhZ2UodHJ1ZSlcbiAgfSwgW10pXG5cbiAgY29uc3QgYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChyZW5kZXJQYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZygnYWRkIHRvIGxvY2FsIHN0b3JhZ2UnLCBwcm9kdWN0c0luQ2FydClcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0c0luQ2FydCcsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzSW5DYXJ0KSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gcXVhbnRpdHlcbiAgICBwcm9kdWN0c0luQ2FydC5mb3JFYWNoKHByb2R1Y3RJbkNhcnQgPT4ge1xuICAgICAgaWYgKHByb2R1Y3RJbkNhcnQuX2lkID09PSBwcm9kdWN0Ll9pZCkge1xuICAgICAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gcHJvZHVjdEluQ2FydC5ib3VnaHRRdWFudGl0eSArIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICghcHJvZHVjdHNJbkNhcnQpIHtcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFtwcm9kdWN0XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoWy4uLnByb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0XSlcbiAgICB9XG4gIH1cbiAgLy8gaXQgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW4gYWRkVG9DYXJ0IGZpbmlzaCBleGVjdXRpbmdcbiAgYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlKClcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9kdWN0c0luQ2FydCwgYWRkVG9DYXJ0IH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHRQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ })

})