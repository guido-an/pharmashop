webpackHotUpdate_N_E("pages/carrello",{

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nvar CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar service = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar CartContextProvider = function CartContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      productsInCart = _useState[0],\n      setProductsInCart = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      totalPrice = _useState2[0],\n      setTotalPrice = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      renderPage = _useState3[0],\n      setRenderPage = _useState3[1]; // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      shippingInfo = _useState4[0],\n      setShippingInfo = _useState4[1]; // for getting shipping info on checkout page\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  var addProductToLocalStorage = function addProductToLocalStorage() {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  var addToCart = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product, quantityFromInput) {\n      var productIsInCart;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              productIsInCart = false;\n              productsInCart && productsInCart.forEach(function (productInCart) {\n                if (productInCart._id === product._id) {\n                  productIsInCart = true;\n                  product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantityFromInput);\n\n                  if (product.boughtQuantity > product.effectiveStock) {\n                    // to avoid adding\n                    product.boughtQuantity = product.effectiveStock;\n                  }\n                }\n              });\n\n              if (!productsInCart) {\n                product.boughtQuantity = Number(quantityFromInput);\n                setProductsInCart([product]);\n              } else if (productIsInCart) {\n                setProductsInCart(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart));\n              } else {\n                product.boughtQuantity = Number(quantityFromInput);\n                setProductsInCart([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(productsInCart), [product]));\n              }\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function addToCart(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n\n  var updateCart = function updateCart(productInCart, quantityFromInput) {\n    var updateArray = productsInCart.map(function (product) {\n      if (product._id === productInCart._id) {\n        product.boughtQuantity = Number(quantityFromInput);\n      }\n\n      return product;\n    });\n    setProductsInCart(updateArray);\n  };\n\n  var calculateTotalPrice = function calculateTotalPrice() {\n    console.log('calculate price');\n\n    if (!productsInCart) {\n      return;\n    }\n\n    var sumPrice = 0;\n    productsInCart.forEach(function (product) {\n      sumPrice += product.boughtQuantity * product.price;\n    });\n    setTotalPrice(sumPrice);\n  };\n\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart: productsInCart,\n      totalPrice: totalPrice,\n      shippingInfo: shippingInfo,\n      setProductsInCart: setProductsInCart,\n      addToCart: addToCart,\n      updateCart: updateCart,\n      setTotalPrice: setTotalPrice,\n      setShippingInfo: setShippingInfo,\n      calculateTotalPrice: calculateTotalPrice\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n_s(CartContextProvider, \"90ocjIuQ537PRaYtdzu7mPThmzY=\");\n\n_c = CartContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/NGM5NCJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIkNhcnRDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwicmVuZGVyUGFnZSIsInNldFJlbmRlclBhZ2UiLCJzaGlwcGluZ0luZm8iLCJzZXRTaGlwcGluZ0luZm8iLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlGcm9tSW5wdXQiLCJwcm9kdWN0SXNJbkNhcnQiLCJmb3JFYWNoIiwicHJvZHVjdEluQ2FydCIsIl9pZCIsImJvdWdodFF1YW50aXR5IiwiTnVtYmVyIiwiZWZmZWN0aXZlU3RvY2siLCJ1cGRhdGVDYXJ0IiwidXBkYXRlQXJyYXkiLCJtYXAiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwic3VtUHJpY2UiLCJwcmljZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLElBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUFBfQVBJLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbn0pXG5cbmNvbnN0IENhcnRDb250ZXh0UHJvdmlkZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0c0luQ2FydCwgc2V0UHJvZHVjdHNJbkNhcnRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtyZW5kZXJQYWdlLCBzZXRSZW5kZXJQYWdlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyB3aXRob3V0IHRoaXMgbG9jYWxTdG9yYWdlIGluIGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSB3b3VsZCBiZSB1bmRlZmluZWQgKHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIpXG4gIGNvbnN0IFtzaGlwcGluZ0luZm8sIHNldFNoaXBwaW5nSW5mb10gPSB1c2VTdGF0ZShudWxsKSAvLyBmb3IgZ2V0dGluZyBzaGlwcGluZyBpbmZvIG9uIGNoZWNrb3V0IHBhZ2VcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2R1Y3RzSW5DYXJ0JykpXG4gICAgc2V0UHJvZHVjdHNJbkNhcnQocHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKVxuICAgIHNldFJlbmRlclBhZ2UodHJ1ZSlcbiAgfSwgW10pXG5cbiAgY29uc3QgYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChyZW5kZXJQYWdlKSB7XG4gICAgICBjb25zb2xlLmxvZygnYWRkIHRvIGxvY2FsIHN0b3JhZ2UnLCBwcm9kdWN0c0luQ2FydClcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9kdWN0c0luQ2FydCcsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzSW5DYXJ0KSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgcXVhbnRpdHlGcm9tSW5wdXQpID0+IHtcbiAgICBsZXQgcHJvZHVjdElzSW5DYXJ0ID0gZmFsc2VcbiAgICBwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5mb3JFYWNoKHByb2R1Y3RJbkNhcnQgPT4ge1xuICAgICAgaWYgKHByb2R1Y3RJbkNhcnQuX2lkID09PSBwcm9kdWN0Ll9pZCkge1xuICAgICAgICBwcm9kdWN0SXNJbkNhcnQgPSB0cnVlXG4gICAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocHJvZHVjdEluQ2FydC5ib3VnaHRRdWFudGl0eSkgKyBOdW1iZXIocXVhbnRpdHlGcm9tSW5wdXQpXG4gICAgICAgIGlmIChwcm9kdWN0LmJvdWdodFF1YW50aXR5ID4gcHJvZHVjdC5lZmZlY3RpdmVTdG9jaykgeyAvLyB0byBhdm9pZCBhZGRpbmdcbiAgICAgICAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gcHJvZHVjdC5lZmZlY3RpdmVTdG9ja1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAoIXByb2R1Y3RzSW5DYXJ0KSB7XG4gICAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gTnVtYmVyKHF1YW50aXR5RnJvbUlucHV0KVxuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoW3Byb2R1Y3RdKVxuICAgIH0gZWxzZSBpZiAocHJvZHVjdElzSW5DYXJ0KSB7XG4gICAgICBzZXRQcm9kdWN0c0luQ2FydChbLi4ucHJvZHVjdHNJbkNhcnRdKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9kdWN0LmJvdWdodFF1YW50aXR5ID0gTnVtYmVyKHF1YW50aXR5RnJvbUlucHV0KVxuICAgICAgc2V0UHJvZHVjdHNJbkNhcnQoWy4uLnByb2R1Y3RzSW5DYXJ0LCBwcm9kdWN0XSlcbiAgICB9XG4gIH1cblxuICAvLyBpdCBuZWVkcyB0byBiZSBjYWxsZWQgd2hlbiBhZGRUb0NhcnQgZmluaXNoIGV4ZWN1dGluZ1xuICBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2UoKVxuICBjb25zdCB1cGRhdGVDYXJ0ID0gKHByb2R1Y3RJbkNhcnQsIHF1YW50aXR5RnJvbUlucHV0KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlQXJyYXkgPSBwcm9kdWN0c0luQ2FydC5tYXAocHJvZHVjdCA9PiB7XG4gICAgICBpZiAocHJvZHVjdC5faWQgPT09IHByb2R1Y3RJbkNhcnQuX2lkKSB7XG4gICAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocXVhbnRpdHlGcm9tSW5wdXQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZHVjdFxuICAgIH0pXG4gICAgc2V0UHJvZHVjdHNJbkNhcnQodXBkYXRlQXJyYXkpXG4gIH1cblxuICBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjYWxjdWxhdGUgcHJpY2UnKVxuICAgIGlmICghcHJvZHVjdHNJbkNhcnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgc3VtUHJpY2UgPSAwXG4gICAgcHJvZHVjdHNJbkNhcnQuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgIHN1bVByaWNlICs9IHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgKiBwcm9kdWN0LnByaWNlXG4gICAgfSlcbiAgICBzZXRUb3RhbFByaWNlKHN1bVByaWNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZHVjdHNJbkNhcnQsIHRvdGFsUHJpY2UsIHNoaXBwaW5nSW5mbywgc2V0UHJvZHVjdHNJbkNhcnQsIGFkZFRvQ2FydCwgdXBkYXRlQ2FydCwgc2V0VG90YWxQcmljZSwgc2V0U2hpcHBpbmdJbmZvLCBjYWxjdWxhdGVUb3RhbFByaWNlIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHRQcm92aWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ })

})