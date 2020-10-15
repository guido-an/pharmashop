webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/checkout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar service = axios__WEBPACK_IMPORTED_MODULE_7___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nvar Checkout = function Checkout() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__[\"CartContext\"]),\n      totalPrice = _useContext.totalPrice,\n      productsInCart = _useContext.productsInCart,\n      shippingInfo = _useContext.shippingInfo,\n      setShippingInfo = _useContext.setShippingInfo;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_5__[\"UserContext\"]),\n      user = _useContext2.user;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    firstName: '',\n    lastName: '',\n    vatNumber: '',\n    streetAddress: '',\n    city: '',\n    province: '',\n    zipCode: '',\n    telephone: '',\n    email: '',\n    additionalNotes: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(user, 'user checkout');\n              e.preventDefault();\n\n              try {\n                setShippingInfo(form);\n                createOrder();\n              } catch (err) {\n                console.log(err);\n              }\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var createOrder = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var response, orderId;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return service.post('/create-order', {\n                user: user._id,\n                shippingInfo: shippingInfo,\n                totalPrice: totalPrice,\n                paid: false,\n                productsInCart: productsInCart\n              });\n\n            case 2:\n              response = _context2.sent;\n              orderId = response.data.orderId;\n              localStorage.setItem('orderId', orderId);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function createOrder() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"Checkout\"), __jsx(\"form\", {\n    onClick: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: form.firstName,\n    placeholder: \"* Nome\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        firstName: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.lastName,\n    placeholder: \"* Cognome\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        lastName: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.vatNumber,\n    placeholder: \"* P.IVA / Codice Fiscale\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        vatNumber: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.streetAddress,\n    placeholder: \"* Indirizzo\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        streetAddress: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.streetAddress,\n    placeholder: \"* Citt\\xE0\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        city: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.province,\n    placeholder: \"* Provincia\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        province: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.zipCode,\n    placeholder: \"* C.A.P.\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        zipCode: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: form.telephone,\n    placeholder: \"* Telefono\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        telephone: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"email\",\n    value: form.email,\n    placeholder: \"* Email\",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"textarea\",\n    value: form.additionalNotes,\n    placeholder: \"Note aggiuntive \",\n    required: true,\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        additionalNotes: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"/pagamento\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 33\n    }\n  }, \"Prosegui al pagamento\"))));\n};\n\n_s(Checkout, \"hJ6Kb0UGAv0G2NAksxs6M8hDYg0=\");\n\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanM/N2RkNCJdLCJuYW1lcyI6WyJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIndpdGhDcmVkZW50aWFscyIsIkNoZWNrb3V0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwidG90YWxQcmljZSIsInByb2R1Y3RzSW5DYXJ0Iiwic2hpcHBpbmdJbmZvIiwic2V0U2hpcHBpbmdJbmZvIiwiVXNlckNvbnRleHQiLCJ1c2VyIiwidXNlU3RhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInZhdE51bWJlciIsInN0cmVldEFkZHJlc3MiLCJjaXR5IiwicHJvdmluY2UiLCJ6aXBDb2RlIiwidGVsZXBob25lIiwiZW1haWwiLCJhZGRpdGlvbmFsTm90ZXMiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVPcmRlciIsImVyciIsInBvc3QiLCJfaWQiLCJwYWlkIiwicmVzcG9uc2UiLCJvcmRlcklkIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMzQkMsU0FBTyxFQUFFQyx1QkFEa0I7QUFFM0JDLGlCQUFlLEVBQUU7QUFGVSxDQUFiLENBQWhCOztBQUtBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxvQkFDaURDLHdEQUFVLENBQUNDLGlFQUFELENBRDNEO0FBQUEsTUFDYkMsVUFEYSxlQUNiQSxVQURhO0FBQUEsTUFDREMsY0FEQyxlQUNEQSxjQURDO0FBQUEsTUFDZUMsWUFEZixlQUNlQSxZQURm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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsU0FBSyxFQUFFbEIsSUFBSSxDQUFDRCxlQUFuQztBQUFvRCxlQUFXLEVBQUMsa0JBQWhFO0FBQW1GLFlBQVEsTUFBM0Y7QUFBNEYsWUFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsYUFBT0YsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRCx1QkFBZSxFQUFFSSxDQUFDLENBQUNjLE1BQUYsQ0FBU0M7QUFBdEMsU0FBZDtBQUFBLEtBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXhCLENBWkYsQ0FGRixDQURGO0FBbUJELENBMUREOztHQUFNdEMsUTs7S0FBQUEsUTtBQTJEU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaGVja291dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NhcnRDb250ZXh0J1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Vc2VyQ29udGV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQUF9BUEksXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxufSlcblxuY29uc3QgQ2hlY2tvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG90YWxQcmljZSwgcHJvZHVjdHNJbkNhcnQsIHNoaXBwaW5nSW5mbywgc2V0U2hpcHBpbmdJbmZvIH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KVxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIHZhdE51bWJlcjogJycsXG4gICAgc3RyZWV0QWRkcmVzczogJycsXG4gICAgY2l0eTogJycsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIHppcENvZGU6ICcnLFxuICAgIHRlbGVwaG9uZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIGFkZGl0aW9uYWxOb3RlczogJydcbiAgfSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlciBjaGVja291dCcpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdHJ5IHtcbiAgICAgIHNldFNoaXBwaW5nSW5mbyhmb3JtKVxuICAgICAgY3JlYXRlT3JkZXIoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfVxuICBjb25zdCBjcmVhdGVPcmRlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlcnZpY2UucG9zdCgnL2NyZWF0ZS1vcmRlcicsIHtcbiAgICAgIHVzZXI6IHVzZXIuX2lkLFxuICAgICAgc2hpcHBpbmdJbmZvLFxuICAgICAgdG90YWxQcmljZSxcbiAgICAgIHBhaWQ6IGZhbHNlLFxuICAgICAgcHJvZHVjdHNJbkNhcnRcbiAgICB9KVxuICAgIGNvbnN0IG9yZGVySWQgPSByZXNwb25zZS5kYXRhLm9yZGVySWRcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJJZCcsIG9yZGVySWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q2hlY2tvdXQ8L2gxPlxuICAgICAgPGZvcm0gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX0gcGxhY2Vob2xkZXI9JyogTm9tZScgcmVxdWlyZWQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtmb3JtLmxhc3ROYW1lfSBwbGFjZWhvbGRlcj0nKiBDb2dub21lJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Zm9ybS52YXROdW1iZXJ9IHBsYWNlaG9sZGVyPScqIFAuSVZBIC8gQ29kaWNlIEZpc2NhbGUnIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHZhdE51bWJlcjogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Zm9ybS5zdHJlZXRBZGRyZXNzfSBwbGFjZWhvbGRlcj0nKiBJbmRpcml6em8nIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHN0cmVldEFkZHJlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e2Zvcm0uc3RyZWV0QWRkcmVzc30gcGxhY2Vob2xkZXI9JyogQ2l0dMOgJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBjaXR5OiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgey8qIHdlIG5lZWQgbGlzdCBvZiBwcm92aW5jaWVzIGhlcmUgKi99XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Zm9ybS5wcm92aW5jZX0gcGxhY2Vob2xkZXI9JyogUHJvdmluY2lhJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwcm92aW5jZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Zm9ybS56aXBDb2RlfSBwbGFjZWhvbGRlcj0nKiBDLkEuUC4nIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHppcENvZGU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e2Zvcm0udGVsZXBob25lfSBwbGFjZWhvbGRlcj0nKiBUZWxlZm9ubycgcmVxdWlyZWQgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgdGVsZXBob25lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J2VtYWlsJyB2YWx1ZT17Zm9ybS5lbWFpbH0gcGxhY2Vob2xkZXI9JyogRW1haWwnIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHRhcmVhJyB2YWx1ZT17Zm9ybS5hZGRpdGlvbmFsTm90ZXN9IHBsYWNlaG9sZGVyPSdOb3RlIGFnZ2l1bnRpdmUgJyByZXF1aXJlZCBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBhZGRpdGlvbmFsTm90ZXM6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICA8TGluayBocmVmPScvcGFnYW1lbnRvJz48YnV0dG9uPlByb3NlZ3VpIGFsIHBhZ2FtZW50bzwvYnV0dG9uPjwvTGluaz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/checkout.js\n");

/***/ })

})