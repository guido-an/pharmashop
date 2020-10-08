webpackHotUpdate_N_E("pages/prodotto/[id]",{

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Product = function Product() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__[\"ProductContext\"]),\n      getSingleProduct = _useContext2.getSingleProduct,\n      singleProduct = _useContext2.singleProduct;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      displayExceedMsg = _useState[0],\n      setDisplayExceedMsg = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    document.getElementById('quantity').value = 1;\n\n    function fetchProduct() {\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    function _fetchProduct() {\n      _fetchProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    fetchProduct();\n  }, [id]);\n\n  var exceedQuantity = function exceedQuantity(singleProduct) {\n    console.log('exced', document.getElementById('quantity').value, singleProduct);\n\n    if (document.getElementById('quantity').value > singleProduct.effectiveStock) {\n      setDisplayExceedMsg(true);\n    } else {\n      setDisplayExceedMsg(false);\n    }\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"input\", {\n    onChange: function onChange() {\n      return exceedQuantity(singleProduct);\n    },\n    id: \"quantity\",\n    type: \"number\",\n    min: \"0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return addToCart(singleProduct, document.getElementById('quantity').value);\n    },\n    disabled: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"), displayExceedMsg && __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 30\n    }\n  }, \"Sono rimaste \", singleProduct.effectiveStock, \" unit\\xE0 di questo prodotto\"));\n};\n\n_s(Product, \"nFIWlpxf0FOJqS+mU6+PdUtUXGo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZG90dG8vLmpzP2ZjMmIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0c0luQ2FydCIsIlByb2R1Y3RDb250ZXh0IiwiZ2V0U2luZ2xlUHJvZHVjdCIsInNpbmdsZVByb2R1Y3QiLCJ1c2VTdGF0ZSIsImRpc3BsYXlFeGNlZWRNc2ciLCJzZXREaXNwbGF5RXhjZWVkTXNnIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZmV0Y2hQcm9kdWN0IiwiZXhjZWVkUXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwiZWZmZWN0aXZlU3RvY2siLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRG9CLE1BRVpDLEVBRlksR0FFTEYsTUFBTSxDQUFDRyxLQUZGLENBRVpELEVBRlksRUFFUzs7QUFGVCxvQkFHa0JFLHdEQUFVLENBQUNDLGlFQUFELENBSDVCO0FBQUEsTUFHWkMsU0FIWSxlQUdaQSxTQUhZO0FBQUEsTUFHREMsY0FIQyxlQUdEQSxjQUhDOztBQUFBLHFCQUl3Qkgsd0RBQVUsQ0FBQ0ksdUVBQUQsQ0FKbEM7QUFBQSxNQUlaQyxnQkFKWSxnQkFJWkEsZ0JBSlk7QUFBQSxNQUlNQyxhQUpOLGdCQUlNQSxhQUpOOztBQUFBLGtCQUs0QkMsc0RBQVEsQ0FBQyxLQUFELENBTHBDO0FBQUEsTUFLYkMsZ0JBTGE7QUFBQSxNQUtLQyxtQkFMTDs7QUFPbkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQXBDLEdBQTRDLENBQTVDOztBQURjLGFBRUVDLFlBRkY7QUFBQTtBQUFBOztBQUFBO0FBQUEsdU1BRWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FULGdCQUFnQixDQUFDUCxFQUFELENBRHhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmE7QUFBQTtBQUFBOztBQUtiZ0IsZ0JBQVk7QUFDYixHQU5PLEVBTUwsQ0FBQ2hCLEVBQUQsQ0FOSyxDQUFUOztBQVFDLE1BQU1pQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNULGFBQUQsRUFBbUI7QUFDeENVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBekQsRUFBZ0VQLGFBQWhFOztBQUNBLFFBQUdLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsR0FBNENQLGFBQWEsQ0FBQ1ksY0FBN0QsRUFBNEU7QUFDMUVULHlCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFDRCxLQUZELE1BRU87QUFDTEEseUJBQW1CLENBQUMsS0FBRCxDQUFuQjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJSCxhQUFhLElBQUlBLGFBQWEsQ0FBQ2EsSUFBbkMsQ0FGRixFQUdFO0FBQU8sWUFBUSxFQUFFO0FBQUEsYUFBTUosY0FBYyxDQUFDVCxhQUFELENBQXBCO0FBQUEsS0FBakI7QUFBc0QsTUFBRSxFQUFDLFVBQXpEO0FBQW9FLFFBQUksRUFBQyxRQUF6RTtBQUFrRixPQUFHLEVBQUMsR0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNSixTQUFTLENBQUNJLGFBQUQsRUFBZ0JLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEQsQ0FBZjtBQUFBLEtBQWpCO0FBQTRGLFlBQVEsTUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtHTCxnQkFBZ0IsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFpQkYsYUFBYSxDQUFDWSxjQUEvQixpQ0FMdkIsQ0FERjtBQVNELENBakNIOztHQUFNdkIsTztVQUNXRSxxRDs7O0tBRFhGLE87QUFvQ1NBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZG90dG8vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcbmltcG9ydCB7IFByb2R1Y3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUHJvZHVjdENvbnRleHQnXG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7IC8vIERlc3RydWN0dXJpbmcgb3VyIHJvdXRlciBvYmplY3RcbiAgY29uc3QgeyBhZGRUb0NhcnQsIHByb2R1Y3RzSW5DYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuICBjb25zdCB7IGdldFNpbmdsZVByb2R1Y3QsIHNpbmdsZVByb2R1Y3QgfSA9IHVzZUNvbnRleHQoUHJvZHVjdENvbnRleHQpXG4gIGNvbnN0IFtkaXNwbGF5RXhjZWVkTXNnLCBzZXREaXNwbGF5RXhjZWVkTXNnXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSA9IDFcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdCAoKSB7XG4gICAgICAgIGF3YWl0IGdldFNpbmdsZVByb2R1Y3QoaWQpXG4gICAgICB9XG4gICAgICBmZXRjaFByb2R1Y3QoKVxuICAgIH0sIFtpZF0pXG4gICBcbiAgICBjb25zdCBleGNlZWRRdWFudGl0eSA9IChzaW5nbGVQcm9kdWN0KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXhjZWQnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSwgc2luZ2xlUHJvZHVjdClcbiAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWFudGl0eScpLnZhbHVlID4gc2luZ2xlUHJvZHVjdC5lZmZlY3RpdmVTdG9jayl7XG4gICAgICAgIHNldERpc3BsYXlFeGNlZWRNc2codHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpc3BsYXlFeGNlZWRNc2coZmFsc2UpXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UHJvZHVjdCBwYWdlPC9oMT5cbiAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QgJiYgc2luZ2xlUHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKSA9PiBleGNlZWRRdWFudGl0eShzaW5nbGVQcm9kdWN0KX0gaWQ9XCJxdWFudGl0eVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCI+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoc2luZ2xlUHJvZHVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUpfSBkaXNhYmxlZD5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgICB7ZGlzcGxheUV4Y2VlZE1zZyAmJiA8cD5Tb25vIHJpbWFzdGUge3NpbmdsZVByb2R1Y3QuZWZmZWN0aXZlU3RvY2t9IHVuaXTDoCBkaSBxdWVzdG8gcHJvZG90dG88L3A+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ })

})