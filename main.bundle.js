"use strict";
(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
}
.sidebar {
  grid-column: 1;
  padding: 1rem 2rem;
  min-height: 100vh;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: #f3f4f6;
}

.user-projects-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

#completed-project {
  width: 100%;
  padding: 0.3rem 0;
  border-top: 0.15rem solid #000;
  border-bottom: 0.15rem solid #000;
  text-align: left;
}

.todos-project {
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
}

.todo-project-title {
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
}

.todos-project:hover {
  background-color: #e5e7eb;
}

.content {
  grid-column: 2;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.todo {
  display: grid;
  grid-template-columns: auto 80fr 10fr;
  grid-template-rows: repeat(3, auto);
  font-size: 2rem;
  column-gap: 0.5rem;
  row-gap: 1rem;
}
.complete-todo-checkbox {
  grid-area: 1/ 1/2/ 2;
  align-self: flex-start;
}
.title-todo {
  grid-area: 1/ 2/2/ 3;
  margin: 0;
}

.description-todo {
  grid-area: 2/ 2/3/ 3;
  align-self: flex-start;
  justify-self: flex-start;
  margin: 0;
}

.title-todo:empty:before,
.description-todo:empty:before {
  content: attr(data-placeholder);
  color: #aaa;
}

.description-todo {
  width: 100%;
}

.todo-controls-container {
  grid-area: 2/ 3/3/ 4;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.todo-controls {
  border: none;
  border-radius: 0.3rem;
  background-color: transparent;
  font-size: 2rem;
  align-self: flex-end;
  justify-self: self-end;
}
.todo-controls:hover {
  background-color: #e5e7eb;
}

.content-header {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.delete-project-btn {
  align-self: center;
}

.project-title {
  text-align: center;
  font-size: 3rem;
}

.projects-selection {
  position: fixed;
  width: auto;
  height: 200px;
  padding: 2rem;
  border: 3px solid #fff;
  background-color: #f3f4f6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  font-size: 1.6rem;
}

.hidden {
  opacity: 0;
}

.projects-selection legend {
  font-size: 2.5rem;
}

#add-project-selection-btn {
  font-size: 1.6rem;
}

.project-selection-container {
  grid-area: 3/2/4/3;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.project-selection {
  padding: 0 0.5rem;
  font-size: 1.5rem;
}

.add-project-to-todo-btn {
  border: 1px transparent solid;
  box-sizing: border-box;
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  font-size: 2rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-project-to-todo-btn:hover {
  border: 1px black solid;
}
.delete-project-in-project-selection-btn {
  padding: 0.3;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
}
.delete-project-in-project-selection-btn:hover {
  background-color: #aaaaaa4f;
}

.one-project-selection-container {
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  background-color: rgba(127, 255, 212, 0.485);
}

.project-selection:read-write:focus,
.title-todo:read-write:focus,
.description-todo:read-write:focus,
div.todos-project {
  outline: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,aAAa;EACb,+BAA+B;EAC/B;;qBAEmB;AACrB;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,8BAA8B;EAC9B,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,mCAAmC;EACnC,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,wBAAwB;EACxB,SAAS;AACX;;AAEA;;EAEE,+BAA+B;EAC/B,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,6BAA6B;EAC7B,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":[":root {\n  font-size: 62.5%;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n.sidebar {\n  grid-column: 1;\n  padding: 1rem 2rem;\n  min-height: 100vh;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n  background-color: #f3f4f6;\n}\n\n.user-projects-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n#completed-project {\n  width: 100%;\n  padding: 0.3rem 0;\n  border-top: 0.15rem solid #000;\n  border-bottom: 0.15rem solid #000;\n  text-align: left;\n}\n\n.todos-project {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n}\n\n.todo-project-title {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n}\n\n.todos-project:hover {\n  background-color: #e5e7eb;\n}\n\n.content {\n  grid-column: 2;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: auto 80fr 10fr;\n  grid-template-rows: repeat(3, auto);\n  font-size: 2rem;\n  column-gap: 0.5rem;\n  row-gap: 1rem;\n}\n.complete-todo-checkbox {\n  grid-area: 1/ 1/2/ 2;\n  align-self: flex-start;\n}\n.title-todo {\n  grid-area: 1/ 2/2/ 3;\n  margin: 0;\n}\n\n.description-todo {\n  grid-area: 2/ 2/3/ 3;\n  align-self: flex-start;\n  justify-self: flex-start;\n  margin: 0;\n}\n\n.title-todo:empty:before,\n.description-todo:empty:before {\n  content: attr(data-placeholder);\n  color: #aaa;\n}\n\n.description-todo {\n  width: 100%;\n}\n\n.todo-controls-container {\n  grid-area: 2/ 3/3/ 4;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.todo-controls {\n  border: none;\n  border-radius: 0.3rem;\n  background-color: transparent;\n  font-size: 2rem;\n  align-self: flex-end;\n  justify-self: self-end;\n}\n.todo-controls:hover {\n  background-color: #e5e7eb;\n}\n\n.content-header {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.delete-project-btn {\n  align-self: center;\n}\n\n.project-title {\n  text-align: center;\n  font-size: 3rem;\n}\n\n.projects-selection {\n  position: fixed;\n  width: auto;\n  height: 200px;\n  padding: 2rem;\n  border: 3px solid #fff;\n  background-color: #f3f4f6;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: scroll;\n  font-size: 1.6rem;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.projects-selection legend {\n  font-size: 2.5rem;\n}\n\n#add-project-selection-btn {\n  font-size: 1.6rem;\n}\n\n.project-selection-container {\n  grid-area: 3/2/4/3;\n  margin: 0;\n  display: flex;\n  gap: 1rem;\n}\n\n.project-selection {\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n}\n\n.add-project-to-todo-btn {\n  border: 1px transparent solid;\n  box-sizing: border-box;\n  padding: 0.3rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 2rem;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project-to-todo-btn:hover {\n  border: 1px black solid;\n}\n.delete-project-in-project-selection-btn {\n  padding: 0.3;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 50%;\n}\n.delete-project-in-project-selection-btn:hover {\n  background-color: #aaaaaa4f;\n}\n\n.one-project-selection-container {\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  border-radius: 2rem;\n  background-color: rgba(127, 255, 212, 0.485);\n}\n\n.project-selection:read-write:focus,\n.title-todo:read-write:focus,\n.description-todo:read-write:focus,\ndiv.todos-project {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/state.js */ "./src/model/state.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.js */ "./src/view/view.js");
/* harmony import */ var _view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/allToDosInProject.js */ "./src/view/allToDosInProject.js");
/* harmony import */ var _view_addingNewToDo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/addingNewToDo.js */ "./src/view/addingNewToDo.js");
/* harmony import */ var _view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/projectsView.js */ "./src/view/projectsView.js");
/* harmony import */ var _view_newProject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/newProject.js */ "./src/view/newProject.js");








const fixedProjects = ["inbox", "today", "someday", "anytime"];
const state = new _model_state_js__WEBPACK_IMPORTED_MODULE_0__["default"](fixedProjects);

const handleProjectClick = function (projectName) {
  console.log("hi!");
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    projectName,
    state.getAllToDosInProject(projectName),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
};

const handleDeleteProject = function (projectName) {
  state.deleteProject(projectName);
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.userProjectNames, handleProjectClick);
};

const handleCompleteToDo = function (id) {
  state.completeToDo(id);
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
};
const handleAddNewProject = function (projectName) {
  console.log("handling adding new project");
  state.addProject(projectName);
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.userProjectNames, handleProjectClick);
};

const handleEditToDo = function (toDoId, title, description, projects, date) {
  state.editToDo(toDoId, title, description, projects, date);
  if (!projects.includes(state.currentProject)) {
    (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
      state.currentProject,
      state.getAllToDosInProject(),
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
  }
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.userProjectNames, handleProjectClick);
};

const handleDeleteToDo = function (id) {
  state.removeToDo(id);
};

const init = function () {
  (0,_view_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(handleProjectClick, handleDeleteProject);
  (0,_view_addingNewToDo_js__WEBPACK_IMPORTED_MODULE_4__["default"])(handleDeleteToDo, handleEditToDo, handleCompleteToDo);
  (0,_view_newProject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(handleAddNewProject);
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.userProjectNames, handleProjectClick);
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    state.currentProject,
    state.getAllToDosInProject(),
    handleDeleteToDo,
    handleEditToDo,
    handleCompleteToDo
  );
};
init();


/***/ }),

/***/ "./src/model/state.js":
/*!****************************!*\
  !*** ./src/model/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/model/toDo.js");

class State {
  #toDos = {};
  #completedToDos = {};
  #projects = {};
  #currentProject = "inbox";
  #fixedProjects;
  constructor(fixedProjects) {
    fixedProjects.forEach((project) => (this.#projects[project] = []));
    this.#fixedProjects = fixedProjects;
    this.#getLocalStorage();
  }

  set fixedProjects(projectsNames) {
    this.#fixedProjects = projectsNames;
  }

  get currentProject() {
    return this.#currentProject;
  }

  set currentProject(projectName) {
    if (projectName && this.#projects.hasOwnProperty(projectName)) {
      this.#currentProject = projectName;
    }
  }

  addToDo(title, description, projects, date = null) {
    if (this.#currentProject === "completed") return;
    let projectWithCurrent = [
      ...new Set(projects.concat([this.currentProject])),
    ];
    projectWithCurrent = projectWithCurrent.filter(
      (project) => !(project in ["someday", "anytime", "today", "completed"])
    );
    const toDo = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, projectWithCurrent, date);
    this.#toDos[toDo.id] = toDo;
    projectWithCurrent.forEach((project) => {
      if (project in this.#projects) {
        this.#projects[project].unshift(toDo.id);
      } else {
        this.#projects[project] = [toDo.id];
      }
    });
    this.#setLocalStorage();
    return toDo.id;
  }

  addProject(projectName) {
    if (projectName in this.#projects) {
      return;
    }

    this.#projects[projectName] = [];
    this.#setLocalStorage();
  }

  #removeToDoFromCompleted(toDoId) {
    if (!(toDoId in this.#completedToDos)) return;
    const toDoToDelete = this.#completedToDos[toDoId];
    delete this.#completedToDos[toDoId];
    this.#setLocalStorage();
    return toDoToDelete;
  }

  #removeToDoFromActiveToDos(toDoId) {
    if (!(toDoId in this.#toDos)) return;
    this.#toDos[toDoId].projects.forEach((project) => {
      const deleteIndex = this.#projects[project].findIndex(
        (curToDoId) => curToDoId === toDoId
      );
      this.#projects[project].splice(deleteIndex, 1);
    });
    const toDoToDelete = this.#toDos[toDoId];
    delete this.#toDos[toDoId];
    this.#setLocalStorage();
    return toDoToDelete;
  }

  removeToDo(toDoId) {
    if (this.#currentProject === "completed") {
      return this.#removeToDoFromCompleted(toDoId);
    }
    return this.#removeToDoFromActiveToDos(toDoId);
  }

  getAllToDosInProject(project = "") {
    this.#currentProject = project.trim() || this.#currentProject;
    this.#setLocalStorage();

    if (this.#currentProject === "completed") {
      return Object.values(this.#completedToDos);
    }
    if (this.#currentProject === "today") {
      return this.#todayToDos;
    }

    if (this.#currentProject === "someday") {
      return this.#somedayToDos;
    }

    if (this.#currentProject === "anytime") {
      return this.#anytimeToDos;
    }

    return this.#projects[this.#currentProject].map(
      (toDoId) => this.#toDos[toDoId]
    );
  }

  editToDo(toDoId, title, description, newProjects, date) {
    if (this.#currentProject === "completed") {
      return;
    }
    if (!(toDoId in this.#toDos)) {
      this.addToDo(title, description, newProjects, date);
      return;
    }
    const oldProjects = this.#toDos[toDoId].projects;
    const removedProjects = oldProjects.filter(
      (oldProject) => !newProjects.includes(oldProject)
    );
    this.#updateToDo(toDoId, title, description, newProjects, date);
    this.#saveNewProjects(oldProjects, newProjects, toDoId);
    this.#deleteToDoFromExcludedProjects(removedProjects, toDoId);
    this.#setLocalStorage();
  }

  #restoreToDoFromCompleted(toDoId) {
    if (!(toDoId in this.#completedToDos)) {
      return;
    }
    const toDo = this.#completedToDos[toDoId];
    delete this.#completedToDos[toDoId];

    this.#toDos[toDo.id] = toDo;
    toDo.projects.forEach((project) => {
      if (project in this.#projects) {
        this.#projects[project].unshift(toDo.id);
      } else {
        this.#projects[project] = [toDo.id];
      }
    });
    this.#setLocalStorage();
  }

  #putToDoToCompleted(toDoId) {
    if (toDoId in this.#completedToDos) {
      return;
    }
    const toDoToComplete = this.removeToDo(toDoId);
    this.#completedToDos[toDoId] = toDoToComplete;
  }

  completeToDo(toDoId) {
    if (toDoId in this.#completedToDos) {
      this.#restoreToDoFromCompleted(toDoId);
    } else {
      this.#putToDoToCompleted(toDoId);
    }
  }

  #updateToDo(toDoId, title, description, projects, date) {
    this.#toDos[toDoId].title = title;
    this.#toDos[toDoId].description = description;
    this.#toDos[toDoId].projects = projects;
    this.#toDos[toDoId].date = date;
  }

  #deleteToDoFromExcludedProjects(removedProjects, id) {
    removedProjects.forEach((project) => {
      const index = this.#projects[project].findIndex((oldId) => oldId === id);
      this.#projects[project].splice(index, 1);
    });
  }

  #saveNewProjects(oldProjects, newProjects, toDoId) {
    newProjects.forEach((project) => {
      if (oldProjects.includes(project)) return;

      if (this.#projects[project]) {
        this.#projects[project].unshift(toDoId);
      } else {
        this.#projects[project] = [toDoId];
      }
    });
  }

  #setLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.#toDos));
    localStorage.setItem("projects", JSON.stringify(this.#projects));
    localStorage.setItem(
      "completed_todos",
      JSON.stringify(this.#completedToDos)
    );
    localStorage.setItem(
      "current_project",
      JSON.stringify(this.#currentProject)
    );
  }

  #getLocalStorage() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const projects = JSON.parse(localStorage.getItem("projects"));
    const completedToDos = JSON.parse(localStorage.getItem("completed_todos"));
    const currentProject = JSON.parse(localStorage.getItem("current_project"));
    if (todos) {
      this.#toDos = todos;
    }
    if (projects) {
      this.#projects = projects;
    }

    if (completedToDos) {
      this.#completedToDos = completedToDos;
    }
    if (currentProject) {
      this.#currentProject = currentProject;
      console.log(currentProject);
    }
  }

  deleteProject(projectToDeleteName) {
    console.log(projectToDeleteName, this.#fixedProjects);
    if (!(projectToDeleteName in this.#projects)) return;
    if (projectToDeleteName in this.#fixedProjects) return;
    Object.values(this.#toDos).forEach((toDo) => {
      toDo.projects = toDo.projects.filter(
        (project) => project !== projectToDeleteName
      );
    });

    Object.values(this.#completedToDos).forEach((toDo) => {
      toDo.projects = toDo.projects.filter(
        (project) => project !== projectToDeleteName
      );
    });
    delete this.#projects[projectToDeleteName];
    this.#currentProject = "inbox";
  }

  get userProjectNames() {
    return Object.keys(this.#projects).filter((name) =>
      this.#fixedProjects.every((project) => project !== name)
    );
  }

  get #somedayToDos() {
    const somedayToDos = Object.values(this.#toDos).filter((toDo) => {
      return toDo.date;
    });
    somedayToDos.sort((todoA, todoB) => -todoA.id + todoB.id);
    return somedayToDos;
  }

  get #anytimeToDos() {
    return Object.values(this.#toDos);
  }

  get #todayToDos() {
    const today = new Date();

    const todayToDos = Object.values(this.#toDos).filter((toDo) => {
      if (!toDo.date) return false;
      const currentToDoDate = new Date(toDo.date);
      return (
        currentToDoDate.getDate() === today.getDate() &&
        currentToDoDate.getMonth() === today.getMonth() &&
        currentToDoDate.getFullYear() === today.getFullYear()
      );
    });
    todayToDos.sort((todoA, todoB) => -todoA.id + todoB.id);
    return todayToDos;
  }

  moveToDoPriorityInProjectUp(toDoId, project) {
    if (!this.#toDos[toDoId]) {
      return;
    }
    const indexOfToDo = this.#projects[project].findIndex(
      (toDo) => toDo.id === toDoId
    );

    if (!indexOfToDo ?? indexOfToDo === 0) {
      return;
    }
    [
      this.#projects[project][indexOfToDo - 1],
      this.#projects[project][indexOfToDo],
    ] = [
      this.#projects[project][indexOfToDo],
      this.#projects[project][indexOfToDo - 1],
    ];
  }

  moveToDoPriorityInProjectDown(toDoId, project) {
    if (!this.#toDos[toDoId]) {
      return;
    }
    const indexOfToDo = this.#projects[project].findIndex(
      (toDo) => toDo.id === toDoId
    );
    if (!indexOfToDo || indexOfToDo === this.#projects[project].length - 1) {
      return;
    }

    [
      this.#projects[project][indexOfToDo + 1],
      this.#projects[project][indexOfToDo],
    ] = [
      this.#projects[project][indexOfToDo],
      this.#projects[project][indexOfToDo + 1],
    ];
  }
}


/***/ }),

/***/ "./src/model/toDo.js":
/*!***************************!*\
  !*** ./src/model/toDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
function ToDo(title, description, projects, date = null) {
  return {
    title,
    description,
    projects,
    date,
    id: new Date().getTime(),
  };
}


/***/ }),

/***/ "./src/view/addingNewToDo.js":
/*!***********************************!*\
  !*** ./src/view/addingNewToDo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleGeneratingNewToDo)
/* harmony export */ });
/* harmony import */ var _toDoView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoView.js */ "./src/view/toDoView.js");


function handleGeneratingNewToDo(
  handleDeleteToDo,
  handleEditToDo,
  handleCompleteToDo
) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", function () {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = (0,_toDoView_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
      null,
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
    if (!toDoElement) return;
    toDoListElement.insertAdjacentElement("afterbegin", toDoElement);
    toDoElement.querySelector(".title-todo").focus();
  });
}


/***/ }),

/***/ "./src/view/allToDosInProject.js":
/*!***************************************!*\
  !*** ./src/view/allToDosInProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAllToDosInProject)
/* harmony export */ });
/* harmony import */ var _toDoView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoView.js */ "./src/view/toDoView.js");

function generateAllToDosInProject(
  projectName,
  todos,
  handleDeleteToDo,
  handleEditToDo,
  handleCompleteToDo
) {
  const deleteProjectBtn = document.querySelector(
    ".content-header>.delete-project-btn"
  );
  console.log(projectName);
  if (projectName in ["anytime", "inbox", "someday", "today", "completed"]) {
    deleteProjectBtn.classList.add("hidden");
  } else {
    deleteProjectBtn.classList.remove(".hidden");
  }
  document.querySelector(".project-title").textContent = projectName;
  const toDoListElement = document.querySelector(".todo-list");
  toDoListElement.innerHTML = "";
  if (!todos) return;
  todos.forEach((todo) => {
    const toDoElement = (0,_toDoView_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
      todo,
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
    toDoListElement.insertAdjacentElement("beforeend", toDoElement);
  });
}


/***/ }),

/***/ "./src/view/newProject.js":
/*!********************************!*\
  !*** ./src/view/newProject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleGeneratingNewProject)
/* harmony export */ });
const generateNewProjectElement = function () {
  const projectElement = document.createElement("div");
  projectElement.setAttribute("class", "todos-project");
  projectElement.setAttribute("contenteditable", "true");
  return projectElement;
};

function handleGeneratingNewProject(handler) {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", function () {
    console.log("aaaaaaa");
    const projectContainer = document.querySelector(".user-projects-container");
    const newProjectElement = generateNewProjectElement();
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.focus();
    newProjectElement.addEventListener("blur", function () {
      const projectName = newProjectElement.textContent;
      if (projectName !== "") {
        handler(projectName);
      }
      newProjectElement.remove();
    });
  });
}


/***/ }),

/***/ "./src/view/projectsView.js":
/*!**********************************!*\
  !*** ./src/view/projectsView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateProjectsView)
/* harmony export */ });
const generateOneProjectElement = function (projectName) {
  const projectElement = document.createElement("button");
  projectElement.setAttribute("class", "todos-project");
  projectElement.textContent = projectName;
  return projectElement;
};

function generateProjectsView(projectNames, handleProjectClick) {
  const projectContainer = document.querySelector(".user-projects-container");
  projectContainer.innerHTML = "";
  projectNames.forEach((projectName) => {
    const newProjectElement = generateOneProjectElement(projectName);
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.addEventListener("click", function (e) {
      handleProjectClick(newProjectElement.textContent);
    });
  });
}


/***/ }),

/***/ "./src/view/toDoView.js":
/*!******************************!*\
  !*** ./src/view/toDoView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateToDoElement)
/* harmony export */ });
const createProjectsContainer = function () {
  const projectSelectionContainer = document.createElement("div");
  projectSelectionContainer.classList.add("project-selection-container");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-to-todo-btn");
  addProjectBtn.innerText = "➕";
  projectSelectionContainer.insertAdjacentElement("beforeend", addProjectBtn);
  return projectSelectionContainer;
};

const createEmptyProjectContainerElement = function () {
  const newProjectContainerElement = document.createElement("div");
  newProjectContainerElement.classList.add("one-project-selection-container");
  return newProjectContainerElement;
};

const createNewProjectSelectionElement = function (projectName = "") {
  const newProjectSelectionElement = document.createElement("div");
  newProjectSelectionElement.classList.add("project-selection");
  newProjectSelectionElement.setAttribute("contenteditable", "true");
  newProjectSelectionElement.textContent = projectName;
  return newProjectSelectionElement;
};

const createDeleteButtonForProject = function () {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-project-in-project-selection-btn");
  deleteBtn.textContent = "x";
  return deleteBtn;
};

const removeProjectWhenEmptyOnBlur = function (
  newProjectContainerElement,
  newProjectSelectionElement
) {
  newProjectSelectionElement.addEventListener("blur", () => {
    if (newProjectSelectionElement.textContent === "")
      newProjectContainerElement.remove();
  });
};

const isLastProjectEmpty = function (addProjectBtn) {
  const lastProjectElement = addProjectBtn.previousElementSibling;
  return (
    lastProjectElement &&
    lastProjectElement.querySelector(".project-selection").textContent === ""
  );
};

const handleDeletingProject = function (
  deleteProjectBtn,
  projectContainer,
  save
) {
  deleteProjectBtn.addEventListener("click", () => {
    projectContainer.remove();
    save();
  });
};

const createFullProjectContainer = function (projectName = "", save) {
  const projectContainer = createEmptyProjectContainerElement();
  const inputProjectElement = createNewProjectSelectionElement(projectName);
  const deleteProjectBtn = createDeleteButtonForProject();

  handleDeletingProject(deleteProjectBtn, projectContainer, save);
  removeProjectWhenEmptyOnBlur(projectContainer, inputProjectElement);
  inputProjectElement.addEventListener("blur", () => {
    save();
  });
  projectContainer.insertAdjacentElement("beforeend", inputProjectElement);
  projectContainer.insertAdjacentElement("beforeend", deleteProjectBtn);
  return projectContainer;
};

const handleAddingNewProjectToUI = function (projectsContainer, save) {
  const addProjectBtn = projectsContainer.querySelector(
    ".add-project-to-todo-btn"
  );
  addProjectBtn.addEventListener("click", () => {
    if (isLastProjectEmpty(addProjectBtn)) return;

    const projectContainer = createFullProjectContainer("", save);
    addProjectBtn.insertAdjacentElement("beforebegin", projectContainer);
    projectContainer.querySelector(".project-selection").focus();
  });
};

const generateToDoTitleDescriptionAndControlsHtml = function (
  todo,
  isCompleted
) {
  const toDoHtml = `
  <input type="checkbox" ${
    isCompleted ? "checked" : ""
  } class="complete-todo-checkbox" />
  <h3 class="title-todo" contenteditable="true" data-placeholder="title">${
    todo ? todo.title : ""
  }</h3>
  <div class="description-todo" contenteditable="true" data-placeholder="description...">${
    todo ? todo.description : ""
  }</div>
  <div class="todo-controls-container">
    <input type="date" value="" />
    <button class="projects-btn todo-controls">🏷️</button>
    <button class="remove-todo-btn todo-controls">🗑️</button>
  </div>
`;
  return toDoHtml;
};

const insertProjectsToProjectContainer = function (
  projectsContainer,
  projects,
  save
) {
  if (!projects) return;
  const addProjectBtn = projectsContainer.querySelector(
    ".add-project-to-todo-btn"
  );
  projects.forEach((project) =>
    addProjectBtn.insertAdjacentElement(
      "beforebegin",
      createFullProjectContainer(project, save)
    )
  );
};

const getProjects = function (existingProjects, toDoElement) {
  if (!document.querySelector(".project-selection-container")) {
    return existingProjects;
  }
  const projectElements = [
    ...toDoElement.getElementsByClassName("project-selection"),
  ];

  const projectNames = projectElements.map(
    (projectElement) => projectElement.textContent
  );
  return projectNames;
};

const getDate = function (toDoElement) {
  const dateControl = toDoElement.querySelector('input[type="date"]');
  let date = null;
  if (dateControl.value) date = new Date(dateControl.valueAsNumber);
  return date;
};

const saveOnBlur = function (toDoContainer, todo, handleEditToDo) {
  const [titleElement, descriptionElement] = [
    toDoContainer.querySelector(".title-todo"),
    toDoContainer.querySelector(".description-todo"),
  ];
  [titleElement, descriptionElement].forEach((element) =>
    element.addEventListener("blur", () => {
      saveToDo(toDoContainer, todo, handleEditToDo);
    })
  );
  const dateControl = toDoContainer.querySelector('input[type="date"]');
  dateControl.addEventListener("change", () => {
    saveToDo(toDoContainer, todo, handleEditToDo);
  });
};

const saveToDo = function (toDoContainer, todo, handleEditToDo) {
  const [titleElement, descriptionElement] = [
    toDoContainer.querySelector(".title-todo"),
    toDoContainer.querySelector(".description-todo"),
  ];
  if (
    titleElement.textContent.trim() === "" &&
    descriptionElement.textContent.trim() === ""
  ) {
    return;
  }
  const projects = getProjects(todo?.projects ?? [], toDoContainer);
  const date = getDate(toDoContainer);
  handleEditToDo(
    toDoContainer.dataset.id,
    titleElement.textContent,
    descriptionElement.textContent,
    projects,
    date
  );
};

const doOnDeleteBtn = function (toDoContainer, handleDeleteToDo) {
  toDoContainer
    .querySelector(".remove-todo-btn")
    .addEventListener("click", () => {
      handleDeleteToDo(toDoContainer.dataset.id);
      toDoContainer.remove();
    });
};

const doOnShowProjects = function (toDoContainer, toDoProjects, save) {
  toDoContainer.querySelector(".projects-btn").addEventListener("click", () => {
    const existingProjectsContainer = toDoContainer.querySelector(
      ".project-selection-container"
    );
    if (existingProjectsContainer) {
      existingProjectsContainer.remove();
      return;
    }
    const projectsContainer = createProjectsContainer();

    toDoContainer.insertAdjacentElement("beforeend", projectsContainer);
    insertProjectsToProjectContainer(projectsContainer, toDoProjects, save);
    handleAddingNewProjectToUI(projectsContainer, save);
  });
};

const createToDoContainer = function (todo, isCompleted) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  toDoContainer.dataset.id = todo?.id ?? "";
  const titleDescriptionControlsHtml =
    generateToDoTitleDescriptionAndControlsHtml(todo, isCompleted);
  toDoContainer.insertAdjacentHTML("afterbegin", titleDescriptionControlsHtml);

  const dateInput = toDoContainer.querySelector('input[type="date"]');
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  if (projectTitle === "today" || projectTitle === "someday") {
    dateInput.valueAsDate = new Date();
  }
  if (todo?.date) {
    dateInput.valueAsDate = new Date(todo.date);
  }
  return toDoContainer;
};

const doOnCompleteToDo = function (toDoContainer, id, handleCompleteToDo) {
  const checkbox = toDoContainer.querySelector(".complete-todo-checkbox");
  checkbox.addEventListener("click", () => {
    if (!id) {
      toDoContainer.remove();
      return;
    }
    handleCompleteToDo(id);
  });
};

function generateToDoElement(
  todo = null,
  handleDeleteToDo,
  handleEditToDo,
  handleCompleteToDo
) {
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  const isCompleted = projectTitle === "completed";
  if (isCompleted && !todo) return;
  const toDoContainer = createToDoContainer(todo, isCompleted);
  doOnCompleteToDo(toDoContainer, todo?.id, handleCompleteToDo);
  doOnDeleteBtn(toDoContainer, handleDeleteToDo);
  if (isCompleted) return toDoContainer;
  doOnShowProjects(
    toDoContainer,
    todo?.projects ?? [],
    saveToDo.bind(null, toDoContainer, todo, handleEditToDo)
  );
  saveOnBlur(toDoContainer, todo, handleEditToDo);
  return toDoContainer;
}


/***/ }),

/***/ "./src/view/view.js":
/*!**************************!*\
  !*** ./src/view/view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateView)
/* harmony export */ });
function generateView(
  handleProjectClick,
  handleDeleteProjectOnClick
) {
  const viewHtml = `
  <div class="sidebar">
      <div class="projects-controls">
        <button type="button" id="add-todo-btn">+ to-do</button>
        <button type="button" id="add-project-btn">+ project</button>
      </div>
      <button class="fixed-todos-project todos-project" id="inbox">
        📬 <span class="todo-project-title">inbox</span>
      </button>
      <button class="fixed-todos-project todos-project">
        🔥 <span class="todo-project-title">today</span>
      </button>
      <button class="fixed-todos-project todos-project">
        📅 <span class="todo-project-title">someday</span>
        </button>
      <button class="fixed-todos-project todos-project" id="anytime">
        🗓️ <span class="todo-project-title">anytime</span>
      </button>
      <button class="fixed-todos-project todos-project" id="completed-project">
        ✅ <span class="todo-project-title">completed</span>
      </button>
      <div class="user-projects-container">
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <button class="delete-project-btn">🗑️</button>
        <h2 class="project-title">inbox</h2>
      </div>
      <ul class="todo-list">
      </ul>
    </div>
  `;
  document.querySelector("body").innerHTML = viewHtml;
  const projects = [...document.querySelectorAll(".todos-project")];
  projects.forEach((project) => {
    project.addEventListener("click", function (e) {
      handleProjectClick(
        project.querySelector(".todo-project-title").textContent
      );
    });
  });
  const deleteProjectBtn = document.querySelector(
    ".content-header>.delete-project-btn"
  );
  deleteProjectBtn.addEventListener("click", () => {
    const projectTitle = document.querySelector(
      ".content-header>.project-title"
    ).textContent;
    handleDeleteProjectOnClick(projectTitle);
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxPQUFPLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8s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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUmdEOztBQUVqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJnRDtBQUNqQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNRZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2RlbC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kZWwvdG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy9hZGRpbmdOZXdUb0RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L2FsbFRvRG9zSW5Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvcHJvamVjdHNWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L3RvRG9WaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcbiAgICBIZWx2ZXRpY2EsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiU2Vnb2UgVUkgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuLnNpZGViYXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xufVxuXG4udXNlci1wcm9qZWN0cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbn1cblxuI2NvbXBsZXRlZC1wcm9qZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuM3JlbSAwO1xuICBib3JkZXItdG9wOiAwLjE1cmVtIHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgIzAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvZG9zLXByb2plY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRvZG8tcHJvamVjdC10aXRsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9kb3MtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG59XG5cbi5jb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDI7XG59XG5cbi50b2RvLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi50b2RvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDgwZnIgMTBmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sdW1uLWdhcDogMC41cmVtO1xuICByb3ctZ2FwOiAxcmVtO1xufVxuLmNvbXBsZXRlLXRvZG8tY2hlY2tib3gge1xuICBncmlkLWFyZWE6IDEvIDEvMi8gMjtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi50aXRsZS10b2RvIHtcbiAgZ3JpZC1hcmVhOiAxLyAyLzIvIDM7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRlc2NyaXB0aW9uLXRvZG8ge1xuICBncmlkLWFyZWE6IDIvIDIvMy8gMztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZS10b2RvOmVtcHR5OmJlZm9yZSxcbi5kZXNjcmlwdGlvbi10b2RvOmVtcHR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZGVzY3JpcHRpb24tdG9kbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kby1jb250cm9scy1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDIvIDMvMy8gNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50b2RvLWNvbnRyb2xzIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xufVxuLnRvZG8tY29udHJvbHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ucHJvamVjdHMtc2VsZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucHJvamVjdHMtc2VsZWN0aW9uIGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4jYWRkLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuLnByb2plY3Qtc2VsZWN0aW9uIHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG4ge1xuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtcHJvamVjdC10by10b2RvLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xufVxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTRmO1xufVxuXG4ub25lLXByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNDg1KTtcbn1cblxuLnByb2plY3Qtc2VsZWN0aW9uOnJlYWQtd3JpdGU6Zm9jdXMsXG4udGl0bGUtdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxuLmRlc2NyaXB0aW9uLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcbmRpdi50b2Rvcy1wcm9qZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLCtCQUErQjtFQUMvQjs7cUJBRW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgSGVsdmV0aWNhLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG59XFxuXFxuLnVzZXItcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2NvbXBsZXRlZC1wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4zcmVtIDA7XFxuICBib3JkZXItdG9wOiAwLjE1cmVtIHNvbGlkICMwMDA7XFxuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkICMwMDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udG9kb3MtcHJvamVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kby1wcm9qZWN0LXRpdGxlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2Rvcy1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDgwZnIgMTBmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sdW1uLWdhcDogMC41cmVtO1xcbiAgcm93LWdhcDogMXJlbTtcXG59XFxuLmNvbXBsZXRlLXRvZG8tY2hlY2tib3gge1xcbiAgZ3JpZC1hcmVhOiAxLyAxLzIvIDI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4udGl0bGUtdG9kbyB7XFxuICBncmlkLWFyZWE6IDEvIDIvMi8gMztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRvZG8ge1xcbiAgZ3JpZC1hcmVhOiAyLyAyLzMvIDM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGl0bGUtdG9kbzplbXB0eTpiZWZvcmUsXFxuLmRlc2NyaXB0aW9uLXRvZG86ZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XFxuICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRvZG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIvIDMvMy8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xcbn1cXG4udG9kby1jb250cm9sczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VsZWN0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VsZWN0aW9uIGxlZ2VuZCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXNlbGVjdGlvbi1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC10by10b2RvLWJ0biB7XFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuIHtcXG4gIHBhZGRpbmc6IDAuMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTRmO1xcbn1cXG5cXG4ub25lLXByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC40ODUpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rpb246cmVhZC13cml0ZTpmb2N1cyxcXG4udGl0bGUtdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxcbi5kZXNjcmlwdGlvbi10b2RvOnJlYWQtd3JpdGU6Zm9jdXMsXFxuZGl2LnRvZG9zLXByb2plY3Qge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi9tb2RlbC9zdGF0ZS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBnZW5lcmF0ZVZpZXcgZnJvbSBcIi4vdmlldy92aWV3LmpzXCI7XG5pbXBvcnQgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdCBmcm9tIFwiLi92aWV3L2FsbFRvRG9zSW5Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8gZnJvbSBcIi4vdmlldy9hZGRpbmdOZXdUb0RvLmpzXCI7XG5pbXBvcnQgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcgZnJvbSBcIi4vdmlldy9wcm9qZWN0c1ZpZXcuanNcIjtcbmltcG9ydCBoYW5kbGVHZW5lcmF0aW5nTmV3UHJvamVjdCBmcm9tIFwiLi92aWV3L25ld1Byb2plY3QuanNcIjtcblxuY29uc3QgZml4ZWRQcm9qZWN0cyA9IFtcImluYm94XCIsIFwidG9kYXlcIiwgXCJzb21lZGF5XCIsIFwiYW55dGltZVwiXTtcbmNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKGZpeGVkUHJvamVjdHMpO1xuXG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xpY2sgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgY29uc29sZS5sb2coXCJoaSFcIik7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgcHJvamVjdE5hbWUsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QocHJvamVjdE5hbWUpLFxuICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICk7XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gIHN0YXRlLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoc3RhdGUudXNlclByb2plY3ROYW1lcywgaGFuZGxlUHJvamVjdENsaWNrKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNvbXBsZXRlVG9EbyA9IGZ1bmN0aW9uIChpZCkge1xuICBzdGF0ZS5jb21wbGV0ZVRvRG8oaWQpO1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbn07XG5jb25zdCBoYW5kbGVBZGROZXdQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgYWRkaW5nIG5ldyBwcm9qZWN0XCIpO1xuICBzdGF0ZS5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoc3RhdGUudXNlclByb2plY3ROYW1lcywgaGFuZGxlUHJvamVjdENsaWNrKTtcbn07XG5cbmNvbnN0IGhhbmRsZUVkaXRUb0RvID0gZnVuY3Rpb24gKHRvRG9JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0cywgZGF0ZSkge1xuICBzdGF0ZS5lZGl0VG9Ebyh0b0RvSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdHMsIGRhdGUpO1xuICBpZiAoIXByb2plY3RzLmluY2x1ZGVzKHN0YXRlLmN1cnJlbnRQcm9qZWN0KSkge1xuICAgIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCxcbiAgICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgICApO1xuICB9XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsIGhhbmRsZVByb2plY3RDbGljayk7XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGVUb0RvID0gZnVuY3Rpb24gKGlkKSB7XG4gIHN0YXRlLnJlbW92ZVRvRG8oaWQpO1xufTtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgZ2VuZXJhdGVWaWV3KGhhbmRsZVByb2plY3RDbGljaywgaGFuZGxlRGVsZXRlUHJvamVjdCk7XG4gIGhhbmRsZUdlbmVyYXRpbmdOZXdUb0RvKGhhbmRsZURlbGV0ZVRvRG8sIGhhbmRsZUVkaXRUb0RvLCBoYW5kbGVDb21wbGV0ZVRvRG8pO1xuICBoYW5kbGVHZW5lcmF0aW5nTmV3UHJvamVjdChoYW5kbGVBZGROZXdQcm9qZWN0KTtcbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoc3RhdGUudXNlclByb2plY3ROYW1lcywgaGFuZGxlUHJvamVjdENsaWNrKTtcbiAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCxcbiAgICBzdGF0ZS5nZXRBbGxUb0Rvc0luUHJvamVjdCgpLFxuICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICk7XG59O1xuaW5pdCgpO1xuIiwiaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9Eby5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICAjdG9Eb3MgPSB7fTtcbiAgI2NvbXBsZXRlZFRvRG9zID0ge307XG4gICNwcm9qZWN0cyA9IHt9O1xuICAjY3VycmVudFByb2plY3QgPSBcImluYm94XCI7XG4gICNmaXhlZFByb2plY3RzO1xuICBjb25zdHJ1Y3RvcihmaXhlZFByb2plY3RzKSB7XG4gICAgZml4ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiAodGhpcy4jcHJvamVjdHNbcHJvamVjdF0gPSBbXSkpO1xuICAgIHRoaXMuI2ZpeGVkUHJvamVjdHMgPSBmaXhlZFByb2plY3RzO1xuICAgIHRoaXMuI2dldExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgc2V0IGZpeGVkUHJvamVjdHMocHJvamVjdHNOYW1lcykge1xuICAgIHRoaXMuI2ZpeGVkUHJvamVjdHMgPSBwcm9qZWN0c05hbWVzO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdDtcbiAgfVxuXG4gIHNldCBjdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmIChwcm9qZWN0TmFtZSAmJiB0aGlzLiNwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0TmFtZSkpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWU7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RzLCBkYXRlID0gbnVsbCkge1xuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJjb21wbGV0ZWRcIikgcmV0dXJuO1xuICAgIGxldCBwcm9qZWN0V2l0aEN1cnJlbnQgPSBbXG4gICAgICAuLi5uZXcgU2V0KHByb2plY3RzLmNvbmNhdChbdGhpcy5jdXJyZW50UHJvamVjdF0pKSxcbiAgICBdO1xuICAgIHByb2plY3RXaXRoQ3VycmVudCA9IHByb2plY3RXaXRoQ3VycmVudC5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gIShwcm9qZWN0IGluIFtcInNvbWVkYXlcIiwgXCJhbnl0aW1lXCIsIFwidG9kYXlcIiwgXCJjb21wbGV0ZWRcIl0pXG4gICAgKTtcbiAgICBjb25zdCB0b0RvID0gVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RXaXRoQ3VycmVudCwgZGF0ZSk7XG4gICAgdGhpcy4jdG9Eb3NbdG9Eby5pZF0gPSB0b0RvO1xuICAgIHByb2plY3RXaXRoQ3VycmVudC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdCBpbiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS51bnNoaWZ0KHRvRG8uaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0gPSBbdG9Eby5pZF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRvRG8uaWQ7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHByb2plY3ROYW1lIGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdE5hbWVdID0gW107XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAjcmVtb3ZlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKSB7XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRvRG9Ub0RlbGV0ZSA9IHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF07XG4gICAgZGVsZXRlIHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF07XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRvRG9Ub0RlbGV0ZTtcbiAgfVxuXG4gICNyZW1vdmVUb0RvRnJvbUFjdGl2ZVRvRG9zKHRvRG9JZCkge1xuICAgIGlmICghKHRvRG9JZCBpbiB0aGlzLiN0b0RvcykpIHJldHVybjtcbiAgICB0aGlzLiN0b0Rvc1t0b0RvSWRdLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uZmluZEluZGV4KFxuICAgICAgICAoY3VyVG9Eb0lkKSA9PiBjdXJUb0RvSWQgPT09IHRvRG9JZFxuICAgICAgKTtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnNwbGljZShkZWxldGVJbmRleCwgMSk7XG4gICAgfSk7XG4gICAgY29uc3QgdG9Eb1RvRGVsZXRlID0gdGhpcy4jdG9Eb3NbdG9Eb0lkXTtcbiAgICBkZWxldGUgdGhpcy4jdG9Eb3NbdG9Eb0lkXTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eb1RvRGVsZXRlO1xuICB9XG5cbiAgcmVtb3ZlVG9Ebyh0b0RvSWQpIHtcbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLiNyZW1vdmVUb0RvRnJvbUNvbXBsZXRlZCh0b0RvSWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4jcmVtb3ZlVG9Eb0Zyb21BY3RpdmVUb0Rvcyh0b0RvSWQpO1xuICB9XG5cbiAgZ2V0QWxsVG9Eb3NJblByb2plY3QocHJvamVjdCA9IFwiXCIpIHtcbiAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHByb2plY3QudHJpbSgpIHx8IHRoaXMuI2N1cnJlbnRQcm9qZWN0O1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuXG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLiNjb21wbGV0ZWRUb0Rvcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jdG9kYXlUb0RvcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwic29tZWRheVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jc29tZWRheVRvRG9zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJhbnl0aW1lXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLiNhbnl0aW1lVG9Eb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzW3RoaXMuI2N1cnJlbnRQcm9qZWN0XS5tYXAoXG4gICAgICAodG9Eb0lkKSA9PiB0aGlzLiN0b0Rvc1t0b0RvSWRdXG4gICAgKTtcbiAgfVxuXG4gIGVkaXRUb0RvKHRvRG9JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBuZXdQcm9qZWN0cywgZGF0ZSkge1xuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoISh0b0RvSWQgaW4gdGhpcy4jdG9Eb3MpKSB7XG4gICAgICB0aGlzLmFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBuZXdQcm9qZWN0cywgZGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9sZFByb2plY3RzID0gdGhpcy4jdG9Eb3NbdG9Eb0lkXS5wcm9qZWN0cztcbiAgICBjb25zdCByZW1vdmVkUHJvamVjdHMgPSBvbGRQcm9qZWN0cy5maWx0ZXIoXG4gICAgICAob2xkUHJvamVjdCkgPT4gIW5ld1Byb2plY3RzLmluY2x1ZGVzKG9sZFByb2plY3QpXG4gICAgKTtcbiAgICB0aGlzLiN1cGRhdGVUb0RvKHRvRG9JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBuZXdQcm9qZWN0cywgZGF0ZSk7XG4gICAgdGhpcy4jc2F2ZU5ld1Byb2plY3RzKG9sZFByb2plY3RzLCBuZXdQcm9qZWN0cywgdG9Eb0lkKTtcbiAgICB0aGlzLiNkZWxldGVUb0RvRnJvbUV4Y2x1ZGVkUHJvamVjdHMocmVtb3ZlZFByb2plY3RzLCB0b0RvSWQpO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgI3Jlc3RvcmVUb0RvRnJvbUNvbXBsZXRlZCh0b0RvSWQpIHtcbiAgICBpZiAoISh0b0RvSWQgaW4gdGhpcy4jY29tcGxldGVkVG9Eb3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRvRG8gPSB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdO1xuICAgIGRlbGV0ZSB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdO1xuXG4gICAgdGhpcy4jdG9Eb3NbdG9Eby5pZF0gPSB0b0RvO1xuICAgIHRvRG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QgaW4gdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0udW5zaGlmdCh0b0RvLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW3RvRG8uaWRdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgI3B1dFRvRG9Ub0NvbXBsZXRlZCh0b0RvSWQpIHtcbiAgICBpZiAodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRvRG9Ub0NvbXBsZXRlID0gdGhpcy5yZW1vdmVUb0RvKHRvRG9JZCk7XG4gICAgdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXSA9IHRvRG9Ub0NvbXBsZXRlO1xuICB9XG5cbiAgY29tcGxldGVUb0RvKHRvRG9JZCkge1xuICAgIGlmICh0b0RvSWQgaW4gdGhpcy4jY29tcGxldGVkVG9Eb3MpIHtcbiAgICAgIHRoaXMuI3Jlc3RvcmVUb0RvRnJvbUNvbXBsZXRlZCh0b0RvSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNwdXRUb0RvVG9Db21wbGV0ZWQodG9Eb0lkKTtcbiAgICB9XG4gIH1cblxuICAjdXBkYXRlVG9Ebyh0b0RvSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdHMsIGRhdGUpIHtcbiAgICB0aGlzLiN0b0Rvc1t0b0RvSWRdLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuI3RvRG9zW3RvRG9JZF0ucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB0aGlzLiN0b0Rvc1t0b0RvSWRdLmRhdGUgPSBkYXRlO1xuICB9XG5cbiAgI2RlbGV0ZVRvRG9Gcm9tRXhjbHVkZWRQcm9qZWN0cyhyZW1vdmVkUHJvamVjdHMsIGlkKSB7XG4gICAgcmVtb3ZlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uZmluZEluZGV4KChvbGRJZCkgPT4gb2xkSWQgPT09IGlkKTtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH1cblxuICAjc2F2ZU5ld1Byb2plY3RzKG9sZFByb2plY3RzLCBuZXdQcm9qZWN0cywgdG9Eb0lkKSB7XG4gICAgbmV3UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKG9sZFByb2plY3RzLmluY2x1ZGVzKHByb2plY3QpKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS51bnNoaWZ0KHRvRG9JZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFt0b0RvSWRdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgI3NldExvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuI3RvRG9zKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLiNwcm9qZWN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjb21wbGV0ZWRfdG9kb3NcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuI2NvbXBsZXRlZFRvRG9zKVxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBcImN1cnJlbnRfcHJvamVjdFwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy4jY3VycmVudFByb2plY3QpXG4gICAgKTtcbiAgfVxuXG4gICNnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBjb25zdCBjb21wbGV0ZWRUb0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21wbGV0ZWRfdG9kb3NcIikpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfcHJvamVjdFwiKSk7XG4gICAgaWYgKHRvZG9zKSB7XG4gICAgICB0aGlzLiN0b0RvcyA9IHRvZG9zO1xuICAgIH1cbiAgICBpZiAocHJvamVjdHMpIHtcbiAgICAgIHRoaXMuI3Byb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBsZXRlZFRvRG9zKSB7XG4gICAgICB0aGlzLiNjb21wbGV0ZWRUb0RvcyA9IGNvbXBsZXRlZFRvRG9zO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0VG9EZWxldGVOYW1lKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdFRvRGVsZXRlTmFtZSwgdGhpcy4jZml4ZWRQcm9qZWN0cyk7XG4gICAgaWYgKCEocHJvamVjdFRvRGVsZXRlTmFtZSBpbiB0aGlzLiNwcm9qZWN0cykpIHJldHVybjtcbiAgICBpZiAocHJvamVjdFRvRGVsZXRlTmFtZSBpbiB0aGlzLiNmaXhlZFByb2plY3RzKSByZXR1cm47XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0RvcykuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgdG9Eby5wcm9qZWN0cyA9IHRvRG8ucHJvamVjdHMuZmlsdGVyKFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdCAhPT0gcHJvamVjdFRvRGVsZXRlTmFtZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC52YWx1ZXModGhpcy4jY29tcGxldGVkVG9Eb3MpLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICAgIHRvRG8ucHJvamVjdHMgPSB0b0RvLnByb2plY3RzLmZpbHRlcihcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QgIT09IHByb2plY3RUb0RlbGV0ZU5hbWVcbiAgICAgICk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuI3Byb2plY3RzW3Byb2plY3RUb0RlbGV0ZU5hbWVdO1xuICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gXCJpbmJveFwiO1xuICB9XG5cbiAgZ2V0IHVzZXJQcm9qZWN0TmFtZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuI3Byb2plY3RzKS5maWx0ZXIoKG5hbWUpID0+XG4gICAgICB0aGlzLiNmaXhlZFByb2plY3RzLmV2ZXJ5KChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSBuYW1lKVxuICAgICk7XG4gIH1cblxuICBnZXQgI3NvbWVkYXlUb0RvcygpIHtcbiAgICBjb25zdCBzb21lZGF5VG9Eb3MgPSBPYmplY3QudmFsdWVzKHRoaXMuI3RvRG9zKS5maWx0ZXIoKHRvRG8pID0+IHtcbiAgICAgIHJldHVybiB0b0RvLmRhdGU7XG4gICAgfSk7XG4gICAgc29tZWRheVRvRG9zLnNvcnQoKHRvZG9BLCB0b2RvQikgPT4gLXRvZG9BLmlkICsgdG9kb0IuaWQpO1xuICAgIHJldHVybiBzb21lZGF5VG9Eb3M7XG4gIH1cblxuICBnZXQgI2FueXRpbWVUb0RvcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0Rvcyk7XG4gIH1cblxuICBnZXQgI3RvZGF5VG9Eb3MoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdG9kYXlUb0RvcyA9IE9iamVjdC52YWx1ZXModGhpcy4jdG9Eb3MpLmZpbHRlcigodG9EbykgPT4ge1xuICAgICAgaWYgKCF0b0RvLmRhdGUpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb0RvRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZGF0ZSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjdXJyZW50VG9Eb0RhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiZcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdG9kYXlUb0Rvcy5zb3J0KCh0b2RvQSwgdG9kb0IpID0+IC10b2RvQS5pZCArIHRvZG9CLmlkKTtcbiAgICByZXR1cm4gdG9kYXlUb0RvcztcbiAgfVxuXG4gIG1vdmVUb0RvUHJpb3JpdHlJblByb2plY3RVcCh0b0RvSWQsIHByb2plY3QpIHtcbiAgICBpZiAoIXRoaXMuI3RvRG9zW3RvRG9JZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZlRvRG8gPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoXG4gICAgICAodG9EbykgPT4gdG9Eby5pZCA9PT0gdG9Eb0lkXG4gICAgKTtcblxuICAgIGlmICghaW5kZXhPZlRvRG8gPz8gaW5kZXhPZlRvRG8gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gLSAxXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICBdID0gW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG9dLFxuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gLSAxXSxcbiAgICBdO1xuICB9XG5cbiAgbW92ZVRvRG9Qcmlvcml0eUluUHJvamVjdERvd24odG9Eb0lkLCBwcm9qZWN0KSB7XG4gICAgaWYgKCF0aGlzLiN0b0Rvc1t0b0RvSWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZUb0RvID0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uZmluZEluZGV4KFxuICAgICAgKHRvRG8pID0+IHRvRG8uaWQgPT09IHRvRG9JZFxuICAgICk7XG4gICAgaWYgKCFpbmRleE9mVG9EbyB8fCBpbmRleE9mVG9EbyA9PT0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvICsgMV0sXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9Eb10sXG4gICAgXSA9IFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvICsgMV0sXG4gICAgXTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RzLCBkYXRlID0gbnVsbCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByb2plY3RzLFxuICAgIGRhdGUsXG4gICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICB9O1xufVxuIiwiaW1wb3J0IGdlbmVyYXRlVG9Eb0VsZW1lbnQgZnJvbSBcIi4vdG9Eb1ZpZXcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8oXG4gIGhhbmRsZURlbGV0ZVRvRG8sXG4gIGhhbmRsZUVkaXRUb0RvLFxuICBoYW5kbGVDb21wbGV0ZVRvRG9cbikge1xuICBjb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1idG5cIik7XG4gIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b0RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICBjb25zdCB0b0RvRWxlbWVudCA9IGdlbmVyYXRlVG9Eb0VsZW1lbnQoXG4gICAgICBudWxsLFxuICAgICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICAgIGhhbmRsZUVkaXRUb0RvLFxuICAgICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICAgKTtcbiAgICBpZiAoIXRvRG9FbGVtZW50KSByZXR1cm47XG4gICAgdG9Eb0xpc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgdG9Eb0VsZW1lbnQpO1xuICAgIHRvRG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdG9kb1wiKS5mb2N1cygpO1xuICB9KTtcbn1cbiIsImltcG9ydCBnZW5lcmF0ZVRvRG9FbGVtZW50IGZyb20gXCIuL3RvRG9WaWV3LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICBwcm9qZWN0TmFtZSxcbiAgdG9kb3MsXG4gIGhhbmRsZURlbGV0ZVRvRG8sXG4gIGhhbmRsZUVkaXRUb0RvLFxuICBoYW5kbGVDb21wbGV0ZVRvRG9cbikge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50LWhlYWRlcj4uZGVsZXRlLXByb2plY3QtYnRuXCJcbiAgKTtcbiAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICBpZiAocHJvamVjdE5hbWUgaW4gW1wiYW55dGltZVwiLCBcImluYm94XCIsIFwic29tZWRheVwiLCBcInRvZGF5XCIsIFwiY29tcGxldGVkXCJdKSB7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcIi5oaWRkZW5cIik7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIGNvbnN0IHRvRG9MaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICB0b0RvTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgaWYgKCF0b2RvcykgcmV0dXJuO1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9Eb0VsZW1lbnQgPSBnZW5lcmF0ZVRvRG9FbGVtZW50KFxuICAgICAgdG9kbyxcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICAgICk7XG4gICAgdG9Eb0xpc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB0b0RvRWxlbWVudCk7XG4gIH0pO1xufVxuIiwiY29uc3QgZ2VuZXJhdGVOZXdQcm9qZWN0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9zLXByb2plY3RcIik7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUdlbmVyYXRpbmdOZXdQcm9qZWN0KGhhbmRsZXIpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJhYWFhYWFhXCIpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RFbGVtZW50ID0gZ2VuZXJhdGVOZXdQcm9qZWN0RWxlbWVudCgpO1xuICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBuZXdQcm9qZWN0RWxlbWVudCk7XG4gICAgbmV3UHJvamVjdEVsZW1lbnQuZm9jdXMoKTtcbiAgICBuZXdQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgaWYgKHByb2plY3ROYW1lICE9PSBcIlwiKSB7XG4gICAgICAgIGhhbmRsZXIocHJvamVjdE5hbWUpO1xuICAgICAgfVxuICAgICAgbmV3UHJvamVjdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiY29uc3QgZ2VuZXJhdGVPbmVQcm9qZWN0RWxlbWVudCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb3MtcHJvamVjdFwiKTtcbiAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c1ZpZXcocHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdE5hbWVzLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU9uZVByb2plY3RFbGVtZW50KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJjb25zdCBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RTZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwi4p6VXCI7XG4gIHByb2plY3RTZWxlY3Rpb25Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGFkZFByb2plY3RCdG4pO1xuICByZXR1cm4gcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUVtcHR5UHJvamVjdENvbnRhaW5lckVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9uZS1wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIik7XG4gIHJldHVybiBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lID0gXCJcIikge1xuICBjb25zdCBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlbGVjdGlvblwiKTtcbiAgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcmV0dXJuIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG5cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdFdoZW5FbXB0eU9uQmx1ciA9IGZ1bmN0aW9uIChcbiAgbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQsXG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50XG4pIHtcbiAgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgIGlmIChuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJcIilcbiAgICAgIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGlzTGFzdFByb2plY3RFbXB0eSA9IGZ1bmN0aW9uIChhZGRQcm9qZWN0QnRuKSB7XG4gIGNvbnN0IGxhc3RQcm9qZWN0RWxlbWVudCA9IGFkZFByb2plY3RCdG4ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgcmV0dXJuIChcbiAgICBsYXN0UHJvamVjdEVsZW1lbnQgJiZcbiAgICBsYXN0UHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvblwiKS50ZXh0Q29udGVudCA9PT0gXCJcIlxuICApO1xufTtcblxuY29uc3QgaGFuZGxlRGVsZXRpbmdQcm9qZWN0ID0gZnVuY3Rpb24gKFxuICBkZWxldGVQcm9qZWN0QnRuLFxuICBwcm9qZWN0Q29udGFpbmVyLFxuICBzYXZlXG4pIHtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKHByb2plY3ROYW1lID0gXCJcIiwgc2F2ZSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRW1wdHlQcm9qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuICBjb25zdCBpbnB1dFByb2plY3RFbGVtZW50ID0gY3JlYXRlTmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQocHJvamVjdE5hbWUpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCgpO1xuXG4gIGhhbmRsZURlbGV0aW5nUHJvamVjdChkZWxldGVQcm9qZWN0QnRuLCBwcm9qZWN0Q29udGFpbmVyLCBzYXZlKTtcbiAgcmVtb3ZlUHJvamVjdFdoZW5FbXB0eU9uQmx1cihwcm9qZWN0Q29udGFpbmVyLCBpbnB1dFByb2plY3RFbGVtZW50KTtcbiAgaW5wdXRQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICB9KTtcbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wdXRQcm9qZWN0RWxlbWVudCk7XG4gIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlbGV0ZVByb2plY3RCdG4pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJID0gZnVuY3Rpb24gKHByb2plY3RzQ29udGFpbmVyLCBzYXZlKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc0xhc3RQcm9qZWN0RW1wdHkoYWRkUHJvamVjdEJ0bikpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lcihcIlwiLCBzYXZlKTtcbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvblwiKS5mb2N1cygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb1RpdGxlRGVzY3JpcHRpb25BbmRDb250cm9sc0h0bWwgPSBmdW5jdGlvbiAoXG4gIHRvZG8sXG4gIGlzQ29tcGxldGVkXG4pIHtcbiAgY29uc3QgdG9Eb0h0bWwgPSBgXG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke1xuICAgIGlzQ29tcGxldGVkID8gXCJjaGVja2VkXCIgOiBcIlwiXG4gIH0gY2xhc3M9XCJjb21wbGV0ZS10b2RvLWNoZWNrYm94XCIgLz5cbiAgPGgzIGNsYXNzPVwidGl0bGUtdG9kb1wiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBkYXRhLXBsYWNlaG9sZGVyPVwidGl0bGVcIj4ke1xuICAgIHRvZG8gPyB0b2RvLnRpdGxlIDogXCJcIlxuICB9PC9oMz5cbiAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLXRvZG9cIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgZGF0YS1wbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uLi4uXCI+JHtcbiAgICB0b2RvID8gdG9kby5kZXNjcmlwdGlvbiA6IFwiXCJcbiAgfTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidG9kby1jb250cm9scy1jb250YWluZXJcIj5cbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIlwiIC8+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3RzLWJ0biB0b2RvLWNvbnRyb2xzXCI+8J+Pt++4jzwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtdG9kby1idG4gdG9kby1jb250cm9sc1wiPvCfl5HvuI88L2J1dHRvbj5cbiAgPC9kaXY+XG5gO1xuICByZXR1cm4gdG9Eb0h0bWw7XG59O1xuXG5jb25zdCBpbnNlcnRQcm9qZWN0c1RvUHJvamVjdENvbnRhaW5lciA9IGZ1bmN0aW9uIChcbiAgcHJvamVjdHNDb250YWluZXIsXG4gIHByb2plY3RzLFxuICBzYXZlXG4pIHtcbiAgaWYgKCFwcm9qZWN0cykgcmV0dXJuO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gcHJvamVjdHNDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcIi5hZGQtcHJvamVjdC10by10b2RvLWJ0blwiXG4gICk7XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgYWRkUHJvamVjdEJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgICBcImJlZm9yZWJlZ2luXCIsXG4gICAgICBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lcihwcm9qZWN0LCBzYXZlKVxuICAgIClcbiAgKTtcbn07XG5cbmNvbnN0IGdldFByb2plY3RzID0gZnVuY3Rpb24gKGV4aXN0aW5nUHJvamVjdHMsIHRvRG9FbGVtZW50KSB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIikpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cztcbiAgfVxuICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBbXG4gICAgLi4udG9Eb0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3Qtc2VsZWN0aW9uXCIpLFxuICBdO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RFbGVtZW50cy5tYXAoXG4gICAgKHByb2plY3RFbGVtZW50KSA9PiBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudFxuICApO1xuICByZXR1cm4gcHJvamVjdE5hbWVzO1xufTtcblxuY29uc3QgZ2V0RGF0ZSA9IGZ1bmN0aW9uICh0b0RvRWxlbWVudCkge1xuICBjb25zdCBkYXRlQ29udHJvbCA9IHRvRG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gIGxldCBkYXRlID0gbnVsbDtcbiAgaWYgKGRhdGVDb250cm9sLnZhbHVlKSBkYXRlID0gbmV3IERhdGUoZGF0ZUNvbnRyb2wudmFsdWVBc051bWJlcik7XG4gIHJldHVybiBkYXRlO1xufTtcblxuY29uc3Qgc2F2ZU9uQmx1ciA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebykge1xuICBjb25zdCBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdID0gW1xuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpLFxuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10b2RvXCIpLFxuICBdO1xuICBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBzYXZlVG9Ebyh0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebyk7XG4gICAgfSlcbiAgKTtcbiAgY29uc3QgZGF0ZUNvbnRyb2wgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gIGRhdGVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHNhdmVUb0RvKHRvRG9Db250YWluZXIsIHRvZG8sIGhhbmRsZUVkaXRUb0RvKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlVG9EbyA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebykge1xuICBjb25zdCBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdID0gW1xuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpLFxuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10b2RvXCIpLFxuICBdO1xuICBpZiAoXG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA9PT0gXCJcIiAmJlxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgPT09IFwiXCJcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHModG9kbz8ucHJvamVjdHMgPz8gW10sIHRvRG9Db250YWluZXIpO1xuICBjb25zdCBkYXRlID0gZ2V0RGF0ZSh0b0RvQ29udGFpbmVyKTtcbiAgaGFuZGxlRWRpdFRvRG8oXG4gICAgdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkLFxuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCxcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgcHJvamVjdHMsXG4gICAgZGF0ZVxuICApO1xufTtcblxuY29uc3QgZG9PbkRlbGV0ZUJ0biA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCBoYW5kbGVEZWxldGVUb0RvKSB7XG4gIHRvRG9Db250YWluZXJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtdG9kby1idG5cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8odG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkKTtcbiAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBkb09uU2hvd1Byb2plY3RzID0gZnVuY3Rpb24gKHRvRG9Db250YWluZXIsIHRvRG9Qcm9qZWN0cywgc2F2ZSkge1xuICB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0c0NvbnRhaW5lciA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICBpZiAoZXhpc3RpbmdQcm9qZWN0c0NvbnRhaW5lcikge1xuICAgICAgZXhpc3RpbmdQcm9qZWN0c0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lcigpO1xuXG4gICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgcHJvamVjdHNDb250YWluZXIpO1xuICAgIGluc2VydFByb2plY3RzVG9Qcm9qZWN0Q29udGFpbmVyKHByb2plY3RzQ29udGFpbmVyLCB0b0RvUHJvamVjdHMsIHNhdmUpO1xuICAgIGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJKHByb2plY3RzQ29udGFpbmVyLCBzYXZlKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb0RvQ29udGFpbmVyID0gZnVuY3Rpb24gKHRvZG8sIGlzQ29tcGxldGVkKSB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gIHRvRG9Db250YWluZXIuZGF0YXNldC5pZCA9IHRvZG8/LmlkID8/IFwiXCI7XG4gIGNvbnN0IHRpdGxlRGVzY3JpcHRpb25Db250cm9sc0h0bWwgPVxuICAgIGdlbmVyYXRlVG9Eb1RpdGxlRGVzY3JpcHRpb25BbmRDb250cm9sc0h0bWwodG9kbywgaXNDb21wbGV0ZWQpO1xuICB0b0RvQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgdGl0bGVEZXNjcmlwdGlvbkNvbnRyb2xzSHRtbCk7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbnRlbnQgLnByb2plY3QtdGl0bGVcIlxuICApLnRleHRDb250ZW50O1xuICBpZiAocHJvamVjdFRpdGxlID09PSBcInRvZGF5XCIgfHwgcHJvamVjdFRpdGxlID09PSBcInNvbWVkYXlcIikge1xuICAgIGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgaWYgKHRvZG8/LmRhdGUpIHtcbiAgICBkYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSh0b2RvLmRhdGUpO1xuICB9XG4gIHJldHVybiB0b0RvQ29udGFpbmVyO1xufTtcblxuY29uc3QgZG9PbkNvbXBsZXRlVG9EbyA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCBpZCwgaGFuZGxlQ29tcGxldGVUb0RvKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlLXRvZG8tY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlQ29tcGxldGVUb0RvKGlkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRvRG9FbGVtZW50KFxuICB0b2RvID0gbnVsbCxcbiAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgaGFuZGxlRWRpdFRvRG8sXG4gIGhhbmRsZUNvbXBsZXRlVG9Eb1xuKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudCAucHJvamVjdC10aXRsZVwiXG4gICkudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGlzQ29tcGxldGVkID0gcHJvamVjdFRpdGxlID09PSBcImNvbXBsZXRlZFwiO1xuICBpZiAoaXNDb21wbGV0ZWQgJiYgIXRvZG8pIHJldHVybjtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGNyZWF0ZVRvRG9Db250YWluZXIodG9kbywgaXNDb21wbGV0ZWQpO1xuICBkb09uQ29tcGxldGVUb0RvKHRvRG9Db250YWluZXIsIHRvZG8/LmlkLCBoYW5kbGVDb21wbGV0ZVRvRG8pO1xuICBkb09uRGVsZXRlQnRuKHRvRG9Db250YWluZXIsIGhhbmRsZURlbGV0ZVRvRG8pO1xuICBpZiAoaXNDb21wbGV0ZWQpIHJldHVybiB0b0RvQ29udGFpbmVyO1xuICBkb09uU2hvd1Byb2plY3RzKFxuICAgIHRvRG9Db250YWluZXIsXG4gICAgdG9kbz8ucHJvamVjdHMgPz8gW10sXG4gICAgc2F2ZVRvRG8uYmluZChudWxsLCB0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9EbylcbiAgKTtcbiAgc2F2ZU9uQmx1cih0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebyk7XG4gIHJldHVybiB0b0RvQ29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVWaWV3KFxuICBoYW5kbGVQcm9qZWN0Q2xpY2ssXG4gIGhhbmRsZURlbGV0ZVByb2plY3RPbkNsaWNrXG4pIHtcbiAgY29uc3Qgdmlld0h0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udHJvbHNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtdG9kby1idG5cIj4rIHRvLWRvPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLXByb2plY3QtYnRuXCI+KyBwcm9qZWN0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIiBpZD1cImluYm94XCI+XG4gICAgICAgIPCfk6wgPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj5pbmJveDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiPlxuICAgICAgICDwn5SlIDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+dG9kYXk8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIj5cbiAgICAgICAg8J+ThSA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPnNvbWVkYXk8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiIGlkPVwiYW55dGltZVwiPlxuICAgICAgICDwn5eT77iPIDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+YW55dGltZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiIGlkPVwiY29tcGxldGVkLXByb2plY3RcIj5cbiAgICAgICAg4pyFIDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+Y29tcGxldGVkPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwidXNlci1wcm9qZWN0cy1jb250YWluZXJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0LWJ0blwiPvCfl5HvuI88L2J1dHRvbj5cbiAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPmluYm94PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0XCI+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5pbm5lckhUTUwgPSB2aWV3SHRtbDtcbiAgY29uc3QgcHJvamVjdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1wcm9qZWN0XCIpXTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBoYW5kbGVQcm9qZWN0Q2xpY2soXG4gICAgICAgIHByb2plY3QucXVlcnlTZWxlY3RvcihcIi50b2RvLXByb2plY3QtdGl0bGVcIikudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50LWhlYWRlcj4uZGVsZXRlLXByb2plY3QtYnRuXCJcbiAgKTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb250ZW50LWhlYWRlcj4ucHJvamVjdC10aXRsZVwiXG4gICAgKS50ZXh0Q29udGVudDtcbiAgICBoYW5kbGVEZWxldGVQcm9qZWN0T25DbGljayhwcm9qZWN0VGl0bGUpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==