webpackHotUpdate_N_E("pages/carrello",{

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar CartContextProvider = function CartContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsInCart = _useState[0],\n      setProductsInCart = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      renderPage = _useState2[0],\n      setRenderPage = _useState2[1]; // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  var addProductToLocalStorage = function addProductToLocalStorage() {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product, quantityFromInput) {\n      var productIsInCart;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              productIsInCart = false;\n              productsInCart && productsInCart.forEach(function (productInCart) {\n                if (productInCart._id === product._id) {\n                  productIsInCart = true;\n                  product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantityFromInput);\n                }\n              });\n\n              if (!productsInCart) {\n                product.boughtQuantity = Number(quantityFromInput);\n                setProductsInCart([product]);\n              } else if (productIsInCart) {\n                setProductsInCart(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart));\n              } else {\n                product.boughtQuantity = Number(quantityFromInput);\n                setProductsInCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart), [product]));\n              }\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addToCart(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n\n  var updateCart = function updateCart(product) {\n    console.log(product);\n  };\n\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart: productsInCart,\n      setProductsInCart: setProductsInCart,\n      addToCart: addToCart,\n      updateCart: updateCart\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(CartContextProvider, \"vNR45zmcJJq5eOzokrJVaM32kdw=\");\n\n_c = CartContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/NGM5NCJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInJlbmRlclBhZ2UiLCJzZXRSZW5kZXJQYWdlIiwidXNlRWZmZWN0IiwicHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5RnJvbUlucHV0IiwicHJvZHVjdElzSW5DYXJ0IiwiZm9yRWFjaCIsInByb2R1Y3RJbkNhcnQiLCJfaWQiLCJib3VnaHRRdWFudGl0eSIsIk51bWJlciIsInVwZGF0ZUNhcnQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFUCxJQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMzQkMsU0FBTyxFQUFFQyx1QkFEa0I7QUFFM0JDLGlCQUFlLEVBQUU7QUFGVSxDQUFiLENBQWhCOztBQUtBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQzVCQyxjQUQ0QjtBQUFBLE1BQ1pDLGlCQURZOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRTVCRyxVQUY0QjtBQUFBLE1BRWhCQyxhQUZnQixrQkFFaUI7OztBQUVwREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsd0JBQXdCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQVgsQ0FBakM7QUFDQVIscUJBQWlCLENBQUNJLHdCQUFELENBQWpCO0FBQ0FGLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNTyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckMsUUFBSVIsVUFBSixFQUFnQjtBQUNkUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ1osY0FBcEM7QUFDQVEsa0JBQVksQ0FBQ0ssT0FBYixDQUFxQixnQkFBckIsRUFBdUNQLElBQUksQ0FBQ1EsU0FBTCxDQUFlZCxjQUFmLENBQXZDO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1lLFNBQVM7QUFBQSxnTUFBRyxpQkFBT0MsT0FBUCxFQUFnQkMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyw2QkFEWSxHQUNNLEtBRE47QUFFaEJsQiw0QkFBYyxJQUFJQSxjQUFjLENBQUNtQixPQUFmLENBQXVCLFVBQUFDLGFBQWEsRUFBSTtBQUN4RCxvQkFBSUEsYUFBYSxDQUFDQyxHQUFkLEtBQXNCTCxPQUFPLENBQUNLLEdBQWxDLEVBQXVDO0FBQ3JDSCxpQ0FBZSxHQUFHLElBQWxCO0FBQ0FGLHlCQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ0gsYUFBYSxDQUFDRSxjQUFmLENBQU4sR0FBdUNDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBdEU7QUFDRDtBQUNGLGVBTGlCLENBQWxCOztBQU1BLGtCQUFJLENBQUNqQixjQUFMLEVBQXFCO0FBQ25CZ0IsdUJBQU8sQ0FBQ00sY0FBUixHQUF5QkMsTUFBTSxDQUFDTixpQkFBRCxDQUEvQjtBQUNBaEIsaUNBQWlCLENBQUMsQ0FBQ2UsT0FBRCxDQUFELENBQWpCO0FBQ0QsZUFIRCxNQUdPLElBQUlFLGVBQUosRUFBcUI7QUFDMUJqQixpQ0FBaUIsQ0FBQyw2RkFBSUQsY0FBTCxFQUFqQjtBQUNELGVBRk0sTUFFQTtBQUNMZ0IsdUJBQU8sQ0FBQ00sY0FBUixHQUF5QkMsTUFBTSxDQUFDTixpQkFBRCxDQUEvQjtBQUNBaEIsaUNBQWlCLHdHQUFLRCxjQUFMLElBQXFCZ0IsT0FBckIsR0FBakI7QUFDRDs7QUFoQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEQsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmLENBakJtQyxDQW9DbkM7OztBQUNBTCwwQkFBd0I7O0FBRXhCLE1BQU1jLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFSLE9BQU8sRUFBSTtBQUM1QkwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVo7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRWhCLG9CQUFjLEVBQWRBLGNBQUY7QUFBa0JDLHVCQUFpQixFQUFqQkEsaUJBQWxCO0FBQXFDYyxlQUFTLEVBQVRBLFNBQXJDO0FBQWdEUyxnQkFBVSxFQUFWQTtBQUFoRCxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cxQixLQUFLLENBQUMyQixRQURULENBREY7QUFLRCxDQWhERDs7R0FBTTVCLG1COztLQUFBQSxtQjtBQWtEU0Esa0ZBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUFBfQVBJLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbn0pXG5cbmNvbnN0IENhcnRDb250ZXh0UHJvdmlkZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCwgc2V0UHJvZHVjdHNJbkNhcnRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtyZW5kZXJQYWdlLCBzZXRSZW5kZXJQYWdlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyB3aXRob3V0IHRoaXMgbG9jYWxTdG9yYWdlIGluIGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSB3b3VsZCBiZSB1bmRlZmluZWQgKHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0c0luQ2FydCcpKVxuICAgIHNldFByb2R1Y3RzSW5DYXJ0KHByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSlcbiAgICBzZXRSZW5kZXJQYWdlKHRydWUpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAocmVuZGVyUGFnZSkge1xuICAgICAgY29uc29sZS5sb2coJ2FkZCB0byBsb2NhbCBzdG9yYWdlJywgcHJvZHVjdHNJbkNhcnQpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdHNJbkNhcnQnLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0c0luQ2FydCkpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QsIHF1YW50aXR5RnJvbUlucHV0KSA9PiB7XG4gICAgbGV0IHByb2R1Y3RJc0luQ2FydCA9IGZhbHNlXG4gICAgcHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQuZm9yRWFjaChwcm9kdWN0SW5DYXJ0ID0+IHtcbiAgICAgIGlmIChwcm9kdWN0SW5DYXJ0Ll9pZCA9PT0gcHJvZHVjdC5faWQpIHtcbiAgICAgICAgcHJvZHVjdElzSW5DYXJ0ID0gdHJ1ZVxuICAgICAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gTnVtYmVyKHByb2R1Y3RJbkNhcnQuYm91Z2h0UXVhbnRpdHkpICsgTnVtYmVyKHF1YW50aXR5RnJvbUlucHV0KVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKCFwcm9kdWN0c0luQ2FydCkge1xuICAgICAgcHJvZHVjdC5ib3VnaHRRdWFudGl0eSA9IE51bWJlcihxdWFudGl0eUZyb21JbnB1dClcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFtwcm9kdWN0XSlcbiAgICB9IGVsc2UgaWYgKHByb2R1Y3RJc0luQ2FydCkge1xuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoWy4uLnByb2R1Y3RzSW5DYXJ0XSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZHVjdC5ib3VnaHRRdWFudGl0eSA9IE51bWJlcihxdWFudGl0eUZyb21JbnB1dClcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFsuLi5wcm9kdWN0c0luQ2FydCwgcHJvZHVjdF0pXG4gICAgfVxuICB9XG5cbiAgLy8gaXQgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW4gYWRkVG9DYXJ0IGZpbmlzaCBleGVjdXRpbmdcbiAgYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlKClcblxuICBjb25zdCB1cGRhdGVDYXJ0ID0gcHJvZHVjdCA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByb2R1Y3RzSW5DYXJ0LCBzZXRQcm9kdWN0c0luQ2FydCwgYWRkVG9DYXJ0LCB1cGRhdGVDYXJ0IH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHRQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ })

})