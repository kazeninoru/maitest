(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5621"],{

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

/***/ "8PUq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/_film/filmSubmit.vue?vue&type=template&id=6981d64a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-card',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v(_vm._s(_vm.film.filmId?'编辑':'添加')+"电影")])]),_vm._v(" "),_c('el-form',{attrs:{"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"电影名称"}},[_c('el-input',{model:{value:(_vm.film.name),callback:function ($$v) {_vm.$set(_vm.film, "name", $$v)},expression:"film.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"内容分类"}},[_c('el-input',{model:{value:(_vm.film.category),callback:function ($$v) {_vm.$set(_vm.film, "category", $$v)},expression:"film.category"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"导演"}},[_c('el-input',{model:{value:(_vm.film.director),callback:function ($$v) {_vm.$set(_vm.film, "director", $$v)},expression:"film.director"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"上映时间"}},[_c('el-input',{model:{value:(_vm.film.premiereAt),callback:function ($$v) {_vm.$set(_vm.film, "premiereAt", $$v)},expression:"film.premiereAt"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"评分"}},[_c('el-input',{model:{value:(_vm.film.grade),callback:function ($$v) {_vm.$set(_vm.film, "grade", $$v)},expression:"film.grade"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"语言"}},[_c('el-input',{model:{value:(_vm.film.language),callback:function ($$v) {_vm.$set(_vm.film, "language", $$v)},expression:"film.language"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"时长"}},[_c('el-input',{model:{value:(_vm.film.runtime),callback:function ($$v) {_vm.$set(_vm.film, "runtime", $$v)},expression:"film.runtime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"产地"}},[_c('el-input',{model:{value:(_vm.film.nation),callback:function ($$v) {_vm.$set(_vm.film, "nation", $$v)},expression:"film.nation"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电影类型"}},[_c('el-input',{model:{value:(_vm.film.filmType),callback:function ($$v) {_vm.$set(_vm.film, "filmType", $$v)},expression:"film.filmType"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简介"}},[_c('el-input',{model:{value:(_vm.film.synopsis),callback:function ($$v) {_vm.$set(_vm.film, "synopsis", $$v)},expression:"film.synopsis"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"在售"}},[_c('el-switch',{attrs:{"active-color":"#409EFF","active-text":_vm.film.isSale?'是':'否'},model:{value:(_vm.film.isPresale),callback:function ($$v) {_vm.$set(_vm.film, "isPresale", $$v)},expression:"film.isPresale"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"预售"}},[_c('el-switch',{attrs:{"active-color":"#409EFF","active-text":_vm.film.isSale?'是':'否'},model:{value:(_vm.film.isSale),callback:function ($$v) {_vm.$set(_vm.film, "isSale", $$v)},expression:"film.isSale"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/_film/filmSubmit.vue?vue&type=template&id=6981d64a&

// EXTERNAL MODULE: ./src/api/film.js
var film = __webpack_require__("0PpN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/_film/filmSubmit.vue?vue&type=script&lang=js&
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



/* harmony default export */ var filmSubmitvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      film: {
        filmId: "",
        category: "科幻",
        director: "郭帆",
        premiereAt: "1549324800",
        name: "流浪地球",
        photos: [],
        actors: [{
          name: "郭帆",
          role: " 导演",
          avatarAddress: "头像图片地址"
        }],
        poster: "海报图片地址",
        grade: "8",
        language: "汉语普通话   英语",
        runtime: "100",
        filmType: "2D",
        isPresale: true,
        timeType: "3",
        isSale: true,
        synopsis: "介绍",
        nation: "中国大陆 "
      }
    };
  },
  created: function created() {
    this.film.filmId = this.$route.params.id;
  },


  watch: {
    $route: function $route() {
      this.film = {};
    }
  }
});
// CONCATENATED MODULE: ./src/views/_film/filmSubmit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _film_filmSubmitvue_type_script_lang_js_ = (filmSubmitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/_film/filmSubmit.vue?vue&type=style&index=0&lang=css&
var filmSubmitvue_type_style_index_0_lang_css_ = __webpack_require__("WDv3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/_film/filmSubmit.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _film_filmSubmitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "filmSubmit.vue"
/* harmony default export */ var filmSubmit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "WDv3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmSubmit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ymOQ");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmSubmit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmSubmit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_filmSubmit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ymOQ":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);