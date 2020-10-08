webpackHotUpdate_N_E("pages/prodotto/[id]",{

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Product = function Product() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      addToCart = _useContext.addToCart,\n      productsInCart = _useContext.productsInCart,\n      test = _useContext.test;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__[\"ProductContext\"]),\n      getSingleProduct = _useContext2.getSingleProduct,\n      singleProduct = _useContext2.singleProduct; // let [quantity, setQuantity] = useState(1)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('call effect');\n\n    function fetchProduct() {\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    function _fetchProduct() {\n      _fetchProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleProduct(id);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchProduct.apply(this, arguments);\n    }\n\n    fetchProduct();\n  }, [id]); // const increaseQuantity = () => {\n  //   setQuantity(quantity++)\n  // }\n  //  const quantity = document.getElementById('test').value\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, quantity), __jsx(\"input\", {\n    id: \"test\",\n    type: \"number\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return addToCart(singleProduct);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"));\n};\n\n_s(Product, \"2oGec2DnMgg4e7D9dN/C6z/gr9M=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZG90dG8vLmpzP2ZjMmIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0c0luQ2FydCIsInRlc3QiLCJQcm9kdWN0Q29udGV4dCIsImdldFNpbmdsZVByb2R1Y3QiLCJzaW5nbGVQcm9kdWN0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImZldGNoUHJvZHVjdCIsIm5hbWUiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURvQixNQUVaQyxFQUZZLEdBRUxGLE1BQU0sQ0FBQ0csS0FGRixDQUVaRCxFQUZZLEVBRVM7O0FBRlQsb0JBR3dCRSx3REFBVSxDQUFDQyxpRUFBRCxDQUhsQztBQUFBLE1BR1pDLFNBSFksZUFHWkEsU0FIWTtBQUFBLE1BR0RDLGNBSEMsZUFHREEsY0FIQztBQUFBLE1BR2VDLElBSGYsZUFHZUEsSUFIZjs7QUFBQSxxQkFJd0JKLHdEQUFVLENBQUNLLHVFQUFELENBSmxDO0FBQUEsTUFJWkMsZ0JBSlksZ0JBSVpBLGdCQUpZO0FBQUEsTUFJTUMsYUFKTixnQkFJTUEsYUFKTixFQU1wQjs7O0FBR0RDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaOztBQURjLGFBRUVDLFlBRkY7QUFBQTtBQUFBOztBQUFBO0FBQUEsdU1BRWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1FMLGdCQUFnQixDQUFDUixFQUFELENBRHhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmE7QUFBQTtBQUFBOztBQUtiYSxnQkFBWTtBQUNiLEdBTk8sRUFNTCxDQUFDYixFQUFELENBTkssQ0FBVCxDQVRxQixDQWlCcEI7QUFDQTtBQUVBO0FBRUE7O0FBQ0UsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVMsYUFBYSxJQUFJQSxhQUFhLENBQUNLLElBQW5DLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLFFBQUosQ0FIRixFQUlFO0FBQU8sTUFBRSxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQU1FO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVgsU0FBUyxDQUFDSyxhQUFELENBQWY7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLENBREY7QUFVRCxDQWpDSDs7R0FBTVosTztVQUNXRSxxRDs7O0tBRFhGLE87QUFvQ1NBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZG90dG8vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcbmltcG9ydCB7IFByb2R1Y3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUHJvZHVjdENvbnRleHQnXG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7IC8vIERlc3RydWN0dXJpbmcgb3VyIHJvdXRlciBvYmplY3RcbiAgY29uc3QgeyBhZGRUb0NhcnQsIHByb2R1Y3RzSW5DYXJ0LCB0ZXN0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuICBjb25zdCB7IGdldFNpbmdsZVByb2R1Y3QsIHNpbmdsZVByb2R1Y3QgfSA9IHVzZUNvbnRleHQoUHJvZHVjdENvbnRleHQpXG5cbiAgLy8gbGV0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcbiBcblxuIHVzZUVmZmVjdCgoKSA9PiB7XG4gICBjb25zb2xlLmxvZygnY2FsbCBlZmZlY3QnKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdCAoKSB7XG4gICAgICBhd2FpdCBnZXRTaW5nbGVQcm9kdWN0KGlkKVxuICAgIH1cbiAgICBmZXRjaFByb2R1Y3QoKVxuICB9LCBbaWRdKVxuXG4gIC8vIGNvbnN0IGluY3JlYXNlUXVhbnRpdHkgPSAoKSA9PiB7XG4gIC8vICAgc2V0UXVhbnRpdHkocXVhbnRpdHkrKylcblxuICAvLyB9XG5cbiAgLy8gIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKS52YWx1ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UHJvZHVjdCBwYWdlPC9oMT5cbiAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QgJiYgc2luZ2xlUHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgPHA+e3F1YW50aXR5fTwvcD5cbiAgICAgICAgPGlucHV0IGlkPVwidGVzdFwiIHR5cGU9XCJudW1iZXJcIj48L2lucHV0PlxuICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoc2luZ2xlUHJvZHVjdCl9PkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ })

})