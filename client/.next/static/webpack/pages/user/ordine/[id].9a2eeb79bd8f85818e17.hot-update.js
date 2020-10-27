webpackHotUpdate_N_E("pages/user/ordine/[id]",{

/***/ "./pages/user/ordine/[id].js":
/*!***********************************!*\
  !*** ./pages/user/ordine/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/UserContext */ \"./contexts/UserContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/ordine/[id].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Ordine = function Ordine() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var id = router.query.id; // Destructuring our router object\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]),\n      getSingleOrder = _useContext.getSingleOrder;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      order = _useState[0],\n      setOrder = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function getOrderFromDB() {\n      return _getOrderFromDB.apply(this, arguments);\n    }\n\n    function _getOrderFromDB() {\n      _getOrderFromDB = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var orderFromDB;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return getSingleOrder(id);\n\n              case 2:\n                orderFromDB = _context.sent;\n                setOrder(orderFromDB);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getOrderFromDB.apply(this, arguments);\n    }\n\n    getOrderFromDB();\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 8\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, \"Pagina ordine\"), id);\n};\n\n_s(Ordine, \"eDPVvKZjFatP0ZZ27FelfgdnG3c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Ordine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ordine);\n\nvar _c;\n\n$RefreshReg$(_c, \"Ordine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9vcmRpbmUvLmpzPzY0ZWEiXSwibmFtZXMiOlsiT3JkaW5lIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImdldFNpbmdsZU9yZGVyIiwidXNlU3RhdGUiLCJvcmRlciIsInNldE9yZGVyIiwidXNlRWZmZWN0IiwiZ2V0T3JkZXJGcm9tREIiLCJvcmRlckZyb21EQiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHFCLE1BRWJDLEVBRmEsR0FFTkYsTUFBTSxDQUFDRyxLQUZELENBRWJELEVBRmEsRUFFUTs7QUFGUixvQkFNTUUsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FOaEI7QUFBQSxNQU1iQyxjQU5hLGVBTWJBLGNBTmE7O0FBQUEsa0JBT0tDLHNEQUFRLENBQUMsRUFBRCxDQVBiO0FBQUEsTUFPZEMsS0FQYztBQUFBLE1BT1BDLFFBUE87O0FBVXJCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNHQyxjQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlNQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQzZCTCxjQUFjLENBQUNKLEVBQUQsQ0FEM0M7O0FBQUE7QUFDU1UsMkJBRFQ7QUFFR0gsd0JBQVEsQ0FBQ0csV0FBRCxDQUFSOztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQUtaRCxrQkFBYztBQUNqQixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUcsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLVCxFQUZMLENBREo7QUFhRixDQS9CRDs7R0FBTUgsTTtVQUNTRSxxRDs7O0tBRFRGLE07QUFpQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9vcmRpbmUvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuY29uc3QgT3JkaW5lID0gKCkgPT4ge1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7IC8vIERlc3RydWN0dXJpbmcgb3VyIHJvdXRlciBvYmplY3RcblxuXG5cbmNvbnN0IHsgZ2V0U2luZ2xlT3JkZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5jb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKFtdKVxuXG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0T3JkZXJGcm9tREIoKXtcbiAgICAgICBjb25zdCBvcmRlckZyb21EQiA9IGF3YWl0IGdldFNpbmdsZU9yZGVyKGlkKVxuICAgICAgIHNldE9yZGVyKG9yZGVyRnJvbURCKVxuICAgIH1cbiAgICBnZXRPcmRlckZyb21EQigpXG59LCBbXSlcblxuICAgcmV0dXJuKFxuICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxoMT5QYWdpbmEgb3JkaW5lPC9oMT5cbiAgICAgICAgICAge2lkfVxuICAgICAgICAgICB7Lyoge29yZGVycy5tYXAob3JkZXIgPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtvcmRlci5faWR9PlxuICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+T1JERVI8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLl9pZH08L3A+XG4gICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLmNyZWF0ZWRfYXR9PC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIH0pfSAqL31cbiAgICAgICA8L2Rpdj5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/ordine/[id].js\n");

/***/ })

})