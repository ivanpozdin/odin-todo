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








const fixedProjects = ["inbox", "today", "someday", "anytime"];
const state = new _model_state_js__WEBPACK_IMPORTED_MODULE_0__["default"](fixedProjects);

const isDateToday = function (date) {
  if (!date) return false;
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

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
  state.addProject(projectName);
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.userProjectNames, handleProjectClick);
};

const handleEditToDo = function (toDoEditedProperties) {
  const toDoId = state.editToDo(toDoEditedProperties);
  const isTodayChanged =
    state.currentProject === "today" &&
    "date" in toDoEditedProperties &&
    !isDateToday(new Date(toDoEditedProperties.date));
  const isNotComputedProject = !["today", "someday", "anytime"].includes(
    state.currentProject
  );
  const wasCurrentProjectDeleted = !state
    .getToDoProjectsById(toDoId)
    .includes(state.currentProject);
  if (isTodayChanged || (isNotComputedProject && wasCurrentProjectDeleted)) {
    (0,_view_allToDosInProject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
      state.currentProject,
      state.getAllToDosInProject(),
      handleDeleteToDo,
      handleEditToDo,
      handleCompleteToDo
    );
  }
  (0,_view_projectsView_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.userProjectNames, handleProjectClick);
  return toDoId;
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

  addToDo(toDoProperties) {
    if (this.#currentProject === "completed") return;

    let projectWithCurrent = [this.currentProject];
    if (toDoProperties.projects) {
      projectWithCurrent = [
        ...new Set(projectWithCurrent.concat(toDoProperties.projects)),
      ];
    }
    projectWithCurrent = projectWithCurrent.filter(
      (project) => project === "inbox" || !this.#fixedProjects.includes(project)
    );

    toDoProperties.projects = projectWithCurrent;

    const toDo = (0,_toDo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(toDoProperties);

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

    const todos = this.#projects[this.#currentProject].map(
      (toDoId) => this.#toDos[toDoId]
    );
    return todos;
  }

  editToDo(toDoEditedProperties) {
    if (this.#currentProject === "completed") {
      return;
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
/* harmony export */   "default": () => (/* binding */ generateProjectSelectionContainer)
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






const generateToDoHeaderHtml = function (todo, isCompleted) {
  const toDoHtml = `
  <input type="checkbox" ${
    isCompleted ? "checked" : ""
  } class="complete-todo-checkbox" />
  <h3 class="title-todo" contenteditable="true" data-placeholder="title" data-is-hidden="${Boolean(
    todo
  )}">${todo ? todo.title : ""}</h3>
  <button class="view-details-btn"><img src="${
    todo ? _imgs_show_details_svg__WEBPACK_IMPORTED_MODULE_4__ : _imgs_hide_details_svg__WEBPACK_IMPORTED_MODULE_3__
  }" alt="${todo ? "Show Details" : "Hide details"}"></button>
`;
  return toDoHtml;
};

const getProjects = function (toDoElement) {
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

const getDate = function (dateControl) {
  let date = null;
  if (dateControl?.value) date = new Date(dateControl.valueAsNumber);
  return date;
};

const saveOnBlur = function (todoElements, save) {
  const { toDoContainer, descriptionElement, controlsElement } = todoElements;
  const titleElement = toDoContainer.querySelector(".title-todo");

  [titleElement, descriptionElement].forEach((element) => {
    element.addEventListener("blur", () => {
      save();
    });
    element.addEventListener("input", () => {
      if (element.textContent === "") {
        element.innerHTML = "";
      }
    });
  });

  const dateControl = controlsElement.querySelector('input[type="date"]');
  dateControl.addEventListener("change", () => {
    save();
  });
};

const saveToDo = function (toDoContainer, handleEditToDo) {
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
  const newId = handleEditToDo(editedToDo);
  toDoContainer.dataset.id = newId;
};

const createToDoContainer = function (
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
    if (title.textContent == "") {
      title.innerHTML = "";
    }
  });

  if (!todo) {
    toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
    toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  }

  return toDoContainer;
};

const doOnCompleteToDo = function (toDoContainer, handleCompleteToDo) {
  const checkbox = toDoContainer.querySelector(".complete-todo-checkbox");
  checkbox.addEventListener("click", () => {
    if (!toDoContainer.dataset.id) {
      toDoContainer.remove();
      return;
    }
    handleCompleteToDo(toDoContainer.dataset.id);
  });
};

const generateDescriptionElement = function (toDo) {
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
    if (descriptionElement.textContent == "") {
      descriptionElement.innerHTML = "";
    }
  });

  return descriptionElement;
};

const generateControlsElement = function (
  toDo,
  handleDeleteToDo,
  toDoContainer
) {
  const controls = document.createElement("div");
  controls.classList.add("todo-controls-container");
  const controlsInnerHtml = `
  <input type="date" value="" />
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
    toDoContainer = controls.closest("li.todo");
    if (!toDoContainer) return;
    handleDeleteToDo(toDoContainer.dataset.id);
    toDoContainer.remove();
  });

  return controls;
};

const showDetails = function (todoElements) {
  const { toDoContainer, descriptionElement, controlsElement } = todoElements;
  if (toDoContainer.dataset.isHidden !== "true") return;
  toDoContainer.querySelector(".view-details-btn img").src = _imgs_hide_details_svg__WEBPACK_IMPORTED_MODULE_3__;
  toDoContainer.dataset.isHidden = "false";
  toDoContainer.insertAdjacentElement("beforeend", descriptionElement);
  toDoContainer.insertAdjacentElement("beforeend", controlsElement);
  descriptionElement.focus();
};

const hideDetails = function (todoElements, save) {
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

const doOnShowOrHideDetails = function (todoElements, save) {
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

const doOnShowProjects = function (todoElements, save) {
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
  const descriptionElement = generateDescriptionElement(todo);
  const controlsElement = generateControlsElement(todo, handleDeleteToDo);
  const toDoContainer = createToDoContainer(
    todo,
    isCompleted,
    descriptionElement,
    controlsElement
  );
  const save = saveToDo.bind(null, toDoContainer, handleEditToDo);
  const todoElements = {
    toDoContainer,
    descriptionElement,
    controlsElement,
    projectsElement: (0,_toDoProjectSectionView_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todo?.projects, save),
  };
  doOnCompleteToDo(toDoContainer, handleCompleteToDo);
  if (isCompleted) return toDoContainer;
  doOnShowOrHideDetails(todoElements, save);
  doOnShowProjects(todoElements, save);
  saveOnBlur(todoElements, save);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixvREFBSTs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0Q7O0FBRWpDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmdEO0FBQ2pDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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UmtEO0FBQ1Q7QUFDQTtBQUNJO0FBQ0E7QUFDSTs7QUFFbEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVMsQ0FBQztBQUM5QjtBQUNBO0FBQ0Esa0JBQWtCLDRDQUFTLENBQUM7QUFDNUI7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBVyxDQUFDO0FBQzlCO0FBQ0E7QUFDQSxrQkFBa0IsOENBQVcsQ0FBQztBQUM5QjtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFhLENBQUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFTLENBQUM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbW9kZWwvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL21vZGVsL3RvRG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3ZpZXcvYWRkaW5nTmV3VG9Eby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy9hbGxUb0Rvc0luUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L3Byb2plY3RzVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvdmlldy90b0RvUHJvamVjdFNlY3Rpb25WaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L3RvRG9WaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy92aWV3L3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiAjZjNmNGY2O1xuICAtLWFjdGlvbi1idG4tY29sb3I6ICMwYmE2ZmY7XG4gIC0tYWN0aW9uLWJ0bi1vbi1ob3Zlci1jb2xvcjogIzBiYTZmZmJlO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuICAgIEhlbHZldGljYSwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSSBFbW9qaVwiLFxuICAgIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG59XG4uc2lkZWJhciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4udXNlci1wcm9qZWN0cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbn1cblxuI2NvbXBsZXRlZC1wcm9qZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuM3JlbSAwO1xuICBib3JkZXItdG9wOiAwLjE1cmVtIHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgIzAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvZG9zLXByb2plY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kby1wcm9qZWN0LXRpdGxlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50b2Rvcy1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudCB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4udG9kby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4udG9kbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA4MGZyIDEwZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgcm93LWdhcDogMXJlbTtcbn1cbi5jb21wbGV0ZS10b2RvLWNoZWNrYm94IHtcbiAgZ3JpZC1hcmVhOiAxLyAxLzIvIDI7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi50aXRsZS10b2RvIHtcbiAgZ3JpZC1hcmVhOiAxLyAyLzIvIDM7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZpZXctZGV0YWlscy1idG4ge1xuICBncmlkLWFyZWE6IDEvIDMvMi8gNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLnZpZXctZGV0YWlscy1idG4gaW1nIHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uZGVzY3JpcHRpb24tdG9kbyB7XG4gIGdyaWQtYXJlYTogMi8gMi8zLyAzO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMDtcbn1cblxuI2FkZC1wcm9qZWN0LWJ0bixcbiNhZGQtdG9kby1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWJ0bi1jb2xvcik7XG59XG5cbiNhZGQtcHJvamVjdC1idG46Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcbn1cblxuI2FkZC10b2RvLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuI2FkZC10b2RvLWJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG4jYWRkLXRvZG8tYnRuOmhvdmVyLFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGlvbi1idG4tb24taG92ZXItY29sb3IpO1xufVxuXG4jbmV3LXByb2plY3QtaW5wdXQtc2lkZWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50aXRsZS10b2RvOmVtcHR5OmJlZm9yZSxcbi5kZXNjcmlwdGlvbi10b2RvOmVtcHR5OmJlZm9yZSxcbiNuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyOmVtcHR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZGVzY3JpcHRpb24tdG9kbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kby1jb250cm9scy1jb250YWluZXIge1xuICBncmlkLWFyZWE6IDIvIDMvMy8gNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4udG9kby1jb250cm9scyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBzZWxmLWVuZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4udG9kby1jb250cm9scyBpbWcsXG4uY29udGVudC1oZWFkZXIgaW1nLFxuLnRvZG9zLXByb2plY3QgaW1nIHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5kZWxldGUtcHJvamVjdC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyLFxuLnRvZG8tY29udHJvbHM6aG92ZXIsXG4udmlldy1kZXRhaWxzLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4jYWRkLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuID4gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5wcm9qZWN0LXNlbGVjdGlvbiB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuIHtcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXByb2plY3QtdG8tdG9kby1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggIzljYTNhZiBzb2xpZDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG4gaW1nIHtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTRmO1xufVxuXG4ub25lLXByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMjU1LCAyMTIsIDAuNDg1KTtcbn1cblxuLnByb2plY3Qtc2VsZWN0aW9uOnJlYWQtd3JpdGU6Zm9jdXMsXG4udGl0bGUtdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxuLmRlc2NyaXB0aW9uLXRvZG86cmVhZC13cml0ZTpmb2N1cyxcbmRpdi50b2Rvcy1wcm9qZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLCtCQUErQjtFQUMvQjs7cUJBRW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBOztFQUVFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1zaWRlYmFyLWJnLWNvbG9yOiAjZjNmNGY2O1xcbiAgLS1hY3Rpb24tYnRuLWNvbG9yOiAjMGJhNmZmO1xcbiAgLS1hY3Rpb24tYnRuLW9uLWhvdmVyLWNvbG9yOiAjMGJhNmZmYmU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuLnNpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnLWNvbG9yKTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnVzZXItcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2NvbXBsZXRlZC1wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4zcmVtIDA7XFxuICBib3JkZXItdG9wOiAwLjE1cmVtIHNvbGlkICMwMDA7XFxuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkICMwMDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udG9kb3MtcHJvamVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tcHJvamVjdC10aXRsZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kb3MtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA4MGZyIDEwZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbHVtbi1nYXA6IDAuNXJlbTtcXG4gIHJvdy1nYXA6IDFyZW07XFxufVxcbi5jb21wbGV0ZS10b2RvLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogMS8gMS8yLyAyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnRpdGxlLXRvZG8ge1xcbiAgZ3JpZC1hcmVhOiAxLyAyLzIvIDM7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi52aWV3LWRldGFpbHMtYnRuIHtcXG4gIGdyaWQtYXJlYTogMS8gMy8yLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLnZpZXctZGV0YWlscy1idG4gaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRvZG8ge1xcbiAgZ3JpZC1hcmVhOiAyLyAyLzMvIDM7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuLFxcbiNhZGQtdG9kby1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aW9uLWJ0bi1jb2xvcik7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxufVxcblxcbiNhZGQtdG9kby1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4jYWRkLXRvZG8tYnRuOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbiNhZGQtdG9kby1idG46aG92ZXIsXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpb24tYnRuLW9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWlucHV0LXNpZGViYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi50aXRsZS10b2RvOmVtcHR5OmJlZm9yZSxcXG4uZGVzY3JpcHRpb24tdG9kbzplbXB0eTpiZWZvcmUsXFxuI25ldy1wcm9qZWN0LWlucHV0LXNpZGViYXI6ZW1wdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XFxuICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXRvZG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLWNvbnRyb2xzLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIvIDMvMy8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLWVuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tY29udHJvbHMgaW1nLFxcbi5jb250ZW50LWhlYWRlciBpbWcsXFxuLnRvZG9zLXByb2plY3QgaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIsXFxuLnRvZG8tY29udHJvbHM6aG92ZXIsXFxuLnZpZXctZGV0YWlscy1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZy1jb2xvcik7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbiNhZGQtcHJvamVjdC1zZWxlY3Rpb24tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMy8yLzQvMztcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC10by10b2RvLWJ0biA+IGltZyB7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC10by10b2RvLWJ0biB7XFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmctY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggIzljYTNhZiBzb2xpZDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0biB7XFxuICBwYWRkaW5nOiAwLjM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtaW4tcHJvamVjdC1zZWxlY3Rpb24tYnRuIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1pbi1wcm9qZWN0LXNlbGVjdGlvbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTRmO1xcbn1cXG5cXG4ub25lLXByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAyNTUsIDIxMiwgMC40ODUpO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rpb246cmVhZC13cml0ZTpmb2N1cyxcXG4udGl0bGUtdG9kbzpyZWFkLXdyaXRlOmZvY3VzLFxcbi5kZXNjcmlwdGlvbi10b2RvOnJlYWQtd3JpdGU6Zm9jdXMsXFxuZGl2LnRvZG9zLXByb2plY3Qge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi9tb2RlbC9zdGF0ZS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBnZW5lcmF0ZVZpZXcgZnJvbSBcIi4vdmlldy92aWV3LmpzXCI7XG5pbXBvcnQgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdCBmcm9tIFwiLi92aWV3L2FsbFRvRG9zSW5Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8gZnJvbSBcIi4vdmlldy9hZGRpbmdOZXdUb0RvLmpzXCI7XG5pbXBvcnQgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcgZnJvbSBcIi4vdmlldy9wcm9qZWN0c1ZpZXcuanNcIjtcbmltcG9ydCBoYW5kbGVHZW5lcmF0aW5nTmV3UHJvamVjdCBmcm9tIFwiLi92aWV3L25ld1Byb2plY3QuanNcIjtcblxuY29uc3QgZml4ZWRQcm9qZWN0cyA9IFtcImluYm94XCIsIFwidG9kYXlcIiwgXCJzb21lZGF5XCIsIFwiYW55dGltZVwiXTtcbmNvbnN0IHN0YXRlID0gbmV3IFN0YXRlKGZpeGVkUHJvamVjdHMpO1xuXG5jb25zdCBpc0RhdGVUb2RheSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gIGlmICghZGF0ZSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIHJldHVybiAoXG4gICAgZGF0ZS5nZXREYXRlKCkgPT09IHRvZGF5LmdldERhdGUoKSAmJlxuICAgIGRhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKVxuICApO1xufTtcblxuY29uc3QgaGFuZGxlUHJvamVjdENsaWNrID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gIGdlbmVyYXRlQWxsVG9Eb3NJblByb2plY3QoXG4gICAgcHJvamVjdE5hbWUsXG4gICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QocHJvamVjdE5hbWUpLFxuICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgaGFuZGxlQ29tcGxldGVUb0RvXG4gICk7XG59O1xuXG5jb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gIHN0YXRlLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoc3RhdGUudXNlclByb2plY3ROYW1lcywgaGFuZGxlUHJvamVjdENsaWNrKTtcbn07XG5cbmNvbnN0IGhhbmRsZUNvbXBsZXRlVG9EbyA9IGZ1bmN0aW9uIChpZCkge1xuICBzdGF0ZS5jb21wbGV0ZVRvRG8oaWQpO1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbn07XG5jb25zdCBoYW5kbGVBZGROZXdQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gIHN0YXRlLmFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuICBnZW5lcmF0ZVByb2plY3RzVmlldyhzdGF0ZS51c2VyUHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xufTtcblxuY29uc3QgaGFuZGxlRWRpdFRvRG8gPSBmdW5jdGlvbiAodG9Eb0VkaXRlZFByb3BlcnRpZXMpIHtcbiAgY29uc3QgdG9Eb0lkID0gc3RhdGUuZWRpdFRvRG8odG9Eb0VkaXRlZFByb3BlcnRpZXMpO1xuICBjb25zdCBpc1RvZGF5Q2hhbmdlZCA9XG4gICAgc3RhdGUuY3VycmVudFByb2plY3QgPT09IFwidG9kYXlcIiAmJlxuICAgIFwiZGF0ZVwiIGluIHRvRG9FZGl0ZWRQcm9wZXJ0aWVzICYmXG4gICAgIWlzRGF0ZVRvZGF5KG5ldyBEYXRlKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzLmRhdGUpKTtcbiAgY29uc3QgaXNOb3RDb21wdXRlZFByb2plY3QgPSAhW1widG9kYXlcIiwgXCJzb21lZGF5XCIsIFwiYW55dGltZVwiXS5pbmNsdWRlcyhcbiAgICBzdGF0ZS5jdXJyZW50UHJvamVjdFxuICApO1xuICBjb25zdCB3YXNDdXJyZW50UHJvamVjdERlbGV0ZWQgPSAhc3RhdGVcbiAgICAuZ2V0VG9Eb1Byb2plY3RzQnlJZCh0b0RvSWQpXG4gICAgLmluY2x1ZGVzKHN0YXRlLmN1cnJlbnRQcm9qZWN0KTtcbiAgaWYgKGlzVG9kYXlDaGFuZ2VkIHx8IChpc05vdENvbXB1dGVkUHJvamVjdCAmJiB3YXNDdXJyZW50UHJvamVjdERlbGV0ZWQpKSB7XG4gICAgZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgICAgc3RhdGUuZ2V0QWxsVG9Eb3NJblByb2plY3QoKSxcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICAgICk7XG4gIH1cbiAgZ2VuZXJhdGVQcm9qZWN0c1ZpZXcoc3RhdGUudXNlclByb2plY3ROYW1lcywgaGFuZGxlUHJvamVjdENsaWNrKTtcbiAgcmV0dXJuIHRvRG9JZDtcbn07XG5cbmNvbnN0IGhhbmRsZURlbGV0ZVRvRG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgc3RhdGUucmVtb3ZlVG9EbyhpZCk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICBnZW5lcmF0ZVZpZXcoaGFuZGxlUHJvamVjdENsaWNrLCBoYW5kbGVEZWxldGVQcm9qZWN0KTtcbiAgaGFuZGxlR2VuZXJhdGluZ05ld1RvRG8oaGFuZGxlRGVsZXRlVG9EbywgaGFuZGxlRWRpdFRvRG8sIGhhbmRsZUNvbXBsZXRlVG9Ebyk7XG4gIGhhbmRsZUdlbmVyYXRpbmdOZXdQcm9qZWN0KGhhbmRsZUFkZE5ld1Byb2plY3QpO1xuICBnZW5lcmF0ZVByb2plY3RzVmlldyhzdGF0ZS51c2VyUHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spO1xuICBnZW5lcmF0ZUFsbFRvRG9zSW5Qcm9qZWN0KFxuICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0LFxuICAgIHN0YXRlLmdldEFsbFRvRG9zSW5Qcm9qZWN0KCksXG4gICAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgKTtcbn07XG5pbml0KCk7XG4iLCJpbXBvcnQgVG9EbyBmcm9tIFwiLi90b0RvLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSB7XG4gICN0b0RvcyA9IHt9O1xuICAjY29tcGxldGVkVG9Eb3MgPSB7fTtcbiAgI3Byb2plY3RzID0ge307XG4gICNjdXJyZW50UHJvamVjdCA9IFwiaW5ib3hcIjtcbiAgI2ZpeGVkUHJvamVjdHM7XG4gIGNvbnN0cnVjdG9yKGZpeGVkUHJvamVjdHMpIHtcbiAgICBmaXhlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+ICh0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFtdKSk7XG4gICAgdGhpcy4jZml4ZWRQcm9qZWN0cyA9IGZpeGVkUHJvamVjdHM7XG4gICAgdGhpcy4jZ2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBzZXQgZml4ZWRQcm9qZWN0cyhwcm9qZWN0c05hbWVzKSB7XG4gICAgdGhpcy4jZml4ZWRQcm9qZWN0cyA9IHByb2plY3RzTmFtZXM7XG4gIH1cblxuICBnZXQgY3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0O1xuICB9XG5cbiAgc2V0IGN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHByb2plY3ROYW1lICYmIHRoaXMuI3Byb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3ROYW1lKSkge1xuICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG4gIH1cblxuICBhZGRUb0RvKHRvRG9Qcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSByZXR1cm47XG5cbiAgICBsZXQgcHJvamVjdFdpdGhDdXJyZW50ID0gW3RoaXMuY3VycmVudFByb2plY3RdO1xuICAgIGlmICh0b0RvUHJvcGVydGllcy5wcm9qZWN0cykge1xuICAgICAgcHJvamVjdFdpdGhDdXJyZW50ID0gW1xuICAgICAgICAuLi5uZXcgU2V0KHByb2plY3RXaXRoQ3VycmVudC5jb25jYXQodG9Eb1Byb3BlcnRpZXMucHJvamVjdHMpKSxcbiAgICAgIF07XG4gICAgfVxuICAgIHByb2plY3RXaXRoQ3VycmVudCA9IHByb2plY3RXaXRoQ3VycmVudC5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdCA9PT0gXCJpbmJveFwiIHx8ICF0aGlzLiNmaXhlZFByb2plY3RzLmluY2x1ZGVzKHByb2plY3QpXG4gICAgKTtcblxuICAgIHRvRG9Qcm9wZXJ0aWVzLnByb2plY3RzID0gcHJvamVjdFdpdGhDdXJyZW50O1xuXG4gICAgY29uc3QgdG9EbyA9IFRvRG8odG9Eb1Byb3BlcnRpZXMpO1xuXG4gICAgdGhpcy4jdG9Eb3NbdG9Eby5pZF0gPSB0b0RvO1xuXG4gICAgcHJvamVjdFdpdGhDdXJyZW50LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0IGluIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnVuc2hpZnQodG9Eby5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XSA9IFt0b0RvLmlkXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gdG9Eby5pZDtcbiAgfVxuXG4gIGdldFRvRG9Qcm9qZWN0c0J5SWQoaWQpIHtcbiAgICBpZiAoIShpZCBpbiB0aGlzLiN0b0RvcykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi50aGlzLiN0b0Rvc1tpZF0ucHJvamVjdHNdO1xuICB9XG5cbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmIChwcm9qZWN0TmFtZSBpbiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgI3JlbW92ZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCkge1xuICAgIGlmICghKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0RvcykpIHJldHVybjtcbiAgICBjb25zdCB0b0RvVG9EZWxldGUgPSB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdO1xuICAgIGRlbGV0ZSB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdO1xuICAgIHRoaXMuI3NldExvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiB0b0RvVG9EZWxldGU7XG4gIH1cblxuICAjcmVtb3ZlVG9Eb0Zyb21BY3RpdmVUb0Rvcyh0b0RvSWQpIHtcbiAgICBpZiAoISh0b0RvSWQgaW4gdGhpcy4jdG9Eb3MpKSByZXR1cm47XG4gICAgdGhpcy4jdG9Eb3NbdG9Eb0lkXS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBkZWxldGVJbmRleCA9IHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLmZpbmRJbmRleChcbiAgICAgICAgKGN1clRvRG9JZCkgPT4gY3VyVG9Eb0lkID09PSB0b0RvSWRcbiAgICAgICk7XG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRvRG9Ub0RlbGV0ZSA9IHRoaXMuI3RvRG9zW3RvRG9JZF07XG4gICAgZGVsZXRlIHRoaXMuI3RvRG9zW3RvRG9JZF07XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRvRG9Ub0RlbGV0ZTtcbiAgfVxuXG4gIHJlbW92ZVRvRG8odG9Eb0lkKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcmVtb3ZlVG9Eb0Zyb21Db21wbGV0ZWQodG9Eb0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuI3JlbW92ZVRvRG9Gcm9tQWN0aXZlVG9Eb3ModG9Eb0lkKTtcbiAgfVxuXG4gIGdldEFsbFRvRG9zSW5Qcm9qZWN0KHByb2plY3QgPSBcIlwiKSB7XG4gICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBwcm9qZWN0LnRyaW0oKSB8fCB0aGlzLiNjdXJyZW50UHJvamVjdDtcbiAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGlmICh0aGlzLiNjdXJyZW50UHJvamVjdCA9PT0gXCJjb21wbGV0ZWRcIikge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy4jY29tcGxldGVkVG9Eb3MpO1xuICAgIH1cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwidG9kYXlcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3RvZGF5VG9Eb3M7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcInNvbWVkYXlcIikge1xuICAgICAgcmV0dXJuIHRoaXMuI3NvbWVkYXlUb0RvcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jY3VycmVudFByb2plY3QgPT09IFwiYW55dGltZVwiKSB7XG4gICAgICByZXR1cm4gdGhpcy4jYW55dGltZVRvRG9zO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9zID0gdGhpcy4jcHJvamVjdHNbdGhpcy4jY3VycmVudFByb2plY3RdLm1hcChcbiAgICAgICh0b0RvSWQpID0+IHRoaXMuI3RvRG9zW3RvRG9JZF1cbiAgICApO1xuICAgIHJldHVybiB0b2RvcztcbiAgfVxuXG4gIGVkaXRUb0RvKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJlbnRQcm9qZWN0ID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdG9Eb0VkaXRlZFByb3BlcnRpZXMuaWQgfHwgISh0b0RvRWRpdGVkUHJvcGVydGllcy5pZCBpbiB0aGlzLiN0b0RvcykpIHtcbiAgICAgIGNvbnN0IG5ld0lkID0gdGhpcy5hZGRUb0RvKHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKTtcbiAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9XG4gICAgY29uc3QgdG9EbyA9IHRoaXMuI3RvRG9zW3RvRG9FZGl0ZWRQcm9wZXJ0aWVzLmlkXTtcbiAgICBpZiAoXCJwcm9qZWN0c1wiIGluIHRvRG9FZGl0ZWRQcm9wZXJ0aWVzKSB7XG4gICAgICBjb25zdCBvbGRQcm9qZWN0cyA9IHRvRG8ucHJvamVjdHM7XG4gICAgICBjb25zdCByZW1vdmVkUHJvamVjdHMgPSBvbGRQcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgIChvbGRQcm9qZWN0KSA9PiAhdG9Eb0VkaXRlZFByb3BlcnRpZXMucHJvamVjdHMuaW5jbHVkZXMob2xkUHJvamVjdClcbiAgICAgICk7XG4gICAgICB0aGlzLiNzYXZlTmV3UHJvamVjdHMoXG4gICAgICAgIG9sZFByb2plY3RzLFxuICAgICAgICB0b0RvRWRpdGVkUHJvcGVydGllcy5wcm9qZWN0cyxcbiAgICAgICAgdG9Eb0VkaXRlZFByb3BlcnRpZXMuaWRcbiAgICAgICk7XG4gICAgICB0aGlzLiNkZWxldGVUb0RvRnJvbUV4Y2x1ZGVkUHJvamVjdHMoXG4gICAgICAgIHJlbW92ZWRQcm9qZWN0cyxcbiAgICAgICAgdG9Eb0VkaXRlZFByb3BlcnRpZXMuaWRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy4jdXBkYXRlVG9Ebyh0b0RvRWRpdGVkUHJvcGVydGllcyk7XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIHRvRG8uaWQ7XG4gIH1cblxuICAjcmVzdG9yZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCkge1xuICAgIGlmICghKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0RvcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9EbyA9IHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF07XG4gICAgZGVsZXRlIHRoaXMuI2NvbXBsZXRlZFRvRG9zW3RvRG9JZF07XG5cbiAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXSA9IHRvRG87XG4gICAgdG9Eby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdCBpbiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS51bnNoaWZ0KHRvRG8uaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0gPSBbdG9Eby5pZF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAjcHV0VG9Eb1RvQ29tcGxldGVkKHRvRG9JZCkge1xuICAgIGlmICh0b0RvSWQgaW4gdGhpcy4jY29tcGxldGVkVG9Eb3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9Eb1RvQ29tcGxldGUgPSB0aGlzLnJlbW92ZVRvRG8odG9Eb0lkKTtcbiAgICB0aGlzLiNjb21wbGV0ZWRUb0Rvc1t0b0RvSWRdID0gdG9Eb1RvQ29tcGxldGU7XG4gIH1cblxuICBjb21wbGV0ZVRvRG8odG9Eb0lkKSB7XG4gICAgaWYgKHRvRG9JZCBpbiB0aGlzLiNjb21wbGV0ZWRUb0Rvcykge1xuICAgICAgdGhpcy4jcmVzdG9yZVRvRG9Gcm9tQ29tcGxldGVkKHRvRG9JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3B1dFRvRG9Ub0NvbXBsZXRlZCh0b0RvSWQpO1xuICAgIH1cbiAgfVxuXG4gICN1cGRhdGVUb0RvKHRvRG8pIHtcbiAgICBpZiAoXCJ0aXRsZVwiIGluIHRvRG8pIHtcbiAgICAgIHRoaXMuI3RvRG9zW3RvRG8uaWRdLnRpdGxlID0gdG9Eby50aXRsZTtcbiAgICB9XG4gICAgaWYgKFwiZGVzY3JpcHRpb25cIiBpbiB0b0RvKSB7XG4gICAgICB0aGlzLiN0b0Rvc1t0b0RvLmlkXS5kZXNjcmlwdGlvbiA9IHRvRG8uZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChcInByb2plY3RzXCIgaW4gdG9Ebykge1xuICAgICAgdGhpcy4jdG9Eb3NbdG9Eby5pZF0ucHJvamVjdHMgPSB0b0RvLnByb2plY3RzO1xuICAgIH1cbiAgICBpZiAoXCJkYXRlXCIgaW4gdG9Ebykge1xuICAgICAgdGhpcy4jdG9Eb3NbdG9Eby5pZF0uZGF0ZSA9IHRvRG8uZGF0ZTtcbiAgICB9XG4gIH1cblxuICAjZGVsZXRlVG9Eb0Zyb21FeGNsdWRlZFByb2plY3RzKHJlbW92ZWRQcm9qZWN0cywgaWQpIHtcbiAgICByZW1vdmVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoKG9sZElkKSA9PiBvbGRJZCA9PT0gaWQpO1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfVxuXG4gICNzYXZlTmV3UHJvamVjdHMob2xkUHJvamVjdHMsIG5ld1Byb2plY3RzLCB0b0RvSWQpIHtcbiAgICBuZXdQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAob2xkUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdCkpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuI3Byb2plY3RzW3Byb2plY3RdKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdLnVuc2hpZnQodG9Eb0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdID0gW3RvRG9JZF07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjc2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy4jdG9Eb3MpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuI3Byb2plY3RzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBcImNvbXBsZXRlZF90b2Rvc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy4jY29tcGxldGVkVG9Eb3MpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwiY3VycmVudF9wcm9qZWN0XCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLiNjdXJyZW50UHJvamVjdClcbiAgICApO1xuICB9XG5cbiAgI2dldExvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IGNvbXBsZXRlZFRvRG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZF90b2Rvc1wiKSk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9wcm9qZWN0XCIpKTtcbiAgICBpZiAodG9kb3MpIHtcbiAgICAgIHRoaXMuI3RvRG9zID0gdG9kb3M7XG4gICAgfVxuICAgIGlmIChwcm9qZWN0cykge1xuICAgICAgdGhpcy4jcHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBpZiAoY29tcGxldGVkVG9Eb3MpIHtcbiAgICAgIHRoaXMuI2NvbXBsZXRlZFRvRG9zID0gY29tcGxldGVkVG9Eb3M7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdDtcbiAgICB9XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUb0RlbGV0ZU5hbWUpIHtcbiAgICBpZiAoIShwcm9qZWN0VG9EZWxldGVOYW1lIGluIHRoaXMuI3Byb2plY3RzKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLiNmaXhlZFByb2plY3RzLmluY2x1ZGVzKHByb2plY3RUb0RlbGV0ZU5hbWUpKSByZXR1cm47XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0RvcykuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgdG9Eby5wcm9qZWN0cyA9IHRvRG8ucHJvamVjdHMuZmlsdGVyKFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdCAhPT0gcHJvamVjdFRvRGVsZXRlTmFtZVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC52YWx1ZXModGhpcy4jY29tcGxldGVkVG9Eb3MpLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICAgIHRvRG8ucHJvamVjdHMgPSB0b0RvLnByb2plY3RzLmZpbHRlcihcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QgIT09IHByb2plY3RUb0RlbGV0ZU5hbWVcbiAgICAgICk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuI3Byb2plY3RzW3Byb2plY3RUb0RlbGV0ZU5hbWVdO1xuICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0ID0gXCJpbmJveFwiO1xuICB9XG5cbiAgZ2V0IHVzZXJQcm9qZWN0TmFtZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuI3Byb2plY3RzKS5maWx0ZXIoKG5hbWUpID0+XG4gICAgICB0aGlzLiNmaXhlZFByb2plY3RzLmV2ZXJ5KChwcm9qZWN0KSA9PiBwcm9qZWN0ICE9PSBuYW1lKVxuICAgICk7XG4gIH1cblxuICBnZXQgI3NvbWVkYXlUb0RvcygpIHtcbiAgICBjb25zdCBzb21lZGF5VG9Eb3MgPSBPYmplY3QudmFsdWVzKHRoaXMuI3RvRG9zKS5maWx0ZXIoKHRvRG8pID0+IHtcbiAgICAgIHJldHVybiB0b0RvLmRhdGU7XG4gICAgfSk7XG4gICAgc29tZWRheVRvRG9zLnNvcnQoKHRvZG9BLCB0b2RvQikgPT4gLXRvZG9BLmlkICsgdG9kb0IuaWQpO1xuICAgIHJldHVybiBzb21lZGF5VG9Eb3M7XG4gIH1cblxuICBnZXQgI2FueXRpbWVUb0RvcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLiN0b0Rvcyk7XG4gIH1cblxuICBnZXQgI3RvZGF5VG9Eb3MoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdG9kYXlUb0RvcyA9IE9iamVjdC52YWx1ZXModGhpcy4jdG9Eb3MpLmZpbHRlcigodG9EbykgPT4ge1xuICAgICAgaWYgKCF0b0RvLmRhdGUpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb0RvRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZGF0ZSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjdXJyZW50VG9Eb0RhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkgJiZcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcbiAgICAgICAgY3VycmVudFRvRG9EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdG9kYXlUb0Rvcy5zb3J0KCh0b2RvQSwgdG9kb0IpID0+IC10b2RvQS5pZCArIHRvZG9CLmlkKTtcbiAgICByZXR1cm4gdG9kYXlUb0RvcztcbiAgfVxuXG4gIG1vdmVUb0RvUHJpb3JpdHlJblByb2plY3RVcCh0b0RvSWQsIHByb2plY3QpIHtcbiAgICBpZiAoIXRoaXMuI3RvRG9zW3RvRG9JZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZlRvRG8gPSB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XS5maW5kSW5kZXgoXG4gICAgICAodG9EbykgPT4gdG9Eby5pZCA9PT0gdG9Eb0lkXG4gICAgKTtcblxuICAgIGlmICghaW5kZXhPZlRvRG8gPz8gaW5kZXhPZlRvRG8gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gLSAxXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICBdID0gW1xuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG9dLFxuICAgICAgdGhpcy4jcHJvamVjdHNbcHJvamVjdF1baW5kZXhPZlRvRG8gLSAxXSxcbiAgICBdO1xuICB9XG5cbiAgbW92ZVRvRG9Qcmlvcml0eUluUHJvamVjdERvd24odG9Eb0lkLCBwcm9qZWN0KSB7XG4gICAgaWYgKCF0aGlzLiN0b0Rvc1t0b0RvSWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZUb0RvID0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0uZmluZEluZGV4KFxuICAgICAgKHRvRG8pID0+IHRvRG8uaWQgPT09IHRvRG9JZFxuICAgICk7XG4gICAgaWYgKCFpbmRleE9mVG9EbyB8fCBpbmRleE9mVG9EbyA9PT0gdGhpcy4jcHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvICsgMV0sXG4gICAgICB0aGlzLiNwcm9qZWN0c1twcm9qZWN0XVtpbmRleE9mVG9Eb10sXG4gICAgXSA9IFtcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvXSxcbiAgICAgIHRoaXMuI3Byb2plY3RzW3Byb2plY3RdW2luZGV4T2ZUb0RvICsgMV0sXG4gICAgXTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Ebyh0b0RvUHJvcGVydGllcykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB0b0RvUHJvcGVydGllcy50aXRsZSA/PyBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiB0b0RvUHJvcGVydGllcy5kZXNjcmlwdGlvbiA/PyBcIlwiLFxuICAgIHByb2plY3RzOiB0b0RvUHJvcGVydGllcy5wcm9qZWN0cyxcbiAgICBkYXRlOiB0b0RvUHJvcGVydGllcy5kZXNjcmlwdGlvbiA/PyBcIlwiLFxuICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgfTtcbn1cbiIsImltcG9ydCBnZW5lcmF0ZVRvRG9FbGVtZW50IGZyb20gXCIuL3RvRG9WaWV3LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUdlbmVyYXRpbmdOZXdUb0RvKFxuICBoYW5kbGVEZWxldGVUb0RvLFxuICBoYW5kbGVFZGl0VG9EbyxcbiAgaGFuZGxlQ29tcGxldGVUb0RvXG4pIHtcbiAgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tYnRuXCIpO1xuICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9Eb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgY29uc3QgdG9Eb0VsZW1lbnQgPSBnZW5lcmF0ZVRvRG9FbGVtZW50KFxuICAgICAgbnVsbCxcbiAgICAgIGhhbmRsZURlbGV0ZVRvRG8sXG4gICAgICBoYW5kbGVFZGl0VG9EbyxcbiAgICAgIGhhbmRsZUNvbXBsZXRlVG9Eb1xuICAgICk7XG4gICAgaWYgKCF0b0RvRWxlbWVudCkgcmV0dXJuO1xuICAgIHRvRG9MaXN0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIHRvRG9FbGVtZW50KTtcbiAgICB0b0RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRvZG9cIikuZm9jdXMoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVUb0RvRWxlbWVudCBmcm9tIFwiLi90b0RvVmlldy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBbGxUb0Rvc0luUHJvamVjdChcbiAgcHJvamVjdE5hbWUsXG4gIHRvZG9zLFxuICBoYW5kbGVEZWxldGVUb0RvLFxuICBoYW5kbGVFZGl0VG9EbyxcbiAgaGFuZGxlQ29tcGxldGVUb0RvXG4pIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudC1oZWFkZXI+LmRlbGV0ZS1wcm9qZWN0LWJ0blwiXG4gICk7XG4gIGlmIChcbiAgICBbXCJhbnl0aW1lXCIsIFwiaW5ib3hcIiwgXCJzb21lZGF5XCIsIFwidG9kYXlcIiwgXCJjb21wbGV0ZWRcIl0uaW5jbHVkZXMocHJvamVjdE5hbWUpXG4gICkge1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1idG5cIik7XG5cbiAgaWYgKHByb2plY3ROYW1lID09PSBcImNvbXBsZXRlZFwiKSB7XG4gICAgbmV3VG9Eb0J0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIG5ld1RvRG9CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICBjb25zdCB0b0RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgdG9Eb0xpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGlmICghdG9kb3MpIHJldHVybjtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvRG9FbGVtZW50ID0gZ2VuZXJhdGVUb0RvRWxlbWVudChcbiAgICAgIHRvZG8sXG4gICAgICBoYW5kbGVEZWxldGVUb0RvLFxuICAgICAgaGFuZGxlRWRpdFRvRG8sXG4gICAgICBoYW5kbGVDb21wbGV0ZVRvRG9cbiAgICApO1xuICAgIHRvRG9MaXN0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdG9Eb0VsZW1lbnQpO1xuICB9KTtcbn1cbiIsImNvbnN0IGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZG9zLXByb2plY3RcIik7XG4gIHByb2plY3RFbGVtZW50LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dC1zaWRlYmFyXCI7XG4gIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIHByb2plY3RFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIgPSBcInByb2plY3QuLi5cIjtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlR2VuZXJhdGluZ05ld1Byb2plY3QoaGFuZGxlcikge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGdlbmVyYXRlTmV3UHJvamVjdEVsZW1lbnQoKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmZvY3VzKCk7XG4gICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gXCJcIikge1xuICAgICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgIH1cbiAgICAgIG5ld1Byb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImNvbnN0IGdlbmVyYXRlT25lUHJvamVjdEVsZW1lbnQgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kb3MtcHJvamVjdFwiKTtcbiAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0c1ZpZXcocHJvamVjdE5hbWVzLCBoYW5kbGVQcm9qZWN0Q2xpY2spIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJvamVjdE5hbWVzLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBnZW5lcmF0ZU9uZVByb2plY3RFbGVtZW50KHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbmV3UHJvamVjdEVsZW1lbnQpO1xuICAgIG5ld1Byb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgQWRkUHJvamVjdEljb24gZnJvbSBcIi4vaW1ncy9hZGQuc3ZnXCI7XG5pbXBvcnQgUmVtb3ZlUHJvamVjdEljb24gZnJvbSBcIi4vaW1ncy9jbG9zZS5zdmdcIjtcblxuY29uc3QgaXNMYXN0UHJvamVjdEVtcHR5ID0gZnVuY3Rpb24gKGFkZFByb2plY3RCdG4pIHtcbiAgY29uc3QgbGFzdFByb2plY3RFbGVtZW50ID0gYWRkUHJvamVjdEJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICByZXR1cm4gKFxuICAgIGxhc3RQcm9qZWN0RWxlbWVudCAmJlxuICAgIGxhc3RQcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VsZWN0aW9uXCIpLnRleHRDb250ZW50ID09PSBcIlwiXG4gICk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0c0NvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdFNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RTZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7QWRkUHJvamVjdEljb259XCIgYWx0PVwiQWRkIHByb2plY3RcIj5gO1xuICBwcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBhZGRQcm9qZWN0QnRuKTtcbiAgcmV0dXJuIHByb2plY3RTZWxlY3Rpb25Db250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVEZWxldGVCdXR0b25Gb3JQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWluLXByb2plY3Qtc2VsZWN0aW9uLWJ0blwiKTtcbiAgZGVsZXRlQnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7UmVtb3ZlUHJvamVjdEljb259XCIgYWx0PVwiUmVtb3ZlIHByb2plY3RcIj5gO1xuICByZXR1cm4gZGVsZXRlQnRuO1xufTtcblxuY29uc3QgaGFuZGxlRGVsZXRpbmdQcm9qZWN0ID0gZnVuY3Rpb24gKFxuICBkZWxldGVQcm9qZWN0QnRuLFxuICBwcm9qZWN0Q29udGFpbmVyLFxuICBzYXZlXG4pIHtcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlKCk7XG4gICAgc2F2ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3RXaGVuRW1wdHlPbkJsdXIgPSBmdW5jdGlvbiAoXG4gIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LFxuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudFxuKSB7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiXCIpXG4gICAgICBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVFbXB0eVByb2plY3RDb250YWluZXJFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RDb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvbmUtcHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpO1xuICByZXR1cm4gbmV3UHJvamVjdENvbnRhaW5lckVsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSA9IFwiXCIpIHtcbiAgY29uc3QgbmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWxlY3Rpb25cIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XG4gIG5ld1Byb2plY3RTZWxlY3Rpb25FbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIHJldHVybiBuZXdQcm9qZWN0U2VsZWN0aW9uRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKHByb2plY3ROYW1lID0gXCJcIiwgc2F2ZSkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRW1wdHlQcm9qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuICBjb25zdCBpbnB1dFByb2plY3RFbGVtZW50ID0gY3JlYXRlTmV3UHJvamVjdFNlbGVjdGlvbkVsZW1lbnQocHJvamVjdE5hbWUpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gY3JlYXRlRGVsZXRlQnV0dG9uRm9yUHJvamVjdCgpO1xuXG4gIGhhbmRsZURlbGV0aW5nUHJvamVjdChkZWxldGVQcm9qZWN0QnRuLCBwcm9qZWN0Q29udGFpbmVyLCBzYXZlKTtcbiAgcmVtb3ZlUHJvamVjdFdoZW5FbXB0eU9uQmx1cihwcm9qZWN0Q29udGFpbmVyLCBpbnB1dFByb2plY3RFbGVtZW50KTtcbiAgaW5wdXRQcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICB9KTtcbiAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wdXRQcm9qZWN0RWxlbWVudCk7XG4gIHByb2plY3RDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlbGV0ZVByb2plY3RCdG4pO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZGluZ05ld1Byb2plY3RUb1VJID0gZnVuY3Rpb24gKHByb2plY3RzQ29udGFpbmVyLCBzYXZlKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChpc0xhc3RQcm9qZWN0RW1wdHkoYWRkUHJvamVjdEJ0bikpIHJldHVybjtcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVGdWxsUHJvamVjdENvbnRhaW5lcihcIlwiLCBzYXZlKTtcbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHByb2plY3RDb250YWluZXIpO1xuICAgIHByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvblwiKS5mb2N1cygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluc2VydFByb2plY3RzVG9Qcm9qZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gKFxuICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgcHJvamVjdHMsXG4gIHNhdmVcbikge1xuICBpZiAoIXByb2plY3RzKSByZXR1cm47XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBwcm9qZWN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmFkZC1wcm9qZWN0LXRvLXRvZG8tYnRuXCJcbiAgKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICBhZGRQcm9qZWN0QnRuLmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIFwiYmVmb3JlYmVnaW5cIixcbiAgICAgIGNyZWF0ZUZ1bGxQcm9qZWN0Q29udGFpbmVyKHByb2plY3QsIHNhdmUpXG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0U2VsZWN0aW9uQ29udGFpbmVyKHRvRG9Qcm9qZWN0cywgc2F2ZSkge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RzQ29udGFpbmVyKCk7XG4gIGNvbnN0IHByb2plY3RzT3JDdXJyZW50UHJvamVjdCA9IHRvRG9Qcm9qZWN0cyA/PyBbXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50IC5wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50LFxuICBdO1xuICBpbnNlcnRQcm9qZWN0c1RvUHJvamVjdENvbnRhaW5lcihcbiAgICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgICBwcm9qZWN0c09yQ3VycmVudFByb2plY3QsXG4gICAgc2F2ZVxuICApO1xuICBoYW5kbGVBZGRpbmdOZXdQcm9qZWN0VG9VSShwcm9qZWN0c0NvbnRhaW5lciwgc2F2ZSk7XG4gIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vaW1ncy90cmFzaC5zdmdcIjtcbmltcG9ydCBQcm9qZWN0c0ljb24gZnJvbSBcIi4vaW1ncy9wcm9qZWN0cy5zdmdcIjtcbmltcG9ydCBnZW5lcmF0ZVByb2plY3RTZWxlY3Rpb25Db250YWluZXIgZnJvbSBcIi4vdG9Eb1Byb2plY3RTZWN0aW9uVmlldy5qc1wiO1xuaW1wb3J0IEhpZGVJY29uIGZyb20gXCIuL2ltZ3MvaGlkZS1kZXRhaWxzLnN2Z1wiO1xuaW1wb3J0IFNob3dJY29uIGZyb20gXCIuL2ltZ3Mvc2hvdy1kZXRhaWxzLnN2Z1wiO1xuXG5jb25zdCBnZW5lcmF0ZVRvRG9IZWFkZXJIdG1sID0gZnVuY3Rpb24gKHRvZG8sIGlzQ29tcGxldGVkKSB7XG4gIGNvbnN0IHRvRG9IdG1sID0gYFxuICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHtcbiAgICBpc0NvbXBsZXRlZCA/IFwiY2hlY2tlZFwiIDogXCJcIlxuICB9IGNsYXNzPVwiY29tcGxldGUtdG9kby1jaGVja2JveFwiIC8+XG4gIDxoMyBjbGFzcz1cInRpdGxlLXRvZG9cIiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCIgZGF0YS1wbGFjZWhvbGRlcj1cInRpdGxlXCIgZGF0YS1pcy1oaWRkZW49XCIke0Jvb2xlYW4oXG4gICAgdG9kb1xuICApfVwiPiR7dG9kbyA/IHRvZG8udGl0bGUgOiBcIlwifTwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJ2aWV3LWRldGFpbHMtYnRuXCI+PGltZyBzcmM9XCIke1xuICAgIHRvZG8gPyBTaG93SWNvbiA6IEhpZGVJY29uXG4gIH1cIiBhbHQ9XCIke3RvZG8gPyBcIlNob3cgRGV0YWlsc1wiIDogXCJIaWRlIGRldGFpbHNcIn1cIj48L2J1dHRvbj5cbmA7XG4gIHJldHVybiB0b0RvSHRtbDtcbn07XG5cbmNvbnN0IGdldFByb2plY3RzID0gZnVuY3Rpb24gKHRvRG9FbGVtZW50KSB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlbGVjdGlvbi1jb250YWluZXJcIikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBbXG4gICAgLi4udG9Eb0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3Qtc2VsZWN0aW9uXCIpLFxuICBdO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lcyA9IHByb2plY3RFbGVtZW50cy5tYXAoXG4gICAgKHByb2plY3RFbGVtZW50KSA9PiBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudFxuICApO1xuICByZXR1cm4gcHJvamVjdE5hbWVzO1xufTtcblxuY29uc3QgZ2V0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlQ29udHJvbCkge1xuICBsZXQgZGF0ZSA9IG51bGw7XG4gIGlmIChkYXRlQ29udHJvbD8udmFsdWUpIGRhdGUgPSBuZXcgRGF0ZShkYXRlQ29udHJvbC52YWx1ZUFzTnVtYmVyKTtcbiAgcmV0dXJuIGRhdGU7XG59O1xuXG5jb25zdCBzYXZlT25CbHVyID0gZnVuY3Rpb24gKHRvZG9FbGVtZW50cywgc2F2ZSkge1xuICBjb25zdCB7IHRvRG9Db250YWluZXIsIGRlc2NyaXB0aW9uRWxlbWVudCwgY29udHJvbHNFbGVtZW50IH0gPSB0b2RvRWxlbWVudHM7XG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpO1xuXG4gIFt0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudF0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgc2F2ZSgpO1xuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZGF0ZUNvbnRyb2wgPSBjb250cm9sc0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgZGF0ZUNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgc2F2ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNhdmVUb0RvID0gZnVuY3Rpb24gKHRvRG9Db250YWluZXIsIGhhbmRsZUVkaXRUb0RvKSB7XG4gIGNvbnN0IFt0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudF0gPSBbXG4gICAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLXRvZG9cIiksXG4gICAgdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLXRvZG9cIiksXG4gIF07XG4gIGlmICh0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGVkaXRlZFRvRG8gPSB7IHRpdGxlOiB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgfTtcbiAgaWYgKGRlc2NyaXB0aW9uRWxlbWVudCkge1xuICAgIGVkaXRlZFRvRG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKHRvRG9Db250YWluZXIuZGF0YXNldC5pZCkge1xuICAgIGVkaXRlZFRvRG8uaWQgPSB0b0RvQ29udGFpbmVyLmRhdGFzZXQuaWQ7XG4gIH1cbiAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0cyh0b0RvQ29udGFpbmVyKTtcbiAgaWYgKHByb2plY3RzICE9PSBudWxsKSB7XG4gICAgZWRpdGVkVG9Eby5wcm9qZWN0cyA9IHByb2plY3RzO1xuICB9XG4gIGNvbnN0IGRhdGVJbnB1dCA9IHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcbiAgaWYgKGRhdGVJbnB1dCkge1xuICAgIGVkaXRlZFRvRG8uZGF0ZSA9IGdldERhdGUoZGF0ZUlucHV0KTtcbiAgfVxuICBjb25zdCBuZXdJZCA9IGhhbmRsZUVkaXRUb0RvKGVkaXRlZFRvRG8pO1xuICB0b0RvQ29udGFpbmVyLmRhdGFzZXQuaWQgPSBuZXdJZDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG9Db250YWluZXIgPSBmdW5jdGlvbiAoXG4gIHRvZG8sXG4gIGlzQ29tcGxldGVkLFxuICBkZXNjcmlwdGlvbkVsZW1lbnQsXG4gIGNvbnRyb2xzRWxlbWVudFxuKSB7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gIHRvRG9Db250YWluZXIuZGF0YXNldC5pZCA9IHRvZG8/LmlkID8/IFwiXCI7XG4gIHRvRG9Db250YWluZXIuZGF0YXNldC5pc0hpZGRlbiA9IEJvb2xlYW4odG9kbyk7XG4gIGNvbnN0IHRvRG9IZWFkZXJIdG1sID0gZ2VuZXJhdGVUb0RvSGVhZGVySHRtbCh0b2RvLCBpc0NvbXBsZXRlZCk7XG4gIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCB0b0RvSGVhZGVySHRtbCk7XG5cbiAgY29uc3QgdGl0bGUgPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtdG9kb1wiKTtcbiAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBpZiAodGl0bGUudGV4dENvbnRlbnQgPT0gXCJcIikge1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghdG9kbykge1xuICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY29udHJvbHNFbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiB0b0RvQ29udGFpbmVyO1xufTtcblxuY29uc3QgZG9PbkNvbXBsZXRlVG9EbyA9IGZ1bmN0aW9uICh0b0RvQ29udGFpbmVyLCBoYW5kbGVDb21wbGV0ZVRvRG8pIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuY29tcGxldGUtdG9kby1jaGVja2JveFwiKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoIXRvRG9Db250YWluZXIuZGF0YXNldC5pZCkge1xuICAgICAgdG9Eb0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlQ29tcGxldGVUb0RvKHRvRG9Db250YWluZXIuZGF0YXNldC5pZCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2VuZXJhdGVEZXNjcmlwdGlvbkVsZW1lbnQgPSBmdW5jdGlvbiAodG9Ebykge1xuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXRvZG9cIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudCBoMi5wcm9qZWN0LXRpdGxlXCJcbiAgKS50ZXh0Q29udGVudDtcbiAgaWYgKHByb2plY3RUaXRsZSAhPT0gXCJjb21wbGV0ZWRcIikge1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICB9XG4gIGRlc2NyaXB0aW9uRWxlbWVudC5kYXRhc2V0LnBsYWNlaG9sZGVyID0gXCJkZXNjcmlwdGlvbi4uLlwiO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0b0RvID8gdG9Eby5kZXNjcmlwdGlvbiA6IFwiXCI7XG5cbiAgZGVzY3JpcHRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9PSBcIlwiKSB7XG4gICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbkVsZW1lbnQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUNvbnRyb2xzRWxlbWVudCA9IGZ1bmN0aW9uIChcbiAgdG9EbyxcbiAgaGFuZGxlRGVsZXRlVG9EbyxcbiAgdG9Eb0NvbnRhaW5lclxuKSB7XG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udHJvbHMuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udHJvbHMtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250cm9sc0lubmVySHRtbCA9IGBcbiAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9XCJcIiAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0cy1idG4gdG9kby1jb250cm9sc1wiPlxuICAgICAgPGltZyBzcmM9XCIke1Byb2plY3RzSWNvbn1cIiBhbHQ9XCJTaG93IHByb2plY3RzXCI+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZS10b2RvLWJ0biB0b2RvLWNvbnRyb2xzXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7VHJhc2hJY29ufVwiIGFsdD1cIkRlbGV0ZSB0by1kb1wiPlxuICAgIDwvYnV0dG9uPlxuICBgO1xuICBjb250cm9scy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGNvbnRyb2xzSW5uZXJIdG1sKTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbnRlbnQgLnByb2plY3QtdGl0bGVcIlxuICApLnRleHRDb250ZW50O1xuICBpZiAocHJvamVjdFRpdGxlID09PSBcInRvZGF5XCIgfHwgcHJvamVjdFRpdGxlID09PSBcInNvbWVkYXlcIikge1xuICAgIGRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgaWYgKHRvRG8/LmRhdGUpIHtcbiAgICBkYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSh0b0RvLmRhdGUpO1xuICB9XG5cbiAgY29udHJvbHMucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtdG9kby1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9Eb0NvbnRhaW5lciA9IGNvbnRyb2xzLmNsb3Nlc3QoXCJsaS50b2RvXCIpO1xuICAgIGlmICghdG9Eb0NvbnRhaW5lcikgcmV0dXJuO1xuICAgIGhhbmRsZURlbGV0ZVRvRG8odG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlkKTtcbiAgICB0b0RvQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9KTtcblxuICByZXR1cm4gY29udHJvbHM7XG59O1xuXG5jb25zdCBzaG93RGV0YWlscyA9IGZ1bmN0aW9uICh0b2RvRWxlbWVudHMpIHtcbiAgY29uc3QgeyB0b0RvQ29udGFpbmVyLCBkZXNjcmlwdGlvbkVsZW1lbnQsIGNvbnRyb2xzRWxlbWVudCB9ID0gdG9kb0VsZW1lbnRzO1xuICBpZiAodG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlzSGlkZGVuICE9PSBcInRydWVcIikgcmV0dXJuO1xuICB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudmlldy1kZXRhaWxzLWJ0biBpbWdcIikuc3JjID0gSGlkZUljb247XG4gIHRvRG9Db250YWluZXIuZGF0YXNldC5pc0hpZGRlbiA9IFwiZmFsc2VcIjtcbiAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgdG9Eb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY29udHJvbHNFbGVtZW50KTtcbiAgZGVzY3JpcHRpb25FbGVtZW50LmZvY3VzKCk7XG59O1xuXG5jb25zdCBoaWRlRGV0YWlscyA9IGZ1bmN0aW9uICh0b2RvRWxlbWVudHMsIHNhdmUpIHtcbiAgY29uc3Qge1xuICAgIHRvRG9Db250YWluZXIsXG4gICAgZGVzY3JpcHRpb25FbGVtZW50LFxuICAgIGNvbnRyb2xzRWxlbWVudCxcbiAgICBwcm9qZWN0c0VsZW1lbnQsXG4gIH0gPSB0b2RvRWxlbWVudHM7XG4gIHNhdmUoKTtcbiAgdG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlzSGlkZGVuID0gXCJ0cnVlXCI7XG4gIHRvRG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi52aWV3LWRldGFpbHMtYnRuIGltZ1wiKS5zcmMgPSBTaG93SWNvbjtcbiAgW2Rlc2NyaXB0aW9uRWxlbWVudCwgY29udHJvbHNFbGVtZW50LCBwcm9qZWN0c0VsZW1lbnRdLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgZWxlbWVudC5yZW1vdmUoKVxuICApO1xuICBjb25zdCBleGlzdGluZ1Byb2plY3RzQ29udGFpbmVyID0gdG9Eb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3Qtc2VsZWN0aW9uLWNvbnRhaW5lclwiXG4gICk7XG4gIGlmIChleGlzdGluZ1Byb2plY3RzQ29udGFpbmVyKSB7XG4gICAgZXhpc3RpbmdQcm9qZWN0c0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfVxufTtcblxuY29uc3QgZG9PblNob3dPckhpZGVEZXRhaWxzID0gZnVuY3Rpb24gKHRvZG9FbGVtZW50cywgc2F2ZSkge1xuICBjb25zdCB7IHRvRG9Db250YWluZXIgfSA9IHRvZG9FbGVtZW50cztcbiAgY29uc3Qgc2hvd0hpZGVCdG4gPSB0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudmlldy1kZXRhaWxzLWJ0blwiKTtcbiAgc2hvd0hpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodG9Eb0NvbnRhaW5lci5kYXRhc2V0LmlzSGlkZGVuID09PSBcInRydWVcIikge1xuICAgICAgc2hvd0RldGFpbHModG9kb0VsZW1lbnRzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGlkZURldGFpbHModG9kb0VsZW1lbnRzLCBzYXZlKTtcbiAgfSk7XG4gIHRvRG9Db250YWluZXJcbiAgICAucXVlcnlTZWxlY3RvcihcIi50aXRsZS10b2RvXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93RGV0YWlscyh0b2RvRWxlbWVudHMpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZG9PblNob3dQcm9qZWN0cyA9IGZ1bmN0aW9uICh0b2RvRWxlbWVudHMsIHNhdmUpIHtcbiAgY29uc3QgeyB0b0RvQ29udGFpbmVyLCBjb250cm9sc0VsZW1lbnQsIHByb2plY3RzRWxlbWVudCB9ID0gdG9kb0VsZW1lbnRzO1xuICBjb25zdCBzaG93UHJvamVjdHNCdG4gPSBjb250cm9sc0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1idG5cIik7XG4gIHNob3dQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0b0RvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWxlY3Rpb24tY29udGFpbmVyXCIpKSB7XG4gICAgICBzYXZlKCk7XG4gICAgICBwcm9qZWN0c0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvRG9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHByb2plY3RzRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVG9Eb0VsZW1lbnQoXG4gIHRvZG8gPSBudWxsLFxuICBoYW5kbGVEZWxldGVUb0RvLFxuICBoYW5kbGVFZGl0VG9EbyxcbiAgaGFuZGxlQ29tcGxldGVUb0RvXG4pIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb250ZW50IC5wcm9qZWN0LXRpdGxlXCJcbiAgKS50ZXh0Q29udGVudDtcbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBwcm9qZWN0VGl0bGUgPT09IFwiY29tcGxldGVkXCI7XG4gIGlmIChpc0NvbXBsZXRlZCAmJiAhdG9kbykgcmV0dXJuO1xuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBnZW5lcmF0ZURlc2NyaXB0aW9uRWxlbWVudCh0b2RvKTtcbiAgY29uc3QgY29udHJvbHNFbGVtZW50ID0gZ2VuZXJhdGVDb250cm9sc0VsZW1lbnQodG9kbywgaGFuZGxlRGVsZXRlVG9Ebyk7XG4gIGNvbnN0IHRvRG9Db250YWluZXIgPSBjcmVhdGVUb0RvQ29udGFpbmVyKFxuICAgIHRvZG8sXG4gICAgaXNDb21wbGV0ZWQsXG4gICAgZGVzY3JpcHRpb25FbGVtZW50LFxuICAgIGNvbnRyb2xzRWxlbWVudFxuICApO1xuICBjb25zdCBzYXZlID0gc2F2ZVRvRG8uYmluZChudWxsLCB0b0RvQ29udGFpbmVyLCBoYW5kbGVFZGl0VG9Ebyk7XG4gIGNvbnN0IHRvZG9FbGVtZW50cyA9IHtcbiAgICB0b0RvQ29udGFpbmVyLFxuICAgIGRlc2NyaXB0aW9uRWxlbWVudCxcbiAgICBjb250cm9sc0VsZW1lbnQsXG4gICAgcHJvamVjdHNFbGVtZW50OiBnZW5lcmF0ZVByb2plY3RTZWxlY3Rpb25Db250YWluZXIodG9kbz8ucHJvamVjdHMsIHNhdmUpLFxuICB9O1xuICBkb09uQ29tcGxldGVUb0RvKHRvRG9Db250YWluZXIsIGhhbmRsZUNvbXBsZXRlVG9Ebyk7XG4gIGlmIChpc0NvbXBsZXRlZCkgcmV0dXJuIHRvRG9Db250YWluZXI7XG4gIGRvT25TaG93T3JIaWRlRGV0YWlscyh0b2RvRWxlbWVudHMsIHNhdmUpO1xuICBkb09uU2hvd1Byb2plY3RzKHRvZG9FbGVtZW50cywgc2F2ZSk7XG4gIHNhdmVPbkJsdXIodG9kb0VsZW1lbnRzLCBzYXZlKTtcblxuICByZXR1cm4gdG9Eb0NvbnRhaW5lcjtcbn1cbiIsImltcG9ydCBUcmFzaEljb24gZnJvbSBcIi4vaW1ncy9kZWxldGUtcHJvamVjdC5zdmdcIjtcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIi4vaW1ncy9pbmJveC5zdmdcIjtcbmltcG9ydCBUb2RheUljb24gZnJvbSBcIi4vaW1ncy90b2RheS5zdmdcIjtcbmltcG9ydCBTb21lZGF5SWNvbiBmcm9tIFwiLi9pbWdzL3NvbWVkYXkuc3ZnXCI7XG5pbXBvcnQgQW55dGltZUljb24gZnJvbSBcIi4vaW1ncy9hbnl0aW1lLnN2Z1wiO1xuaW1wb3J0IENvbXBsZXRlZEljb24gZnJvbSBcIi4vaW1ncy9jb21wbGV0ZWQuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVmlldyhcbiAgaGFuZGxlUHJvamVjdENsaWNrLFxuICBoYW5kbGVEZWxldGVQcm9qZWN0T25DbGlja1xuKSB7XG4gIGNvbnN0IHZpZXdIdG1sID0gYFxuICA8ZGl2IGNsYXNzPVwic2lkZWJhclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpeGVkLXRvZG9zLXByb2plY3QgdG9kb3MtcHJvamVjdFwiIGlkPVwiaW5ib3hcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke0luYm94SWNvbn1cIiBhbHQ9XCJJbmJveFwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPmluYm94PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7VG9kYXlJY29ufVwiIGFsdD1cIlRvZGF5XCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+dG9kYXk8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtTb21lZGF5SWNvbn1cIiBhbHQ9XCJTb21lZGF5XCI+IDxzcGFuIGNsYXNzPVwidG9kby1wcm9qZWN0LXRpdGxlXCI+c29tZWRheTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZml4ZWQtdG9kb3MtcHJvamVjdCB0b2Rvcy1wcm9qZWN0XCIgaWQ9XCJhbnl0aW1lXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7QW55dGltZUljb259XCIgYWx0PVwiQW55dGltZVwiPiA8c3BhbiBjbGFzcz1cInRvZG8tcHJvamVjdC10aXRsZVwiPmFueXRpbWU8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJmaXhlZC10b2Rvcy1wcm9qZWN0IHRvZG9zLXByb2plY3RcIiBpZD1cImNvbXBsZXRlZC1wcm9qZWN0XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7Q29tcGxldGVkSWNvbn1cIiBhbHQ9XCJDb21wbGV0ZWRcIj4gPHNwYW4gY2xhc3M9XCJ0b2RvLXByb2plY3QtdGl0bGVcIj5jb21wbGV0ZWQ8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYWRkLXByb2plY3QtYnRuXCI+TmV3IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+aW5ib3g8L2gyPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnRuXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke1RyYXNoSWNvbn1cIiBhbHQ9XCJEZWxldGUgcHJvamVjdFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJhZGQtdG9kby1idG5cIj5OZXcgVG8tRG88L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5uZXJIVE1MID0gdmlld0h0bWw7XG4gIGNvbnN0IHByb2plY3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb3MtcHJvamVjdFwiKV07XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaGFuZGxlUHJvamVjdENsaWNrKFxuICAgICAgICBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wcm9qZWN0LXRpdGxlXCIpLnRleHRDb250ZW50XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY29udGVudC1oZWFkZXI+LmRlbGV0ZS1wcm9qZWN0LWJ0blwiXG4gICk7XG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29udGVudC1oZWFkZXI+LnByb2plY3QtdGl0bGVcIlxuICAgICkudGV4dENvbnRlbnQ7XG4gICAgaGFuZGxlRGVsZXRlUHJvamVjdE9uQ2xpY2socHJvamVjdFRpdGxlKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=