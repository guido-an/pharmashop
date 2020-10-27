webpackHotUpdate_N_E("pages/user/profilo",{

/***/ "./pages/user/profilo.js":
/*!*******************************!*\
  !*** ./pages/user/profilo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/user/profilo.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar service = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar Profilo = function Profilo() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__[\"UserContext\"]),\n      user = _useContext.user,\n      updateUser = _useContext.updateUser;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    firstName: '',\n    lastName: '',\n    email: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n\n              try {\n                updateUser(form);\n              } catch (err) {\n                console.log(err);\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Profilo\"), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: form.firstName,\n    placeholder: \"* Nome\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        firstName: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.lastName,\n    placeholder: \"* Cognome\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        lastName: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"email\",\n    value: form.email,\n    placeholder: \"* Email\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"click\")));\n};\n\n_s(Profilo, \"eZh1SGWNWJLJ6lmnJt91iTk1iHw=\");\n\n_c = Profilo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profilo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Profilo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9wcm9maWxvLmpzP2NhNDEiXSwibmFtZXMiOlsic2VydmljZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJQcm9maWxvIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwidXNlciIsInVwZGF0ZVVzZXIiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLG9CQUNTQyx3REFBVSxDQUFDQyxpRUFBRCxDQURuQjtBQUFBLE1BQ1pDLElBRFksZUFDWkEsSUFEWTtBQUFBLE1BQ05DLFVBRE0sZUFDTkEsVUFETTs7QUFBQSxrQkFHSUMsc0RBQVEsQ0FBQztBQUMvQkMsYUFBUyxFQUFFLEVBRG9CO0FBRS9CQyxZQUFRLEVBQUUsRUFGcUI7QUFHL0JDLFNBQUssRUFBRTtBQUh3QixHQUFELENBSFo7QUFBQSxNQUdiQyxJQUhhO0FBQUEsTUFHUEMsT0FITzs7QUFTcEIsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLGVBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxrQkFBSTtBQUNBVCwwQkFBVSxDQUFDSyxJQUFELENBQVY7QUFDSCxlQUZELENBRUUsT0FBT0ssR0FBUCxFQUFZO0FBQ1pDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEOztBQU5rQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQVNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRUYsSUFBSSxDQUFDSCxTQUEvQjtBQUEwQyxlQUFXLEVBQUMsUUFBdEQ7QUFBK0QsWUFBUSxNQUF2RTtBQUF3RSxZQUFRLEVBQUUsa0JBQUNNLENBQUQ7QUFBQSxhQUFPRixPQUFPLGlDQUFNRCxJQUFOO0FBQVlILGlCQUFTLEVBQUVNLENBQUMsQ0FBQ0ssTUFBRixDQUFTQztBQUFoQyxTQUFkO0FBQUEsS0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVULElBQUksQ0FBQ0YsUUFBL0I7QUFBeUMsZUFBVyxFQUFDLFdBQXJEO0FBQWlFLFlBQVEsTUFBekU7QUFBMEUsWUFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsYUFBT0YsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRixnQkFBUSxFQUFFSyxDQUFDLENBQUNLLE1BQUYsQ0FBU0M7QUFBL0IsU0FBZDtBQUFBLEtBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsU0FBSyxFQUFFVCxJQUFJLENBQUNELEtBQWhDO0FBQXVDLGVBQVcsRUFBQyxTQUFuRDtBQUE2RCxZQUFRLE1BQXJFO0FBQXNFLFlBQVEsRUFBRSxrQkFBQ0ksQ0FBRDtBQUFBLGFBQU9GLE9BQU8saUNBQU1ELElBQU47QUFBWUQsYUFBSyxFQUFFSSxDQUFDLENBQUNLLE1BQUYsQ0FBU0M7QUFBNUIsU0FBZDtBQUFBLEtBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixDQUZGLENBREY7QUFXRCxDQTdCRDs7R0FBTWxCLE87O0tBQUFBLE87QUE4QlNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlci9wcm9maWxvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUFBfQVBJLFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbn0pXG5cbmNvbnN0IFByb2ZpbG8gPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlciwgdXBkYXRlVXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcblxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICAgIHVwZGF0ZVVzZXIoZm9ybSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UHJvZmlsbzwvaDE+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9JyogTm9tZScgcmVxdWlyZWQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtmb3JtLmxhc3ROYW1lfSBwbGFjZWhvbGRlcj0nKiBDb2dub21lJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgdmFsdWU9e2Zvcm0uZW1haWx9IHBsYWNlaG9sZGVyPScqIEVtYWlsJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxidXR0b24+Y2xpY2s8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/profilo.js\n");

/***/ })

})