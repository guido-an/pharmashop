module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/prodotto/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: CartContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartContext\", function() { return CartContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/CartContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst CartContextProvider = props => {\n  const {\n    0: productsInCart,\n    1: setProductsInCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: renderPage,\n    1: setRenderPage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // without this localStorage in addProductToLocalStorage would be undefined (rendered on the server)\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const productsFromLocalStorage = JSON.parse(localStorage.getItem('productsInCart'));\n    setProductsInCart(productsFromLocalStorage);\n    setRenderPage(true);\n  }, []);\n\n  const addProductToLocalStorage = () => {\n    if (renderPage) {\n      console.log('add to local storage', productsInCart);\n      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));\n    }\n  };\n\n  const addToCart = async (product, quantityFromInput) => {\n    let productIsInCart = false;\n    productsInCart && productsInCart.forEach(productInCart => {\n      if (productInCart._id === product._id) {\n        productIsInCart = true;\n        product.boughtQuantity = Number(productInCart.boughtQuantity) + Number(quantityFromInput);\n      }\n    });\n\n    if (!productsInCart) {\n      product.boughtQuantity = Number(quantityFromInput);\n      setProductsInCart([product]);\n    } else if (productIsInCart) {\n      setProductsInCart([...productsInCart]);\n    } else {\n      product.boughtQuantity = Number(quantityFromInput);\n      setProductsInCart([...productsInCart, product]);\n    }\n  }; // it needs to be called when addToCart finish executing\n\n\n  addProductToLocalStorage();\n  return __jsx(CartContext.Provider, {\n    value: {\n      productsInCart,\n      addToCart\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcz80Yzk0Il0sIm5hbWVzIjpbIkNhcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiQ2FydENvbnRleHRQcm92aWRlciIsInByb3BzIiwicHJvZHVjdHNJbkNhcnQiLCJzZXRQcm9kdWN0c0luQ2FydCIsInVzZVN0YXRlIiwicmVuZGVyUGFnZSIsInNldFJlbmRlclBhZ2UiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkUHJvZHVjdFRvTG9jYWxTdG9yYWdlIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlGcm9tSW5wdXQiLCJwcm9kdWN0SXNJbkNhcnQiLCJmb3JFYWNoIiwicHJvZHVjdEluQ2FydCIsIl9pZCIsImJvdWdodFF1YW50aXR5IiwiTnVtYmVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVQLE1BQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLHVCQURrQjtBQUUzQkMsaUJBQWUsRUFBRTtBQUZVLENBQWIsQ0FBaEI7O0FBS0EsTUFBTUMsbUJBQW1CLEdBQUdDLEtBQUssSUFBSTtBQUNuQyxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBQyxFQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FGbUMsQ0FFaUI7O0FBRXBERyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyx3QkFBd0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFqQztBQUNBVCxxQkFBaUIsQ0FBQ0ssd0JBQUQsQ0FBakI7QUFDQUYsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFFBQU1PLHdCQUF3QixHQUFHLE1BQU07QUFDckMsUUFBSVIsVUFBSixFQUFnQjtBQUNkUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2IsY0FBcEM7QUFDQVMsa0JBQVksQ0FBQ0ssT0FBYixDQUFxQixnQkFBckIsRUFBdUNQLElBQUksQ0FBQ1EsU0FBTCxDQUFlZixjQUFmLENBQXZDO0FBQ0Q7QUFDRixHQUxEOztBQU9BLFFBQU1nQixTQUFTLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsaUJBQWhCLEtBQXNDO0FBQ3RELFFBQUlDLGVBQWUsR0FBRyxLQUF0QjtBQUNBbkIsa0JBQWMsSUFBSUEsY0FBYyxDQUFDb0IsT0FBZixDQUF1QkMsYUFBYSxJQUFJO0FBQ3hELFVBQUlBLGFBQWEsQ0FBQ0MsR0FBZCxLQUFzQkwsT0FBTyxDQUFDSyxHQUFsQyxFQUF1QztBQUNyQ0gsdUJBQWUsR0FBRyxJQUFsQjtBQUNBRixlQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ0gsYUFBYSxDQUFDRSxjQUFmLENBQU4sR0FBdUNDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBdEU7QUFDRDtBQUNGLEtBTGlCLENBQWxCOztBQU1BLFFBQUksQ0FBQ2xCLGNBQUwsRUFBcUI7QUFDbkJpQixhQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBL0I7QUFDQWpCLHVCQUFpQixDQUFDLENBQUNnQixPQUFELENBQUQsQ0FBakI7QUFDRCxLQUhELE1BR08sSUFBSUUsZUFBSixFQUFxQjtBQUMxQmxCLHVCQUFpQixDQUFDLENBQUMsR0FBR0QsY0FBSixDQUFELENBQWpCO0FBQ0QsS0FGTSxNQUVBO0FBQ0xpQixhQUFPLENBQUNNLGNBQVIsR0FBeUJDLE1BQU0sQ0FBQ04saUJBQUQsQ0FBL0I7QUFDQWpCLHVCQUFpQixDQUFDLENBQUMsR0FBR0QsY0FBSixFQUFvQmlCLE9BQXBCLENBQUQsQ0FBakI7QUFDRDtBQUNGLEdBakJELENBakJtQyxDQW9DbkM7OztBQUNBTiwwQkFBd0I7QUFFeEIsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFWCxvQkFBRjtBQUFrQmdCO0FBQWxCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLEtBQUssQ0FBQzBCLFFBRFQsQ0FERjtBQUtELENBNUNEOztBQThDZTNCLGtGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvQ2FydENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBQX0FQSSxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG59KVxuXG5jb25zdCBDYXJ0Q29udGV4dFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbcHJvZHVjdHNJbkNhcnQsIHNldFByb2R1Y3RzSW5DYXJ0XSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcmVuZGVyUGFnZSwgc2V0UmVuZGVyUGFnZV0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gd2l0aG91dCB0aGlzIGxvY2FsU3RvcmFnZSBpbiBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2Ugd291bGQgYmUgdW5kZWZpbmVkIChyZW5kZXJlZCBvbiB0aGUgc2VydmVyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZHVjdHNJbkNhcnQnKSlcbiAgICBzZXRQcm9kdWN0c0luQ2FydChwcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UpXG4gICAgc2V0UmVuZGVyUGFnZSh0cnVlKVxuICB9LCBbXSlcblxuICBjb25zdCBhZGRQcm9kdWN0VG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHJlbmRlclBhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQgdG8gbG9jYWwgc3RvcmFnZScsIHByb2R1Y3RzSW5DYXJ0KVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzSW5DYXJ0JywgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHNJbkNhcnQpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0LCBxdWFudGl0eUZyb21JbnB1dCkgPT4ge1xuICAgIGxldCBwcm9kdWN0SXNJbkNhcnQgPSBmYWxzZVxuICAgIHByb2R1Y3RzSW5DYXJ0ICYmIHByb2R1Y3RzSW5DYXJ0LmZvckVhY2gocHJvZHVjdEluQ2FydCA9PiB7XG4gICAgICBpZiAocHJvZHVjdEluQ2FydC5faWQgPT09IHByb2R1Y3QuX2lkKSB7XG4gICAgICAgIHByb2R1Y3RJc0luQ2FydCA9IHRydWVcbiAgICAgICAgcHJvZHVjdC5ib3VnaHRRdWFudGl0eSA9IE51bWJlcihwcm9kdWN0SW5DYXJ0LmJvdWdodFF1YW50aXR5KSArIE51bWJlcihxdWFudGl0eUZyb21JbnB1dClcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICghcHJvZHVjdHNJbkNhcnQpIHtcbiAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocXVhbnRpdHlGcm9tSW5wdXQpXG4gICAgICBzZXRQcm9kdWN0c0luQ2FydChbcHJvZHVjdF0pXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0SXNJbkNhcnQpIHtcbiAgICAgIHNldFByb2R1Y3RzSW5DYXJ0KFsuLi5wcm9kdWN0c0luQ2FydF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1Y3QuYm91Z2h0UXVhbnRpdHkgPSBOdW1iZXIocXVhbnRpdHlGcm9tSW5wdXQpXG4gICAgICBzZXRQcm9kdWN0c0luQ2FydChbLi4ucHJvZHVjdHNJbkNhcnQsIHByb2R1Y3RdKVxuICAgIH1cbiAgfVxuXG4gIC8vIGl0IG5lZWRzIHRvIGJlIGNhbGxlZCB3aGVuIGFkZFRvQ2FydCBmaW5pc2ggZXhlY3V0aW5nXG4gIGFkZFByb2R1Y3RUb0xvY2FsU3RvcmFnZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvZHVjdHNJbkNhcnQsIGFkZFRvQ2FydCB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRDb250ZXh0UHJvdmlkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ }),

/***/ "./contexts/ProductContext.js":
/*!************************************!*\
  !*** ./contexts/ProductContext.js ***!
  \************************************/
/*! exports provided: ProductContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductContext\", function() { return ProductContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/contexts/ProductContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ProductContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst service = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({\n  baseURL: \"http://localhost:5000\",\n  withCredentials: true\n});\n\nconst ProductContextProvider = props => {\n  let {\n    0: products,\n    1: setProducts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: singleProduct,\n    1: setSingleProduct\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const getProducts = async () => {\n    const response = await service.get(`${\"http://localhost:5000\"}/api/products`);\n    setProducts(products = response.data);\n  };\n\n  const getSingleProduct = async id => {\n    if (!id) {\n      return;\n    }\n\n    const response = await service.get(`${\"http://localhost:5000\"}/api/product/${id}`);\n    setSingleProduct(response.data);\n  };\n\n  return __jsx(ProductContext.Provider, {\n    value: {\n      products,\n      getProducts,\n      getSingleProduct,\n      singleProduct\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductContextProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Qcm9kdWN0Q29udGV4dC5qcz9hNzliIl0sIm5hbWVzIjpbIlByb2R1Y3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNlcnZpY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwid2l0aENyZWRlbnRpYWxzIiwiUHJvZHVjdENvbnRleHRQcm92aWRlciIsInByb3BzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZVN0YXRlIiwic2luZ2xlUHJvZHVjdCIsInNldFNpbmdsZVByb2R1Y3QiLCJnZXRQcm9kdWN0cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImdldFNpbmdsZVByb2R1Y3QiLCJpZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsRUFBcEM7QUFFUCxNQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMzQkMsU0FBTyxFQUFFQyx1QkFEa0I7QUFFM0JDLGlCQUFlLEVBQUU7QUFGVSxDQUFiLENBQWhCOztBQUtBLE1BQU1DLHNCQUFzQixHQUFHQyxLQUFLLElBQUk7QUFDdEMsTUFBSTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0Ysc0RBQVEsQ0FBQyxJQUFELENBQWxEOztBQUVBLFFBQU1HLFdBQVcsR0FBRyxZQUFZO0FBQzlCLFVBQU1DLFFBQVEsR0FBRyxNQUFNZCxPQUFPLENBQUNlLEdBQVIsQ0FBYSxHQUFFWCx1QkFBb0IsZUFBbkMsQ0FBdkI7QUFDQUssZUFBVyxDQUFDRCxRQUFRLEdBQUdNLFFBQVEsQ0FBQ0UsSUFBckIsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUMsRUFBTixJQUFZO0FBQ25DLFFBQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ1A7QUFDRDs7QUFDRCxVQUFNSixRQUFRLEdBQUcsTUFBTWQsT0FBTyxDQUFDZSxHQUFSLENBQWEsR0FBRVgsdUJBQW9CLGdCQUFlYyxFQUFHLEVBQXJELENBQXZCO0FBQ0FOLG9CQUFnQixDQUFDRSxRQUFRLENBQUNFLElBQVYsQ0FBaEI7QUFDRCxHQU5EOztBQU9BLFNBQ0UsTUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRTtBQUFFUixjQUFGO0FBQVlLLGlCQUFaO0FBQXlCSSxzQkFBekI7QUFBMkNOO0FBQTNDLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osS0FBSyxDQUFDWSxRQURULENBREY7QUFLRCxDQXJCRDs7QUF1QmViLHFGQUFmIiwiZmlsZSI6Ii4vY29udGV4dHMvUHJvZHVjdENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgUHJvZHVjdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3Qgc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQUF9BUEksXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxufSlcblxuY29uc3QgUHJvZHVjdENvbnRleHRQcm92aWRlciA9IHByb3BzID0+IHtcbiAgbGV0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzaW5nbGVQcm9kdWN0LCBzZXRTaW5nbGVQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZXJ2aWNlLmdldChgJHtwcm9jZXNzLmVudi5BUFBfQVBJfS9hcGkvcHJvZHVjdHNgKVxuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGdldFNpbmdsZVByb2R1Y3QgPSBhc3luYyBpZCA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2VydmljZS5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBQX0FQSX0vYXBpL3Byb2R1Y3QvJHtpZH1gKVxuICAgIHNldFNpbmdsZVByb2R1Y3QocmVzcG9uc2UuZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9kdWN0cywgZ2V0UHJvZHVjdHMsIGdldFNpbmdsZVByb2R1Y3QsIHNpbmdsZVByb2R1Y3QgfX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Qcm9kdWN0Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGV4dFByb3ZpZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/ProductContext.js\n");

/***/ }),

/***/ "./pages/prodotto/[id].js":
/*!********************************!*\
  !*** ./pages/prodotto/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/CartContext */ \"./contexts/CartContext.js\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./contexts/ProductContext.js\");\nvar _jsxFileName = \"/Users/Guido/Desktop/pharmashop/client/pages/prodotto/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Product = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    id\n  } = router.query; // Destructuring our router object\n\n  const {\n    addToCart,\n    productsInCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__[\"CartContext\"]);\n  const {\n    getSingleProduct,\n    singleProduct\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_3__[\"ProductContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    document.getElementById('quantity').value = 1;\n\n    async function fetchProduct() {\n      await getSingleProduct(id);\n    }\n\n    fetchProduct();\n  }, [id]);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Product page\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, singleProduct && singleProduct.name), __jsx(\"input\", {\n    id: \"quantity\",\n    type: \"number\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"button\", {\n    onClick: () => addToCart(singleProduct, document.getElementById('quantity').value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Add to cart\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kb3R0by8uanM/ZmMyYiJdLCJuYW1lcyI6WyJQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImFkZFRvQ2FydCIsInByb2R1Y3RzSW5DYXJ0IiwidXNlQ29udGV4dCIsIkNhcnRDb250ZXh0IiwiZ2V0U2luZ2xlUHJvZHVjdCIsInNpbmdsZVByb2R1Y3QiLCJQcm9kdWN0Q29udGV4dCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImZldGNoUHJvZHVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEIsQ0FGb0IsQ0FFUzs7QUFDN0IsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBZ0NDLHdEQUFVLENBQUNDLGlFQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFFQyxvQkFBRjtBQUFvQkM7QUFBcEIsTUFBc0NILHdEQUFVLENBQUNJLHVFQUFELENBQXREO0FBRUNDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLEtBQXBDLEdBQTRDLENBQTVDOztBQUNDLG1CQUFlQyxZQUFmLEdBQStCO0FBQzdCLFlBQU1QLGdCQUFnQixDQUFDTixFQUFELENBQXRCO0FBQ0Q7O0FBQ0RhLGdCQUFZO0FBQ2IsR0FOTyxFQU1MLENBQUNiLEVBQUQsQ0FOSyxDQUFUO0FBUUMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSU8sYUFBYSxJQUFJQSxhQUFhLENBQUNPLElBQW5DLENBRkYsRUFHRTtBQUFPLE1BQUUsRUFBQyxVQUFWO0FBQXFCLFFBQUksRUFBQyxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFRLFdBQU8sRUFBRSxNQUFNWixTQUFTLENBQUNLLGFBQUQsRUFBZ0JHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEQsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixDQURGO0FBUUQsQ0F0Qkg7O0FBeUJlZixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2RvdHRvL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHQnXG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0J1xuXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBEZXN0cnVjdHVyaW5nIG91ciByb3V0ZXIgb2JqZWN0XG4gIGNvbnN0IHsgYWRkVG9DYXJ0LCBwcm9kdWN0c0luQ2FydCB9ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dClcbiAgY29uc3QgeyBnZXRTaW5nbGVQcm9kdWN0LCBzaW5nbGVQcm9kdWN0IH0gPSB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKS52YWx1ZSA9IDFcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdCAoKSB7XG4gICAgICAgIGF3YWl0IGdldFNpbmdsZVByb2R1Y3QoaWQpXG4gICAgICB9XG4gICAgICBmZXRjaFByb2R1Y3QoKVxuICAgIH0sIFtpZF0pXG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UHJvZHVjdCBwYWdlPC9oMT5cbiAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QgJiYgc2luZ2xlUHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgPGlucHV0IGlkPVwicXVhbnRpdHlcIiB0eXBlPVwibnVtYmVyXCI+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoc2luZ2xlUHJvZHVjdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JykudmFsdWUpfT5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/prodotto/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });