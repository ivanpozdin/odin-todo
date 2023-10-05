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
  --action-btn-color: #0ba6ff;
  --action-btn-on-hover-color: #0ba6ffbe;
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
  width: 100%;
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

#add-project-btn,
#add-todo-btn {
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  color: #fff;
  background-color: var(--action-btn-color);
}

#add-project-btn:focus {
  border: 2px solid var(--sidebar-bg-color);
}

#add-todo-btn {
  margin-left: 4rem;
  align-self: flex-start;
}
#add-todo-btn:focus {
  border: 2px solid #fff;
}
#add-todo-btn:hover,
#add-project-btn:hover {
  background-color: var(--action-btn-on-hover-color);
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
  background-color: transparent;
  font-size: 2rem;
  align-self: flex-start;
  justify-self: self-end;
  border-radius: 0.5rem;
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

.delete-project-btn:hover,
.todo-controls:hover {
  background-color: var(--sidebar-bg-color);
}

.delete-project-btn:focus {
  border: 1px solid black;
}

.project-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 0;
}

.hidden {
  opacity: 0;
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

.add-project-to-todo-btn > img {
  width: 2rem;
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
  background-color: var(--sidebar-bg-color);
  border: 1px #9ca3af solid;
}

.delete-project-in-project-selection-btn {
  padding: 0.3;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
}

.delete-project-in-project-selection-btn img {
  height: 2rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-size: 62.5%;\n  --sidebar-bg-color: #f3f4f6;\n  --action-btn-color: #0ba6ff;\n  --action-btn-on-hover-color: #0ba6ffbe;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n.sidebar {\n  grid-column: 1;\n  padding: 1rem 2rem;\n  min-height: 100vh;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: var(--sidebar-bg-color);\n  gap: 1rem;\n}\n\n.user-projects-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n#completed-project {\n  width: 100%;\n  padding: 0.3rem 0;\n  border-top: 0.15rem solid #000;\n  border-bottom: 0.15rem solid #000;\n  text-align: left;\n}\n\n.todos-project {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n\n.todo-project-title {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n}\n\n.todos-project:hover {\n  background-color: #e5e7eb;\n  cursor: pointer;\n}\n\n.content {\n  grid-column: 2;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: auto 80fr 10fr;\n  grid-template-rows: repeat(3, auto);\n  font-size: 2rem;\n  column-gap: 0.5rem;\n  row-gap: 1rem;\n}\n.complete-todo-checkbox {\n  grid-area: 1/ 1/2/ 2;\n  align-self: flex-start;\n}\n\n.title-todo {\n  grid-area: 1/ 2/2/ 3;\n  margin: 0;\n}\n\n.description-todo {\n  grid-area: 2/ 2/3/ 3;\n  align-self: flex-start;\n  justify-self: flex-start;\n  margin: 0;\n}\n\n#add-project-btn,\n#add-todo-btn {\n  cursor: pointer;\n  border: 2px solid transparent;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n  color: #fff;\n  background-color: var(--action-btn-color);\n}\n\n#add-project-btn:focus {\n  border: 2px solid var(--sidebar-bg-color);\n}\n\n#add-todo-btn {\n  margin-left: 4rem;\n  align-self: flex-start;\n}\n#add-todo-btn:focus {\n  border: 2px solid #fff;\n}\n#add-todo-btn:hover,\n#add-project-btn:hover {\n  background-color: var(--action-btn-on-hover-color);\n}\n\n#new-project-input-sidebar {\n  width: 100%;\n  cursor: text;\n}\n\n.title-todo:empty:before,\n.description-todo:empty:before,\n#new-project-input-sidebar:empty:before {\n  content: attr(data-placeholder);\n  color: #aaa;\n}\n\n.description-todo {\n  width: 100%;\n}\n\n.todo-controls-container {\n  grid-area: 2/ 3/3/ 4;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.todo-controls {\n  border: none;\n  background-color: transparent;\n  font-size: 2rem;\n  align-self: flex-start;\n  justify-self: self-end;\n  border-radius: 0.5rem;\n}\n\n.todo-controls img,\n.content-header img,\n.todos-project img {\n  height: 2rem;\n}\n.content-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 2rem;\n}\n\n.delete-project-btn {\n  cursor: pointer;\n  align-self: center;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  line-height: 0;\n}\n\n.delete-project-btn:hover,\n.todo-controls:hover {\n  background-color: var(--sidebar-bg-color);\n}\n\n.delete-project-btn:focus {\n  border: 1px solid black;\n}\n\n.project-title {\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n#add-project-selection-btn {\n  font-size: 1.6rem;\n}\n\n.project-selection-container {\n  grid-area: 3/2/4/3;\n  margin: 0;\n  display: flex;\n  gap: 1rem;\n}\n\n.add-project-to-todo-btn > img {\n  width: 2rem;\n}\n\n.project-selection {\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n}\n\n.add-project-to-todo-btn {\n  border: 1px transparent solid;\n  box-sizing: border-box;\n  padding: 0.3rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 2rem;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project-to-todo-btn:hover {\n  background-color: var(--sidebar-bg-color);\n  border: 1px #9ca3af solid;\n}\n\n.delete-project-in-project-selection-btn {\n  padding: 0.3;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 50%;\n}\n\n.delete-project-in-project-selection-btn img {\n  height: 2rem;\n}\n\n.delete-project-in-project-selection-btn:hover {\n  background-color: #aaaaaa4f;\n}\n\n.one-project-selection-container {\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  border-radius: 2rem;\n  background-color: rgba(127, 255, 212, 0.485);\n}\n\n.project-selection:read-write:focus,\n.title-todo:read-write:focus,\n.description-todo:read-write:focus,\ndiv.todos-project {\n  outline: none;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ doOnShowProjects)
/* harmony export */ });
/* harmony import */ var _imgs_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/add.svg */ "./src/view/imgs/add.svg");
/* harmony import */ var _imgs_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/close.svg */ "./src/view/imgs/close.svg");



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
  addProjectBtn.innerHTML = `<img src="${_imgs_add_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Add project">`;
  projectSelectionContainer.insertAdjacentElement("beforeend", addProjectBtn);
  return projectSelectionContainer;
};

const createDeleteButtonForProject = function () {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-project-in-project-selection-btn");
  deleteBtn.innerHTML = `<img src="${_imgs_close_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Remove project">`;
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

function doOnShowProjects(toDoContainer, toDoProjects, save) {
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
  const description = toDoContainer.querySelector(".description-todo");
  title.addEventListener("input", () => {
    if (title.textContent == "") {
      title.innerHTML = "";
    }
  });
  description.addEventListener("input", () => {
    if (description.textContent == "") {
      description.innerHTML = "";
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

/***/ "./src/view/imgs/add.svg":
/*!*******************************!*\
  !*** ./src/view/imgs/add.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5336a812705aa8a2416.svg";

/***/ }),

/***/ "./src/view/imgs/anytime.svg":
/*!***********************************!*\
  !*** ./src/view/imgs/anytime.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "656e48bd782afae68ae7.svg";

/***/ }),

/***/ "./src/view/imgs/close.svg":
/*!*********************************!*\
  !*** ./src/view/imgs/close.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4aee1cabe5f30512b8c.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxN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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLGtCQUFrQixnREFBYSxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBUyxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZGVsL3N0YXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2RlbC90b0RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L2FkZGluZ05ld1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvYWxsVG9Eb3NJblByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy9wcm9qZWN0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvdG9Eb1Byb2plY3RTZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy90b0RvVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIC0tc2lkZWJhci1iZy1jb2xvcjogI2YzZjRmNjtcbiAgLS1hY3Rpb24tYnRuLWNvbG9yOiAjMGJhNmZmO1xuICAtLWFjdGlvbi1idG4tb24taG92ZXItY29sb3I6ICMwYmE2ZmZiZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcbiAgICBIZWx2ZXRpY2EsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiU2Vnb2UgVUkgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuLnNpZGViYXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG4gIGdhcDogMXJlbTtcbn1cblxuLnVzZXItcHJvamVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG59XG5cbiNjb21wbGV0ZWQtcHJvamVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjNyZW0gMDtcbiAgYm9yZGVyLXRvcDogMC4xNXJlbSBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkICMwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b2Rvcy1wcm9qZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZG8tcHJvamVjdC10aXRsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9kb3MtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLnRvZG8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnRvZG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBmciAxMGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHJvdy1nYXA6IDFyZW07XG59XG4uY29tcGxldGUtdG9kby1jaGVja2JveCB7XG4gIGdyaWQtYXJlYTogMS8gMS8yLyAyO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4udGl0bGUtdG9kbyB7XG4gIGdyaWQtYXJlYTogMS8gMi8yLyAzO1xuICBtYXJnaW46IDA7XG59XG5cbi5kZXNjcmlwdGlvbi10b2RvIHtcbiAgZ3JpZC1hcmVhOiAyLyAyLzMvIDM7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jYWRkLXByb2plY3QtYnRuLFxuI2FkZC10b2RvLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWNvbG9yKTtcbn1cblxuI2FkZC1wcm9qZWN0LWJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpZGViYXItYmctY29sb3IpO1xufVxuXG4jYWRkLXRvZG8tYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4jYWRkLXRvZG8tYnRuOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbiNhZGQtdG9kby1idG46aG92ZXIsXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWJ0bi1vbi1ob3Zlci1jb2xvcik7XG59XG5cbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLnRpdGxlLXRvZG86ZW1wdHk6YmVmb3JlLFxuLmRlc2NyaXB0aW9uLXRvZG86ZW1wdHk6YmVmb3JlLFxuI25ldy1wcm9qZWN0LWlucHV0LXNpZGViYXI6ZW1wdHk6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5kZXNjcmlwdGlvbi10b2RvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2RvLWNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogMi8gMy8zLyA0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi50b2RvLWNvbnRyb2xzIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi50b2RvLWNvbnRyb2xzIGltZyxcbi5jb250ZW50LWhlYWRlciBpbWcsXG4udG9kb3MtcHJvamVjdCBpbWcge1xuICBoZWlnaHQ6IDJyZW07XG59XG4uY29udGVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIsXG4udG9kby1jb250cm9sczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4jYWRkLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuID4gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5wcm9qZWN0LXNlbGVjdGlvbiB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuIHtcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggIzljYTNhZiBzb2xpZDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG4gaW1nIHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTRmO1xufVxuXG4ub25lLXByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNDg1KTtcbn1cblxuLnByb2plY3Qtc2VsZWN0aW9uOnJlYWQtd3JpdGU6Zm9jdXMsXG4udGl0bGUtdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxuLmRlc2NyaXB0aW9uLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcbmRpdi50b2Rvcy1wcm9qZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLCtCQUErQjtFQUMvQjs7cUJBRW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNi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QUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC0tc2lkZWJhci1iZy1jb2xvcjogI2YzZjRmNjtcXG4gIC0tYWN0aW9uLWJ0bi1jb2xvcjogIzBiYTZmZjtcXG4gIC0tYWN0aW9uLWJ0bi1vbi1ob3Zlci1jb2xvcjogIzBiYTZmZmJlO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgSGVsdmV0aWNhLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi51c2VyLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjb21wbGV0ZWQtcHJvamVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwO1xcbiAgYm9yZGVyLXRvcDogMC4xNXJlbSBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCAjMDAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRvZG9zLXByb2plY3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLXByb2plY3QtdGl0bGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG9zLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG4uY29tcGxldGUtdG9kby1jaGVja2JveCB7XFxuICBncmlkLWFyZWE6IDEvIDEvMi8gMjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50aXRsZS10b2RvIHtcXG4gIGdyaWQtYXJlYTogMS8gMi8yLyAzO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tdG9kbyB7XFxuICBncmlkLWFyZWE6IDIvIDIvMy8gMztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4sXFxuI2FkZC10b2RvLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLWNvbG9yKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG59XFxuXFxuI2FkZC10b2RvLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbiNhZGQtdG9kby1idG46Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuI2FkZC10b2RvLWJ0bjpob3ZlcixcXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1idG4tb24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtaW5wdXQtc2lkZWJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogdGV4dDtcXG59XFxuXFxuLnRpdGxlLXRvZG86ZW1wdHk6YmVmb3JlLFxcbi5kZXNjcmlwdGlvbi10b2RvOmVtcHR5OmJlZm9yZSxcXG4jbmV3LXByb2plY3QtaW5wdXQtc2lkZWJhcjplbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcXG4gIGNvbG9yOiAjYWFhO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tdG9kbyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMi8gMy8zLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9kby1jb250cm9scyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4udG9kby1jb250cm9scyBpbWcsXFxuLmNvbnRlbnQtaGVhZGVyIGltZyxcXG4udG9kb3MtcHJvamVjdCBpbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG4uY29udGVudC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlcixcXG4udG9kby1jb250cm9sczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXNlbGVjdGlvbi1idG4ge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuID4gaW1nIHtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rpb24ge1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuIHtcXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICBib3JkZXI6IDFweCAjOWNhM2FmIHNvbGlkO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuIHtcXG4gIHBhZGRpbmc6IDAuMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG4gaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhNGY7XFxufVxcblxcbi5vbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjQ4NSk7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGlvbjpyZWFkLXdyaXRlOmZvY3VzLFxcbi50aXRsZS10b2RvOnJlYWQtd3JpdGU6Zm9jdXMsXFxuLmRlc2NyaXB0aW9uLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcXG5kaXYudG9kb3MtcHJvamVjdCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFN0YXRlIGZyb20gXCIuL21vZGVsL3N0YXRlLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdlbmVyYXRlVmlldyBmcm9tIFwiLi92aWV3L3ZpZXcuanNcIjtcbmltcG9ydCBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0IGZyb20gXCIuL3ZpZXcvYWxsVG9Eb3NJblByb2plY3QuanNcIjtcbmltcG9ydCBoYW5kbGVHZW5lcmF0aW5nTmV3VG9EbyBmcm9tIFwiLi92aWV3L2FkZGluZ05ld1RvRG8uanNcIjtcbmltcG9ydCBnZW5lcmF0ZVByb2plY3RzVmlldyBmcm9tIFwiLi92aWV3L3Byb2plY3RzVmlldy5qc1wiO1xuaW1wb3J0IGhhbmRsZUdlbmVyYXRpbmdOZXdQcm9qZWN0IGZyb20gXCIuL3ZpZXcvbmV3UHJvamVjdC5qc1wiO1xuXG5jb25zdCBmaXhlZFByb2plY3RzID0gW1wiaW5ib3hcIiwgXCJ0b2RheVwiLCBcInNvbWVkYXlcIiwgXCJhbnl0aW1lXCJdO1xuY29uc3Qgc3RhdGUgPSBuZXcgU3RhdGUoZml4ZWRQcm9qZWN0cyk7XG5cbmNvbnN0IGhhbmRsZVByb2plY3RDbGljayA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHByb2plY3ROYW1lLFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KHByb2plY3ROYW1lKSxcbiAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgIGhhbmRsZUVkaXRUb0RvLFxuICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICApO1xufTtcblxuY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICBzdGF0ZS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCxcbiAgICBzdGF0ZS5nZXRBbGxUb0Rvc0luUHJvamVjdCgpLFxuICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICk7XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsIGhhbmRsZVByb2plY3RDbGljayk7XG59O1xuXG5jb25zdCBoYW5kbGVDb21wbGV0ZVRvRG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgc3RhdGUuY29tcGxldGVUb0RvKGlkKTtcbiAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCxcbiAgICBzdGF0ZS5nZXRBbGxUb0Rvc0luUHJvamVjdCgpLFxuICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICk7XG59O1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGFkZGluZyBuZXcgcHJvamVjdFwiKTtcbiAgc3RhdGUuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsIGhhbmRsZVByb2plY3RDbGljayk7XG59O1xuXG5jb25zdCBoYW5kbGVFZGl0VG9EbyA9IGZ1bmN0aW9uICh0b0RvSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdHMsIGRhdGUpIHtcbiAgc3RhdGUuZWRpdFRvRG8odG9Eb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RzLCBkYXRlKTtcbiAgaWYgKCFwcm9qZWN0cy5pbmNsdWRlcyhzdGF0ZS5jdXJyZW50UHJvamVjdCkpIHtcbiAgICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgICAgc3RhdGUuY3VycmVudFByb2plY3QsXG4gICAgICBzdGF0ZS5nZXRBbGxUb0Rvc0luUHJvamVjdCgpLFxuICAgICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICAgIGhhbmRsZUVkaXRUb0RvLFxuICAgICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICAgKTtcbiAgfVxuICBnZW5lcmF0ZVByb2plY3RzVmlldyhzdGF0ZS51c2VyUHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xufTtcblxuY29uc3QgaGFuZGxlRGVsZXRlVG9EbyA9IGZ1bmN0aW9uIChpZCkge1xuICBzdGF0ZS5yZW1vdmVUb0RvKGlkKTtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGdlbmVyYXRlVmlldyhoYW5kbGVQcm9qZWN0Q2xpY2ssIGhhbmRsZURlbGV0ZVByb2plY3QpO1xuICBoYW5kbGVHZW5lcmF0aW5nTmV3VG9EbyhoYW5kbGVEZWxldGVUb0RvLCBoYW5kbGVFZGl0VG9EbywgaGFuZGxlQ29tcGxldGVUb0RvKTtcbiAgaGFuZGxlR2VuZXJhdGluZ05ld1Byb2plY3QoaGFuZGxlQWRkTmV3UHJvamVjdCk7XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsIGhhbmRsZVByb2plY3RDbGljayk7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgIGhhbmRsZUVkaXRUb0RvLFxuICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICApO1xufTtcbmluaXQoKTtcbiIsImltcG9ydCBUb0RvIGZyb20gXCIuL3RvRG8uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIHtcbiAgI3RvRG9zID0ge307XG4gICNjb21wbGV0ZWRUb0RvcyA9IHt9O1xuICAjcHJvamVjdHMgPSB7fTtcbiAgI2N1cnJlbnRQcm9qZWN0ID0gXCJpbmJveFwiO1xuICAjZml4ZWRQcm9qZWN0cztcbiAgY29uc3RydWN0b3IoZml4ZWRQcm9qZWN0cykge1xuICAgIGZpeGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gKHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW10pKTtcbiAgICB0aGlzLiNmaXhlZFByb2plY3RzID0gZml4ZWRQcm9qZWN0cztcbiAgICB0aGlzLiNnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIHNldCBmaXhlZFByb2plY3RzKHByb2plY3RzTmFtZXMpIHtcbiAgICB0aGlzLiNmaXhlZFByb2plY3RzID0gcHJvamVjdHNOYW1lcztcbiAgfVxuXG4gIGdldCBjdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3Q7XG4gIH1cblxuICBzZXQgY3VycmVudFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICBpZiAocHJvamVjdE5hbWUgJiYgdGhpcy4jcHJvamVjdHMuaGFzT3duUHJvcGVydHkocHJvamVjdE5hbWUpKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0cywgZGF0ZSA9IG51bGwpIHtcbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiY29tcGxldGVkXCIpIHJldHVybjtcbiAgICBsZXQgcHJvamVjdFdpdGhDdXJyZW50ID0gW1xuICAgICAgLi4ubmV3IFNldChwcm9qZWN0cy5jb25jYXQoW3RoaXMuY3VycmVudFByb2plY3RdKSksXG4gICAgXTtcbiAgICBwcm9qZWN0V2l0aEN1cnJlbnQgPSBwcm9qZWN0V2l0aEN1cnJlbnQuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+ICEocHJvamVjdCBpbiBbXCJzb21lZGF5XCIsIFwiYW55dGltZVwiLCBcInRvZGF5XCIsIFwiY29tcGxldGVkXCJdKVxuICAgICk7XG4gICAgY29uc3QgdG9EbyA9IFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0V2l0aEN1cnJlbnQsIGRhdGUpO1xuICAgIHRoaXMuI3RvRG9zW3RvRG8uaWRdID0gdG9EbztcbiAgICBwcm9qZWN0V2l0aEN1cnJlbnQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QgaW4gdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0udW5zaGlmdCh0b0RvLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW3RvRG8uaWRdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiB0b0RvLmlkO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmIChwcm9qZWN0TmFtZSBpbiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgI3JlbW92ZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCkge1xuICAgIGlmICghKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0RvcykpIHJldHVybjtcbiAgICBjb25zdCB0b0RvVG9EZWxldGUgPSB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdO1xuICAgIGRlbGV0ZSB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiB0b0RvVG9EZWxldGU7XG4gIH1cblxuICAjcmVtb3ZlVG9Eb0Zyb21BY3RpdmVUb0Rvcyh0b0RvSWQpIHtcbiAgICBpZiAoISh0b0RvSWQgaW4gdGhpcy4jdG9Eb3MpKSByZXR1cm47XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVJbmRleCA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleChcbiAgICAgICAgKGN1clRvRG9JZCkgPT4gY3VyVG9Eb0lkID09PSB0b0RvSWRcbiAgICAgICk7XG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRvRG9Ub0RlbGV0ZSA9IHRoaXMuI3RvRG9zW3RvRG9JZF07XG4gICAgZGVsZXRlIHRoaXMuI3RvRG9zW3RvRG9JZF07XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRvRG9Ub0RlbGV0ZTtcbiAgfVxuXG4gIHJlbW92ZVRvRG8odG9Eb0lkKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcmVtb3ZlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3JlbW92ZVRvRG9Gcm9tQWN0aXZlVG9Eb3ModG9Eb0lkKTtcbiAgfVxuXG4gIGdldEFsbFRvRG9zSW5Qcm9qZWN0KHByb2plY3QgPSBcIlwiKSB7XG4gICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRyaW0oKSB8fCB0aGlzLiNjdXJyZW50UHJvamVjdDtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy4jY29tcGxldGVkVG9Eb3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwidG9kYXlcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3RvZGF5VG9Eb3M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcInNvbWVkYXlcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3NvbWVkYXlUb0RvcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiYW55dGltZVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jYW55dGltZVRvRG9zO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiNwcm9qZWN0c1t0aGlzLiNjdXJyZW50UHJvamVjdF0ubWFwKFxuICAgICAgKHRvRG9JZCkgPT4gdGhpcy4jdG9Eb3NbdG9Eb0lkXVxuICAgICk7XG4gIH1cblxuICBlZGl0VG9Ebyh0b0RvSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3UHJvamVjdHMsIGRhdGUpIHtcbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI3RvRG9zKSkge1xuICAgICAgdGhpcy5hZGRUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3UHJvamVjdHMsIGRhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvbGRQcm9qZWN0cyA9IHRoaXMuI3RvRG9zW3RvRG9JZF0ucHJvamVjdHM7XG4gICAgY29uc3QgcmVtb3ZlZFByb2plY3RzID0gb2xkUHJvamVjdHMuZmlsdGVyKFxuICAgICAgKG9sZFByb2plY3QpID0+ICFuZXdQcm9qZWN0cy5pbmNsdWRlcyhvbGRQcm9qZWN0KVxuICAgICk7XG4gICAgdGhpcy4jdXBkYXRlVG9Ebyh0b0RvSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3UHJvamVjdHMsIGRhdGUpO1xuICAgIHRoaXMuI3NhdmVOZXdQcm9qZWN0cyhvbGRQcm9qZWN0cywgbmV3UHJvamVjdHMsIHRvRG9JZCk7XG4gICAgdGhpcy4jZGVsZXRlVG9Eb0Zyb21FeGNsdWRlZFByb2plY3RzKHJlbW92ZWRQcm9qZWN0cywgdG9Eb0lkKTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gICNyZXN0b3JlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKSB7XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0b0RvID0gdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcbiAgICBkZWxldGUgdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcblxuICAgIHRoaXMuI3RvRG9zW3RvRG8uaWRdID0gdG9EbztcbiAgICB0b0RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0IGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnVuc2hpZnQodG9Eby5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFt0b0RvLmlkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gICNwdXRUb0RvVG9Db21wbGV0ZWQodG9Eb0lkKSB7XG4gICAgaWYgKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0Rvcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0b0RvVG9Db21wbGV0ZSA9IHRoaXMucmVtb3ZlVG9Ebyh0b0RvSWQpO1xuICAgIHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF0gPSB0b0RvVG9Db21wbGV0ZTtcbiAgfVxuXG4gIGNvbXBsZXRlVG9Ebyh0b0RvSWQpIHtcbiAgICBpZiAodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSB7XG4gICAgICB0aGlzLiNyZXN0b3JlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jcHV0VG9Eb1RvQ29tcGxldGVkKHRvRG9JZCk7XG4gICAgfVxuICB9XG5cbiAgI3VwZGF0ZVRvRG8odG9Eb0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RzLCBkYXRlKSB7XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuI3RvRG9zW3RvRG9JZF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLiN0b0Rvc1t0b0RvSWRdLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS5kYXRlID0gZGF0ZTtcbiAgfVxuXG4gICNkZWxldGVUb0RvRnJvbUV4Y2x1ZGVkUHJvamVjdHMocmVtb3ZlZFByb2plY3RzLCBpZCkge1xuICAgIHJlbW92ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleCgob2xkSWQpID0+IG9sZElkID09PSBpZCk7XG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgI3NhdmVOZXdQcm9qZWN0cyhvbGRQcm9qZWN0cywgbmV3UHJvamVjdHMsIHRvRG9JZCkge1xuICAgIG5ld1Byb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChvbGRQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy4jcHJvamVjdHNbcHJvamVjdF0pIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0udW5zaGlmdCh0b0RvSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0gPSBbdG9Eb0lkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICNzZXRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLiN0b0RvcykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy4jcHJvamVjdHMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY29tcGxldGVkX3RvZG9zXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLiNjb21wbGV0ZWRUb0RvcylcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjdXJyZW50X3Byb2plY3RcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuI2N1cnJlbnRQcm9qZWN0KVxuICAgICk7XG4gIH1cblxuICAjZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgY29uc3QgY29tcGxldGVkVG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkX3RvZG9zXCIpKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X3Byb2plY3RcIikpO1xuICAgIGlmICh0b2Rvcykge1xuICAgICAgdGhpcy4jdG9Eb3MgPSB0b2RvcztcbiAgICB9XG4gICAgaWYgKHByb2plY3RzKSB7XG4gICAgICB0aGlzLiNwcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGlmIChjb21wbGV0ZWRUb0Rvcykge1xuICAgICAgdGhpcy4jY29tcGxldGVkVG9Eb3MgPSBjb21wbGV0ZWRUb0RvcztcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRvRGVsZXRlTmFtZSkge1xuICAgIGlmICghKHByb2plY3RUb0RlbGV0ZU5hbWUgaW4gdGhpcy4jcHJvamVjdHMpKSByZXR1cm47XG4gICAgaWYgKHByb2plY3RUb0RlbGV0ZU5hbWUgaW4gdGhpcy4jZml4ZWRQcm9qZWN0cykgcmV0dXJuO1xuICAgIE9iamVjdC52YWx1ZXModGhpcy4jdG9Eb3MpLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICAgIHRvRG8ucHJvamVjdHMgPSB0b0RvLnByb2plY3RzLmZpbHRlcihcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QgIT09IHByb2plY3RUb0RlbGV0ZU5hbWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBPYmplY3QudmFsdWVzKHRoaXMuI2NvbXBsZXRlZFRvRG9zKS5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICB0b0RvLnByb2plY3RzID0gdG9Eby5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSBwcm9qZWN0VG9EZWxldGVOYW1lXG4gICAgICApO1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0VG9EZWxldGVOYW1lXTtcbiAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IFwiaW5ib3hcIjtcbiAgfVxuXG4gIGdldCB1c2VyUHJvamVjdE5hbWVzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLiNwcm9qZWN0cykuZmlsdGVyKChuYW1lKSA9PlxuICAgICAgdGhpcy4jZml4ZWRQcm9qZWN0cy5ldmVyeSgocHJvamVjdCkgPT4gcHJvamVjdCAhPT0gbmFtZSlcbiAgICApO1xuICB9XG5cbiAgZ2V0ICNzb21lZGF5VG9Eb3MoKSB7XG4gICAgY29uc3Qgc29tZWRheVRvRG9zID0gT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0RvcykuZmlsdGVyKCh0b0RvKSA9PiB7XG4gICAgICByZXR1cm4gdG9Eby5kYXRlO1xuICAgIH0pO1xuICAgIHNvbWVkYXlUb0Rvcy5zb3J0KCh0b2RvQSwgdG9kb0IpID0+IC10b2RvQS5pZCArIHRvZG9CLmlkKTtcbiAgICByZXR1cm4gc29tZWRheVRvRG9zO1xuICB9XG5cbiAgZ2V0ICNhbnl0aW1lVG9Eb3MoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy4jdG9Eb3MpO1xuICB9XG5cbiAgZ2V0ICN0b2RheVRvRG9zKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHRvZGF5VG9Eb3MgPSBPYmplY3QudmFsdWVzKHRoaXMuI3RvRG9zKS5maWx0ZXIoKHRvRG8pID0+IHtcbiAgICAgIGlmICghdG9Eby5kYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBjdXJyZW50VG9Eb0RhdGUgPSBuZXcgRGF0ZSh0b0RvLmRhdGUpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmXG4gICAgICAgIGN1cnJlbnRUb0RvRGF0ZS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICAgIGN1cnJlbnRUb0RvRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheS5nZXRGdWxsWWVhcigpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRvZGF5VG9Eb3Muc29ydCgodG9kb0EsIHRvZG9CKSA9PiAtdG9kb0EuaWQgKyB0b2RvQi5pZCk7XG4gICAgcmV0dXJuIHRvZGF5VG9Eb3M7XG4gIH1cblxuICBtb3ZlVG9Eb1ByaW9yaXR5SW5Qcm9qZWN0VXAodG9Eb0lkLCBwcm9qZWN0KSB7XG4gICAgaWYgKCF0aGlzLiN0b0Rvc1t0b0RvSWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZUb0RvID0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uZmluZEluZGV4KFxuICAgICAgKHRvRG8pID0+IHRvRG8uaWQgPT09IHRvRG9JZFxuICAgICk7XG5cbiAgICBpZiAoIWluZGV4T2ZUb0RvID8/IGluZGV4T2ZUb0RvID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvIC0gMV0sXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9Eb10sXG4gICAgXSA9IFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvIC0gMV0sXG4gICAgXTtcbiAgfVxuXG4gIG1vdmVUb0RvUHJpb3JpdHlJblByb2plY3REb3duKHRvRG9JZCwgcHJvamVjdCkge1xuICAgIGlmICghdGhpcy4jdG9Eb3NbdG9Eb0lkXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mVG9EbyA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleChcbiAgICAgICh0b0RvKSA9PiB0b0RvLmlkID09PSB0b0RvSWRcbiAgICApO1xuICAgIGlmICghaW5kZXhPZlRvRG8gfHwgaW5kZXhPZlRvRG8gPT09IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBbXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9EbyArIDFdLFxuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG9dLFxuICAgIF0gPSBbXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9Eb10sXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9EbyArIDFdLFxuICAgIF07XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0cywgZGF0ZSA9IG51bGwpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcm9qZWN0cyxcbiAgICBkYXRlLFxuICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgfTtcbn1cbiIsImltcG9ydCBnZW5lcmF0ZVRvRG9FbGVtZW50IGZyb20gXCIuL3RvRG9WaWV3LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUdlbmVyYXRpbmdOZXdUb0RvKFxuICBoYW5kbGVEZWxldGVUb0RvLFxuICBoYW5kbGVFZGl0VG9EbyxcbiAgaGFuZGxlQ29tcGxldGVUb0RvXG4pIHtcbiAgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xuICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9Eb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgY29uc3QgdG9Eb0VsZW1lbnQgPSBnZW5lcmF0ZVRvRG9FbGVtZW50KFxuICAgICAgbnVsbCxcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICAgICk7XG4gICAgaWYgKCF0b0RvRWxlbWVudCkgcmV0dXJuO1xuICAgIHRvRG9MaXN0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHRvRG9FbGVtZW50KTtcbiAgICB0b0RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRvZG9cIikuZm9jdXMoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVUb0RvRWxlbWVudCBmcm9tIFwiLi90b0RvVmlldy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgcHJvamVjdE5hbWUsXG4gIHRvZG9zLFxuICBoYW5kbGVEZWxldGVUb0RvLFxuICBoYW5kbGVFZGl0VG9EbyxcbiAgaGFuZGxlQ29tcGxldGVUb0RvXG4pIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudC1oZWFkZXI+LmRlbGV0ZS1wcm9qZWN0LWJ0blwiXG4gICk7XG4gIGlmIChcbiAgICBbXCJhbnl0aW1lXCIsIFwiaW5ib3hcIiwgXCJzb21lZGF5XCIsIFwidG9kYXlcIiwgXCJjb21wbGV0ZWRcIl0uaW5jbHVkZXMocHJvamVjdE5hbWUpXG4gICkge1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1idG5cIik7XG5cbiAgaWYgKHByb2plY3ROYW1lID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgbmV3VG9Eb0J0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIG5ld1RvRG9CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBjb25zdCB0b0RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgdG9Eb0xpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGlmICghdG9kb3MpIHJldHVybjtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvRG9FbGVtZW50ID0gZ2VuZXJhdGVUb0RvRWxlbWVudChcbiAgICAgIHRvZG8sXG4gICAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgICApO1xuICAgIHRvRG9MaXN0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdG9Eb0VsZW1lbnQpO1xuICB9KTtcbn1cbiIsImNvbnN0IGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9zLXByb2plY3RcIik7XG4gIHByb2plY3RFbGVtZW50LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyXCI7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIHByb2plY3RFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIgPSBcInByb2plY3QuLi5cIjtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGluZ05ld1Byb2plY3QoaGFuZGxlcikge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQoKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmZvY3VzKCk7XG4gICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gXCJcIikge1xuICAgICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgIH1cbiAgICAgIG5ld1Byb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImNvbnN0IGdlbmVyYXRlT25lUHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtcHJvamVjdFwiKTtcbiAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c1ZpZXcocHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdE5hbWVzLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU9uZVByb2plY3RFbGVtZW50KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgQWRkUHJvamVjdEljb24gZnJvbSBcIi4vaW1ncy9hZGQuc3ZnXCI7XG5pbXBvcnQgUmVtb3ZlUHJvamVjdEljb24gZnJvbSBcIi4vaW1ncy9jbG9zZS5zdmdcIjtcblxuY29uc3QgaXNMYXN0UHJvamVjdEVtcHR5ID0gZnVuY3Rpb24gKGFkZFByb2plY3RCdG4pIHtcbiAgY29uc3QgbGFzdFByb2plY3RFbGVtZW50ID0gYWRkUHJvamVjdEJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICByZXR1cm4gKFxuICAgIGxhc3RQcm9qZWN0RWxlbWVudCAmJlxuICAgIGxhc3RQcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0aW9uXCIpLnRleHRDb250ZW50ID09PSBcIlwiXG4gICk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RTZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7QWRkUHJvamVjdEljb259XCIgYWx0PVwiQWRkIHByb2plY3RcIj5gO1xuICBwcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBhZGRQcm9qZWN0QnRuKTtcbiAgcmV0dXJuIHByb2plY3RTZWxlY3Rpb25Db250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVEZWxldGVCdXR0b25Gb3JQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0blwiKTtcbiAgZGVsZXRlQnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7UmVtb3ZlUHJvamVjdEljb259XCIgYWx0PVwiUmVtb3ZlIHByb2plY3RcIj5gO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuY29uc3QgaGFuZGxlRGVsZXRpbmdQcm9qZWN0ID0gZnVuY3Rpb24gKFxuICBkZWxldGVQcm9qZWN0QnRuLFxuICBwcm9qZWN0Q29udGFpbmVyLFxuICBzYXZlXG4pIHtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3RXaGVuRW1wdHlPbkJsdXIgPSBmdW5jdGlvbiAoXG4gIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LFxuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudFxuKSB7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiXCIpXG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVFbXB0eVByb2plY3RDb250YWluZXJFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpO1xuICByZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSA9IFwiXCIpIHtcbiAgY29uc3QgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWxlY3Rpb25cIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIHJldHVybiBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKHByb2plY3ROYW1lID0gXCJcIiwgc2F2ZSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRW1wdHlQcm9qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuICBjb25zdCBpbnB1dFByb2plY3RFbGVtZW50ID0gY3JlYXRlTmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQocHJvamVjdE5hbWUpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCgpO1xuXG4gIGhhbmRsZURlbGV0aW5nUHJvamVjdChkZWxldGVQcm9qZWN0QnRuLCBwcm9qZWN0Q29udGFpbmVyLCBzYXZlKTtcbiAgcmVtb3ZlUHJvamVjdFdoZW5FbXB0eU9uQmx1cihwcm9qZWN0Q29udGFpbmVyLCBpbnB1dFByb2plY3RFbGVtZW50KTtcbiAgaW5wdXRQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICB9KTtcbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wdXRQcm9qZWN0RWxlbWVudCk7XG4gIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlbGV0ZVByb2plY3RCdG4pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJID0gZnVuY3Rpb24gKHByb2plY3RzQ29udGFpbmVyLCBzYXZlKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc0xhc3RQcm9qZWN0RW1wdHkoYWRkUHJvamVjdEJ0bikpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lcihcIlwiLCBzYXZlKTtcbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvblwiKS5mb2N1cygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluc2VydFByb2plY3RzVG9Qcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgcHJvamVjdHMsXG4gIHNhdmVcbikge1xuICBpZiAoIXByb2plY3RzKSByZXR1cm47XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIFwiYmVmb3JlYmVnaW5cIixcbiAgICAgIGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyKHByb2plY3QsIHNhdmUpXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9PblNob3dQcm9qZWN0cyh0b0RvQ29udGFpbmVyLCB0b0RvUHJvamVjdHMsIHNhdmUpIHtcbiAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIlxuICAgICk7XG4gICAgaWYgKGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIpIHtcbiAgICAgIGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKTtcblxuICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHByb2plY3RzQ29udGFpbmVyKTtcbiAgICBpbnNlcnRQcm9qZWN0c1RvUHJvamVjdENvbnRhaW5lcihwcm9qZWN0c0NvbnRhaW5lciwgdG9Eb1Byb2plY3RzLCBzYXZlKTtcbiAgICBoYW5kbGVBZGRpbmdOZXdQcm9qZWN0VG9VSShwcm9qZWN0c0NvbnRhaW5lciwgc2F2ZSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFRyYXNoSWNvbiBmcm9tIFwiLi9pbWdzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IFByb2plY3RzSWNvbiBmcm9tIFwiLi9pbWdzL3Byb2plY3RzLnN2Z1wiO1xuaW1wb3J0IGRvT25TaG93UHJvamVjdHMgZnJvbSBcIi4vdG9Eb1Byb2plY3RTZWN0aW9uVmlldy5qc1wiO1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9UaXRsZURlc2NyaXB0aW9uQW5kQ29udHJvbHNIdG1sID0gZnVuY3Rpb24gKFxuICB0b2RvLFxuICBpc0NvbXBsZXRlZFxuKSB7XG4gIGNvbnN0IHRvRG9IdG1sID0gYFxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtcbiAgICBpc0NvbXBsZXRlZCA/IFwiY2hlY2tlZFwiIDogXCJcIlxuICB9IGNsYXNzPVwiY29tcGxldGUtdG9kby1jaGVja2JveFwiIC8+XG4gIDxoMyBjbGFzcz1cInRpdGxlLXRvZG9cIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgZGF0YS1wbGFjZWhvbGRlcj1cInRpdGxlXCI+JHtcbiAgICB0b2RvID8gdG9kby50aXRsZSA6IFwiXCJcbiAgfTwvaDM+XG4gIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbi10b2RvXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIGRhdGEtcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvbi4uLlwiPiR7XG4gICAgdG9kbyA/IHRvZG8uZGVzY3JpcHRpb24gOiBcIlwiXG4gIH08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRvZG8tY29udHJvbHMtY29udGFpbmVyXCI+XG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9XCJcIiAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0cy1idG4gdG9kby1jb250cm9sc1wiPlxuICAgICAgPGltZyBzcmM9XCIke1Byb2plY3RzSWNvbn1cIiBhbHQ9XCJTaG93IHByb2plY3RzXCI+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS10b2RvLWJ0biB0b2RvLWNvbnRyb2xzXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7VHJhc2hJY29ufVwiIGFsdD1cIkRlbGV0ZSB0by1kb1wiPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbmA7XG4gIHJldHVybiB0b0RvSHRtbDtcbn07XG5cbmNvbnN0IGdldFByb2plY3RzID0gZnVuY3Rpb24gKGV4aXN0aW5nUHJvamVjdHMsIHRvRG9FbGVtZW50KSB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIikpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cztcbiAgfVxuICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBbXG4gICAgLi4udG9Eb0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3Qtc2VsZWN0aW9uXCIpLFxuICBdO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RFbGVtZW50cy5tYXAoXG4gICAgKHByb2plY3RFbGVtZW50KSA9PiBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudFxuICApO1xuICByZXR1cm4gcHJvamVjdE5hbWVzO1xufTtcblxuY29uc3QgZ2V0RGF0ZSA9IGZ1bmN0aW9uICh0b0RvRWxlbWVudCkge1xuICBjb25zdCBkYXRlQ29udHJvbCA9IHRvRG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gIGxldCBkYXRlID0gbnVsbDtcbiAgaWYgKGRhdGVDb250cm9sLnZhbHVlKSBkYXRlID0gbmV3IERhdGUoZGF0ZUNvbnRyb2wudmFsdWVBc051bWJlcik7XG4gIHJldHVybiBkYXRlO1xufTtcblxuY29uc3Qgc2F2ZU9uQmx1ciA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCB0b2RvLCBoYW5kbGVFZGl0VG9Ebykge1xuICBjb25zdCBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdID0gW1xuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpLFxuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10b2RvXCIpLFxuICBdO1xuICBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIHNhdmVUb0RvKHRvRG9Db250YWluZXIsIHRvZG8sIGhhbmRsZUVkaXRUb0RvKTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBkYXRlQ29udHJvbCA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgZGF0ZUNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgc2F2ZVRvRG8odG9Eb0NvbnRhaW5lciwgdG9kbywgaGFuZGxlRWRpdFRvRG8pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNhdmVUb0RvID0gZnVuY3Rpb24gKHRvRG9Db250YWluZXIsIHRvZG8sIGhhbmRsZUVkaXRUb0RvKSB7XG4gIGNvbnN0IFt0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudF0gPSBbXG4gICAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRvZG9cIiksXG4gICAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXRvZG9cIiksXG4gIF07XG4gIGlmIChcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpID09PSBcIlwiICYmXG4gICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA9PT0gXCJcIlxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0cyh0b2RvPy5wcm9qZWN0cyA/PyBbXSwgdG9Eb0NvbnRhaW5lcik7XG4gIGNvbnN0IGRhdGUgPSBnZXREYXRlKHRvRG9Db250YWluZXIpO1xuICBoYW5kbGVFZGl0VG9EbyhcbiAgICB0b0RvQ29udGFpbmVyLmRhdGFzZXQuaWQsXG4gICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50LFxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCxcbiAgICBwcm9qZWN0cyxcbiAgICBkYXRlXG4gICk7XG59O1xuXG5jb25zdCBkb09uRGVsZXRlQnRuID0gZnVuY3Rpb24gKHRvRG9Db250YWluZXIsIGhhbmRsZURlbGV0ZVRvRG8pIHtcbiAgdG9Eb0NvbnRhaW5lclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92ZS10b2RvLWJ0blwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaGFuZGxlRGVsZXRlVG9Ebyh0b0RvQ29udGFpbmVyLmRhdGFzZXQuaWQpO1xuICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG9Db250YWluZXIgPSBmdW5jdGlvbiAodG9kbywgaXNDb21wbGV0ZWQpIHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkID0gdG9kbz8uaWQgPz8gXCJcIjtcbiAgY29uc3QgdGl0bGVEZXNjcmlwdGlvbkNvbnRyb2xzSHRtbCA9XG4gICAgZ2VuZXJhdGVUb0RvVGl0bGVEZXNjcmlwdGlvbkFuZENvbnRyb2xzSHRtbCh0b2RvLCBpc0NvbXBsZXRlZCk7XG4gIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCB0aXRsZURlc2NyaXB0aW9uQ29udHJvbHNIdG1sKTtcblxuICBjb25zdCB0aXRsZSA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10b2RvXCIpO1xuICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGlmICh0aXRsZS50ZXh0Q29udGVudCA9PSBcIlwiKSB7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgfSk7XG4gIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID09IFwiXCIpIHtcbiAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudCAucHJvamVjdC10aXRsZVwiXG4gICkudGV4dENvbnRlbnQ7XG4gIGlmIChwcm9qZWN0VGl0bGUgPT09IFwidG9kYXlcIiB8fCBwcm9qZWN0VGl0bGUgPT09IFwic29tZWRheVwiKSB7XG4gICAgZGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuICBpZiAodG9kbz8uZGF0ZSkge1xuICAgIGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKHRvZG8uZGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHRvRG9Db250YWluZXI7XG59O1xuXG5jb25zdCBkb09uQ29tcGxldGVUb0RvID0gZnVuY3Rpb24gKHRvRG9Db250YWluZXIsIGlkLCBoYW5kbGVDb21wbGV0ZVRvRG8pIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGUtdG9kby1jaGVja2JveFwiKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0b0RvQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoYW5kbGVDb21wbGV0ZVRvRG8oaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVG9Eb0VsZW1lbnQoXG4gIHRvZG8gPSBudWxsLFxuICBoYW5kbGVEZWxldGVUb0RvLFxuICBoYW5kbGVFZGl0VG9EbyxcbiAgaGFuZGxlQ29tcGxldGVUb0RvXG4pIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50IC5wcm9qZWN0LXRpdGxlXCJcbiAgKS50ZXh0Q29udGVudDtcbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBwcm9qZWN0VGl0bGUgPT09IFwiY29tcGxldGVkXCI7XG4gIGlmIChpc0NvbXBsZXRlZCAmJiAhdG9kbykgcmV0dXJuO1xuICBjb25zdCB0b0RvQ29udGFpbmVyID0gY3JlYXRlVG9Eb0NvbnRhaW5lcih0b2RvLCBpc0NvbXBsZXRlZCk7XG4gIGRvT25Db21wbGV0ZVRvRG8odG9Eb0NvbnRhaW5lciwgdG9kbz8uaWQsIGhhbmRsZUNvbXBsZXRlVG9Ebyk7XG4gIGRvT25EZWxldGVCdG4odG9Eb0NvbnRhaW5lciwgaGFuZGxlRGVsZXRlVG9Ebyk7XG4gIGlmIChpc0NvbXBsZXRlZCkgcmV0dXJuIHRvRG9Db250YWluZXI7XG4gIGRvT25TaG93UHJvamVjdHMoXG4gICAgdG9Eb0NvbnRhaW5lcixcbiAgICB0b2RvPy5wcm9qZWN0cyA/PyBbXSxcbiAgICBzYXZlVG9Eby5iaW5kKG51bGwsIHRvRG9Db250YWluZXIsIHRvZG8sIGhhbmRsZUVkaXRUb0RvKVxuICApO1xuICBzYXZlT25CbHVyKHRvRG9Db250YWluZXIsIHRvZG8sIGhhbmRsZUVkaXRUb0RvKTtcblxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vaW1ncy9kZWxldGUtcHJvamVjdC5zdmdcIjtcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIi4vaW1ncy9pbmJveC5zdmdcIjtcbmltcG9ydCBUb2RheUljb24gZnJvbSBcIi4vaW1ncy90b2RheS5zdmdcIjtcbmltcG9ydCBTb21lZGF5SWNvbiBmcm9tIFwiLi9pbWdzL3NvbWVkYXkuc3ZnXCI7XG5pbXBvcnQgQW55dGltZUljb24gZnJvbSBcIi4vaW1ncy9hbnl0aW1lLnN2Z1wiO1xuaW1wb3J0IENvbXBsZXRlZEljb24gZnJvbSBcIi4vaW1ncy9jb21wbGV0ZWQuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVmlldyhcbiAgaGFuZGxlUHJvamVjdENsaWNrLFxuICBoYW5kbGVEZWxldGVQcm9qZWN0T25DbGlja1xuKSB7XG4gIGNvbnN0IHZpZXdIdG1sID0gYFxuICA8ZGl2IGNsYXNzPVwic2lkZWJhclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiIGlkPVwiaW5ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke0luYm94SWNvbn1cIiBhbHQ9XCJJbmJveFwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPmluYm94PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7VG9kYXlJY29ufVwiIGFsdD1cIlRvZGF5XCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+dG9kYXk8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtTb21lZGF5SWNvbn1cIiBhbHQ9XCJTb21lZGF5XCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+c29tZWRheTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCIgaWQ9XCJhbnl0aW1lXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7QW55dGltZUljb259XCIgYWx0PVwiQW55dGltZVwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPmFueXRpbWU8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIiBpZD1cImNvbXBsZXRlZC1wcm9qZWN0XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7Q29tcGxldGVkSWNvbn1cIiBhbHQ9XCJDb21wbGV0ZWRcIj4gPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj5jb21wbGV0ZWQ8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLXByb2plY3QtYnRuXCI+TmV3IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+aW5ib3g8L2gyPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnRuXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke1RyYXNoSWNvbn1cIiBhbHQ9XCJEZWxldGUgcHJvamVjdFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtdG9kby1idG5cIj5OZXcgVG8tRG88L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gdmlld0h0bWw7XG4gIGNvbnN0IHByb2plY3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb3MtcHJvamVjdFwiKV07XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKFxuICAgICAgICBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudC1oZWFkZXI+LmRlbGV0ZS1wcm9qZWN0LWJ0blwiXG4gICk7XG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29udGVudC1oZWFkZXI+LnByb2plY3QtdGl0bGVcIlxuICAgICkudGV4dENvbnRlbnQ7XG4gICAgaGFuZGxlRGVsZXRlUHJvamVjdE9uQ2xpY2socHJvamVjdFRpdGxlKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=