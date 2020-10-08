webpackHotUpdate_N_E("pages/prodotto/[id]",{

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Product = function Product() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__[\"ProductContext\"]),\n      getSingleProduct = _useContext2.getSingleProduct,\n      singleProduct = _useContext2.singleProduct;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.getElementById('quantity').value = 1;\n\n    function fetchProduct() {\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    function _fetchProduct() {\n      _fetchProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    fetchProduct();\n  }, [id]);\n\n  var exceedQuantity = function exceedQuantity(product) {\n    console.log('exced', document.getElementById('quantity').value);\n\n    if (document.getElementById('quantity').value >= product.boughtQuantity) {\n      console.log('ttoo much');\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"input\", {\n    onChange: exceedQuantity,\n    id: \"quantity\",\n    type: \"number\",\n    min: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return addToCart(singleProduct, document.getElementById('quantity').value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"));\n};\n\n_s(Product, \"sI0+oJ3WDwHRmo4MosqMuAV3t9o=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZG90dG8vLmpzP2ZjMmIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0c0luQ2FydCIsIlByb2R1Y3RDb250ZXh0IiwiZ2V0U2luZ2xlUHJvZHVjdCIsInNpbmdsZVByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJmZXRjaFByb2R1Y3QiLCJleGNlZWRRdWFudGl0eSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiYm91Z2h0UXVhbnRpdHkiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRG9CLE1BRVpDLEVBRlksR0FFTEYsTUFBTSxDQUFDRyxLQUZGLENBRVpELEVBRlksRUFFUzs7QUFGVCxvQkFHa0JFLHdEQUFVLENBQUNDLGlFQUFELENBSDVCO0FBQUEsTUFHWkMsU0FIWSxlQUdaQSxTQUhZO0FBQUEsTUFHREMsY0FIQyxlQUdEQSxjQUhDOztBQUFBLHFCQUl3Qkgsd0RBQVUsQ0FBQ0ksdUVBQUQsQ0FKbEM7QUFBQSxNQUlaQyxnQkFKWSxnQkFJWkEsZ0JBSlk7QUFBQSxNQUlNQyxhQUpOLGdCQUlNQSxhQUpOOztBQU1uQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsR0FBNEMsQ0FBNUM7O0FBRGMsYUFFRUMsWUFGRjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1TUFFYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUU4sZ0JBQWdCLENBQUNQLEVBQUQsQ0FEeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGYTtBQUFBO0FBQUE7O0FBS2JhLGdCQUFZO0FBQ2IsR0FOTyxFQU1MLENBQUNiLEVBQUQsQ0FOSyxDQUFUOztBQVFDLE1BQU1jLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2xDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQXpEOztBQUNBLFFBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsSUFBNkNHLE9BQU8sQ0FBQ0csY0FBeEQsRUFBdUU7QUFDckVGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRDtBQUNGLEdBTEQ7O0FBUUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVQsYUFBYSxJQUFJQSxhQUFhLENBQUNXLElBQW5DLENBRkYsRUFHRTtBQUFPLFlBQVEsRUFBRUwsY0FBakI7QUFBaUMsTUFBRSxFQUFDLFVBQXBDO0FBQStDLFFBQUksRUFBQyxRQUFwRDtBQUE2RCxPQUFHLEVBQUMsR0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVixTQUFTLENBQUNJLGFBQUQsRUFBZ0JFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEQsQ0FBZjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsQ0FERjtBQVFELENBOUJIOztHQUFNZixPO1VBQ1dFLHFEOzs7S0FEWEYsTztBQWlDU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kb3R0by9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0J1xuaW1wb3J0IHsgUHJvZHVjdENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Qcm9kdWN0Q29udGV4dCdcblxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gRGVzdHJ1Y3R1cmluZyBvdXIgcm91dGVyIG9iamVjdFxuICBjb25zdCB7IGFkZFRvQ2FydCwgcHJvZHVjdHNJbkNhcnQgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXG4gIGNvbnN0IHsgZ2V0U2luZ2xlUHJvZHVjdCwgc2luZ2xlUHJvZHVjdCB9ID0gdXNlQ29udGV4dChQcm9kdWN0Q29udGV4dClcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUgPSAxXG4gICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2R1Y3QgKCkge1xuICAgICAgICBhd2FpdCBnZXRTaW5nbGVQcm9kdWN0KGlkKVxuICAgICAgfVxuICAgICAgZmV0Y2hQcm9kdWN0KClcbiAgICB9LCBbaWRdKVxuICAgXG4gICAgY29uc3QgZXhjZWVkUXVhbnRpdHkgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2V4Y2VkJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUpXG4gICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSA+PSBwcm9kdWN0LmJvdWdodFF1YW50aXR5KXtcbiAgICAgICAgY29uc29sZS5sb2coJ3R0b28gbXVjaCcpXG4gICAgICB9XG4gICAgfVxuICAgIFxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlByb2R1Y3QgcGFnZTwvaDE+XG4gICAgICAgIDxwPntzaW5nbGVQcm9kdWN0ICYmIHNpbmdsZVByb2R1Y3QubmFtZX08L3A+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZXhjZWVkUXVhbnRpdHl9IGlkPVwicXVhbnRpdHlcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHNpbmdsZVByb2R1Y3QsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFudGl0eScpLnZhbHVlKX0+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ })

})