webpackHotUpdate_N_E("pages/pagamento",{

/***/ "./pages/pagamento.js":
/*!****************************!*\
  !*** ./pages/pagamento.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutForm */ \"./components/CheckoutForm.js\");\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/pagamento.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // Make sure to call loadStripe outside of a component’s render to avoid\n// recreating the Stripe object on every render.\n// loadStripe is initialized with a fake API key.\n// Sign in to see examples pre-filled with your key.\n\nvar promise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__[\"loadStripe\"])(\"pk_test_lzaKIGxw3w0XwEjC0fDoAKm400a2bk4nzj\");\n\nvar Pagamento = function Pagamento() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      productsInCart = _useContext.productsInCart,\n      totalPrice = _useContext.totalPrice,\n      calculateTotalPrice = _useContext.calculateTotalPrice;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    calculateTotalPrice();\n  }, [productsInCart]);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Pagamento: \", totalPrice), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__[\"Elements\"], {\n    stripe: promise,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(_components_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Pagamento, \"Di1Rf0IRXOaee4FJUWwgJAze3tE=\");\n\n_c = Pagamento;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagamento);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagamento\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnYW1lbnRvLmpzPzk2OTgiXSwibmFtZXMiOlsicHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiUGFnYW1lbnRvIiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwicHJvZHVjdHNJbkNhcnQiLCJ0b3RhbFByaWNlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBR0Msb0VBQVUsQ0FBQ0MsNENBQUQsQ0FBMUI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLG9CQUNzQ0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FEaEQ7QUFBQSxNQUNkQyxjQURjLGVBQ2RBLGNBRGM7QUFBQSxNQUNFQyxVQURGLGVBQ0VBLFVBREY7QUFBQSxNQUNjQyxtQkFEZCxlQUNjQSxtQkFEZDs7QUFFdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCx1QkFBbUI7QUFDcEIsR0FGUSxFQUVOLENBQUNGLGNBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZ0JDLFVBQWhCLENBREYsRUFFRSxNQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFUCxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURGO0FBUUQsQ0FkRDs7R0FBTUcsUzs7S0FBQUEsUztBQWVTQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BhZ2FtZW50by5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcydcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnXG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCdcblxuLy8gTWFrZSBzdXJlIHRvIGNhbGwgbG9hZFN0cmlwZSBvdXRzaWRlIG9mIGEgY29tcG9uZW504oCZcyByZW5kZXIgdG8gYXZvaWRcbi8vIHJlY3JlYXRpbmcgdGhlIFN0cmlwZSBvYmplY3Qgb24gZXZlcnkgcmVuZGVyLlxuLy8gbG9hZFN0cmlwZSBpcyBpbml0aWFsaXplZCB3aXRoIGEgZmFrZSBBUEkga2V5LlxuLy8gU2lnbiBpbiB0byBzZWUgZXhhbXBsZXMgcHJlLWZpbGxlZCB3aXRoIHlvdXIga2V5LlxuY29uc3QgcHJvbWlzZSA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1BLKVxuXG5jb25zdCBQYWdhbWVudG8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHNJbkNhcnQsIHRvdGFsUHJpY2UsIGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpXG4gIH0sIFtwcm9kdWN0c0luQ2FydF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlBhZ2FtZW50bzoge3RvdGFsUHJpY2V9PC9oMT5cbiAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3Byb21pc2V9PlxuICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgICA8L0VsZW1lbnRzPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQYWdhbWVudG9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pagamento.js\n");

/***/ })

})