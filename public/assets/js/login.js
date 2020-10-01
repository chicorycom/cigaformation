/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/admin/js/helpers/fetch_api.js":
/*!*************************************************!*\
  !*** ./resources/admin/js/helpers/fetch_api.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchApi; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.token = document.head.querySelector('meta[name="csrf-token"][content]').content;

var FetchApi = /*#__PURE__*/function () {
  function FetchApi() {
    _classCallCheck(this, FetchApi);
  }

  _createClass(FetchApi, null, [{
    key: "postForm",

    /**
     *
     * @param url:string
     * @param formData:object
     * @returns {Promise<any>}
     */
    value: function postForm(url, formData) {
      return FetchApi.fetchApi(url, 'POST', formData);
    }
    /**
     *
     * @param url:string
     * @param method:string
     * @param data:object
     * @returns {Promise<any>}
     */

  }, {
    key: "fetchApi",
    value: function fetchApi(url, method, data) {
      var _this = this;

      console.log(token);
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: method,
          headers: _this.header(),
          credentials: "same-origin",
          body: data
        }).then(function (response) {
          if (!response.ok) {
            throw response;
          }

          return response.json().then(function (res) {
            return resolve(res);
          });
        })["catch"](function (err) {
          if (typeof err.text === 'function') {
            var status = err.status;
            err.json().then(function (errorMessage) {
              errorMessage.status = status;
              reject(errorMessage);
            })["catch"](function (err) {
              reject(err);
            });
          } else {
            reject(err);
          }
        });
      });
    }
  }, {
    key: "header",
    value: function header() {
      return new Headers({
        //"Content-Type": "application/json",
        "Accept": "application/json" //"X-Requested-With": "XMLHttpRequest",
        //"X-CSRF-Token": token

      });
    }
  }]);

  return FetchApi;
}();



/***/ }),

/***/ "./resources/admin/js/login.js":
/*!*************************************!*\
  !*** ./resources/admin/js/login.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_fetch_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/fetch_api */ "./resources/admin/js/helpers/fetch_api.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ChicorycomLogin = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ChicorycomLogin, _HTMLElement);

  var _super = _createSuper(ChicorycomLogin);

  function ChicorycomLogin() {
    var _this;

    _classCallCheck(this, ChicorycomLogin);

    _this = _super.call(this);
    _this.shadow = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(ChicorycomLogin, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "attributeChangedCallback",

    /**
     *
     * @param name
     * @param oldValue
     * @param newValue
     */
    value: function attributeChangedCallback(name, oldValue, newValue) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }, {
    key: "render",
    value: function render() {
      var title = this.getAttribute('title') || 'Login';
      this.submit = document.createElement('button');
      this.submit.setAttribute('class', 'btn btn-primary btn-user btn-block');
      this.submit.setAttribute('type', 'submit');
      this.submit.textContent = 'Login';
      var body = document.createElement('div');
      body.setAttribute('class', 'card-body p-0 h');
      body.innerHTML = "<div class=\"row h-100\">\n                      <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n                      <div class=\"col-lg-6 d-flex align-items-center\">\n                        \n                        <div class=\"p-5 w-100\" id=\"login-content\">\n                       \n                          <div class=\"text-center\">\n                            <h1 class=\"h4 text-gray-900 mb-4\">".concat(title, "</h1>\n                          </div>\n                          <form class=\"user\">\n                            <div class=\"form-group\">\n                              <input type=\"email\" class=\"form-control form-control-user\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email Address...\">\n                            </div>\n                            <div class=\"form-group\">\n                              <input type=\"password\" class=\"form-control form-control-user\" name=\"password\" placeholder=\"Password\">\n                            </div>\n                            <div class=\"form-group\">\n                              <div class=\"custom-control custom-checkbox small\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" name=\"remember\" id=\"customCheck\">\n                                <label class=\"custom-control-label\" for=\"customCheck\">Remember Me</label>\n                              </div>\n                            </div>\n                          </form>\n                        </div>\n                      </div>\n                    </div>");
      this.form = body.getElementsByTagName('form')[0];
      this.loginContent = body.getElementsByTagName('form')[0];
      this.form.appendChild(this.submit);
      this.form.addEventListener("submit", this.formSubmit.bind(this));
      this.shadow.appendChild(body);
    }
  }, {
    key: "formSubmit",
    value: function formSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.alertElement) {
        this.alertElement.remove();
      }

      this.submit.innerHTML = "\n            <div class=\"spinner-border text-light\" role=\"status\">\n                 <span class=\"sr-only\">Loading...</span>\n            </div>\n       ";
      this.alertElement = document.createElement('div');
      this.alertElement.setAttribute('class', 'alert alert-danger');
      var formData = new FormData(this.form);
      _helpers_fetch_api__WEBPACK_IMPORTED_MODULE_0__["default"].postForm('/administrator/login', formData).then(function (response) {
        _this2.alertElement.setAttribute('class', 'alert alert-success');

        _this2.alertElement.textContent = 'Login success.!!!';

        _this2.loginContent.prepend(_this2.alertElement);

        if ('url' in response) {
          window.location.href = response.url;
        }
      })["catch"](function (e) {
        var message = Object.values(e.errors).join(', ');
        _this2.alertElement.textContent = message;

        _this2.alertElement.setAttribute('class', 'alert alert-danger');

        _this2.loginContent.prepend(_this2.alertElement);
      })["finally"](function () {
        _this2.submit.innerHTML = "<span class=\"\">Login</span>";
      });
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return [];
    }
  }]);

  return ChicorycomLogin;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('chicorycom-login', ChicorycomLogin);

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/admin/js/login.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/assane/dev-doc/web-apps/cigaformation/packages/chicorycom/cigaformation/resources/admin/js/login.js */"./resources/admin/js/login.js");


/***/ })

/******/ });