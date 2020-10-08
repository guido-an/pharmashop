webpackHotUpdate_N_E("pages/carrello",{

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar CartContextProvider = function CartContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsInCart = _useState[0],\n      setProductsInCart = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      renderPage = _useState2[0],\n      setRenderPage = _useState2[1]; // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  var addProductToLocalStorage = function addProductToLocalStorage() {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product, quantity) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // product.boughtQuantity = quantity\n              productsInCart && productsInCart.forEach(function (productInCart) {\n                if (productInCart._id === product._id) {\n                  console.log(productInCart, 'existe');\n                  product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantity);\n                } else {\n                  console.log(' no existe');\n                  product.boughtQuantity = quantity;\n                }\n              });\n\n              if (!productsInCart) {\n                product.boughtQuantity = quantity;\n                setProductsInCart([product]);\n              } else {\n                setProductsInCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart), [product]));\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addToCart(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart: productsInCart,\n      addToCart: addToCart\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(CartContextProvider, \"vNR45zmcJJq5eOzokrJVaM32kdw=\");\n\n_c = CartContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/NGM5NCJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInJlbmRlclBhZ2UiLCJzZXRSZW5kZXJQYWdlIiwidXNlRWZmZWN0IiwicHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5IiwiZm9yRWFjaCIsInByb2R1Y3RJbkNhcnQiLCJfaWQiLCJib3VnaHRRdWFudGl0eSIsIk51bWJlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDNUJDLGNBRDRCO0FBQUEsTUFDWkMsaUJBRFk7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsS0FBRCxDQUZUO0FBQUEsTUFFNUJHLFVBRjRCO0FBQUEsTUFFaEJDLGFBRmdCLGtCQUVpQjs7O0FBRXBEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyx3QkFBd0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFqQztBQUNBUixxQkFBaUIsQ0FBQ0ksd0JBQUQsQ0FBakI7QUFDQUYsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQU1PLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQyxRQUFJUixVQUFKLEVBQWdCO0FBQ2RTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DWixjQUFwQztBQUNBUSxrQkFBWSxDQUFDSyxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q1AsSUFBSSxDQUFDUSxTQUFMLENBQWVkLGNBQWYsQ0FBdkM7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsTUFBTWUsU0FBUztBQUFBLGdNQUFHLGlCQUFPQyxPQUFQLEVBQWdCQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCO0FBQ0FqQiw0QkFBYyxJQUFJQSxjQUFjLENBQUNrQixPQUFmLENBQXVCLFVBQUFDLGFBQWEsRUFBSTtBQUN4RCxvQkFBSUEsYUFBYSxDQUFDQyxHQUFkLEtBQXNCSixPQUFPLENBQUNJLEdBQWxDLEVBQXVDO0FBQ3JDVCx5QkFBTyxDQUFDQyxHQUFSLENBQVlPLGFBQVosRUFBMkIsUUFBM0I7QUFDQUgseUJBQU8sQ0FBQ0ssY0FBUixHQUF5QkMsTUFBTSxDQUFDSCxhQUFhLENBQUNFLGNBQWYsQ0FBTixHQUF1Q0MsTUFBTSxDQUFDTCxRQUFELENBQXRFO0FBQ0QsaUJBSEQsTUFHTztBQUNMTix5QkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBSSx5QkFBTyxDQUFDSyxjQUFSLEdBQXlCSixRQUF6QjtBQUNEO0FBQ0YsZUFSaUIsQ0FBbEI7O0FBU0Esa0JBQUksQ0FBQ2pCLGNBQUwsRUFBcUI7QUFDbkJnQix1QkFBTyxDQUFDSyxjQUFSLEdBQXlCSixRQUF6QjtBQUNBaEIsaUNBQWlCLENBQUMsQ0FBQ2UsT0FBRCxDQUFELENBQWpCO0FBQ0QsZUFIRCxNQUdPO0FBQ0xmLGlDQUFpQix3R0FBS0QsY0FBTCxJQUFxQmdCLE9BQXJCLEdBQWpCO0FBQ0Q7O0FBaEJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRELFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZixDQWpCbUMsQ0FtQ25DOzs7QUFDQUwsMEJBQXdCO0FBRXhCLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRVYsb0JBQWMsRUFBZEEsY0FBRjtBQUFrQmUsZUFBUyxFQUFUQTtBQUFsQixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixLQUFLLENBQUN5QixRQURULENBREY7QUFLRCxDQTNDRDs7R0FBTTFCLG1COztLQUFBQSxtQjtBQTZDU0Esa0ZBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUFBfQVBJLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbn0pXG5cbmNvbnN0IENhcnRDb250ZXh0UHJvdmlkZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCwgc2V0UHJvZHVjdHNJbkNhcnRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtyZW5kZXJQYWdlLCBzZXRSZW5kZXJQYWdlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyB3aXRob3V0IHRoaXMgbG9jYWxTdG9yYWdlIGluIGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSB3b3VsZCBiZSB1bmRlZmluZWQgKHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9kdWN0c0luQ2FydCcpKVxuICAgIHNldFByb2R1Y3RzSW5DYXJ0KHByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSlcbiAgICBzZXRSZW5kZXJQYWdlKHRydWUpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAocmVuZGVyUGFnZSkge1xuICAgICAgY29uc29sZS5sb2coJ2FkZCB0byBsb2NhbCBzdG9yYWdlJywgcHJvZHVjdHNJbkNhcnQpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdHNJbkNhcnQnLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0c0luQ2FydCkpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QsIHF1YW50aXR5KSA9PiB7XG4gICAgLy8gcHJvZHVjdC5ib3VnaHRRdWFudGl0eSA9IHF1YW50aXR5XG4gICAgcHJvZHVjdHNJbkNhcnQgJiYgcHJvZHVjdHNJbkNhcnQuZm9yRWFjaChwcm9kdWN0SW5DYXJ0ID0+IHtcbiAgICAgIGlmIChwcm9kdWN0SW5DYXJ0Ll9pZCA9PT0gcHJvZHVjdC5faWQpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdEluQ2FydCwgJ2V4aXN0ZScpXG4gICAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocHJvZHVjdEluQ2FydC5ib3VnaHRRdWFudGl0eSkgKyBOdW1iZXIocXVhbnRpdHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnIG5vIGV4aXN0ZScpXG4gICAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBxdWFudGl0eVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKCFwcm9kdWN0c0luQ2FydCkge1xuICAgICAgcHJvZHVjdC5ib3VnaHRRdWFudGl0eSA9IHF1YW50aXR5XG4gICAgICBzZXRQcm9kdWN0c0luQ2FydChbcHJvZHVjdF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFsuLi5wcm9kdWN0c0luQ2FydCwgcHJvZHVjdF0pXG4gICAgfVxuICB9XG4gIC8vIGl0IG5lZWRzIHRvIGJlIGNhbGxlZCB3aGVuIGFkZFRvQ2FydCBmaW5pc2ggZXhlY3V0aW5nXG4gIGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZHVjdHNJbkNhcnQsIGFkZFRvQ2FydCB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRDb250ZXh0UHJvdmlkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ })

})