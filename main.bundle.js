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
  --sidebar-bg-color: #f3f4f6;
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
  background-color: var(--sidebar-bg-color);
  gap: 1rem;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}

.todo-project-title {
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
}

.todos-project:hover {
  background-color: #e5e7eb;
  cursor: pointer;
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

#add-project-btn {
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  background-color: #0ba6ff;
}

#add-project-btn:hover {
  background-color: #0ba6ffbe;
}

#add-project-btn:focus {
  border: 2px solid var(--sidebar-bg-color);
}

#add-todo-btn {
  cursor: pointer;
  margin-left: 4rem;
  width: auto;
  align-self: flex-start;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  background-color: #0ba6ff;
}
#add-todo-btn:focus {
  border: 2px solid #fff;
}
#add-todo-btn:hover {
  background-color: #0ba6ffbe;
}

#new-project-input-sidebar {
  width: 100%;
  cursor: text;
}

.title-todo:empty:before,
.description-todo:empty:before,
#new-project-input-sidebar:empty:before {
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
  align-items: flex-start;
}

.todo-controls {
  border: none;
  border-radius: 0.3rem;
  background-color: transparent;
  font-size: 2rem;
  align-self: flex-start;
  justify-self: self-end;
}
.todo-controls:hover {
  background-color: #e5e7eb;
}

.todo-controls img,
.content-header img,
.todos-project img {
  height: 2rem;
}
.content-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
}

.delete-project-btn {
  cursor: pointer;
  align-self: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  line-height: 0;
}

.delete-project-btn:hover {
  border: 1px solid black;
  background-color: #aaa;
}

.project-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 0;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-size: 62.5%;\n  --sidebar-bg-color: #f3f4f6;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n.sidebar {\n  grid-column: 1;\n  padding: 1rem 2rem;\n  min-height: 100vh;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: var(--sidebar-bg-color);\n  gap: 1rem;\n}\n\n.user-projects-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n#completed-project {\n  width: 100%;\n  padding: 0.3rem 0;\n  border-top: 0.15rem solid #000;\n  border-bottom: 0.15rem solid #000;\n  text-align: left;\n}\n\n.todos-project {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n}\n\n.todo-project-title {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n}\n\n.todos-project:hover {\n  background-color: #e5e7eb;\n  cursor: pointer;\n}\n\n.content {\n  grid-column: 2;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: auto 80fr 10fr;\n  grid-template-rows: repeat(3, auto);\n  font-size: 2rem;\n  column-gap: 0.5rem;\n  row-gap: 1rem;\n}\n.complete-todo-checkbox {\n  grid-area: 1/ 1/2/ 2;\n  align-self: flex-start;\n}\n.title-todo {\n  grid-area: 1/ 2/2/ 3;\n  margin: 0;\n}\n\n.description-todo {\n  grid-area: 2/ 2/3/ 3;\n  align-self: flex-start;\n  justify-self: flex-start;\n  margin: 0;\n}\n\n#add-project-btn {\n  cursor: pointer;\n  border: 2px solid transparent;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n  color: #fff;\n  background-color: #0ba6ff;\n}\n\n#add-project-btn:hover {\n  background-color: #0ba6ffbe;\n}\n\n#add-project-btn:focus {\n  border: 2px solid var(--sidebar-bg-color);\n}\n\n#add-todo-btn {\n  cursor: pointer;\n  margin-left: 4rem;\n  width: auto;\n  align-self: flex-start;\n  border: 2px solid transparent;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n  color: #fff;\n  background-color: #0ba6ff;\n}\n#add-todo-btn:focus {\n  border: 2px solid #fff;\n}\n#add-todo-btn:hover {\n  background-color: #0ba6ffbe;\n}\n\n#new-project-input-sidebar {\n  width: 100%;\n  cursor: text;\n}\n\n.title-todo:empty:before,\n.description-todo:empty:before,\n#new-project-input-sidebar:empty:before {\n  content: attr(data-placeholder);\n  color: #aaa;\n}\n\n.description-todo {\n  width: 100%;\n}\n\n.todo-controls-container {\n  grid-area: 2/ 3/3/ 4;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.todo-controls {\n  border: none;\n  border-radius: 0.3rem;\n  background-color: transparent;\n  font-size: 2rem;\n  align-self: flex-start;\n  justify-self: self-end;\n}\n.todo-controls:hover {\n  background-color: #e5e7eb;\n}\n\n.todo-controls img,\n.content-header img,\n.todos-project img {\n  height: 2rem;\n}\n.content-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 2rem;\n}\n\n.delete-project-btn {\n  cursor: pointer;\n  align-self: center;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  line-height: 0;\n}\n\n.delete-project-btn:hover {\n  border: 1px solid black;\n  background-color: #aaa;\n}\n\n.project-title {\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.projects-selection {\n  position: fixed;\n  width: auto;\n  height: 200px;\n  padding: 2rem;\n  border: 3px solid #fff;\n  background-color: #f3f4f6;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: scroll;\n  font-size: 1.6rem;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.projects-selection legend {\n  font-size: 2.5rem;\n}\n\n#add-project-selection-btn {\n  font-size: 1.6rem;\n}\n\n.project-selection-container {\n  grid-area: 3/2/4/3;\n  margin: 0;\n  display: flex;\n  gap: 1rem;\n}\n\n.project-selection {\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n}\n\n.add-project-to-todo-btn {\n  border: 1px transparent solid;\n  box-sizing: border-box;\n  padding: 0.3rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 2rem;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project-to-todo-btn:hover {\n  border: 1px black solid;\n}\n.delete-project-in-project-selection-btn {\n  padding: 0.3;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 50%;\n}\n.delete-project-in-project-selection-btn:hover {\n  background-color: #aaaaaa4f;\n}\n\n.one-project-selection-container {\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  border-radius: 2rem;\n  background-color: rgba(127, 255, 212, 0.485);\n}\n\n.project-selection:read-write:focus,\n.title-todo:read-write:focus,\n.description-todo:read-write:focus,\ndiv.todos-project {\n  outline: none;\n}\n"],"sourceRoot":""}]);
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
    }
  }

  deleteProject(projectToDeleteName) {
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
  if (
    ["anytime", "inbox", "someday", "today", "completed"].includes(projectName)
  ) {
    deleteProjectBtn.classList.add("hidden");
  } else {
    deleteProjectBtn.classList.remove("hidden");
  }

  const newToDoBtn = document.getElementById("add-todo-btn");
  console.log(newToDoBtn);
  if (projectName === "completed") {
    newToDoBtn.classList.add("hidden");
  } else {
    newToDoBtn.classList.remove("hidden");
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
  projectElement.classList.add("todos-project");
  projectElement.id = "new-project-input-sidebar";
  projectElement.setAttribute("contenteditable", "true");
  projectElement.dataset.placeholder = "project...";
  return projectElement;
};

function handleGeneratingNewProject(handler) {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", function () {
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

    newProjectElement.addEventListener("input", () => {
      if (newProjectElement.textContent === "") {
        newProjectElement.innerHTML = "";
      }
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
  const projectElement = document.createElement("div");
  projectElement.classList.add("todos-project");
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

/***/ "./src/view/toDoProjectSectionView.js":
/*!********************************************!*\
  !*** ./src/view/toDoProjectSectionView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isLastProjectEmpty = function (addProjectBtn) {
  const lastProjectElement = addProjectBtn.previousElementSibling;
  return (
    lastProjectElement &&
    lastProjectElement.querySelector(".project-selection").textContent === ""
  );
};

const createProjectsContainer = function () {
  const projectSelectionContainer = document.createElement("div");
  projectSelectionContainer.classList.add("project-selection-container");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-to-todo-btn");
  addProjectBtn.innerText = "➕";
  projectSelectionContainer.insertAdjacentElement("beforeend", addProjectBtn);
  return projectSelectionContainer;
};

const createDeleteButtonForProject = function () {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-project-in-project-selection-btn");
  deleteBtn.textContent = "x";
  return deleteBtn;
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

const removeProjectWhenEmptyOnBlur = function (
  newProjectContainerElement,
  newProjectSelectionElement
) {
  newProjectSelectionElement.addEventListener("blur", () => {
    if (newProjectSelectionElement.textContent === "")
      newProjectContainerElement.remove();
  });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doOnShowProjects = function (toDoContainer, toDoProjects, save) {
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
});


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
/* harmony import */ var _imgs_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/trash.svg */ "./src/view/imgs/trash.svg");
/* harmony import */ var _imgs_projects_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/projects.svg */ "./src/view/imgs/projects.svg");
/* harmony import */ var _toDoProjectSectionView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoProjectSectionView.js */ "./src/view/toDoProjectSectionView.js");




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
    <button class="projects-btn todo-controls">
      <img src="${_imgs_projects_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Show projects">
    </button>
    <button class="remove-todo-btn todo-controls">
      <img src="${_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Delete to-do">
    </button>
  </div>
`;
  return toDoHtml;
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
  [titleElement, descriptionElement].forEach((element) => {
    element.addEventListener("blur", () => {
      saveToDo(toDoContainer, todo, handleEditToDo);
    });
    element.addEventListener("input", () => {
      if (element.textContent === "") {
        element.innerHTML = "";
      }
    });
  });
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

const createToDoContainer = function (todo, isCompleted) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  toDoContainer.dataset.id = todo?.id ?? "";
  const titleDescriptionControlsHtml =
    generateToDoTitleDescriptionAndControlsHtml(todo, isCompleted);
  toDoContainer.insertAdjacentHTML("afterbegin", titleDescriptionControlsHtml);

  const title = toDoContainer.querySelector(".title-todo");
  title.addEventListener("input", () => {
    if (title.textContent == "") {
      title.innerHTML = "";
    }
  });

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
  (0,_toDoProjectSectionView_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
/* harmony import */ var _imgs_delete_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/delete-project.svg */ "./src/view/imgs/delete-project.svg");
/* harmony import */ var _imgs_inbox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/inbox.svg */ "./src/view/imgs/inbox.svg");
/* harmony import */ var _imgs_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/today.svg */ "./src/view/imgs/today.svg");
/* harmony import */ var _imgs_someday_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/someday.svg */ "./src/view/imgs/someday.svg");
/* harmony import */ var _imgs_anytime_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/anytime.svg */ "./src/view/imgs/anytime.svg");
/* harmony import */ var _imgs_completed_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/completed.svg */ "./src/view/imgs/completed.svg");







function generateView(
  handleProjectClick,
  handleDeleteProjectOnClick
) {
  const viewHtml = `
  <div class="sidebar">
      <button class="fixed-todos-project todos-project" id="inbox">
        <img src="${_imgs_inbox_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Inbox"> <span class="todo-project-title">inbox</span>
      </button>
      <button class="fixed-todos-project todos-project">
      <img src="${_imgs_today_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="Today"> <span class="todo-project-title">today</span>
      </button>
      <button class="fixed-todos-project todos-project">
      <img src="${_imgs_someday_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Someday"> <span class="todo-project-title">someday</span>
        </button>
      <button class="fixed-todos-project todos-project" id="anytime">
      <img src="${_imgs_anytime_svg__WEBPACK_IMPORTED_MODULE_4__}" alt="Anytime"> <span class="todo-project-title">anytime</span>
      </button>
      <button class="fixed-todos-project todos-project" id="completed-project">
      <img src="${_imgs_completed_svg__WEBPACK_IMPORTED_MODULE_5__}" alt="Completed"> <span class="todo-project-title">completed</span>
      </button>
      <button type="button" id="add-project-btn">New Project</button>
      <div class="user-projects-container">
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <h2 class="project-title">inbox</h2>
        <button class="delete-project-btn">
          <img src="${_imgs_delete_project_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Delete project">
        </button>
      </div>
      <button type="button" id="add-todo-btn">New To-Do</button>
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


/***/ }),

/***/ "./src/view/imgs/anytime.svg":
/*!***********************************!*\
  !*** ./src/view/imgs/anytime.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "656e48bd782afae68ae7.svg";

/***/ }),

/***/ "./src/view/imgs/completed.svg":
/*!*************************************!*\
  !*** ./src/view/imgs/completed.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba08b6bb0a48dc37303d.svg";

/***/ }),

/***/ "./src/view/imgs/delete-project.svg":
/*!******************************************!*\
  !*** ./src/view/imgs/delete-project.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "091dbf13bac710e84dc3.svg";

/***/ }),

/***/ "./src/view/imgs/inbox.svg":
/*!*********************************!*\
  !*** ./src/view/imgs/inbox.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd258eb0ad7602ba36b1.svg";

/***/ }),

/***/ "./src/view/imgs/projects.svg":
/*!************************************!*\
  !*** ./src/view/imgs/projects.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ceda8365bb3f5030d71.svg";

/***/ }),

/***/ "./src/view/imgs/someday.svg":
/*!***********************************!*\
  !*** ./src/view/imgs/someday.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f55a4212af990ab8a98.svg";

/***/ }),

/***/ "./src/view/imgs/today.svg":
/*!*********************************!*\
  !*** ./src/view/imgs/today.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f967a53c4e168417bde9.svg";

/***/ }),

/***/ "./src/view/imgs/trash.svg":
/*!*********************************!*\
  !*** ./src/view/imgs/trash.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83e6e062d02de7526268.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFN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aUJBQWlCLG9EQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0Q7O0FBRWpDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmdEO0FBQ2pDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEh1QztBQUNNO0FBQ1k7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQVksQ0FBQztBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCLDRDQUFTLENBQUM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNFQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RLa0Q7QUFDVDtBQUNBO0FBQ0k7QUFDQTtBQUNJOztBQUVsQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBUyxDQUFDO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsNENBQVMsQ0FBQztBQUM1QjtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFXLENBQUM7QUFDOUI7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBVyxDQUFDO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQWEsQ0FBQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVMsQ0FBQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2RlbC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kZWwvdG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy9hZGRpbmdOZXdUb0RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L2FsbFRvRG9zSW5Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvcHJvamVjdHNWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L3RvRG9Qcm9qZWN0U2VjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvdG9Eb1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LXNpemU6IDYyLjUlO1xuICAtLXNpZGViYXItYmctY29sb3I6ICNmM2Y0ZjY7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgSGVsdmV0aWNhLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIlNlZ29lIFVJIEVtb2ppXCIsXG4gICAgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cbi5zaWRlYmFyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xuICBnYXA6IDFyZW07XG59XG5cbi51c2VyLXByb2plY3RzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jY29tcGxldGVkLXByb2plY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4zcmVtIDA7XG4gIGJvcmRlci10b3A6IDAuMTVyZW0gc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCAjMDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udG9kb3MtcHJvamVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLnRvZG8tcHJvamVjdC10aXRsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9kb3MtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLnRvZG8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnRvZG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBmciAxMGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHJvdy1nYXA6IDFyZW07XG59XG4uY29tcGxldGUtdG9kby1jaGVja2JveCB7XG4gIGdyaWQtYXJlYTogMS8gMS8yLyAyO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLnRpdGxlLXRvZG8ge1xuICBncmlkLWFyZWE6IDEvIDIvMi8gMztcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVzY3JpcHRpb24tdG9kbyB7XG4gIGdyaWQtYXJlYTogMi8gMi8zLyAzO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuI2FkZC1wcm9qZWN0LWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJhNmZmO1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiYTZmZmJlO1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG59XG5cbiNhZGQtdG9kby1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICB3aWR0aDogYXV0bztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJhNmZmO1xufVxuI2FkZC10b2RvLWJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG4jYWRkLXRvZG8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiYTZmZmJlO1xufVxuXG4jbmV3LXByb2plY3QtaW5wdXQtc2lkZWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50aXRsZS10b2RvOmVtcHR5OmJlZm9yZSxcbi5kZXNjcmlwdGlvbi10b2RvOmVtcHR5OmJlZm9yZSxcbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyOmVtcHR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZGVzY3JpcHRpb24tdG9kbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kby1jb250cm9scy1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDIvIDMvMy8gNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4udG9kby1jb250cm9scyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xufVxuLnRvZG8tY29udHJvbHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xufVxuXG4udG9kby1jb250cm9scyBpbWcsXG4uY29udGVudC1oZWFkZXIgaW1nLFxuLnRvZG9zLXByb2plY3QgaW1nIHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5wcm9qZWN0cy1zZWxlY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5wcm9qZWN0cy1zZWxlY3Rpb24gbGVnZW5kIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbiNhZGQtcHJvamVjdC1zZWxlY3Rpb24tYnRuIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDMvMi80LzM7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5hZGQtcHJvamVjdC10by10b2RvLWJ0biB7XG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG59XG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuIHtcbiAgcGFkZGluZzogMC4zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhNGY7XG59XG5cbi5vbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC40ODUpO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rpb246cmVhZC13cml0ZTpmb2N1cyxcbi50aXRsZS10b2RvOnJlYWQtd3JpdGU6Zm9jdXMsXG4uZGVzY3JpcHRpb24tdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxuZGl2LnRvZG9zLXByb2plY3Qge1xuICBvdXRsaW5lOiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLCtCQUErQjtFQUMvQjs7cUJBRW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSwrQkFBK0I7RUFDL0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC0tc2lkZWJhci1iZy1jb2xvcjogI2YzZjRmNjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIEhlbHZldGljYSwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxuICAgIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG4uc2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udXNlci1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jY29tcGxldGVkLXByb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjNyZW0gMDtcXG4gIGJvcmRlci10b3A6IDAuMTVyZW0gc29saWQgIzAwMDtcXG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgIzAwMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50b2Rvcy1wcm9qZWN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8tcHJvamVjdC10aXRsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb3MtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA4MGZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcbi5jb21wbGV0ZS10b2RvLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogMS8gMS8yLyAyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLnRpdGxlLXRvZG8ge1xcbiAgZ3JpZC1hcmVhOiAxLyAyLzIvIDM7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbi10b2RvIHtcXG4gIGdyaWQtYXJlYTogMi8gMi8zLyAzO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJhNmZmO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYmE2ZmZiZTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG59XFxuXFxuI2FkZC10b2RvLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYmE2ZmY7XFxufVxcbiNhZGQtdG9kby1idG46Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuI2FkZC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJhNmZmYmU7XFxufVxcblxcbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4udGl0bGUtdG9kbzplbXB0eTpiZWZvcmUsXFxuLmRlc2NyaXB0aW9uLXRvZG86ZW1wdHk6YmVmb3JlLFxcbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyOmVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xcbiAgY29sb3I6ICNhYWE7XFxufVxcblxcbi5kZXNjcmlwdGlvbi10b2RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1jb250cm9scy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyLyAzLzMvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XFxufVxcbi50b2RvLWNvbnRyb2xzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIGltZyxcXG4uY29udGVudC1oZWFkZXIgaW1nLFxcbi50b2Rvcy1wcm9qZWN0IGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5jb250ZW50LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0cy1zZWxlY3Rpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5wcm9qZWN0cy1zZWxlY3Rpb24gbGVnZW5kIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4jYWRkLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rpb24ge1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuIHtcXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG46aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxufVxcbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG4ge1xcbiAgcGFkZGluZzogMC4zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhNGY7XFxufVxcblxcbi5vbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjQ4NSk7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGlvbjpyZWFkLXdyaXRlOmZvY3VzLFxcbi50aXRsZS10b2RvOnJlYWQtd3JpdGU6Zm9jdXMsXFxuLmRlc2NyaXB0aW9uLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcXG5kaXYudG9kb3MtcHJvamVjdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL21vZGVsL3N0YXRlLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdlbmVyYXRlVmlldyBmcm9tIFwiLi92aWV3L3ZpZXcuanNcIjtcbmltcG9ydCBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0IGZyb20gXCIuL3ZpZXcvYWxsVG9Eb3NJblByb2plY3QuanNcIjtcbmltcG9ydCBoYW5kbGVHZW5lcmF0aW5nTmV3VG9EbyBmcm9tIFwiLi92aWV3L2FkZGluZ05ld1RvRG8uanNcIjtcbmltcG9ydCBnZW5lcmF0ZVByb2plY3RzVmlldyBmcm9tIFwiLi92aWV3L3Byb2plY3RzVmlldy5qc1wiO1xuaW1wb3J0IGhhbmRsZUdlbmVyYXRpbmdOZXdQcm9qZWN0IGZyb20gXCIuL3ZpZXcvbmV3UHJvamVjdC5qc1wiO1xuXG5jb25zdCBmaXhlZFByb2plY3RzID0gW1wiaW5ib3hcIiwgXCJ0b2RheVwiLCBcInNvbWVkYXlcIiwgXCJhbnl0aW1lXCJdO1xuY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoZml4ZWRQcm9qZWN0cyk7XG5cbmNvbnN0IGhhbmRsZVByb2plY3RDbGljayA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICBjb25zb2xlLmxvZyhcImhpIVwiKTtcbiAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICBwcm9qZWN0TmFtZSxcbiAgICBzdGF0ZS5nZXRBbGxUb0Rvc0luUHJvamVjdChwcm9qZWN0TmFtZSksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbn07XG5cbmNvbnN0IGhhbmRsZURlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgc3RhdGUuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgIGhhbmRsZUVkaXRUb0RvLFxuICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICApO1xuICBnZW5lcmF0ZVByb2plY3RzVmlldyhzdGF0ZS51c2VyUHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xufTtcblxuY29uc3QgaGFuZGxlQ29tcGxldGVUb0RvID0gZnVuY3Rpb24gKGlkKSB7XG4gIHN0YXRlLmNvbXBsZXRlVG9EbyhpZCk7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgIGhhbmRsZUVkaXRUb0RvLFxuICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICApO1xufTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgY29uc29sZS5sb2coXCJoYW5kbGluZyBhZGRpbmcgbmV3IHByb2plY3RcIik7XG4gIHN0YXRlLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICBnZW5lcmF0ZVByb2plY3RzVmlldyhzdGF0ZS51c2VyUHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xufTtcblxuY29uc3QgaGFuZGxlRWRpdFRvRG8gPSBmdW5jdGlvbiAodG9Eb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RzLCBkYXRlKSB7XG4gIHN0YXRlLmVkaXRUb0RvKHRvRG9JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0cywgZGF0ZSk7XG4gIGlmICghcHJvamVjdHMuaW5jbHVkZXMoc3RhdGUuY3VycmVudFByb2plY3QpKSB7XG4gICAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICAgICk7XG4gIH1cbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoc3RhdGUudXNlclByb2plY3ROYW1lcywgaGFuZGxlUHJvamVjdENsaWNrKTtcbn07XG5cbmNvbnN0IGhhbmRsZURlbGV0ZVRvRG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgc3RhdGUucmVtb3ZlVG9EbyhpZCk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICBnZW5lcmF0ZVZpZXcoaGFuZGxlUHJvamVjdENsaWNrLCBoYW5kbGVEZWxldGVQcm9qZWN0KTtcbiAgaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8oaGFuZGxlRGVsZXRlVG9EbywgaGFuZGxlRWRpdFRvRG8sIGhhbmRsZUNvbXBsZXRlVG9Ebyk7XG4gIGhhbmRsZUdlbmVyYXRpbmdOZXdQcm9qZWN0KGhhbmRsZUFkZE5ld1Byb2plY3QpO1xuICBnZW5lcmF0ZVByb2plY3RzVmlldyhzdGF0ZS51c2VyUHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbn07XG5pbml0KCk7XG4iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b0RvLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSB7XG4gICN0b0RvcyA9IHt9O1xuICAjY29tcGxldGVkVG9Eb3MgPSB7fTtcbiAgI3Byb2plY3RzID0ge307XG4gICNjdXJyZW50UHJvamVjdCA9IFwiaW5ib3hcIjtcbiAgI2ZpeGVkUHJvamVjdHM7XG4gIGNvbnN0cnVjdG9yKGZpeGVkUHJvamVjdHMpIHtcbiAgICBmaXhlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+ICh0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFtdKSk7XG4gICAgdGhpcy4jZml4ZWRQcm9qZWN0cyA9IGZpeGVkUHJvamVjdHM7XG4gICAgdGhpcy4jZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBzZXQgZml4ZWRQcm9qZWN0cyhwcm9qZWN0c05hbWVzKSB7XG4gICAgdGhpcy4jZml4ZWRQcm9qZWN0cyA9IHByb2plY3RzTmFtZXM7XG4gIH1cblxuICBnZXQgY3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0O1xuICB9XG5cbiAgc2V0IGN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHByb2plY3ROYW1lICYmIHRoaXMuI3Byb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3ROYW1lKSkge1xuICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG4gIH1cblxuICBhZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdHMsIGRhdGUgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG4gICAgbGV0IHByb2plY3RXaXRoQ3VycmVudCA9IFtcbiAgICAgIC4uLm5ldyBTZXQocHJvamVjdHMuY29uY2F0KFt0aGlzLmN1cnJlbnRQcm9qZWN0XSkpLFxuICAgIF07XG4gICAgcHJvamVjdFdpdGhDdXJyZW50ID0gcHJvamVjdFdpdGhDdXJyZW50LmZpbHRlcihcbiAgICAgIChwcm9qZWN0KSA9PiAhKHByb2plY3QgaW4gW1wic29tZWRheVwiLCBcImFueXRpbWVcIiwgXCJ0b2RheVwiLCBcImNvbXBsZXRlZFwiXSlcbiAgICApO1xuICAgIGNvbnN0IHRvRG8gPSBUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdFdpdGhDdXJyZW50LCBkYXRlKTtcbiAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXSA9IHRvRG87XG4gICAgcHJvamVjdFdpdGhDdXJyZW50LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0IGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnVuc2hpZnQodG9Eby5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFt0b0RvLmlkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eby5pZDtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBpZiAocHJvamVjdE5hbWUgaW4gdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0TmFtZV0gPSBbXTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gICNyZW1vdmVUb0RvRnJvbUNvbXBsZXRlZCh0b0RvSWQpIHtcbiAgICBpZiAoISh0b0RvSWQgaW4gdGhpcy4jY29tcGxldGVkVG9Eb3MpKSByZXR1cm47XG4gICAgY29uc3QgdG9Eb1RvRGVsZXRlID0gdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcbiAgICBkZWxldGUgdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eb1RvRGVsZXRlO1xuICB9XG5cbiAgI3JlbW92ZVRvRG9Gcm9tQWN0aXZlVG9Eb3ModG9Eb0lkKSB7XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI3RvRG9zKSkgcmV0dXJuO1xuICAgIHRoaXMuI3RvRG9zW3RvRG9JZF0ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgZGVsZXRlSW5kZXggPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoXG4gICAgICAgIChjdXJUb0RvSWQpID0+IGN1clRvRG9JZCA9PT0gdG9Eb0lkXG4gICAgICApO1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcbiAgICB9KTtcbiAgICBjb25zdCB0b0RvVG9EZWxldGUgPSB0aGlzLiN0b0Rvc1t0b0RvSWRdO1xuICAgIGRlbGV0ZSB0aGlzLiN0b0Rvc1t0b0RvSWRdO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiB0b0RvVG9EZWxldGU7XG4gIH1cblxuICByZW1vdmVUb0RvKHRvRG9JZCkge1xuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3JlbW92ZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNyZW1vdmVUb0RvRnJvbUFjdGl2ZVRvRG9zKHRvRG9JZCk7XG4gIH1cblxuICBnZXRBbGxUb0Rvc0luUHJvamVjdChwcm9qZWN0ID0gXCJcIikge1xuICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC50cmltKCkgfHwgdGhpcy4jY3VycmVudFByb2plY3Q7XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG5cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuI2NvbXBsZXRlZFRvRG9zKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcInRvZGF5XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLiN0b2RheVRvRG9zO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJzb21lZGF5XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLiNzb21lZGF5VG9Eb3M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImFueXRpbWVcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI2FueXRpbWVUb0RvcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4jcHJvamVjdHNbdGhpcy4jY3VycmVudFByb2plY3RdLm1hcChcbiAgICAgICh0b0RvSWQpID0+IHRoaXMuI3RvRG9zW3RvRG9JZF1cbiAgICApO1xuICB9XG5cbiAgZWRpdFRvRG8odG9Eb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG5ld1Byb2plY3RzLCBkYXRlKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKHRvRG9JZCBpbiB0aGlzLiN0b0RvcykpIHtcbiAgICAgIHRoaXMuYWRkVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIG5ld1Byb2plY3RzLCBkYXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkUHJvamVjdHMgPSB0aGlzLiN0b0Rvc1t0b0RvSWRdLnByb2plY3RzO1xuICAgIGNvbnN0IHJlbW92ZWRQcm9qZWN0cyA9IG9sZFByb2plY3RzLmZpbHRlcihcbiAgICAgIChvbGRQcm9qZWN0KSA9PiAhbmV3UHJvamVjdHMuaW5jbHVkZXMob2xkUHJvamVjdClcbiAgICApO1xuICAgIHRoaXMuI3VwZGF0ZVRvRG8odG9Eb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG5ld1Byb2plY3RzLCBkYXRlKTtcbiAgICB0aGlzLiNzYXZlTmV3UHJvamVjdHMob2xkUHJvamVjdHMsIG5ld1Byb2plY3RzLCB0b0RvSWQpO1xuICAgIHRoaXMuI2RlbGV0ZVRvRG9Gcm9tRXhjbHVkZWRQcm9qZWN0cyhyZW1vdmVkUHJvamVjdHMsIHRvRG9JZCk7XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAjcmVzdG9yZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCkge1xuICAgIGlmICghKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0RvcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9EbyA9IHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF07XG4gICAgZGVsZXRlIHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF07XG5cbiAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXSA9IHRvRG87XG4gICAgdG9Eby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdCBpbiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS51bnNoaWZ0KHRvRG8uaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0gPSBbdG9Eby5pZF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAjcHV0VG9Eb1RvQ29tcGxldGVkKHRvRG9JZCkge1xuICAgIGlmICh0b0RvSWQgaW4gdGhpcy4jY29tcGxldGVkVG9Eb3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9Eb1RvQ29tcGxldGUgPSB0aGlzLnJlbW92ZVRvRG8odG9Eb0lkKTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdID0gdG9Eb1RvQ29tcGxldGU7XG4gIH1cblxuICBjb21wbGV0ZVRvRG8odG9Eb0lkKSB7XG4gICAgaWYgKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0Rvcykge1xuICAgICAgdGhpcy4jcmVzdG9yZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3B1dFRvRG9Ub0NvbXBsZXRlZCh0b0RvSWQpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVUb0RvKHRvRG9JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0cywgZGF0ZSkge1xuICAgIHRoaXMuI3RvRG9zW3RvRG9JZF0udGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLiN0b0Rvc1t0b0RvSWRdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIHRoaXMuI3RvRG9zW3RvRG9JZF0uZGF0ZSA9IGRhdGU7XG4gIH1cblxuICAjZGVsZXRlVG9Eb0Zyb21FeGNsdWRlZFByb2plY3RzKHJlbW92ZWRQcm9qZWN0cywgaWQpIHtcbiAgICByZW1vdmVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoKG9sZElkKSA9PiBvbGRJZCA9PT0gaWQpO1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gICNzYXZlTmV3UHJvamVjdHMob2xkUHJvamVjdHMsIG5ld1Byb2plY3RzLCB0b0RvSWQpIHtcbiAgICBuZXdQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAob2xkUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuI3Byb2plY3RzW3Byb2plY3RdKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnVuc2hpZnQodG9Eb0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW3RvRG9JZF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjc2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy4jdG9Eb3MpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuI3Byb2plY3RzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBcImNvbXBsZXRlZF90b2Rvc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy4jY29tcGxldGVkVG9Eb3MpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY3VycmVudF9wcm9qZWN0XCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLiNjdXJyZW50UHJvamVjdClcbiAgICApO1xuICB9XG5cbiAgI2dldExvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IGNvbXBsZXRlZFRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZF90b2Rvc1wiKSk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9wcm9qZWN0XCIpKTtcbiAgICBpZiAodG9kb3MpIHtcbiAgICAgIHRoaXMuI3RvRG9zID0gdG9kb3M7XG4gICAgfVxuICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgdGhpcy4jcHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBpZiAoY29tcGxldGVkVG9Eb3MpIHtcbiAgICAgIHRoaXMuI2NvbXBsZXRlZFRvRG9zID0gY29tcGxldGVkVG9Eb3M7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdDtcbiAgICB9XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUb0RlbGV0ZU5hbWUpIHtcbiAgICBpZiAoIShwcm9qZWN0VG9EZWxldGVOYW1lIGluIHRoaXMuI3Byb2plY3RzKSkgcmV0dXJuO1xuICAgIGlmIChwcm9qZWN0VG9EZWxldGVOYW1lIGluIHRoaXMuI2ZpeGVkUHJvamVjdHMpIHJldHVybjtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuI3RvRG9zKS5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICB0b0RvLnByb2plY3RzID0gdG9Eby5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSBwcm9qZWN0VG9EZWxldGVOYW1lXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLiNjb21wbGV0ZWRUb0RvcykuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgdG9Eby5wcm9qZWN0cyA9IHRvRG8ucHJvamVjdHMuZmlsdGVyKFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdCAhPT0gcHJvamVjdFRvRGVsZXRlTmFtZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBkZWxldGUgdGhpcy4jcHJvamVjdHNbcHJvamVjdFRvRGVsZXRlTmFtZV07XG4gICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBcImluYm94XCI7XG4gIH1cblxuICBnZXQgdXNlclByb2plY3ROYW1lcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy4jcHJvamVjdHMpLmZpbHRlcigobmFtZSkgPT5cbiAgICAgIHRoaXMuI2ZpeGVkUHJvamVjdHMuZXZlcnkoKHByb2plY3QpID0+IHByb2plY3QgIT09IG5hbWUpXG4gICAgKTtcbiAgfVxuXG4gIGdldCAjc29tZWRheVRvRG9zKCkge1xuICAgIGNvbnN0IHNvbWVkYXlUb0RvcyA9IE9iamVjdC52YWx1ZXModGhpcy4jdG9Eb3MpLmZpbHRlcigodG9EbykgPT4ge1xuICAgICAgcmV0dXJuIHRvRG8uZGF0ZTtcbiAgICB9KTtcbiAgICBzb21lZGF5VG9Eb3Muc29ydCgodG9kb0EsIHRvZG9CKSA9PiAtdG9kb0EuaWQgKyB0b2RvQi5pZCk7XG4gICAgcmV0dXJuIHNvbWVkYXlUb0RvcztcbiAgfVxuXG4gIGdldCAjYW55dGltZVRvRG9zKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuI3RvRG9zKTtcbiAgfVxuXG4gIGdldCAjdG9kYXlUb0RvcygpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0b2RheVRvRG9zID0gT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0RvcykuZmlsdGVyKCh0b0RvKSA9PiB7XG4gICAgICBpZiAoIXRvRG8uZGF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgY3VycmVudFRvRG9EYXRlID0gbmV3IERhdGUodG9Eby5kYXRlKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGN1cnJlbnRUb0RvRGF0ZS5nZXREYXRlKCkgPT09IHRvZGF5LmdldERhdGUoKSAmJlxuICAgICAgICBjdXJyZW50VG9Eb0RhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgICAgICBjdXJyZW50VG9Eb0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0b2RheVRvRG9zLnNvcnQoKHRvZG9BLCB0b2RvQikgPT4gLXRvZG9BLmlkICsgdG9kb0IuaWQpO1xuICAgIHJldHVybiB0b2RheVRvRG9zO1xuICB9XG5cbiAgbW92ZVRvRG9Qcmlvcml0eUluUHJvamVjdFVwKHRvRG9JZCwgcHJvamVjdCkge1xuICAgIGlmICghdGhpcy4jdG9Eb3NbdG9Eb0lkXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mVG9EbyA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleChcbiAgICAgICh0b0RvKSA9PiB0b0RvLmlkID09PSB0b0RvSWRcbiAgICApO1xuXG4gICAgaWYgKCFpbmRleE9mVG9EbyA/PyBpbmRleE9mVG9EbyA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBbXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9EbyAtIDFdLFxuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG9dLFxuICAgIF0gPSBbXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9Eb10sXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9EbyAtIDFdLFxuICAgIF07XG4gIH1cblxuICBtb3ZlVG9Eb1ByaW9yaXR5SW5Qcm9qZWN0RG93bih0b0RvSWQsIHByb2plY3QpIHtcbiAgICBpZiAoIXRoaXMuI3RvRG9zW3RvRG9JZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZlRvRG8gPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoXG4gICAgICAodG9EbykgPT4gdG9Eby5pZCA9PT0gdG9Eb0lkXG4gICAgKTtcbiAgICBpZiAoIWluZGV4T2ZUb0RvIHx8IGluZGV4T2ZUb0RvID09PSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gKyAxXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICBdID0gW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG9dLFxuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gKyAxXSxcbiAgICBdO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdHMsIGRhdGUgPSBudWxsKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJvamVjdHMsXG4gICAgZGF0ZSxcbiAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIH07XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVUb0RvRWxlbWVudCBmcm9tIFwiLi90b0RvVmlldy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVHZW5lcmF0aW5nTmV3VG9EbyhcbiAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgaGFuZGxlRWRpdFRvRG8sXG4gIGhhbmRsZUNvbXBsZXRlVG9Eb1xuKSB7XG4gIGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLWJ0blwiKTtcbiAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvRG9MaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgIGNvbnN0IHRvRG9FbGVtZW50ID0gZ2VuZXJhdGVUb0RvRWxlbWVudChcbiAgICAgIG51bGwsXG4gICAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgICApO1xuICAgIGlmICghdG9Eb0VsZW1lbnQpIHJldHVybjtcbiAgICB0b0RvTGlzdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCB0b0RvRWxlbWVudCk7XG4gICAgdG9Eb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpLmZvY3VzKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGdlbmVyYXRlVG9Eb0VsZW1lbnQgZnJvbSBcIi4vdG9Eb1ZpZXcuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gIHByb2plY3ROYW1lLFxuICB0b2RvcyxcbiAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgaGFuZGxlRWRpdFRvRG8sXG4gIGhhbmRsZUNvbXBsZXRlVG9Eb1xuKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbnRlbnQtaGVhZGVyPi5kZWxldGUtcHJvamVjdC1idG5cIlxuICApO1xuICBpZiAoXG4gICAgW1wiYW55dGltZVwiLCBcImluYm94XCIsIFwic29tZWRheVwiLCBcInRvZGF5XCIsIFwiY29tcGxldGVkXCJdLmluY2x1ZGVzKHByb2plY3ROYW1lKVxuICApIHtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xuICBjb25zb2xlLmxvZyhuZXdUb0RvQnRuKTtcbiAgaWYgKHByb2plY3ROYW1lID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgbmV3VG9Eb0J0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIG5ld1RvRG9CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBjb25zdCB0b0RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgdG9Eb0xpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGlmICghdG9kb3MpIHJldHVybjtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvRG9FbGVtZW50ID0gZ2VuZXJhdGVUb0RvRWxlbWVudChcbiAgICAgIHRvZG8sXG4gICAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgICApO1xuICAgIHRvRG9MaXN0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdG9Eb0VsZW1lbnQpO1xuICB9KTtcbn1cbiIsImNvbnN0IGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9zLXByb2plY3RcIik7XG4gIHByb2plY3RFbGVtZW50LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyXCI7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIHByb2plY3RFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIgPSBcInByb2plY3QuLi5cIjtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGluZ05ld1Byb2plY3QoaGFuZGxlcikge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQoKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmZvY3VzKCk7XG4gICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gXCJcIikge1xuICAgICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgIH1cbiAgICAgIG5ld1Byb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImNvbnN0IGdlbmVyYXRlT25lUHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtcHJvamVjdFwiKTtcbiAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c1ZpZXcocHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdE5hbWVzLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU9uZVByb2plY3RFbGVtZW50KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJjb25zdCBpc0xhc3RQcm9qZWN0RW1wdHkgPSBmdW5jdGlvbiAoYWRkUHJvamVjdEJ0bikge1xuICBjb25zdCBsYXN0UHJvamVjdEVsZW1lbnQgPSBhZGRQcm9qZWN0QnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIHJldHVybiAoXG4gICAgbGFzdFByb2plY3RFbGVtZW50ICYmXG4gICAgbGFzdFByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3Rpb25cIikudGV4dENvbnRlbnQgPT09IFwiXCJcbiAgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtdG8tdG9kby1idG5cIik7XG4gIGFkZFByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCLinpVcIjtcbiAgcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgYWRkUHJvamVjdEJ0bik7XG4gIHJldHVybiBwcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG5cIik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuY29uc3QgaGFuZGxlRGVsZXRpbmdQcm9qZWN0ID0gZnVuY3Rpb24gKFxuICBkZWxldGVQcm9qZWN0QnRuLFxuICBwcm9qZWN0Q29udGFpbmVyLFxuICBzYXZlXG4pIHtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3RXaGVuRW1wdHlPbkJsdXIgPSBmdW5jdGlvbiAoXG4gIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LFxuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudFxuKSB7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiXCIpXG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVFbXB0eVByb2plY3RDb250YWluZXJFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpO1xuICByZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSA9IFwiXCIpIHtcbiAgY29uc3QgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWxlY3Rpb25cIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIHJldHVybiBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKHByb2plY3ROYW1lID0gXCJcIiwgc2F2ZSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRW1wdHlQcm9qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuICBjb25zdCBpbnB1dFByb2plY3RFbGVtZW50ID0gY3JlYXRlTmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQocHJvamVjdE5hbWUpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCgpO1xuXG4gIGhhbmRsZURlbGV0aW5nUHJvamVjdChkZWxldGVQcm9qZWN0QnRuLCBwcm9qZWN0Q29udGFpbmVyLCBzYXZlKTtcbiAgcmVtb3ZlUHJvamVjdFdoZW5FbXB0eU9uQmx1cihwcm9qZWN0Q29udGFpbmVyLCBpbnB1dFByb2plY3RFbGVtZW50KTtcbiAgaW5wdXRQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICB9KTtcbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wdXRQcm9qZWN0RWxlbWVudCk7XG4gIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlbGV0ZVByb2plY3RCdG4pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJID0gZnVuY3Rpb24gKHByb2plY3RzQ29udGFpbmVyLCBzYXZlKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc0xhc3RQcm9qZWN0RW1wdHkoYWRkUHJvamVjdEJ0bikpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lcihcIlwiLCBzYXZlKTtcbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvblwiKS5mb2N1cygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluc2VydFByb2plY3RzVG9Qcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgcHJvamVjdHMsXG4gIHNhdmVcbikge1xuICBpZiAoIXByb2plY3RzKSByZXR1cm47XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIFwiYmVmb3JlYmVnaW5cIixcbiAgICAgIGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyKHByb2plY3QsIHNhdmUpXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9PblNob3dQcm9qZWN0cyA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCB0b0RvUHJvamVjdHMsIHNhdmUpIHtcbiAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIlxuICAgICk7XG4gICAgaWYgKGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIpIHtcbiAgICAgIGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKTtcblxuICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICBpbnNlcnRQcm9qZWN0c1RvUHJvamVjdENvbnRhaW5lcihwcm9qZWN0c0NvbnRhaW5lciwgdG9Eb1Byb2plY3RzLCBzYXZlKTtcbiAgICBoYW5kbGVBZGRpbmdOZXdQcm9qZWN0VG9VSShwcm9qZWN0c0NvbnRhaW5lciwgc2F2ZSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vaW1ncy90cmFzaC5zdmdcIjtcbmltcG9ydCBQcm9qZWN0c0ljb24gZnJvbSBcIi4vaW1ncy9wcm9qZWN0cy5zdmdcIjtcbmltcG9ydCBkb09uU2hvd1Byb2plY3RzIGZyb20gXCIuL3RvRG9Qcm9qZWN0U2VjdGlvblZpZXcuanNcIjtcblxuY29uc3QgZ2VuZXJhdGVUb0RvVGl0bGVEZXNjcmlwdGlvbkFuZENvbnRyb2xzSHRtbCA9IGZ1bmN0aW9uIChcbiAgdG9kbyxcbiAgaXNDb21wbGV0ZWRcbikge1xuICBjb25zdCB0b0RvSHRtbCA9IGBcbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7XG4gICAgaXNDb21wbGV0ZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJcbiAgfSBjbGFzcz1cImNvbXBsZXRlLXRvZG8tY2hlY2tib3hcIiAvPlxuICA8aDMgY2xhc3M9XCJ0aXRsZS10b2RvXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIGRhdGEtcGxhY2Vob2xkZXI9XCJ0aXRsZVwiPiR7XG4gICAgdG9kbyA/IHRvZG8udGl0bGUgOiBcIlwiXG4gIH08L2gzPlxuICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tdG9kb1wiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBkYXRhLXBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb24uLi5cIj4ke1xuICAgIHRvZG8gPyB0b2RvLmRlc2NyaXB0aW9uIDogXCJcIlxuICB9PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0b2RvLWNvbnRyb2xzLWNvbnRhaW5lclwiPlxuICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiXCIgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdHMtYnRuIHRvZG8tY29udHJvbHNcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtQcm9qZWN0c0ljb259XCIgYWx0PVwiU2hvdyBwcm9qZWN0c1wiPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmUtdG9kby1idG4gdG9kby1jb250cm9sc1wiPlxuICAgICAgPGltZyBzcmM9XCIke1RyYXNoSWNvbn1cIiBhbHQ9XCJEZWxldGUgdG8tZG9cIj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5gO1xuICByZXR1cm4gdG9Eb0h0bWw7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9IGZ1bmN0aW9uIChleGlzdGluZ1Byb2plY3RzLCB0b0RvRWxlbWVudCkge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpKSB7XG4gICAgcmV0dXJuIGV4aXN0aW5nUHJvamVjdHM7XG4gIH1cbiAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gW1xuICAgIC4uLnRvRG9FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXNlbGVjdGlvblwiKSxcbiAgXTtcblxuICBjb25zdCBwcm9qZWN0TmFtZXMgPSBwcm9qZWN0RWxlbWVudHMubWFwKFxuICAgIChwcm9qZWN0RWxlbWVudCkgPT4gcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnRcbiAgKTtcbiAgcmV0dXJuIHByb2plY3ROYW1lcztcbn07XG5cbmNvbnN0IGdldERhdGUgPSBmdW5jdGlvbiAodG9Eb0VsZW1lbnQpIHtcbiAgY29uc3QgZGF0ZUNvbnRyb2wgPSB0b0RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICBsZXQgZGF0ZSA9IG51bGw7XG4gIGlmIChkYXRlQ29udHJvbC52YWx1ZSkgZGF0ZSA9IG5ldyBEYXRlKGRhdGVDb250cm9sLnZhbHVlQXNOdW1iZXIpO1xuICByZXR1cm4gZGF0ZTtcbn07XG5cbmNvbnN0IHNhdmVPbkJsdXIgPSBmdW5jdGlvbiAodG9Eb0NvbnRhaW5lciwgdG9kbywgaGFuZGxlRWRpdFRvRG8pIHtcbiAgY29uc3QgW3RpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50XSA9IFtcbiAgICB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdG9kb1wiKSxcbiAgICB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tdG9kb1wiKSxcbiAgXTtcbiAgW3RpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50XS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBzYXZlVG9Ebyh0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebyk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgZGF0ZUNvbnRyb2wgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gIGRhdGVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIHNhdmVUb0RvKHRvRG9Db250YWluZXIsIHRvZG8sIGhhbmRsZUVkaXRUb0RvKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzYXZlVG9EbyA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebykge1xuICBjb25zdCBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdID0gW1xuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpLFxuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10b2RvXCIpLFxuICBdO1xuICBpZiAoXG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA9PT0gXCJcIiAmJlxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgPT09IFwiXCJcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHModG9kbz8ucHJvamVjdHMgPz8gW10sIHRvRG9Db250YWluZXIpO1xuICBjb25zdCBkYXRlID0gZ2V0RGF0ZSh0b0RvQ29udGFpbmVyKTtcbiAgaGFuZGxlRWRpdFRvRG8oXG4gICAgdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkLFxuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCxcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgcHJvamVjdHMsXG4gICAgZGF0ZVxuICApO1xufTtcblxuY29uc3QgZG9PbkRlbGV0ZUJ0biA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCBoYW5kbGVEZWxldGVUb0RvKSB7XG4gIHRvRG9Db250YWluZXJcbiAgICAucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtdG9kby1idG5cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8odG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkKTtcbiAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVUb0RvQ29udGFpbmVyID0gZnVuY3Rpb24gKHRvZG8sIGlzQ29tcGxldGVkKSB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gIHRvRG9Db250YWluZXIuZGF0YXNldC5pZCA9IHRvZG8/LmlkID8/IFwiXCI7XG4gIGNvbnN0IHRpdGxlRGVzY3JpcHRpb25Db250cm9sc0h0bWwgPVxuICAgIGdlbmVyYXRlVG9Eb1RpdGxlRGVzY3JpcHRpb25BbmRDb250cm9sc0h0bWwodG9kbywgaXNDb21wbGV0ZWQpO1xuICB0b0RvQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgdGl0bGVEZXNjcmlwdGlvbkNvbnRyb2xzSHRtbCk7XG5cbiAgY29uc3QgdGl0bGUgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdG9kb1wiKTtcbiAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBpZiAodGl0bGUudGV4dENvbnRlbnQgPT0gXCJcIikge1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50IC5wcm9qZWN0LXRpdGxlXCJcbiAgKS50ZXh0Q29udGVudDtcbiAgaWYgKHByb2plY3RUaXRsZSA9PT0gXCJ0b2RheVwiIHx8IHByb2plY3RUaXRsZSA9PT0gXCJzb21lZGF5XCIpIHtcbiAgICBkYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpO1xuICB9XG4gIGlmICh0b2RvPy5kYXRlKSB7XG4gICAgZGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUodG9kby5kYXRlKTtcbiAgfVxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGRvT25Db21wbGV0ZVRvRG8gPSBmdW5jdGlvbiAodG9Eb0NvbnRhaW5lciwgaWQsIGhhbmRsZUNvbXBsZXRlVG9Ebykge1xuICBjb25zdCBjaGVja2JveCA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZS10b2RvLWNoZWNrYm94XCIpO1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRvRG9Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZUNvbXBsZXRlVG9EbyhpZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUb0RvRWxlbWVudChcbiAgdG9kbyA9IG51bGwsXG4gIGhhbmRsZURlbGV0ZVRvRG8sXG4gIGhhbmRsZUVkaXRUb0RvLFxuICBoYW5kbGVDb21wbGV0ZVRvRG9cbikge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbnRlbnQgLnByb2plY3QtdGl0bGVcIlxuICApLnRleHRDb250ZW50O1xuICBjb25zdCBpc0NvbXBsZXRlZCA9IHByb2plY3RUaXRsZSA9PT0gXCJjb21wbGV0ZWRcIjtcbiAgaWYgKGlzQ29tcGxldGVkICYmICF0b2RvKSByZXR1cm47XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBjcmVhdGVUb0RvQ29udGFpbmVyKHRvZG8sIGlzQ29tcGxldGVkKTtcbiAgZG9PbkNvbXBsZXRlVG9Ebyh0b0RvQ29udGFpbmVyLCB0b2RvPy5pZCwgaGFuZGxlQ29tcGxldGVUb0RvKTtcbiAgZG9PbkRlbGV0ZUJ0bih0b0RvQ29udGFpbmVyLCBoYW5kbGVEZWxldGVUb0RvKTtcbiAgaWYgKGlzQ29tcGxldGVkKSByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcbiAgZG9PblNob3dQcm9qZWN0cyhcbiAgICB0b0RvQ29udGFpbmVyLFxuICAgIHRvZG8/LnByb2plY3RzID8/IFtdLFxuICAgIHNhdmVUb0RvLmJpbmQobnVsbCwgdG9Eb0NvbnRhaW5lciwgdG9kbywgaGFuZGxlRWRpdFRvRG8pXG4gICk7XG4gIHNhdmVPbkJsdXIodG9Eb0NvbnRhaW5lciwgdG9kbywgaGFuZGxlRWRpdFRvRG8pO1xuXG4gIHJldHVybiB0b0RvQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IFRyYXNoSWNvbiBmcm9tIFwiLi9pbWdzL2RlbGV0ZS1wcm9qZWN0LnN2Z1wiO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiLi9pbWdzL2luYm94LnN2Z1wiO1xuaW1wb3J0IFRvZGF5SWNvbiBmcm9tIFwiLi9pbWdzL3RvZGF5LnN2Z1wiO1xuaW1wb3J0IFNvbWVkYXlJY29uIGZyb20gXCIuL2ltZ3Mvc29tZWRheS5zdmdcIjtcbmltcG9ydCBBbnl0aW1lSWNvbiBmcm9tIFwiLi9pbWdzL2FueXRpbWUuc3ZnXCI7XG5pbXBvcnQgQ29tcGxldGVkSWNvbiBmcm9tIFwiLi9pbWdzL2NvbXBsZXRlZC5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVWaWV3KFxuICBoYW5kbGVQcm9qZWN0Q2xpY2ssXG4gIGhhbmRsZURlbGV0ZVByb2plY3RPbkNsaWNrXG4pIHtcbiAgY29uc3Qgdmlld0h0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJzaWRlYmFyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCIgaWQ9XCJpbmJveFwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7SW5ib3hJY29ufVwiIGFsdD1cIkluYm94XCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+aW5ib3g8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtUb2RheUljb259XCIgYWx0PVwiVG9kYXlcIj4gPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj50b2RheTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiPlxuICAgICAgPGltZyBzcmM9XCIke1NvbWVkYXlJY29ufVwiIGFsdD1cIlNvbWVkYXlcIj4gPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj5zb21lZGF5PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIiBpZD1cImFueXRpbWVcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtBbnl0aW1lSWNvbn1cIiBhbHQ9XCJBbnl0aW1lXCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+YW55dGltZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiIGlkPVwiY29tcGxldGVkLXByb2plY3RcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtDb21wbGV0ZWRJY29ufVwiIGFsdD1cIkNvbXBsZXRlZFwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPmNvbXBsZXRlZDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtcHJvamVjdC1idG5cIj5OZXcgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInVzZXItcHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5pbmJveDwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdC1idG5cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7VHJhc2hJY29ufVwiIGFsdD1cIkRlbGV0ZSBwcm9qZWN0XCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZC10b2RvLWJ0blwiPk5ldyBUby1EbzwvYnV0dG9uPlxuICAgICAgPHVsIGNsYXNzPVwidG9kby1saXN0XCI+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5pbm5lckhUTUwgPSB2aWV3SHRtbDtcbiAgY29uc3QgcHJvamVjdHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2Rvcy1wcm9qZWN0XCIpXTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBoYW5kbGVQcm9qZWN0Q2xpY2soXG4gICAgICAgIHByb2plY3QucXVlcnlTZWxlY3RvcihcIi50b2RvLXByb2plY3QtdGl0bGVcIikudGV4dENvbnRlbnRcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50LWhlYWRlcj4uZGVsZXRlLXByb2plY3QtYnRuXCJcbiAgKTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb250ZW50LWhlYWRlcj4ucHJvamVjdC10aXRsZVwiXG4gICAgKS50ZXh0Q29udGVudDtcbiAgICBoYW5kbGVEZWxldGVQcm9qZWN0T25DbGljayhwcm9qZWN0VGl0bGUpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==