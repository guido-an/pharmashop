webpackHotUpdate_N_E("pages/prodotto/[id]",{

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Product = function Product() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart,\n      test = _useContext.test;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__[\"ProductContext\"]),\n      getSingleProduct = _useContext2.getSingleProduct,\n      singleProduct = _useContext2.singleProduct;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      quantity = _useState[0],\n      setQuantity = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('call effect');\n\n    function fetchProduct() {\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    function _fetchProduct() {\n      _fetchProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    fetchProduct();\n  }, [id, quantity]);\n\n  increaseQuantity = function increaseQuantity() {\n    setQuantity(quantity++);\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, quantity), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setQuantity(quantity++);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Add\"), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Remove\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return addToCart(singleProduct, quantity);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"));\n};\n\n_s(Product, \"FYf7pFhN9hIS7VEuMEt2MJVzMJY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZG90dG8vLmpzP2ZjMmIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0c0luQ2FydCIsInRlc3QiLCJQcm9kdWN0Q29udGV4dCIsImdldFNpbmdsZVByb2R1Y3QiLCJzaW5nbGVQcm9kdWN0IiwidXNlU3RhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImZldGNoUHJvZHVjdCIsImluY3JlYXNlUXVhbnRpdHkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRG9CLE1BRVpDLEVBRlksR0FFTEYsTUFBTSxDQUFDRyxLQUZGLENBRVpELEVBRlksRUFFUzs7QUFGVCxvQkFHd0JFLHdEQUFVLENBQUNDLGlFQUFELENBSGxDO0FBQUEsTUFHWkMsU0FIWSxlQUdaQSxTQUhZO0FBQUEsTUFHREMsY0FIQyxlQUdEQSxjQUhDO0FBQUEsTUFHZUMsSUFIZixlQUdlQSxJQUhmOztBQUFBLHFCQUl3Qkosd0RBQVUsQ0FBQ0ssdUVBQUQsQ0FKbEM7QUFBQSxNQUlaQyxnQkFKWSxnQkFJWkEsZ0JBSlk7QUFBQSxNQUlNQyxhQUpOLGdCQUlNQSxhQUpOOztBQUFBLGtCQU1VQyxzREFBUSxDQUFDLENBQUQsQ0FObEI7QUFBQSxNQU1mQyxRQU5lO0FBQUEsTUFNTEMsV0FOSzs7QUFTckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaOztBQURjLGFBRUVDLFlBRkY7QUFBQTtBQUFBOztBQUFBO0FBQUEsdU1BRWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FSLGdCQUFnQixDQUFDUixFQUFELENBRHhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmE7QUFBQTtBQUFBOztBQUtiZ0IsZ0JBQVk7QUFDYixHQU5PLEVBTUwsQ0FBQ2hCLEVBQUQsRUFBS1csUUFBTCxDQU5LLENBQVQ7O0FBUUNNLGtCQUFnQixHQUFHLDRCQUFNO0FBQ3ZCTCxlQUFXLENBQUNELFFBQVEsRUFBVCxDQUFYO0FBQ0QsR0FGRDs7QUFLRSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixhQUFhLElBQUlBLGFBQWEsQ0FBQ1MsSUFBbkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVAsUUFBSixDQUhGLEVBSUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUNELFFBQVEsRUFBVCxDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixFQU1FO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVAsU0FBUyxDQUFDSyxhQUFELEVBQWdCRSxRQUFoQixDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixDQURGO0FBVUQsQ0FoQ0g7O0dBQU1kLE87VUFDV0UscUQ7OztLQURYRixPO0FBbUNTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2RvdHRvL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHQnXG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0J1xuXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBEZXN0cnVjdHVyaW5nIG91ciByb3V0ZXIgb2JqZWN0XG4gIGNvbnN0IHsgYWRkVG9DYXJ0LCBwcm9kdWN0c0luQ2FydCwgdGVzdCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcbiAgY29uc3QgeyBnZXRTaW5nbGVQcm9kdWN0LCBzaW5nbGVQcm9kdWN0IH0gPSB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KVxuXG4gIGxldCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpXG4gXG5cbiB1c2VFZmZlY3QoKCkgPT4ge1xuICAgY29uc29sZS5sb2coJ2NhbGwgZWZmZWN0JylcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3QgKCkge1xuICAgICAgYXdhaXQgZ2V0U2luZ2xlUHJvZHVjdChpZClcbiAgICB9XG4gICAgZmV0Y2hQcm9kdWN0KClcbiAgfSwgW2lkLCBxdWFudGl0eV0pXG5cbiAgaW5jcmVhc2VRdWFudGl0eSA9ICgpID0+IHtcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSsrKVxuICB9XG5cbiAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UHJvZHVjdCBwYWdlPC9oMT5cbiAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QgJiYgc2luZ2xlUHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgPHA+e3F1YW50aXR5fTwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRRdWFudGl0eShxdWFudGl0eSsrKX0+QWRkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24+UmVtb3ZlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHNpbmdsZVByb2R1Y3QsIHF1YW50aXR5KX0+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ })

})