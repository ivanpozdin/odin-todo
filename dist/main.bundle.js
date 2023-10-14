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

.view-details-btn {
  grid-area: 1/ 3/2/ 4;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  justify-self: flex-end;
  align-self: flex-start;
}
.view-details-btn img {
  height: 2rem;
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
.todo-controls:hover,
.view-details-btn:hover {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-size: 62.5%;\n  --sidebar-bg-color: #f3f4f6;\n  --action-btn-color: #0ba6ff;\n  --action-btn-on-hover-color: #0ba6ffbe;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\",\n    \"Segoe UI Symbol\";\n}\n.sidebar {\n  grid-column: 1;\n  padding: 1rem 2rem;\n  min-height: 100vh;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: var(--sidebar-bg-color);\n  gap: 1rem;\n}\n\n.user-projects-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n#completed-project {\n  width: 100%;\n  padding: 0.3rem 0;\n  border-top: 0.15rem solid #000;\n  border-bottom: 0.15rem solid #000;\n  text-align: left;\n}\n\n.todos-project {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n\n.todo-project-title {\n  border: none;\n  background-color: transparent;\n  font-size: 1.5rem;\n}\n\n.todos-project:hover {\n  background-color: #e5e7eb;\n  cursor: pointer;\n}\n\n.content {\n  grid-column: 2;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: auto 80fr 10fr;\n  grid-template-rows: repeat(3, auto);\n  font-size: 2rem;\n  column-gap: 0.5rem;\n  row-gap: 1rem;\n}\n.complete-todo-checkbox {\n  grid-area: 1/ 1/2/ 2;\n  align-self: flex-start;\n}\n\n.title-todo {\n  grid-area: 1/ 2/2/ 3;\n  margin: 0;\n}\n\n.view-details-btn {\n  grid-area: 1/ 3/2/ 4;\n  background-color: transparent;\n  border: none;\n  border-radius: 0.5rem;\n  justify-self: flex-end;\n  align-self: flex-start;\n}\n.view-details-btn img {\n  height: 2rem;\n}\n\n.description-todo {\n  grid-area: 2/ 2/3/ 3;\n  align-self: flex-start;\n  justify-self: flex-start;\n  margin: 0;\n}\n\n#add-project-btn,\n#add-todo-btn {\n  cursor: pointer;\n  border: 2px solid transparent;\n  border-radius: 0.5rem;\n  font-size: 1.5rem;\n  color: #fff;\n  background-color: var(--action-btn-color);\n}\n\n#add-project-btn:focus {\n  border: 2px solid var(--sidebar-bg-color);\n}\n\n#add-todo-btn {\n  margin-left: 4rem;\n  align-self: flex-start;\n}\n#add-todo-btn:focus {\n  border: 2px solid #fff;\n}\n#add-todo-btn:hover,\n#add-project-btn:hover {\n  background-color: var(--action-btn-on-hover-color);\n}\n\n#new-project-input-sidebar {\n  width: 100%;\n  cursor: text;\n}\n\n.title-todo:empty:before,\n.description-todo:empty:before,\n#new-project-input-sidebar:empty:before {\n  content: attr(data-placeholder);\n  color: #aaa;\n}\n\n.description-todo {\n  width: 100%;\n}\n\n.todo-controls-container {\n  grid-area: 2/ 3/3/ 4;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n\n.todo-controls {\n  border: none;\n  background-color: transparent;\n  font-size: 2rem;\n  align-self: flex-start;\n  justify-self: self-end;\n  border-radius: 0.5rem;\n}\n\n.todo-controls img,\n.content-header img,\n.todos-project img {\n  height: 2rem;\n}\n.content-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 2rem;\n}\n\n.delete-project-btn {\n  cursor: pointer;\n  align-self: center;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.5rem;\n  line-height: 0;\n}\n\n.delete-project-btn:hover,\n.todo-controls:hover,\n.view-details-btn:hover {\n  background-color: var(--sidebar-bg-color);\n}\n\n.delete-project-btn:focus {\n  border: 1px solid black;\n}\n\n.project-title {\n  text-align: center;\n  font-size: 3rem;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n#add-project-selection-btn {\n  font-size: 1.6rem;\n}\n\n.project-selection-container {\n  grid-area: 3/2/4/3;\n  margin: 0;\n  display: flex;\n  gap: 1rem;\n}\n\n.add-project-to-todo-btn > img {\n  width: 2rem;\n}\n\n.project-selection {\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n}\n\n.add-project-to-todo-btn {\n  border: 1px transparent solid;\n  box-sizing: border-box;\n  padding: 0.3rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 2rem;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-project-to-todo-btn:hover {\n  background-color: var(--sidebar-bg-color);\n  border: 1px #9ca3af solid;\n}\n\n.delete-project-in-project-selection-btn {\n  padding: 0.3;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 50%;\n}\n\n.delete-project-in-project-selection-btn img {\n  height: 2rem;\n}\n\n.delete-project-in-project-selection-btn:hover {\n  background-color: #aaaaaa4f;\n}\n\n.one-project-selection-container {\n  padding: 0 0.5rem;\n  display: flex;\n  align-items: center;\n  border-radius: 2rem;\n  background-color: rgba(127, 255, 212, 0.485);\n}\n\n.project-selection:read-write:focus,\n.title-todo:read-write:focus,\n.description-todo:read-write:focus,\ndiv.todos-project {\n  outline: none;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/toDoView.js */ "./src/view/toDoView.js");









const fixedProjects = ["inbox", "today", "someday", "anytime"];
const computedProjects = ["today", "someday", "anytime", "completed"];
const state = new _model_state_js__WEBPACK_IMPORTED_MODULE_0__["default"](fixedProjects);

const isDateToday = function isGivenDateToday(date) {
  if (!date) return false;
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};
const handleDeleteToDo = function handleDeleteToDo(id) {
  state.removeToDo(id);
};
const handleCompleteToDo = function handleCompleteToDo(handlers, id) {
  state.completeToDo(id);
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    state.currentProject,
    state.getAllToDosInProject(),
    _view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, handlers)
  );
};

const handleProjectClick = function handleProjectClick(handlers, projectName) {
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    projectName,
    state.getAllToDosInProject(projectName),
    _view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, handlers)
  );
};

const handleEditToDo = function handleEditToDo(handlers, toDoEditedProperties) {
  const toDoId = state.editToDo(toDoEditedProperties);
  const isTodayChanged =
    state.currentProject === "today" &&
    "date" in toDoEditedProperties &&
    !isDateToday(new Date(toDoEditedProperties.date));
  const isNotComputedProject = !computedProjects.includes(state.currentProject);
  const wasCurrentProjectDeleted = !state
    .getToDoProjectsById(toDoId)
    .includes(state.currentProject);
  if (isTodayChanged || (isNotComputedProject && wasCurrentProjectDeleted)) {
    (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
      state.currentProject,
      state.getAllToDosInProject(),
      _view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, handlers)
    );
  }
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
  return toDoId;
};

const handleDeleteProject = function handleDeleteProject(
  handlers,
  projectName
) {
  state.deleteProject(projectName);
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    state.currentProject,
    state.getAllToDosInProject(),
    _view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, handlers)
  );
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
};

const handleAddNewProject = function handleAddNewProject(
  projectName,
  handlers
) {
  state.addProject(projectName);
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
};

const init = function startApplication() {
  const handlers = { handleDeleteToDo, handleEditToDo, handleCompleteToDo };
  handlers.handleEditToDo = handleEditToDo.bind(null, handlers);
  handlers.handleCompleteToDo = handleCompleteToDo.bind(null, handlers);
  (0,_view_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
    handleProjectClick.bind(null, handlers),
    handleDeleteProject.bind(null, handlers)
  );
  (0,_view_addingNewToDo_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, handlers));
  (0,_view_newProject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(handleAddNewProject, handlers);
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
    state.userProjectNames,
    handleProjectClick.bind(null, handlers)
  );
  (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
    state.currentProject,
    state.getAllToDosInProject(),
    _view_toDoView_js__WEBPACK_IMPORTED_MODULE_7__["default"].bind(null, handlers)
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
    fixedProjects.forEach((project) => {
      this.#projects[project] = [];
    });
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
    if (projectName && projectName in this.#projects) {
      this.#currentProject = projectName;
    }
  }

  addToDo(toDoProperties) {
    if (this.#currentProject === "completed") return null;

    let projectWithCurrent = [this.currentProject];
    if (toDoProperties.projects) {
      projectWithCurrent = [
        ...new Set(projectWithCurrent.concat(toDoProperties.projects)),
      ];
    }
    projectWithCurrent = projectWithCurrent.filter(
      (project) => project === "inbox" || !this.#fixedProjects.includes(project)
    );
    const toDoPropertiesWithCurrentProject = { ...toDoProperties };
    toDoPropertiesWithCurrentProject.projects = projectWithCurrent;

    const toDo = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(toDoPropertiesWithCurrentProject);

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

  getToDoProjectsById(id) {
    if (!(id in this.#toDos)) {
      return [];
    }
    return [...this.#toDos[id].projects];
  }

  addProject(projectName) {
    if (projectName in this.#projects) {
      return;
    }

    this.#projects[projectName] = [];
    this.#setLocalStorage();
  }

  #removeToDoFromCompleted(toDoId) {
    if (!(toDoId in this.#completedToDos)) return null;
    const toDoToDelete = this.#completedToDos[toDoId];
    delete this.#completedToDos[toDoId];
    this.#setLocalStorage();
    return toDoToDelete;
  }

  #removeToDoFromActiveToDos(toDoId) {
    if (!(toDoId in this.#toDos)) return null;
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

    const todos = this.#projects[this.#currentProject].map(
      (toDoId) => this.#toDos[toDoId]
    );
    return todos;
  }

  editToDo(toDoEditedProperties) {
    if (this.#currentProject === "completed") {
      return null;
    }
    if (!toDoEditedProperties.id || !(toDoEditedProperties.id in this.#toDos)) {
      const newId = this.addToDo(toDoEditedProperties);
      return newId;
    }
    const toDo = this.#toDos[toDoEditedProperties.id];
    if ("projects" in toDoEditedProperties) {
      const oldProjects = toDo.projects;
      const removedProjects = oldProjects.filter(
        (oldProject) => !toDoEditedProperties.projects.includes(oldProject)
      );
      this.#saveNewProjects(
        oldProjects,
        toDoEditedProperties.projects,
        toDoEditedProperties.id
      );
      this.#deleteToDoFromExcludedProjects(
        removedProjects,
        toDoEditedProperties.id
      );
    }

    this.#updateToDo(toDoEditedProperties);
    this.#setLocalStorage();
    return toDo.id;
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

  #updateToDo(toDo) {
    if ("title" in toDo) {
      this.#toDos[toDo.id].title = toDo.title;
    }
    if ("description" in toDo) {
      this.#toDos[toDo.id].description = toDo.description;
    }
    if ("projects" in toDo) {
      this.#toDos[toDo.id].projects = toDo.projects;
    }
    if ("date" in toDo) {
      this.#toDos[toDo.id].date = toDo.date;
    }
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
    if (this.#fixedProjects.includes(projectToDeleteName)) return;
    Object.keys(this.#toDos).forEach((id) => {
      this.#toDos[id].projects = this.#toDos[id].projects.filter(
        (project) => project !== projectToDeleteName
      );
    });
    Object.keys(this.#completedToDos).forEach((id) => {
      this.#completedToDos[id].projects = this.#completedToDos[
        id
      ].projects.filter((project) => project !== projectToDeleteName);
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
    const somedayToDos = Object.values(this.#toDos).filter((toDo) => toDo.date);
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
function ToDo(toDoProperties) {
  return {
    title: toDoProperties.title ?? "",
    description: toDoProperties.description ?? "",
    projects: toDoProperties.projects,
    date: toDoProperties.description ?? "",
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
/**
 *
 * @param {*} handleDeleteToDo
 * @param {*} handleEditToDo
 * @param {*} handleCompleteToDo
 */
function handleGeneratingNewToDo(generateToDoElement) {
  const addToDoBtn = document.getElementById("add-todo-btn");
  addToDoBtn.addEventListener("click", () => {
    const toDoListElement = document.querySelector(".todo-list");
    const toDoElement = generateToDoElement();
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
function generateAllToDosInProject(
  projectName,
  todos,
  generateToDoElement
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
    const toDoElement = generateToDoElement(todo);
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
const generateNewProjectElement = function generateNewProjectElement() {
  const projectElement = document.createElement("div");
  projectElement.classList.add("todos-project");
  projectElement.id = "new-project-input-sidebar";
  projectElement.setAttribute("contenteditable", "true");
  projectElement.dataset.placeholder = "project...";
  return projectElement;
};

function handleGeneratingNewProject(
  handleAddNewProject,
  handlers
) {
  const addProjectBtn = document.getElementById("add-project-btn");
  addProjectBtn.addEventListener("click", () => {
    const projectContainer = document.querySelector(".user-projects-container");
    const newProjectElement = generateNewProjectElement();
    projectContainer.insertAdjacentElement("afterbegin", newProjectElement);
    newProjectElement.focus();
    newProjectElement.addEventListener("blur", () => {
      const projectName = newProjectElement.textContent;
      if (projectName !== "") {
        handleAddNewProject(projectName, handlers);
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
const generateOneProjectElement = function generateOneProjectElement(
  projectName
) {
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
    newProjectElement.addEventListener("click", () => {
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
/* harmony export */   "default": () => (/* binding */ generateProjectSelectionContainer)
/* harmony export */ });
/* harmony import */ var _imgs_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/add.svg */ "./src/view/imgs/add.svg");
/* harmony import */ var _imgs_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/close.svg */ "./src/view/imgs/close.svg");



const isLastProjectEmpty = function isLastProjectEmpty(addProjectBtn) {
  const lastProjectElement = addProjectBtn.previousElementSibling;
  return (
    lastProjectElement &&
    lastProjectElement.querySelector(".project-selection").textContent === ""
  );
};

const createProjectsContainer = function createProjectsContainer() {
  const projectSelectionContainer = document.createElement("div");
  projectSelectionContainer.classList.add("project-selection-container");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("add-project-to-todo-btn");
  addProjectBtn.innerHTML = `<img src="${_imgs_add_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Add project">`;
  projectSelectionContainer.insertAdjacentElement("beforeend", addProjectBtn);
  return projectSelectionContainer;
};

const createDeleteButtonForProject = function createDeleteButtonForProject() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-project-in-project-selection-btn");
  deleteBtn.innerHTML = `<img src="${_imgs_close_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Remove project">`;
  return deleteBtn;
};

const handleDeletingProject = function handleDeletingProject(
  deleteProjectBtn,
  projectContainer,
  save
) {
  const isCompleted =
    document.querySelector(".content-header .project-title").textContent ===
    "completed";
  if (isCompleted) return;
  deleteProjectBtn.addEventListener("click", () => {
    projectContainer.remove();
    save();
  });
};

const removeProjectWhenEmptyOnBlur = function removeProjectWhenEmptyOnBlur(
  newProjectContainerElement,
  newProjectSelectionElement
) {
  newProjectSelectionElement.addEventListener("blur", () => {
    if (newProjectSelectionElement.textContent === "")
      newProjectContainerElement.remove();
  });
};

const createEmptyProjectContainerElement =
  function createEmptyProjectContainerElement() {
    const newProjectContainerElement = document.createElement("div");
    newProjectContainerElement.classList.add("one-project-selection-container");
    return newProjectContainerElement;
  };

const createNewProjectSelectionElement =
  function createNewProjectSelectionElement(projectName = "") {
    const isCompleted =
      document.querySelector(".content-header .project-title").textContent ===
      "completed";
    const newProjectSelectionElement = document.createElement("div");
    newProjectSelectionElement.classList.add("project-selection");
    newProjectSelectionElement.setAttribute("contenteditable", !isCompleted);
    newProjectSelectionElement.textContent = projectName;
    return newProjectSelectionElement;
  };

const createFullProjectContainer = function createFullProjectContainer(
  save,
  projectName = ""
) {
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

const handleAddingNewProjectToUI = function handleAddingNewProjectToUI(
  projectsContainer,
  save
) {
  const isCompleted =
    document.querySelector(".content-header .project-title").textContent ===
    "completed";
  if (isCompleted) return;
  const addProjectBtn = projectsContainer.querySelector(
    ".add-project-to-todo-btn"
  );
  addProjectBtn.addEventListener("click", () => {
    if (isLastProjectEmpty(addProjectBtn)) return;

    const projectContainer = createFullProjectContainer(save);
    addProjectBtn.insertAdjacentElement("beforebegin", projectContainer);
    projectContainer.querySelector(".project-selection").focus();
  });
};

const insertProjectsToProjectContainer =
  function insertProjectsToProjectContainer(projectsContainer, projects, save) {
    if (!projects) return;
    const addProjectBtn = projectsContainer.querySelector(
      ".add-project-to-todo-btn"
    );
    projects.forEach((project) =>
      addProjectBtn.insertAdjacentElement(
        "beforebegin",
        createFullProjectContainer(save, project)
      )
    );
  };

/**
 *
 * @param {*} toDoProjects
 * @param {*} save
 * @return {HTMLElement} Projects selection container element
 */
function generateProjectSelectionContainer(toDoProjects, save) {
  const projectsContainer = createProjectsContainer();
  const projectsOrCurrentProject = toDoProjects ?? [
    document.querySelector(".content .project-title").textContent,
  ];
  insertProjectsToProjectContainer(
    projectsContainer,
    projectsOrCurrentProject,
    save
  );
  handleAddingNewProjectToUI(projectsContainer, save);
  return projectsContainer;
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
/* harmony import */ var _imgs_hide_details_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/hide-details.svg */ "./src/view/imgs/hide-details.svg");
/* harmony import */ var _imgs_show_details_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/show-details.svg */ "./src/view/imgs/show-details.svg");






const generateToDoHeaderHtml = function generateToDoHeaderHtml(
  todo,
  isCompleted
) {
  const toDoHtml = `
  <input type="checkbox" ${
    isCompleted ? "checked" : ""
  } class="complete-todo-checkbox" />
  <h3 class="title-todo" contenteditable="${!isCompleted}" data-placeholder="title" data-is-hidden="${Boolean(
    todo
  )}">${todo ? todo.title : ""}</h3>
  <button class="view-details-btn"><img src="${
    todo ? _imgs_show_details_svg__WEBPACK_IMPORTED_MODULE_4__ : _imgs_hide_details_svg__WEBPACK_IMPORTED_MODULE_3__
  }" alt="${todo ? "Show Details" : "Hide details"}"></button>
`;
  return toDoHtml;
};

const getProjects = function getProjects(toDoElement) {
  if (!document.querySelector(".project-selection-container")) {
    return null;
  }
  const projectElements = [
    ...toDoElement.getElementsByClassName("project-selection"),
  ];

  const projectNames = projectElements.map(
    (projectElement) => projectElement.textContent
  );
  return projectNames;
};

const getDate = function getDate(dateControl) {
  let date = null;
  if (dateControl?.value) date = new Date(dateControl.valueAsNumber);
  return date;
};

const saveOnBlurOrInput = function saveOnBlur(todoElements, save) {
  const { toDoContainer, descriptionElement, controlsElement } = todoElements;
  const titleElement = toDoContainer.querySelector(".title-todo");

  [titleElement, descriptionElement].forEach((element) => {
    element.addEventListener("blur", () => {
      save();
    });
    const elementCopy = element;
    elementCopy.addEventListener("input", () => {
      if (elementCopy.textContent === "") {
        elementCopy.innerHTML = "";
      }
      save();
    });
  });

  const dateControl = controlsElement.querySelector('input[type="date"]');
  dateControl.addEventListener("change", () => {
    save();
  });
};

const saveToDo = function saveToDo(toDoContainer, handlers) {
  const [titleElement, descriptionElement] = [
    toDoContainer.querySelector(".title-todo"),
    toDoContainer.querySelector(".description-todo"),
  ];
  if (titleElement.textContent.trim() === "") {
    return;
  }
  const editedToDo = { title: titleElement.textContent };
  if (descriptionElement) {
    editedToDo.description = descriptionElement.textContent;
  }
  if (toDoContainer.dataset.id) {
    editedToDo.id = toDoContainer.dataset.id;
  }
  const projects = getProjects(toDoContainer);
  if (projects !== null) {
    editedToDo.projects = projects;
  }
  const dateInput = toDoContainer.querySelector('input[type="date"]');
  if (dateInput) {
    editedToDo.date = getDate(dateInput);
  }
  const newId = handlers.handleEditToDo(editedToDo);
  const toDoContainerCopy = toDoContainer;
  toDoContainerCopy.dataset.id = newId;
};

const createToDoContainer = function createToDoContainer(
  todo,
  isCompleted,
  descriptionElement,
  controlsElement
) {
  const toDoContainer = document.createElement("li");
  toDoContainer.classList.add("todo");
  toDoContainer.dataset.id = todo?.id ?? "";
  toDoContainer.dataset.isHidden = Boolean(todo);
  const toDoHeaderHtml = generateToDoHeaderHtml(todo, isCompleted);
  toDoContainer.insertAdjacentHTML("afterbegin", toDoHeaderHtml);

  const title = toDoContainer.querySelector(".title-todo");
  title.addEventListener("input", () => {
    if (title.textContent === "") {
      title.innerHTML = "";
    }
  });

  if (!todo) {
    toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
    toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  }

  return toDoContainer;
};

const doOnCompleteToDo = function doOnCompleteToDo(toDoContainer, handlers) {
  const checkbox = toDoContainer.querySelector(".complete-todo-checkbox");
  checkbox.addEventListener("click", () => {
    if (!toDoContainer.dataset.id) {
      toDoContainer.remove();
      return;
    }
    handlers.handleCompleteToDo(toDoContainer.dataset.id);
  });
};

const generateDescriptionElement = function generateDescriptionElement(toDo) {
  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description-todo");
  const projectTitle = document.querySelector(
    ".content h2.project-title"
  ).textContent;
  if (projectTitle !== "completed") {
    descriptionElement.setAttribute("contenteditable", "true");
  }
  descriptionElement.dataset.placeholder = "description...";
  descriptionElement.textContent = toDo ? toDo.description : "";

  descriptionElement.addEventListener("input", () => {
    if (descriptionElement.textContent === "") {
      descriptionElement.innerHTML = "";
    }
  });

  return descriptionElement;
};

const generateControlsElement = function generateControlsElement(
  toDo,
  handlers
) {
  const isCompleted =
    document.querySelector(".content-header .project-title").textContent ===
    "completed";
  const controls = document.createElement("div");
  controls.classList.add("todo-controls-container");
  const controlsInnerHtml = `
  <input type="date" value="" ${isCompleted ? "readonly" : ""}/>
    <button class="projects-btn todo-controls">
      <img src="${_imgs_projects_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Show projects">
    </button>
    <button class="remove-todo-btn todo-controls">
      <img src="${_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Delete to-do">
    </button>
  `;
  controls.insertAdjacentHTML("afterbegin", controlsInnerHtml);

  const dateInput = controls.querySelector('input[type="date"]');
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  if (projectTitle === "today" || projectTitle === "someday") {
    dateInput.valueAsDate = new Date();
  }
  if (toDo?.date) {
    dateInput.valueAsDate = new Date(toDo.date);
  }

  controls.querySelector(".remove-todo-btn")?.addEventListener("click", () => {
    const toDoContainer = controls.closest("li.todo");
    if (!toDoContainer) return;
    handlers.handleDeleteToDo(toDoContainer.dataset.id, handlers);
    toDoContainer.remove();
  });

  return controls;
};

const showDetails = function showDetails(todoElements) {
  const { toDoContainer, descriptionElement, controlsElement } = todoElements;
  if (toDoContainer.dataset.isHidden !== "true") return;
  toDoContainer.querySelector(".view-details-btn img").src = _imgs_hide_details_svg__WEBPACK_IMPORTED_MODULE_3__;
  toDoContainer.dataset.isHidden = "false";
  toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
  toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  descriptionElement.focus();
};

const hideDetails = function hideDetails(todoElements, save) {
  const {
    toDoContainer,
    descriptionElement,
    controlsElement,
    projectsElement,
  } = todoElements;
  save();
  toDoContainer.dataset.isHidden = "true";
  toDoContainer.querySelector(".view-details-btn img").src = _imgs_show_details_svg__WEBPACK_IMPORTED_MODULE_4__;
  [descriptionElement, controlsElement, projectsElement].forEach((element) =>
    element.remove()
  );
  const existingProjectsContainer = toDoContainer.querySelector(
    ".project-selection-container"
  );
  if (existingProjectsContainer) {
    existingProjectsContainer.remove();
  }
};

const doOnShowOrHideDetails = function doOnShowOrHideDetails(
  todoElements,
  save
) {
  const { toDoContainer } = todoElements;
  const showHideBtn = toDoContainer.querySelector(".view-details-btn");
  showHideBtn.addEventListener("click", () => {
    if (toDoContainer.dataset.isHidden === "true") {
      showDetails(todoElements);
      return;
    }
    hideDetails(todoElements, save);
  });
  toDoContainer
    .querySelector(".title-todo")
    .addEventListener("dblclick", () => {
      showDetails(todoElements);
    });
};

const doOnShowProjects = function doOnShowProjects(todoElements, save) {
  const { toDoContainer, controlsElement, projectsElement } = todoElements;
  const showProjectsBtn = controlsElement.querySelector(".projects-btn");
  showProjectsBtn.addEventListener("click", () => {
    if (toDoContainer.querySelector(".project-selection-container")) {
      save();
      projectsElement.remove();
    } else {
      toDoContainer.insertAdjacentElement("beforeend", projectsElement);
    }
  });
};

/**
 *
 * @param {*} todo
 * @param {*} handleDeleteToDo
 * @param {*} handleEditToDo
 * @param {*} handleCompleteToDo
 * @return {HTMLElement?} To-Do Container element
 *
 */
function generateToDoElement(handlers, todo = null) {
  const projectTitle = document.querySelector(
    ".content .project-title"
  ).textContent;
  const isCompleted = projectTitle === "completed";
  if (isCompleted && !todo) return null;
  const descriptionElement = generateDescriptionElement(todo);
  const controlsElement = generateControlsElement(todo, handlers);
  const toDoContainer = createToDoContainer(
    todo,
    isCompleted,
    descriptionElement,
    controlsElement
  );
  const save = saveToDo.bind(null, toDoContainer, handlers);
  const todoElements = {
    toDoContainer,
    descriptionElement,
    controlsElement,
    projectsElement: (0,_toDoProjectSectionView_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo?.projects, save),
  };
  doOnCompleteToDo(toDoContainer, handlers);
  doOnShowOrHideDetails(todoElements, save);
  doOnShowProjects(todoElements, save);
  saveOnBlurOrInput(todoElements, save);

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
  document.querySelector("title").textContent = "TO DO";

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
    project.addEventListener("click", () => {
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

/***/ "./src/view/imgs/hide-details.svg":
/*!****************************************!*\
  !*** ./src/view/imgs/hide-details.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac807cffb18d49aa93c7.svg";

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

/***/ "./src/view/imgs/show-details.svg":
/*!****************************************!*\
  !*** ./src/view/imgs/show-details.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dc527e0a3089d38fc4a.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVks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Ozs7Ozs7QUNqSDZCOztBQUVkO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7O0FBRUEsaUJBQWlCLG9EQUFJOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsV2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FB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cmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZGVsL3N0YXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2RlbC90b0RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L2FkZGluZ05ld1RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvYWxsVG9Eb3NJblByb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy9wcm9qZWN0c1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvdG9Eb1Byb2plY3RTZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy90b0RvVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIC0tc2lkZWJhci1iZy1jb2xvcjogI2YzZjRmNjtcbiAgLS1hY3Rpb24tYnRuLWNvbG9yOiAjMGJhNmZmO1xuICAtLWFjdGlvbi1idG4tb24taG92ZXItY29sb3I6ICMwYmE2ZmZiZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcbiAgICBIZWx2ZXRpY2EsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiU2Vnb2UgVUkgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuLnNpZGViYXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG4gIGdhcDogMXJlbTtcbn1cblxuLnVzZXItcHJvamVjdHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG59XG5cbiNjb21wbGV0ZWQtcHJvamVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjNyZW0gMDtcbiAgYm9yZGVyLXRvcDogMC4xNXJlbSBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkICMwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b2Rvcy1wcm9qZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZG8tcHJvamVjdC10aXRsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9kb3MtcHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBncmlkLWNvbHVtbjogMjtcbn1cblxuLnRvZG8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnRvZG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBmciAxMGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2x1bW4tZ2FwOiAwLjVyZW07XG4gIHJvdy1nYXA6IDFyZW07XG59XG4uY29tcGxldGUtdG9kby1jaGVja2JveCB7XG4gIGdyaWQtYXJlYTogMS8gMS8yLyAyO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4udGl0bGUtdG9kbyB7XG4gIGdyaWQtYXJlYTogMS8gMi8yLyAzO1xuICBtYXJnaW46IDA7XG59XG5cbi52aWV3LWRldGFpbHMtYnRuIHtcbiAgZ3JpZC1hcmVhOiAxLyAzLzIvIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi52aWV3LWRldGFpbHMtYnRuIGltZyB7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmRlc2NyaXB0aW9uLXRvZG8ge1xuICBncmlkLWFyZWE6IDIvIDIvMy8gMztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDA7XG59XG5cbiNhZGQtcHJvamVjdC1idG4sXG4jYWRkLXRvZG8tYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1idG4tY29sb3IpO1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG59XG5cbiNhZGQtdG9kby1idG4ge1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbiNhZGQtdG9kby1idG46Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufVxuI2FkZC10b2RvLWJ0bjpob3ZlcixcbiNhZGQtcHJvamVjdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLW9uLWhvdmVyLWNvbG9yKTtcbn1cblxuI25ldy1wcm9qZWN0LWlucHV0LXNpZGViYXIge1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4udGl0bGUtdG9kbzplbXB0eTpiZWZvcmUsXG4uZGVzY3JpcHRpb24tdG9kbzplbXB0eTpiZWZvcmUsXG4jbmV3LXByb2plY3QtaW5wdXQtc2lkZWJhcjplbXB0eTpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmRlc2NyaXB0aW9uLXRvZG8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZG8tY29udHJvbHMtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAyLyAzLzMvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRvZG8tY29udHJvbHMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLnRvZG8tY29udHJvbHMgaW1nLFxuLmNvbnRlbnQtaGVhZGVyIGltZyxcbi50b2Rvcy1wcm9qZWN0IGltZyB7XG4gIGhlaWdodDogMnJlbTtcbn1cbi5jb250ZW50LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3Zlcixcbi50b2RvLWNvbnRyb2xzOmhvdmVyLFxuLnZpZXctZGV0YWlscy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI2FkZC1wcm9qZWN0LXNlbGVjdGlvbi1idG4ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogMy8yLzQvMztcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5cbi5hZGQtcHJvamVjdC10by10b2RvLWJ0biA+IGltZyB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rpb24ge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5hZGQtcHJvamVjdC10by10b2RvLWJ0biB7XG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XG4gIGJvcmRlcjogMXB4ICM5Y2EzYWYgc29saWQ7XG59XG5cbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG4ge1xuICBwYWRkaW5nOiAwLjM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuIGltZyB7XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE0Zjtcbn1cblxuLm9uZS1wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDI1NSwgMjEyLCAwLjQ4NSk7XG59XG5cbi5wcm9qZWN0LXNlbGVjdGlvbjpyZWFkLXdyaXRlOmZvY3VzLFxuLnRpdGxlLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcbi5kZXNjcmlwdGlvbi10b2RvOnJlYWQtd3JpdGU6Zm9jdXMsXG5kaXYudG9kb3MtcHJvamVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiwrQkFBK0I7RUFDL0I7O3FCQUVtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VB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NkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIC0tc2lkZWJhci1iZy1jb2xvcjogI2YzZjRmNjtcXG4gIC0tYWN0aW9uLWJ0bi1jb2xvcjogIzBiYTZmZjtcXG4gIC0tYWN0aW9uLWJ0bi1vbi1ob3Zlci1jb2xvcjogIzBiYTZmZmJlO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgSGVsdmV0aWNhLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi51c2VyLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjb21wbGV0ZWQtcHJvamVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwO1xcbiAgYm9yZGVyLXRvcDogMC4xNXJlbSBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCAjMDAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRvZG9zLXByb2plY3Qge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLXByb2plY3QtdGl0bGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG9zLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gODBmciAxMGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICByb3ctZ2FwOiAxcmVtO1xcbn1cXG4uY29tcGxldGUtdG9kby1jaGVja2JveCB7XFxuICBncmlkLWFyZWE6IDEvIDEvMi8gMjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50aXRsZS10b2RvIHtcXG4gIGdyaWQtYXJlYTogMS8gMi8yLyAzO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udmlldy1kZXRhaWxzLWJ0biB7XFxuICBncmlkLWFyZWE6IDEvIDMvMi8gNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi52aWV3LWRldGFpbHMtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5kZXNjcmlwdGlvbi10b2RvIHtcXG4gIGdyaWQtYXJlYTogMi8gMi8zLyAzO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bixcXG4jYWRkLXRvZG8tYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1idG4tY29sb3IpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbn1cXG5cXG4jYWRkLXRvZG8tYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuI2FkZC10b2RvLWJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4jYWRkLXRvZG8tYnRuOmhvdmVyLFxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWJ0bi1vbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4udGl0bGUtdG9kbzplbXB0eTpiZWZvcmUsXFxuLmRlc2NyaXB0aW9uLXRvZG86ZW1wdHk6YmVmb3JlLFxcbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyOmVtcHR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xcbiAgY29sb3I6ICNhYWE7XFxufVxcblxcbi5kZXNjcmlwdGlvbi10b2RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1jb250cm9scy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyLyAzLzMvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWNvbnRyb2xzIGltZyxcXG4uY29udGVudC1oZWFkZXIgaW1nLFxcbi50b2Rvcy1wcm9qZWN0IGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5jb250ZW50LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyLFxcbi50b2RvLWNvbnRyb2xzOmhvdmVyLFxcbi52aWV3LWRldGFpbHMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jYWRkLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG4gPiBpbWcge1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGlvbiB7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG4ge1xcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC10by10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4ICM5Y2EzYWYgc29saWQ7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG4ge1xcbiAgcGFkZGluZzogMC4zO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0biBpbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE0ZjtcXG59XFxuXFxuLm9uZS1wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNDg1KTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0aW9uOnJlYWQtd3JpdGU6Zm9jdXMsXFxuLnRpdGxlLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcXG4uZGVzY3JpcHRpb24tdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxcbmRpdi50b2Rvcy1wcm9qZWN0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU3RhdGUgZnJvbSBcIi4vbW9kZWwvc3RhdGUuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2VuZXJhdGVWaWV3IGZyb20gXCIuL3ZpZXcvdmlldy5qc1wiO1xuaW1wb3J0IGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QgZnJvbSBcIi4vdmlldy9hbGxUb0Rvc0luUHJvamVjdC5qc1wiO1xuaW1wb3J0IGhhbmRsZUdlbmVyYXRpbmdOZXdUb0RvIGZyb20gXCIuL3ZpZXcvYWRkaW5nTmV3VG9Eby5qc1wiO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdHNWaWV3IGZyb20gXCIuL3ZpZXcvcHJvamVjdHNWaWV3LmpzXCI7XG5pbXBvcnQgaGFuZGxlR2VuZXJhdGluZ05ld1Byb2plY3QgZnJvbSBcIi4vdmlldy9uZXdQcm9qZWN0LmpzXCI7XG5pbXBvcnQgZ2VuZXJhdGVUb0RvRWxlbWVudCBmcm9tIFwiLi92aWV3L3RvRG9WaWV3LmpzXCI7XG5cbmNvbnN0IGZpeGVkUHJvamVjdHMgPSBbXCJpbmJveFwiLCBcInRvZGF5XCIsIFwic29tZWRheVwiLCBcImFueXRpbWVcIl07XG5jb25zdCBjb21wdXRlZFByb2plY3RzID0gW1widG9kYXlcIiwgXCJzb21lZGF5XCIsIFwiYW55dGltZVwiLCBcImNvbXBsZXRlZFwiXTtcbmNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKGZpeGVkUHJvamVjdHMpO1xuXG5jb25zdCBpc0RhdGVUb2RheSA9IGZ1bmN0aW9uIGlzR2l2ZW5EYXRlVG9kYXkoZGF0ZSkge1xuICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICByZXR1cm4gKFxuICAgIGRhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiZcbiAgICBkYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgKTtcbn07XG5jb25zdCBoYW5kbGVEZWxldGVUb0RvID0gZnVuY3Rpb24gaGFuZGxlRGVsZXRlVG9EbyhpZCkge1xuICBzdGF0ZS5yZW1vdmVUb0RvKGlkKTtcbn07XG5jb25zdCBoYW5kbGVDb21wbGV0ZVRvRG8gPSBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZVRvRG8oaGFuZGxlcnMsIGlkKSB7XG4gIHN0YXRlLmNvbXBsZXRlVG9EbyhpZCk7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICBnZW5lcmF0ZVRvRG9FbGVtZW50LmJpbmQobnVsbCwgaGFuZGxlcnMpXG4gICk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2xpY2soaGFuZGxlcnMsIHByb2plY3ROYW1lKSB7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgcHJvamVjdE5hbWUsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QocHJvamVjdE5hbWUpLFxuICAgIGdlbmVyYXRlVG9Eb0VsZW1lbnQuYmluZChudWxsLCBoYW5kbGVycylcbiAgKTtcbn07XG5cbmNvbnN0IGhhbmRsZUVkaXRUb0RvID0gZnVuY3Rpb24gaGFuZGxlRWRpdFRvRG8oaGFuZGxlcnMsIHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHRvRG9JZCA9IHN0YXRlLmVkaXRUb0RvKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKTtcbiAgY29uc3QgaXNUb2RheUNoYW5nZWQgPVxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0ID09PSBcInRvZGF5XCIgJiZcbiAgICBcImRhdGVcIiBpbiB0b0RvRWRpdGVkUHJvcGVydGllcyAmJlxuICAgICFpc0RhdGVUb2RheShuZXcgRGF0ZSh0b0RvRWRpdGVkUHJvcGVydGllcy5kYXRlKSk7XG4gIGNvbnN0IGlzTm90Q29tcHV0ZWRQcm9qZWN0ID0gIWNvbXB1dGVkUHJvamVjdHMuaW5jbHVkZXMoc3RhdGUuY3VycmVudFByb2plY3QpO1xuICBjb25zdCB3YXNDdXJyZW50UHJvamVjdERlbGV0ZWQgPSAhc3RhdGVcbiAgICAuZ2V0VG9Eb1Byb2plY3RzQnlJZCh0b0RvSWQpXG4gICAgLmluY2x1ZGVzKHN0YXRlLmN1cnJlbnRQcm9qZWN0KTtcbiAgaWYgKGlzVG9kYXlDaGFuZ2VkIHx8IChpc05vdENvbXB1dGVkUHJvamVjdCAmJiB3YXNDdXJyZW50UHJvamVjdERlbGV0ZWQpKSB7XG4gICAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICAgIGdlbmVyYXRlVG9Eb0VsZW1lbnQuYmluZChudWxsLCBoYW5kbGVycylcbiAgICApO1xuICB9XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KFxuICAgIHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsXG4gICAgaGFuZGxlUHJvamVjdENsaWNrLmJpbmQobnVsbCwgaGFuZGxlcnMpXG4gICk7XG4gIHJldHVybiB0b0RvSWQ7XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdChcbiAgaGFuZGxlcnMsXG4gIHByb2plY3ROYW1lXG4pIHtcbiAgc3RhdGUuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgc3RhdGUuY3VycmVudFByb2plY3QsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICBnZW5lcmF0ZVRvRG9FbGVtZW50LmJpbmQobnVsbCwgaGFuZGxlcnMpXG4gICk7XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KFxuICAgIHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsXG4gICAgaGFuZGxlUHJvamVjdENsaWNrLmJpbmQobnVsbCwgaGFuZGxlcnMpXG4gICk7XG59O1xuXG5jb25zdCBoYW5kbGVBZGROZXdQcm9qZWN0ID0gZnVuY3Rpb24gaGFuZGxlQWRkTmV3UHJvamVjdChcbiAgcHJvamVjdE5hbWUsXG4gIGhhbmRsZXJzXG4pIHtcbiAgc3RhdGUuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIGdlbmVyYXRlUHJvamVjdHNWaWV3KFxuICAgIHN0YXRlLnVzZXJQcm9qZWN0TmFtZXMsXG4gICAgaGFuZGxlUHJvamVjdENsaWNrLmJpbmQobnVsbCwgaGFuZGxlcnMpXG4gICk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gc3RhcnRBcHBsaWNhdGlvbigpIHtcbiAgY29uc3QgaGFuZGxlcnMgPSB7IGhhbmRsZURlbGV0ZVRvRG8sIGhhbmRsZUVkaXRUb0RvLCBoYW5kbGVDb21wbGV0ZVRvRG8gfTtcbiAgaGFuZGxlcnMuaGFuZGxlRWRpdFRvRG8gPSBoYW5kbGVFZGl0VG9Eby5iaW5kKG51bGwsIGhhbmRsZXJzKTtcbiAgaGFuZGxlcnMuaGFuZGxlQ29tcGxldGVUb0RvID0gaGFuZGxlQ29tcGxldGVUb0RvLmJpbmQobnVsbCwgaGFuZGxlcnMpO1xuICBnZW5lcmF0ZVZpZXcoXG4gICAgaGFuZGxlUHJvamVjdENsaWNrLmJpbmQobnVsbCwgaGFuZGxlcnMpLFxuICAgIGhhbmRsZURlbGV0ZVByb2plY3QuYmluZChudWxsLCBoYW5kbGVycylcbiAgKTtcbiAgaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8oZ2VuZXJhdGVUb0RvRWxlbWVudC5iaW5kKG51bGwsIGhhbmRsZXJzKSk7XG4gIGhhbmRsZUdlbmVyYXRpbmdOZXdQcm9qZWN0KGhhbmRsZUFkZE5ld1Byb2plY3QsIGhhbmRsZXJzKTtcbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoXG4gICAgc3RhdGUudXNlclByb2plY3ROYW1lcyxcbiAgICBoYW5kbGVQcm9qZWN0Q2xpY2suYmluZChudWxsLCBoYW5kbGVycylcbiAgKTtcbiAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdCxcbiAgICBzdGF0ZS5nZXRBbGxUb0Rvc0luUHJvamVjdCgpLFxuICAgIGdlbmVyYXRlVG9Eb0VsZW1lbnQuYmluZChudWxsLCBoYW5kbGVycylcbiAgKTtcbn07XG5pbml0KCk7XG4iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b0RvLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIHtcbiAgI3RvRG9zID0ge307XG5cbiAgI2NvbXBsZXRlZFRvRG9zID0ge307XG5cbiAgI3Byb2plY3RzID0ge307XG5cbiAgI2N1cnJlbnRQcm9qZWN0ID0gXCJpbmJveFwiO1xuXG4gICNmaXhlZFByb2plY3RzO1xuXG4gIGNvbnN0cnVjdG9yKGZpeGVkUHJvamVjdHMpIHtcbiAgICBmaXhlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW107XG4gICAgfSk7XG4gICAgdGhpcy4jZml4ZWRQcm9qZWN0cyA9IGZpeGVkUHJvamVjdHM7XG4gICAgdGhpcy4jZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBzZXQgZml4ZWRQcm9qZWN0cyhwcm9qZWN0c05hbWVzKSB7XG4gICAgdGhpcy4jZml4ZWRQcm9qZWN0cyA9IHByb2plY3RzTmFtZXM7XG4gIH1cblxuICBnZXQgY3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0O1xuICB9XG5cbiAgc2V0IGN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHByb2plY3ROYW1lICYmIHByb2plY3ROYW1lIGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvRG8odG9Eb1Byb3BlcnRpZXMpIHtcbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiY29tcGxldGVkXCIpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHByb2plY3RXaXRoQ3VycmVudCA9IFt0aGlzLmN1cnJlbnRQcm9qZWN0XTtcbiAgICBpZiAodG9Eb1Byb3BlcnRpZXMucHJvamVjdHMpIHtcbiAgICAgIHByb2plY3RXaXRoQ3VycmVudCA9IFtcbiAgICAgICAgLi4ubmV3IFNldChwcm9qZWN0V2l0aEN1cnJlbnQuY29uY2F0KHRvRG9Qcm9wZXJ0aWVzLnByb2plY3RzKSksXG4gICAgICBdO1xuICAgIH1cbiAgICBwcm9qZWN0V2l0aEN1cnJlbnQgPSBwcm9qZWN0V2l0aEN1cnJlbnQuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QgPT09IFwiaW5ib3hcIiB8fCAhdGhpcy4jZml4ZWRQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KVxuICAgICk7XG4gICAgY29uc3QgdG9Eb1Byb3BlcnRpZXNXaXRoQ3VycmVudFByb2plY3QgPSB7IC4uLnRvRG9Qcm9wZXJ0aWVzIH07XG4gICAgdG9Eb1Byb3BlcnRpZXNXaXRoQ3VycmVudFByb2plY3QucHJvamVjdHMgPSBwcm9qZWN0V2l0aEN1cnJlbnQ7XG5cbiAgICBjb25zdCB0b0RvID0gVG9Ebyh0b0RvUHJvcGVydGllc1dpdGhDdXJyZW50UHJvamVjdCk7XG5cbiAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXSA9IHRvRG87XG5cbiAgICBwcm9qZWN0V2l0aEN1cnJlbnQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QgaW4gdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0udW5zaGlmdCh0b0RvLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW3RvRG8uaWRdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiB0b0RvLmlkO1xuICB9XG5cbiAgZ2V0VG9Eb1Byb2plY3RzQnlJZChpZCkge1xuICAgIGlmICghKGlkIGluIHRoaXMuI3RvRG9zKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gWy4uLnRoaXMuI3RvRG9zW2lkXS5wcm9qZWN0c107XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHByb2plY3ROYW1lIGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdE5hbWVdID0gW107XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAjcmVtb3ZlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKSB7XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdG9Eb1RvRGVsZXRlID0gdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcbiAgICBkZWxldGUgdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eb1RvRGVsZXRlO1xuICB9XG5cbiAgI3JlbW92ZVRvRG9Gcm9tQWN0aXZlVG9Eb3ModG9Eb0lkKSB7XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI3RvRG9zKSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVJbmRleCA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleChcbiAgICAgICAgKGN1clRvRG9JZCkgPT4gY3VyVG9Eb0lkID09PSB0b0RvSWRcbiAgICAgICk7XG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRvRG9Ub0RlbGV0ZSA9IHRoaXMuI3RvRG9zW3RvRG9JZF07XG4gICAgZGVsZXRlIHRoaXMuI3RvRG9zW3RvRG9JZF07XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRvRG9Ub0RlbGV0ZTtcbiAgfVxuXG4gIHJlbW92ZVRvRG8odG9Eb0lkKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcmVtb3ZlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3JlbW92ZVRvRG9Gcm9tQWN0aXZlVG9Eb3ModG9Eb0lkKTtcbiAgfVxuXG4gIGdldEFsbFRvRG9zSW5Qcm9qZWN0KHByb2plY3QgPSBcIlwiKSB7XG4gICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRyaW0oKSB8fCB0aGlzLiNjdXJyZW50UHJvamVjdDtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy4jY29tcGxldGVkVG9Eb3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwidG9kYXlcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3RvZGF5VG9Eb3M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcInNvbWVkYXlcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3NvbWVkYXlUb0RvcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiYW55dGltZVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jYW55dGltZVRvRG9zO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9zID0gdGhpcy4jcHJvamVjdHNbdGhpcy4jY3VycmVudFByb2plY3RdLm1hcChcbiAgICAgICh0b0RvSWQpID0+IHRoaXMuI3RvRG9zW3RvRG9JZF1cbiAgICApO1xuICAgIHJldHVybiB0b2RvcztcbiAgfVxuXG4gIGVkaXRUb0RvKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0b0RvRWRpdGVkUHJvcGVydGllcy5pZCB8fCAhKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzLmlkIGluIHRoaXMuI3RvRG9zKSkge1xuICAgICAgY29uc3QgbmV3SWQgPSB0aGlzLmFkZFRvRG8odG9Eb0VkaXRlZFByb3BlcnRpZXMpO1xuICAgICAgcmV0dXJuIG5ld0lkO1xuICAgIH1cbiAgICBjb25zdCB0b0RvID0gdGhpcy4jdG9Eb3NbdG9Eb0VkaXRlZFByb3BlcnRpZXMuaWRdO1xuICAgIGlmIChcInByb2plY3RzXCIgaW4gdG9Eb0VkaXRlZFByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IG9sZFByb2plY3RzID0gdG9Eby5wcm9qZWN0cztcbiAgICAgIGNvbnN0IHJlbW92ZWRQcm9qZWN0cyA9IG9sZFByb2plY3RzLmZpbHRlcihcbiAgICAgICAgKG9sZFByb2plY3QpID0+ICF0b0RvRWRpdGVkUHJvcGVydGllcy5wcm9qZWN0cy5pbmNsdWRlcyhvbGRQcm9qZWN0KVxuICAgICAgKTtcbiAgICAgIHRoaXMuI3NhdmVOZXdQcm9qZWN0cyhcbiAgICAgICAgb2xkUHJvamVjdHMsXG4gICAgICAgIHRvRG9FZGl0ZWRQcm9wZXJ0aWVzLnByb2plY3RzLFxuICAgICAgICB0b0RvRWRpdGVkUHJvcGVydGllcy5pZFxuICAgICAgKTtcbiAgICAgIHRoaXMuI2RlbGV0ZVRvRG9Gcm9tRXhjbHVkZWRQcm9qZWN0cyhcbiAgICAgICAgcmVtb3ZlZFByb2plY3RzLFxuICAgICAgICB0b0RvRWRpdGVkUHJvcGVydGllcy5pZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLiN1cGRhdGVUb0RvKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eby5pZDtcbiAgfVxuXG4gICNyZXN0b3JlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKSB7XG4gICAgaWYgKCEodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0b0RvID0gdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcbiAgICBkZWxldGUgdGhpcy4jY29tcGxldGVkVG9Eb3NbdG9Eb0lkXTtcblxuICAgIHRoaXMuI3RvRG9zW3RvRG8uaWRdID0gdG9EbztcbiAgICB0b0RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0IGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnVuc2hpZnQodG9Eby5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFt0b0RvLmlkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gICNwdXRUb0RvVG9Db21wbGV0ZWQodG9Eb0lkKSB7XG4gICAgaWYgKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0Rvcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0b0RvVG9Db21wbGV0ZSA9IHRoaXMucmVtb3ZlVG9Ebyh0b0RvSWQpO1xuICAgIHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF0gPSB0b0RvVG9Db21wbGV0ZTtcbiAgfVxuXG4gIGNvbXBsZXRlVG9Ebyh0b0RvSWQpIHtcbiAgICBpZiAodG9Eb0lkIGluIHRoaXMuI2NvbXBsZXRlZFRvRG9zKSB7XG4gICAgICB0aGlzLiNyZXN0b3JlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jcHV0VG9Eb1RvQ29tcGxldGVkKHRvRG9JZCk7XG4gICAgfVxuICB9XG5cbiAgI3VwZGF0ZVRvRG8odG9Ebykge1xuICAgIGlmIChcInRpdGxlXCIgaW4gdG9Ebykge1xuICAgICAgdGhpcy4jdG9Eb3NbdG9Eby5pZF0udGl0bGUgPSB0b0RvLnRpdGxlO1xuICAgIH1cbiAgICBpZiAoXCJkZXNjcmlwdGlvblwiIGluIHRvRG8pIHtcbiAgICAgIHRoaXMuI3RvRG9zW3RvRG8uaWRdLmRlc2NyaXB0aW9uID0gdG9Eby5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgaWYgKFwicHJvamVjdHNcIiBpbiB0b0RvKSB7XG4gICAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXS5wcm9qZWN0cyA9IHRvRG8ucHJvamVjdHM7XG4gICAgfVxuICAgIGlmIChcImRhdGVcIiBpbiB0b0RvKSB7XG4gICAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXS5kYXRlID0gdG9Eby5kYXRlO1xuICAgIH1cbiAgfVxuXG4gICNkZWxldGVUb0RvRnJvbUV4Y2x1ZGVkUHJvamVjdHMocmVtb3ZlZFByb2plY3RzLCBpZCkge1xuICAgIHJlbW92ZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleCgob2xkSWQpID0+IG9sZElkID09PSBpZCk7XG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgI3NhdmVOZXdQcm9qZWN0cyhvbGRQcm9qZWN0cywgbmV3UHJvamVjdHMsIHRvRG9JZCkge1xuICAgIG5ld1Byb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChvbGRQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy4jcHJvamVjdHNbcHJvamVjdF0pIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0udW5zaGlmdCh0b0RvSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0gPSBbdG9Eb0lkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICNzZXRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLiN0b0RvcykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy4jcHJvamVjdHMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY29tcGxldGVkX3RvZG9zXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLiNjb21wbGV0ZWRUb0RvcylcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgXCJjdXJyZW50X3Byb2plY3RcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuI2N1cnJlbnRQcm9qZWN0KVxuICAgICk7XG4gIH1cblxuICAjZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgY29uc3QgY29tcGxldGVkVG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkX3RvZG9zXCIpKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X3Byb2plY3RcIikpO1xuICAgIGlmICh0b2Rvcykge1xuICAgICAgdGhpcy4jdG9Eb3MgPSB0b2RvcztcbiAgICB9XG4gICAgaWYgKHByb2plY3RzKSB7XG4gICAgICB0aGlzLiNwcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGlmIChjb21wbGV0ZWRUb0Rvcykge1xuICAgICAgdGhpcy4jY29tcGxldGVkVG9Eb3MgPSBjb21wbGV0ZWRUb0RvcztcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0O1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRvRGVsZXRlTmFtZSkge1xuICAgIGlmICghKHByb2plY3RUb0RlbGV0ZU5hbWUgaW4gdGhpcy4jcHJvamVjdHMpKSByZXR1cm47XG4gICAgaWYgKHRoaXMuI2ZpeGVkUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdFRvRGVsZXRlTmFtZSkpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyh0aGlzLiN0b0RvcykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMuI3RvRG9zW2lkXS5wcm9qZWN0cyA9IHRoaXMuI3RvRG9zW2lkXS5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSBwcm9qZWN0VG9EZWxldGVOYW1lXG4gICAgICApO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuI2NvbXBsZXRlZFRvRG9zKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy4jY29tcGxldGVkVG9Eb3NbaWRdLnByb2plY3RzID0gdGhpcy4jY29tcGxldGVkVG9Eb3NbXG4gICAgICAgIGlkXG4gICAgICBdLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdCAhPT0gcHJvamVjdFRvRGVsZXRlTmFtZSk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuI3Byb2plY3RzW3Byb2plY3RUb0RlbGV0ZU5hbWVdO1xuICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gXCJpbmJveFwiO1xuICB9XG5cbiAgZ2V0IHVzZXJQcm9qZWN0TmFtZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuI3Byb2plY3RzKS5maWx0ZXIoKG5hbWUpID0+XG4gICAgICB0aGlzLiNmaXhlZFByb2plY3RzLmV2ZXJ5KChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSBuYW1lKVxuICAgICk7XG4gIH1cblxuICBnZXQgI3NvbWVkYXlUb0RvcygpIHtcbiAgICBjb25zdCBzb21lZGF5VG9Eb3MgPSBPYmplY3QudmFsdWVzKHRoaXMuI3RvRG9zKS5maWx0ZXIoKHRvRG8pID0+IHRvRG8uZGF0ZSk7XG4gICAgc29tZWRheVRvRG9zLnNvcnQoKHRvZG9BLCB0b2RvQikgPT4gLXRvZG9BLmlkICsgdG9kb0IuaWQpO1xuICAgIHJldHVybiBzb21lZGF5VG9Eb3M7XG4gIH1cblxuICBnZXQgI2FueXRpbWVUb0RvcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0Rvcyk7XG4gIH1cblxuICBnZXQgI3RvZGF5VG9Eb3MoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdG9kYXlUb0RvcyA9IE9iamVjdC52YWx1ZXModGhpcy4jdG9Eb3MpLmZpbHRlcigodG9EbykgPT4ge1xuICAgICAgaWYgKCF0b0RvLmRhdGUpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb0RvRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZGF0ZSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjdXJyZW50VG9Eb0RhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiZcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdG9kYXlUb0Rvcy5zb3J0KCh0b2RvQSwgdG9kb0IpID0+IC10b2RvQS5pZCArIHRvZG9CLmlkKTtcbiAgICByZXR1cm4gdG9kYXlUb0RvcztcbiAgfVxuXG4gIG1vdmVUb0RvUHJpb3JpdHlJblByb2plY3RVcCh0b0RvSWQsIHByb2plY3QpIHtcbiAgICBpZiAoIXRoaXMuI3RvRG9zW3RvRG9JZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZlRvRG8gPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoXG4gICAgICAodG9EbykgPT4gdG9Eby5pZCA9PT0gdG9Eb0lkXG4gICAgKTtcblxuICAgIGlmICghaW5kZXhPZlRvRG8gPz8gaW5kZXhPZlRvRG8gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gLSAxXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICBdID0gW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG9dLFxuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gLSAxXSxcbiAgICBdO1xuICB9XG5cbiAgbW92ZVRvRG9Qcmlvcml0eUluUHJvamVjdERvd24odG9Eb0lkLCBwcm9qZWN0KSB7XG4gICAgaWYgKCF0aGlzLiN0b0Rvc1t0b0RvSWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZUb0RvID0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uZmluZEluZGV4KFxuICAgICAgKHRvRG8pID0+IHRvRG8uaWQgPT09IHRvRG9JZFxuICAgICk7XG4gICAgaWYgKCFpbmRleE9mVG9EbyB8fCBpbmRleE9mVG9EbyA9PT0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvICsgMV0sXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9Eb10sXG4gICAgXSA9IFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvICsgMV0sXG4gICAgXTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Ebyh0b0RvUHJvcGVydGllcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB0b0RvUHJvcGVydGllcy50aXRsZSA/PyBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiB0b0RvUHJvcGVydGllcy5kZXNjcmlwdGlvbiA/PyBcIlwiLFxuICAgIHByb2plY3RzOiB0b0RvUHJvcGVydGllcy5wcm9qZWN0cyxcbiAgICBkYXRlOiB0b0RvUHJvcGVydGllcy5kZXNjcmlwdGlvbiA/PyBcIlwiLFxuICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgfTtcbn1cbiIsIi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0gaGFuZGxlRGVsZXRlVG9Eb1xuICogQHBhcmFtIHsqfSBoYW5kbGVFZGl0VG9Eb1xuICogQHBhcmFtIHsqfSBoYW5kbGVDb21wbGV0ZVRvRG9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8oZ2VuZXJhdGVUb0RvRWxlbWVudCkge1xuICBjb25zdCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1idG5cIik7XG4gIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0b0RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICBjb25zdCB0b0RvRWxlbWVudCA9IGdlbmVyYXRlVG9Eb0VsZW1lbnQoKTtcbiAgICBpZiAoIXRvRG9FbGVtZW50KSByZXR1cm47XG4gICAgdG9Eb0xpc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgdG9Eb0VsZW1lbnQpO1xuICAgIHRvRG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdG9kb1wiKS5mb2N1cygpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gIHByb2plY3ROYW1lLFxuICB0b2RvcyxcbiAgZ2VuZXJhdGVUb0RvRWxlbWVudFxuKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbnRlbnQtaGVhZGVyPi5kZWxldGUtcHJvamVjdC1idG5cIlxuICApO1xuICBpZiAoXG4gICAgW1wiYW55dGltZVwiLCBcImluYm94XCIsIFwic29tZWRheVwiLCBcInRvZGF5XCIsIFwiY29tcGxldGVkXCJdLmluY2x1ZGVzKHByb2plY3ROYW1lKVxuICApIHtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xuXG4gIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgIG5ld1RvRG9CdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdUb0RvQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgY29uc3QgdG9Eb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gIHRvRG9MaXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBpZiAoIXRvZG9zKSByZXR1cm47XG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b0RvRWxlbWVudCA9IGdlbmVyYXRlVG9Eb0VsZW1lbnQodG9kbyk7XG4gICAgdG9Eb0xpc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB0b0RvRWxlbWVudCk7XG4gIH0pO1xufVxuIiwiY29uc3QgZ2VuZXJhdGVOZXdQcm9qZWN0RWxlbWVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQoKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9zLXByb2plY3RcIik7XG4gIHByb2plY3RFbGVtZW50LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyXCI7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIHByb2plY3RFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIgPSBcInByb2plY3QuLi5cIjtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGluZ05ld1Byb2plY3QoXG4gIGhhbmRsZUFkZE5ld1Byb2plY3QsXG4gIGhhbmRsZXJzXG4pIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU5ld1Byb2plY3RFbGVtZW50KCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIG5ld1Byb2plY3RFbGVtZW50KTtcbiAgICBuZXdQcm9qZWN0RWxlbWVudC5mb2N1cygpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBpZiAocHJvamVjdE5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgaGFuZGxlQWRkTmV3UHJvamVjdChwcm9qZWN0TmFtZSwgaGFuZGxlcnMpO1xuICAgICAgfVxuICAgICAgbmV3UHJvamVjdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBuZXdQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiY29uc3QgZ2VuZXJhdGVPbmVQcm9qZWN0RWxlbWVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlT25lUHJvamVjdEVsZW1lbnQoXG4gIHByb2plY3ROYW1lXG4pIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtcHJvamVjdFwiKTtcbiAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c1ZpZXcocHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdE5hbWVzLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU9uZVByb2plY3RFbGVtZW50KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBoYW5kbGVQcm9qZWN0Q2xpY2sobmV3UHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBBZGRQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWdzL2FkZC5zdmdcIjtcbmltcG9ydCBSZW1vdmVQcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWdzL2Nsb3NlLnN2Z1wiO1xuXG5jb25zdCBpc0xhc3RQcm9qZWN0RW1wdHkgPSBmdW5jdGlvbiBpc0xhc3RQcm9qZWN0RW1wdHkoYWRkUHJvamVjdEJ0bikge1xuICBjb25zdCBsYXN0UHJvamVjdEVsZW1lbnQgPSBhZGRQcm9qZWN0QnRuLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIHJldHVybiAoXG4gICAgbGFzdFByb2plY3RFbGVtZW50ICYmXG4gICAgbGFzdFByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3Rpb25cIikudGV4dENvbnRlbnQgPT09IFwiXCJcbiAgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyID0gZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKSB7XG4gIGNvbnN0IHByb2plY3RTZWxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC10by10b2RvLWJ0blwiKTtcbiAgYWRkUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke0FkZFByb2plY3RJY29ufVwiIGFsdD1cIkFkZCBwcm9qZWN0XCI+YDtcbiAgcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgYWRkUHJvamVjdEJ0bik7XG4gIHJldHVybiBwcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCA9IGZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ1dHRvbkZvclByb2plY3QoKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuXCIpO1xuICBkZWxldGVCdG4uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtSZW1vdmVQcm9qZWN0SWNvbn1cIiBhbHQ9XCJSZW1vdmUgcHJvamVjdFwiPmA7XG4gIHJldHVybiBkZWxldGVCdG47XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGluZ1Byb2plY3QgPSBmdW5jdGlvbiBoYW5kbGVEZWxldGluZ1Byb2plY3QoXG4gIGRlbGV0ZVByb2plY3RCdG4sXG4gIHByb2plY3RDb250YWluZXIsXG4gIHNhdmVcbikge1xuICBjb25zdCBpc0NvbXBsZXRlZCA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWhlYWRlciAucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9PT1cbiAgICBcImNvbXBsZXRlZFwiO1xuICBpZiAoaXNDb21wbGV0ZWQpIHJldHVybjtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3RXaGVuRW1wdHlPbkJsdXIgPSBmdW5jdGlvbiByZW1vdmVQcm9qZWN0V2hlbkVtcHR5T25CbHVyKFxuICBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudCxcbiAgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnRcbikge1xuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgaWYgKG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnRleHRDb250ZW50ID09PSBcIlwiKVxuICAgICAgbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlRW1wdHlQcm9qZWN0Q29udGFpbmVyRWxlbWVudCA9XG4gIGZ1bmN0aW9uIGNyZWF0ZUVtcHR5UHJvamVjdENvbnRhaW5lckVsZW1lbnQoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudDtcbiAgfTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQgPVxuICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudChwcm9qZWN0TmFtZSA9IFwiXCIpIHtcbiAgICBjb25zdCBpc0NvbXBsZXRlZCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtaGVhZGVyIC5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50ID09PVxuICAgICAgXCJjb21wbGV0ZWRcIjtcbiAgICBjb25zdCBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0aW9uXCIpO1xuICAgIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCAhaXNDb21wbGV0ZWQpO1xuICAgIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgcmV0dXJuIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50O1xuICB9O1xuXG5jb25zdCBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lciA9IGZ1bmN0aW9uIGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyKFxuICBzYXZlLFxuICBwcm9qZWN0TmFtZSA9IFwiXCJcbikge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRW1wdHlQcm9qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuICBjb25zdCBpbnB1dFByb2plY3RFbGVtZW50ID0gY3JlYXRlTmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQocHJvamVjdE5hbWUpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCgpO1xuXG4gIGhhbmRsZURlbGV0aW5nUHJvamVjdChkZWxldGVQcm9qZWN0QnRuLCBwcm9qZWN0Q29udGFpbmVyLCBzYXZlKTtcbiAgcmVtb3ZlUHJvamVjdFdoZW5FbXB0eU9uQmx1cihwcm9qZWN0Q29udGFpbmVyLCBpbnB1dFByb2plY3RFbGVtZW50KTtcbiAgaW5wdXRQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICB9KTtcbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wdXRQcm9qZWN0RWxlbWVudCk7XG4gIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlbGV0ZVByb2plY3RCdG4pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJID0gZnVuY3Rpb24gaGFuZGxlQWRkaW5nTmV3UHJvamVjdFRvVUkoXG4gIHByb2plY3RzQ29udGFpbmVyLFxuICBzYXZlXG4pIHtcbiAgY29uc3QgaXNDb21wbGV0ZWQgPVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1oZWFkZXIgLnByb2plY3QtdGl0bGVcIikudGV4dENvbnRlbnQgPT09XG4gICAgXCJjb21wbGV0ZWRcIjtcbiAgaWYgKGlzQ29tcGxldGVkKSByZXR1cm47XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc0xhc3RQcm9qZWN0RW1wdHkoYWRkUHJvamVjdEJ0bikpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lcihzYXZlKTtcbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvblwiKS5mb2N1cygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluc2VydFByb2plY3RzVG9Qcm9qZWN0Q29udGFpbmVyID1cbiAgZnVuY3Rpb24gaW5zZXJ0UHJvamVjdHNUb1Byb2plY3RDb250YWluZXIocHJvamVjdHNDb250YWluZXIsIHByb2plY3RzLCBzYXZlKSB7XG4gICAgaWYgKCFwcm9qZWN0cykgcmV0dXJuO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuYWRkLXByb2plY3QtdG8tdG9kby1idG5cIlxuICAgICk7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgIGFkZFByb2plY3RCdG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgICBcImJlZm9yZWJlZ2luXCIsXG4gICAgICAgIGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyKHNhdmUsIHByb2plY3QpXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSB0b0RvUHJvamVjdHNcbiAqIEBwYXJhbSB7Kn0gc2F2ZVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFByb2plY3RzIHNlbGVjdGlvbiBjb250YWluZXIgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RTZWxlY3Rpb25Db250YWluZXIodG9Eb1Byb2plY3RzLCBzYXZlKSB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlUHJvamVjdHNDb250YWluZXIoKTtcbiAgY29uc3QgcHJvamVjdHNPckN1cnJlbnRQcm9qZWN0ID0gdG9Eb1Byb2plY3RzID8/IFtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQgLnByb2plY3QtdGl0bGVcIikudGV4dENvbnRlbnQsXG4gIF07XG4gIGluc2VydFByb2plY3RzVG9Qcm9qZWN0Q29udGFpbmVyKFxuICAgIHByb2plY3RzQ29udGFpbmVyLFxuICAgIHByb2plY3RzT3JDdXJyZW50UHJvamVjdCxcbiAgICBzYXZlXG4gICk7XG4gIGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJKHByb2plY3RzQ29udGFpbmVyLCBzYXZlKTtcbiAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0IFRyYXNoSWNvbiBmcm9tIFwiLi9pbWdzL3RyYXNoLnN2Z1wiO1xuaW1wb3J0IFByb2plY3RzSWNvbiBmcm9tIFwiLi9pbWdzL3Byb2plY3RzLnN2Z1wiO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lciBmcm9tIFwiLi90b0RvUHJvamVjdFNlY3Rpb25WaWV3LmpzXCI7XG5pbXBvcnQgSGlkZUljb24gZnJvbSBcIi4vaW1ncy9oaWRlLWRldGFpbHMuc3ZnXCI7XG5pbXBvcnQgU2hvd0ljb24gZnJvbSBcIi4vaW1ncy9zaG93LWRldGFpbHMuc3ZnXCI7XG5cbmNvbnN0IGdlbmVyYXRlVG9Eb0hlYWRlckh0bWwgPSBmdW5jdGlvbiBnZW5lcmF0ZVRvRG9IZWFkZXJIdG1sKFxuICB0b2RvLFxuICBpc0NvbXBsZXRlZFxuKSB7XG4gIGNvbnN0IHRvRG9IdG1sID0gYFxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtcbiAgICBpc0NvbXBsZXRlZCA/IFwiY2hlY2tlZFwiIDogXCJcIlxuICB9IGNsYXNzPVwiY29tcGxldGUtdG9kby1jaGVja2JveFwiIC8+XG4gIDxoMyBjbGFzcz1cInRpdGxlLXRvZG9cIiBjb250ZW50ZWRpdGFibGU9XCIkeyFpc0NvbXBsZXRlZH1cIiBkYXRhLXBsYWNlaG9sZGVyPVwidGl0bGVcIiBkYXRhLWlzLWhpZGRlbj1cIiR7Qm9vbGVhbihcbiAgICB0b2RvXG4gICl9XCI+JHt0b2RvID8gdG9kby50aXRsZSA6IFwiXCJ9PC9oMz5cbiAgPGJ1dHRvbiBjbGFzcz1cInZpZXctZGV0YWlscy1idG5cIj48aW1nIHNyYz1cIiR7XG4gICAgdG9kbyA/IFNob3dJY29uIDogSGlkZUljb25cbiAgfVwiIGFsdD1cIiR7dG9kbyA/IFwiU2hvdyBEZXRhaWxzXCIgOiBcIkhpZGUgZGV0YWlsc1wifVwiPjwvYnV0dG9uPlxuYDtcbiAgcmV0dXJuIHRvRG9IdG1sO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdHMgPSBmdW5jdGlvbiBnZXRQcm9qZWN0cyh0b0RvRWxlbWVudCkge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gW1xuICAgIC4uLnRvRG9FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXNlbGVjdGlvblwiKSxcbiAgXTtcblxuICBjb25zdCBwcm9qZWN0TmFtZXMgPSBwcm9qZWN0RWxlbWVudHMubWFwKFxuICAgIChwcm9qZWN0RWxlbWVudCkgPT4gcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnRcbiAgKTtcbiAgcmV0dXJuIHByb2plY3ROYW1lcztcbn07XG5cbmNvbnN0IGdldERhdGUgPSBmdW5jdGlvbiBnZXREYXRlKGRhdGVDb250cm9sKSB7XG4gIGxldCBkYXRlID0gbnVsbDtcbiAgaWYgKGRhdGVDb250cm9sPy52YWx1ZSkgZGF0ZSA9IG5ldyBEYXRlKGRhdGVDb250cm9sLnZhbHVlQXNOdW1iZXIpO1xuICByZXR1cm4gZGF0ZTtcbn07XG5cbmNvbnN0IHNhdmVPbkJsdXJPcklucHV0ID0gZnVuY3Rpb24gc2F2ZU9uQmx1cih0b2RvRWxlbWVudHMsIHNhdmUpIHtcbiAgY29uc3QgeyB0b0RvQ29udGFpbmVyLCBkZXNjcmlwdGlvbkVsZW1lbnQsIGNvbnRyb2xzRWxlbWVudCB9ID0gdG9kb0VsZW1lbnRzO1xuICBjb25zdCB0aXRsZUVsZW1lbnQgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdG9kb1wiKTtcblxuICBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIHNhdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBlbGVtZW50Q29weSA9IGVsZW1lbnQ7XG4gICAgZWxlbWVudENvcHkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Q29weS50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBlbGVtZW50Q29weS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgICAgc2F2ZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBkYXRlQ29udHJvbCA9IGNvbnRyb2xzRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICBkYXRlQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBzYXZlKCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2F2ZVRvRG8gPSBmdW5jdGlvbiBzYXZlVG9Ebyh0b0RvQ29udGFpbmVyLCBoYW5kbGVycykge1xuICBjb25zdCBbdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnRdID0gW1xuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpLFxuICAgIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvbi10b2RvXCIpLFxuICBdO1xuICBpZiAodGl0bGVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBlZGl0ZWRUb0RvID0geyB0aXRsZTogdGl0bGVFbGVtZW50LnRleHRDb250ZW50IH07XG4gIGlmIChkZXNjcmlwdGlvbkVsZW1lbnQpIHtcbiAgICBlZGl0ZWRUb0RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50O1xuICB9XG4gIGlmICh0b0RvQ29udGFpbmVyLmRhdGFzZXQuaWQpIHtcbiAgICBlZGl0ZWRUb0RvLmlkID0gdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkO1xuICB9XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHModG9Eb0NvbnRhaW5lcik7XG4gIGlmIChwcm9qZWN0cyAhPT0gbnVsbCkge1xuICAgIGVkaXRlZFRvRG8ucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuICBjb25zdCBkYXRlSW5wdXQgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XG4gIGlmIChkYXRlSW5wdXQpIHtcbiAgICBlZGl0ZWRUb0RvLmRhdGUgPSBnZXREYXRlKGRhdGVJbnB1dCk7XG4gIH1cbiAgY29uc3QgbmV3SWQgPSBoYW5kbGVycy5oYW5kbGVFZGl0VG9EbyhlZGl0ZWRUb0RvKTtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lckNvcHkgPSB0b0RvQ29udGFpbmVyO1xuICB0b0RvQ29udGFpbmVyQ29weS5kYXRhc2V0LmlkID0gbmV3SWQ7XG59O1xuXG5jb25zdCBjcmVhdGVUb0RvQ29udGFpbmVyID0gZnVuY3Rpb24gY3JlYXRlVG9Eb0NvbnRhaW5lcihcbiAgdG9kbyxcbiAgaXNDb21wbGV0ZWQsXG4gIGRlc2NyaXB0aW9uRWxlbWVudCxcbiAgY29udHJvbHNFbGVtZW50XG4pIHtcbiAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkID0gdG9kbz8uaWQgPz8gXCJcIjtcbiAgdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlzSGlkZGVuID0gQm9vbGVhbih0b2RvKTtcbiAgY29uc3QgdG9Eb0hlYWRlckh0bWwgPSBnZW5lcmF0ZVRvRG9IZWFkZXJIdG1sKHRvZG8sIGlzQ29tcGxldGVkKTtcbiAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHRvRG9IZWFkZXJIdG1sKTtcblxuICBjb25zdCB0aXRsZSA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpO1xuICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGlmICh0aXRsZS50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghdG9kbykge1xuICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY29udHJvbHNFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0b0RvQ29udGFpbmVyO1xufTtcblxuY29uc3QgZG9PbkNvbXBsZXRlVG9EbyA9IGZ1bmN0aW9uIGRvT25Db21wbGV0ZVRvRG8odG9Eb0NvbnRhaW5lciwgaGFuZGxlcnMpIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGUtdG9kby1jaGVja2JveFwiKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXRvRG9Db250YWluZXIuZGF0YXNldC5pZCkge1xuICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlcnMuaGFuZGxlQ29tcGxldGVUb0RvKHRvRG9Db250YWluZXIuZGF0YXNldC5pZCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2VuZXJhdGVEZXNjcmlwdGlvbkVsZW1lbnQgPSBmdW5jdGlvbiBnZW5lcmF0ZURlc2NyaXB0aW9uRWxlbWVudCh0b0RvKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tdG9kb1wiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50IGgyLnByb2plY3QtdGl0bGVcIlxuICApLnRleHRDb250ZW50O1xuICBpZiAocHJvamVjdFRpdGxlICE9PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgZGVzY3JpcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIH1cbiAgZGVzY3JpcHRpb25FbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIgPSBcImRlc2NyaXB0aW9uLi4uXCI7XG4gIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRvRG8gPyB0b0RvLmRlc2NyaXB0aW9uIDogXCJcIjtcblxuICBkZXNjcmlwdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbkVsZW1lbnQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUNvbnRyb2xzRWxlbWVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlQ29udHJvbHNFbGVtZW50KFxuICB0b0RvLFxuICBoYW5kbGVyc1xuKSB7XG4gIGNvbnN0IGlzQ29tcGxldGVkID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtaGVhZGVyIC5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50ID09PVxuICAgIFwiY29tcGxldGVkXCI7XG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udHJvbHMuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udHJvbHMtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250cm9sc0lubmVySHRtbCA9IGBcbiAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9XCJcIiAke2lzQ29tcGxldGVkID8gXCJyZWFkb25seVwiIDogXCJcIn0vPlxuICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0cy1idG4gdG9kby1jb250cm9sc1wiPlxuICAgICAgPGltZyBzcmM9XCIke1Byb2plY3RzSWNvbn1cIiBhbHQ9XCJTaG93IHByb2plY3RzXCI+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS10b2RvLWJ0biB0b2RvLWNvbnRyb2xzXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7VHJhc2hJY29ufVwiIGFsdD1cIkRlbGV0ZSB0by1kb1wiPlxuICAgIDwvYnV0dG9uPlxuICBgO1xuICBjb250cm9scy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGNvbnRyb2xzSW5uZXJIdG1sKTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbnRlbnQgLnByb2plY3QtdGl0bGVcIlxuICApLnRleHRDb250ZW50O1xuICBpZiAocHJvamVjdFRpdGxlID09PSBcInRvZGF5XCIgfHwgcHJvamVjdFRpdGxlID09PSBcInNvbWVkYXlcIikge1xuICAgIGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgaWYgKHRvRG8/LmRhdGUpIHtcbiAgICBkYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSh0b0RvLmRhdGUpO1xuICB9XG5cbiAgY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtdG9kby1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGNvbnRyb2xzLmNsb3Nlc3QoXCJsaS50b2RvXCIpO1xuICAgIGlmICghdG9Eb0NvbnRhaW5lcikgcmV0dXJuO1xuICAgIGhhbmRsZXJzLmhhbmRsZURlbGV0ZVRvRG8odG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkLCBoYW5kbGVycyk7XG4gICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRyb2xzO1xufTtcblxuY29uc3Qgc2hvd0RldGFpbHMgPSBmdW5jdGlvbiBzaG93RGV0YWlscyh0b2RvRWxlbWVudHMpIHtcbiAgY29uc3QgeyB0b0RvQ29udGFpbmVyLCBkZXNjcmlwdGlvbkVsZW1lbnQsIGNvbnRyb2xzRWxlbWVudCB9ID0gdG9kb0VsZW1lbnRzO1xuICBpZiAodG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlzSGlkZGVuICE9PSBcInRydWVcIikgcmV0dXJuO1xuICB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudmlldy1kZXRhaWxzLWJ0biBpbWdcIikuc3JjID0gSGlkZUljb247XG4gIHRvRG9Db250YWluZXIuZGF0YXNldC5pc0hpZGRlbiA9IFwiZmFsc2VcIjtcbiAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY29udHJvbHNFbGVtZW50KTtcbiAgZGVzY3JpcHRpb25FbGVtZW50LmZvY3VzKCk7XG59O1xuXG5jb25zdCBoaWRlRGV0YWlscyA9IGZ1bmN0aW9uIGhpZGVEZXRhaWxzKHRvZG9FbGVtZW50cywgc2F2ZSkge1xuICBjb25zdCB7XG4gICAgdG9Eb0NvbnRhaW5lcixcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQsXG4gICAgY29udHJvbHNFbGVtZW50LFxuICAgIHByb2plY3RzRWxlbWVudCxcbiAgfSA9IHRvZG9FbGVtZW50cztcbiAgc2F2ZSgpO1xuICB0b0RvQ29udGFpbmVyLmRhdGFzZXQuaXNIaWRkZW4gPSBcInRydWVcIjtcbiAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnZpZXctZGV0YWlscy1idG4gaW1nXCIpLnNyYyA9IFNob3dJY29uO1xuICBbZGVzY3JpcHRpb25FbGVtZW50LCBjb250cm9sc0VsZW1lbnQsIHByb2plY3RzRWxlbWVudF0uZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICBlbGVtZW50LnJlbW92ZSgpXG4gICk7XG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCJcbiAgKTtcbiAgaWYgKGV4aXN0aW5nUHJvamVjdHNDb250YWluZXIpIHtcbiAgICBleGlzdGluZ1Byb2plY3RzQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCBkb09uU2hvd09ySGlkZURldGFpbHMgPSBmdW5jdGlvbiBkb09uU2hvd09ySGlkZURldGFpbHMoXG4gIHRvZG9FbGVtZW50cyxcbiAgc2F2ZVxuKSB7XG4gIGNvbnN0IHsgdG9Eb0NvbnRhaW5lciB9ID0gdG9kb0VsZW1lbnRzO1xuICBjb25zdCBzaG93SGlkZUJ0biA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi52aWV3LWRldGFpbHMtYnRuXCIpO1xuICBzaG93SGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0b0RvQ29udGFpbmVyLmRhdGFzZXQuaXNIaWRkZW4gPT09IFwidHJ1ZVwiKSB7XG4gICAgICBzaG93RGV0YWlscyh0b2RvRWxlbWVudHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaWRlRGV0YWlscyh0b2RvRWxlbWVudHMsIHNhdmUpO1xuICB9KTtcbiAgdG9Eb0NvbnRhaW5lclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRvZG9cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNob3dEZXRhaWxzKHRvZG9FbGVtZW50cyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBkb09uU2hvd1Byb2plY3RzID0gZnVuY3Rpb24gZG9PblNob3dQcm9qZWN0cyh0b2RvRWxlbWVudHMsIHNhdmUpIHtcbiAgY29uc3QgeyB0b0RvQ29udGFpbmVyLCBjb250cm9sc0VsZW1lbnQsIHByb2plY3RzRWxlbWVudCB9ID0gdG9kb0VsZW1lbnRzO1xuICBjb25zdCBzaG93UHJvamVjdHNCdG4gPSBjb250cm9sc0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1idG5cIik7XG4gIHNob3dQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpKSB7XG4gICAgICBzYXZlKCk7XG4gICAgICBwcm9qZWN0c0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHByb2plY3RzRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7Kn0gdG9kb1xuICogQHBhcmFtIHsqfSBoYW5kbGVEZWxldGVUb0RvXG4gKiBAcGFyYW0geyp9IGhhbmRsZUVkaXRUb0RvXG4gKiBAcGFyYW0geyp9IGhhbmRsZUNvbXBsZXRlVG9Eb1xuICogQHJldHVybiB7SFRNTEVsZW1lbnQ/fSBUby1EbyBDb250YWluZXIgZWxlbWVudFxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUb0RvRWxlbWVudChoYW5kbGVycywgdG9kbyA9IG51bGwpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50IC5wcm9qZWN0LXRpdGxlXCJcbiAgKS50ZXh0Q29udGVudDtcbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBwcm9qZWN0VGl0bGUgPT09IFwiY29tcGxldGVkXCI7XG4gIGlmIChpc0NvbXBsZXRlZCAmJiAhdG9kbykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGdlbmVyYXRlRGVzY3JpcHRpb25FbGVtZW50KHRvZG8pO1xuICBjb25zdCBjb250cm9sc0VsZW1lbnQgPSBnZW5lcmF0ZUNvbnRyb2xzRWxlbWVudCh0b2RvLCBoYW5kbGVycyk7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBjcmVhdGVUb0RvQ29udGFpbmVyKFxuICAgIHRvZG8sXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgZGVzY3JpcHRpb25FbGVtZW50LFxuICAgIGNvbnRyb2xzRWxlbWVudFxuICApO1xuICBjb25zdCBzYXZlID0gc2F2ZVRvRG8uYmluZChudWxsLCB0b0RvQ29udGFpbmVyLCBoYW5kbGVycyk7XG4gIGNvbnN0IHRvZG9FbGVtZW50cyA9IHtcbiAgICB0b0RvQ29udGFpbmVyLFxuICAgIGRlc2NyaXB0aW9uRWxlbWVudCxcbiAgICBjb250cm9sc0VsZW1lbnQsXG4gICAgcHJvamVjdHNFbGVtZW50OiBnZW5lcmF0ZVByb2plY3RTZWxlY3Rpb25Db250YWluZXIodG9kbz8ucHJvamVjdHMsIHNhdmUpLFxuICB9O1xuICBkb09uQ29tcGxldGVUb0RvKHRvRG9Db250YWluZXIsIGhhbmRsZXJzKTtcbiAgZG9PblNob3dPckhpZGVEZXRhaWxzKHRvZG9FbGVtZW50cywgc2F2ZSk7XG4gIGRvT25TaG93UHJvamVjdHModG9kb0VsZW1lbnRzLCBzYXZlKTtcbiAgc2F2ZU9uQmx1ck9ySW5wdXQodG9kb0VsZW1lbnRzLCBzYXZlKTtcblxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vaW1ncy9kZWxldGUtcHJvamVjdC5zdmdcIjtcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIi4vaW1ncy9pbmJveC5zdmdcIjtcbmltcG9ydCBUb2RheUljb24gZnJvbSBcIi4vaW1ncy90b2RheS5zdmdcIjtcbmltcG9ydCBTb21lZGF5SWNvbiBmcm9tIFwiLi9pbWdzL3NvbWVkYXkuc3ZnXCI7XG5pbXBvcnQgQW55dGltZUljb24gZnJvbSBcIi4vaW1ncy9hbnl0aW1lLnN2Z1wiO1xuaW1wb3J0IENvbXBsZXRlZEljb24gZnJvbSBcIi4vaW1ncy9jb21wbGV0ZWQuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVmlldyhcbiAgaGFuZGxlUHJvamVjdENsaWNrLFxuICBoYW5kbGVEZWxldGVQcm9qZWN0T25DbGlja1xuKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS50ZXh0Q29udGVudCA9IFwiVE8gRE9cIjtcblxuICBjb25zdCB2aWV3SHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIiBpZD1cImluYm94XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtJbmJveEljb259XCIgYWx0PVwiSW5ib3hcIj4gPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj5pbmJveDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiPlxuICAgICAgPGltZyBzcmM9XCIke1RvZGF5SWNvbn1cIiBhbHQ9XCJUb2RheVwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPnRvZGF5PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7U29tZWRheUljb259XCIgYWx0PVwiU29tZWRheVwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPnNvbWVkYXk8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiIGlkPVwiYW55dGltZVwiPlxuICAgICAgPGltZyBzcmM9XCIke0FueXRpbWVJY29ufVwiIGFsdD1cIkFueXRpbWVcIj4gPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj5hbnl0aW1lPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCIgaWQ9XCJjb21wbGV0ZWQtcHJvamVjdFwiPlxuICAgICAgPGltZyBzcmM9XCIke0NvbXBsZXRlZEljb259XCIgYWx0PVwiQ29tcGxldGVkXCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+Y29tcGxldGVkPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImFkZC1wcm9qZWN0LWJ0blwiPk5ldyBQcm9qZWN0PC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwidXNlci1wcm9qZWN0cy1jb250YWluZXJcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPmluYm94PC9oMj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0LWJ0blwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHtUcmFzaEljb259XCIgYWx0PVwiRGVsZXRlIHByb2plY3RcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLXRvZG8tYnRuXCI+TmV3IFRvLURvPC9idXR0b24+XG4gICAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmlubmVySFRNTCA9IHZpZXdIdG1sO1xuICBjb25zdCBwcm9qZWN0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9zLXByb2plY3RcIildO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKFxuICAgICAgICBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudC1oZWFkZXI+LmRlbGV0ZS1wcm9qZWN0LWJ0blwiXG4gICk7XG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29udGVudC1oZWFkZXI+LnByb2plY3QtdGl0bGVcIlxuICAgICkudGV4dENvbnRlbnQ7XG4gICAgaGFuZGxlRGVsZXRlUHJvamVjdE9uQ2xpY2socHJvamVjdFRpdGxlKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=