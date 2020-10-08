webpackHotUpdate_N_E("pages/_app",{

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar CartContextProvider = function CartContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsInCart = _useState[0],\n      setProductsInCart = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      renderPage = _useState2[0],\n      setRenderPage = _useState2[1]; // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  var addProductToLocalStorage = function addProductToLocalStorage() {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product, quantity) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // product.boughtQuantity = quantity\n              productsInCart && productsInCart.forEach(function (productInCart) {\n                if (productInCart._id === product._id) {\n                  console.log(productInCart, 'existe');\n                  productInCart.boughtQuantity = productInCart.boughtQuantity + quantity;\n                } else {\n                  console.log(' no existe');\n                  product.boughtQuantity = quantity;\n                }\n              });\n\n              if (!productsInCart) {\n                setProductsInCart([product]);\n              } else {\n                setProductsInCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart), [product]));\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addToCart(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart: productsInCart,\n      addToCart: addToCart\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(CartContextProvider, \"vNR45zmcJJq5eOzokrJVaM32kdw=\");\n\n_c = CartContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/NGM5NCJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInJlbmRlclBhZ2UiLCJzZXRSZW5kZXJQYWdlIiwidXNlRWZmZWN0IiwicHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5IiwiZm9yRWFjaCIsInByb2R1Y3RJbkNhcnQiLCJfaWQiLCJib3VnaHRRdWFudGl0eSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDNUJDLGNBRDRCO0FBQUEsTUFDWkMsaUJBRFk7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsS0FBRCxDQUZUO0FBQUEsTUFFNUJHLFVBRjRCO0FBQUEsTUFFaEJDLGFBRmdCLGtCQUVpQjs7O0FBRXBEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyx3QkFBd0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFqQztBQUNBUixxQkFBaUIsQ0FBQ0ksd0JBQUQsQ0FBakI7QUFDQUYsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1PLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQyxRQUFJUixVQUFKLEVBQWdCO0FBQ2RTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DWixjQUFwQztBQUNBUSxrQkFBWSxDQUFDSyxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q1AsSUFBSSxDQUFDUSxTQUFMLENBQWVkLGNBQWYsQ0FBdkM7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsTUFBTWUsU0FBUztBQUFBLGdNQUFHLGlCQUFPQyxPQUFQLEVBQWdCQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCO0FBQ0FqQiw0QkFBYyxJQUFJQSxjQUFjLENBQUNrQixPQUFmLENBQXVCLFVBQUFDLGFBQWEsRUFBSTtBQUN4RCxvQkFBSUEsYUFBYSxDQUFDQyxHQUFkLEtBQXNCSixPQUFPLENBQUNJLEdBQWxDLEVBQXVDO0FBQ3JDVCx5QkFBTyxDQUFDQyxHQUFSLENBQVlPLGFBQVosRUFBNEIsUUFBNUI7QUFDQUEsK0JBQWEsQ0FBQ0UsY0FBZCxHQUErQkYsYUFBYSxDQUFDRSxjQUFkLEdBQStCSixRQUE5RDtBQUNELGlCQUhELE1BR087QUFDTE4seUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUkseUJBQU8sQ0FBQ0ssY0FBUixHQUF5QkosUUFBekI7QUFDRDtBQUNGLGVBUmlCLENBQWxCOztBQVNBLGtCQUFJLENBQUNqQixjQUFMLEVBQXFCO0FBQ25CQyxpQ0FBaUIsQ0FBQyxDQUFDZSxPQUFELENBQUQsQ0FBakI7QUFDRCxlQUZELE1BRU87QUFDTGYsaUNBQWlCLHdHQUFLRCxjQUFMLElBQXFCZ0IsT0FBckIsR0FBakI7QUFDRDs7QUFmZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFURCxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWYsQ0FqQm1DLENBa0NuQzs7O0FBQ0FMLDBCQUF3QjtBQUV4QixTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVWLG9CQUFjLEVBQWRBLGNBQUY7QUFBa0JlLGVBQVMsRUFBVEE7QUFBbEIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakIsS0FBSyxDQUFDd0IsUUFEVCxDQURGO0FBS0QsQ0ExQ0Q7O0dBQU16QixtQjs7S0FBQUEsbUI7QUE0Q1NBLGtGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvQ2FydENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBDYXJ0Q29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVuZGVyUGFnZSwgc2V0UmVuZGVyUGFnZV0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gd2l0aG91dCB0aGlzIGxvY2FsU3RvcmFnZSBpbiBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2Ugd291bGQgYmUgdW5kZWZpbmVkIChyZW5kZXJlZCBvbiB0aGUgc2VydmVyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHNJbkNhcnQnKSlcbiAgICBzZXRQcm9kdWN0c0luQ2FydChwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UpXG4gICAgc2V0UmVuZGVyUGFnZSh0cnVlKVxuICB9LCBbXSlcblxuICBjb25zdCBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHJlbmRlclBhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQgdG8gbG9jYWwgc3RvcmFnZScsIHByb2R1Y3RzSW5DYXJ0KVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzSW5DYXJ0JywgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHNJbkNhcnQpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0LCBxdWFudGl0eSkgPT4ge1xuICAgIC8vIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBxdWFudGl0eVxuICAgIHByb2R1Y3RzSW5DYXJ0ICYmIHByb2R1Y3RzSW5DYXJ0LmZvckVhY2gocHJvZHVjdEluQ2FydCA9PiB7XG4gICAgICBpZiAocHJvZHVjdEluQ2FydC5faWQgPT09IHByb2R1Y3QuX2lkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RJbkNhcnQgLCAnZXhpc3RlJylcbiAgICAgICAgcHJvZHVjdEluQ2FydC5ib3VnaHRRdWFudGl0eSA9IHByb2R1Y3RJbkNhcnQuYm91Z2h0UXVhbnRpdHkgKyBxdWFudGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBubyBleGlzdGUnKVxuICAgICAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gcXVhbnRpdHlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICghcHJvZHVjdHNJbkNhcnQpIHtcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFtwcm9kdWN0XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoWy4uLnByb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0XSlcbiAgICB9XG4gIH1cbiAgLy8gaXQgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW4gYWRkVG9DYXJ0IGZpbmlzaCBleGVjdXRpbmdcbiAgYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlKClcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9kdWN0c0luQ2FydCwgYWRkVG9DYXJ0IH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHRQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ })

})