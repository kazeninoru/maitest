(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-27b5"],{

/***/ "0PpN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getfilmList; });
/* unused harmony export add */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t3Un");


var getfilmList = function getfilmList() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        url: '/film/getList',
        methods: 'get'
    });
};

var add = function add(film) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        url: '/cinema/add',
        methods: 'post',
        data: film
    });
};

/***/ }),

/***/ "7rGH":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "GUxp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7rGH");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "yy32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/_film/filmList.vue?vue&type=template&id=6e740696&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("电影列表")])]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.filmList}},[_c('el-table-column',{attrs:{"align":"center","label":"海报"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticClass:"img",attrs:{"src":scope.row.poster?scope.row.poster:'',"alt":""}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"name","label":"电影名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"filmType","label":"电影类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"director","label":"导演"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"language","label":"语言"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","prop":"nation","label":"产地"}}),_vm._v(" "),_c('el-table-column',{attrs:{"align":"center","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"small","icon":"el-icon-edit","circle":""},on:{"click":function($event){_vm.toEdit(scope.row)}}}),_vm._v(" "),_c('el-button',{attrs:{"plain":"","type":"danger","size":"small","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.toDelete(scope.row,scope.$index)}}})]}}])})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/_film/filmList.vue?vue&type=template&id=6e740696&

// EXTERNAL MODULE: ./src/api/film.js
var film = __webpack_require__("0PpN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/_film/filmList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var filmListvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      filmList: []
    };
  },
  created: function created() {
    var _this = this;

    Object(film["a" /* getfilmList */])().then(function (res) {
      _this.filmList = res.films;
    });
  },


  methods: {
    toEdit: function toEdit(film) {
      this.$router.push({
        name: "film-edit",
        params: { id: film.filmId }
      });
    },
    toDelete: function toDelete(film, index) {
      console.log(film, index);
    }
  }
});
// CONCATENATED MODULE: ./src/views/_film/filmList.vue?vue&type=script&lang=js&
 /* harmony default export */ var _film_filmListvue_type_script_lang_js_ = (filmListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/_film/filmList.vue?vue&type=style&index=0&lang=css&
var filmListvue_type_style_index_0_lang_css_ = __webpack_require__("GUxp");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/_film/filmList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _film_filmListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "filmList.vue"
/* harmony default export */ var filmList = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);