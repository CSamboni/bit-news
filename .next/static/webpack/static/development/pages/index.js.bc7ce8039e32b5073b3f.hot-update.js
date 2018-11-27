webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\React-Coding\\From-udemy\\BitNews\\components\\Evento.js";



var Evento = function Evento(props) {
  var _props$info = props.info,
      name = _props$info.name,
      url = _props$info.url,
      description = _props$info.description;
  var titulo = name.text;

  if (titulo.length > 100) {
    titulo = titulo.substr(0, 100) + '...';
  }

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + '...';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "jsx-1275547631" + " " + "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1275547631",
    css: "a.jsx-1275547631{background-color:#d2504d !important;border-box:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdC1Db2RpbmdcXEZyb20tdWRlbXlcXEJpdE5ld3NcXGNvbXBvbmVudHNcXEV2ZW50by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQm9CLEFBRTZELG9DQUNwQixnQkFDcEIiLCJmaWxlIjoiRDpcXFJlYWN0LUNvZGluZ1xcRnJvbS11ZGVteVxcQml0TmV3c1xcY29tcG9uZW50c1xcRXZlbnRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRXZlbnRvID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7bmFtZSwgdXJsLCBkZXNjcmlwdGlvbn0gPSBwcm9wcy5pbmZvO1xuXG4gICAgbGV0IHRpdHVsbyA9IG5hbWUudGV4dDtcbiAgICBpZiAodGl0dWxvLmxlbmd0aCA+IDEwMCkge1xuICAgICAgICB0aXR1bG8gPSB0aXR1bG8uc3Vic3RyKDAsIDEwMCkgKyAnLi4uJztcbiAgICB9XG5cbiAgICBsZXQgZGVzYyA9IGRlc2NyaXB0aW9uLnRleHQ7XG4gICAgaWYgKGRlc2MpIHtcbiAgICAgICAgZGVzYyA9IGRlc2Muc3Vic3RyKDAsIDI1MCkgKyAnLi4uJztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17dXJsfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBhY3RpdmUgdGV4dC1saWdodCBtYi0xXCI+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYCBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMjUwNGQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3g6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zXCI+e3RpdHVsb308L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPntkZXNjfTwvcD5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50bzsiXX0= */\n/*@ sourceURL=D:\\React-Coding\\From-udemy\\BitNews\\components\\Evento.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1275547631" + " " + "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, titulo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1275547631" + " " + "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.bc7ce8039e32b5073b3f.hot-update.js.map