(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3f3a"],{

/***/ "/qGp":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EPNd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/city/submit.vue?vue&type=template&id=3cb45e0d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{ref:"form",attrs:{"model":_vm.city,"label-width":"80px"}},[(_vm.city.cityId)?_c('el-form-item',{attrs:{"label":"编号"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.city.cityId),callback:function ($$v) {_vm.$set(_vm.city, "cityId", $$v)},expression:"city.cityId"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"城市名称"}},[_c('el-input',{model:{value:(_vm.city.name),callback:function ($$v) {_vm.$set(_vm.city, "name", $$v)},expression:"city.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"城市拼音"}},[_c('el-input',{model:{value:(_vm.city.pinyin),callback:function ($$v) {_vm.$set(_vm.city, "pinyin", $$v)},expression:"city.pinyin"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否热门"}},[_c('el-switch',{attrs:{"active-text":_vm.city.isHot?'是':'否'},model:{value:(_vm.city.isHot),callback:function ($$v) {_vm.$set(_vm.city, "isHot", $$v)},expression:"city.isHot"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v(_vm._s(_vm.city.cityId?'提交':'立即添加'))]),_vm._v(" "),_c('el-button',[_vm._v("取消")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/city/submit.vue?vue&type=template&id=3cb45e0d&scoped=true&

// EXTERNAL MODULE: ./src/api/city.js
var city = __webpack_require__("xZEO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/city/submit.vue?vue&type=script&lang=js&
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



/* harmony default export */ var submitvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      city: {
        cityId: "",
        name: "",
        pinyin: "",
        isHot: false
      }
    };
  },


  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.city.cityId) {
        Object(city["c" /* edit */])(this.city).then(function (res) {
          _this.$message({
            message: "编辑成功",
            type: "success"
          });
        });
      } else {
        Object(city["a" /* add */])(this.city).then(function (res) {
          _this.$message({
            message: "添加成功",
            type: "success"
          });
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  },

  created: function created() {
    var _this2 = this;

    var cityId = this.$route.params.id;
    if (cityId) {
      Object(city["d" /* getCity */])(cityId).then(function (res) {
        _this2.city = res.city;
      });
    }
  },


  watch: {
    $route: function $route() {
      this.city = {};
    }
  }
});
// CONCATENATED MODULE: ./src/views/city/submit.vue?vue&type=script&lang=js&
 /* harmony default export */ var city_submitvue_type_script_lang_js_ = (submitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/city/submit.vue?vue&type=style&index=0&id=3cb45e0d&scoped=true&lang=css&
var submitvue_type_style_index_0_id_3cb45e0d_scoped_true_lang_css_ = __webpack_require__("KyO9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/city/submit.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  city_submitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3cb45e0d",
  null
  
)

component.options.__file = "submit.vue"
/* harmony default export */ var city_submit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "KyO9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_vue_vue_type_style_index_0_id_3cb45e0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/qGp");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_vue_vue_type_style_index_0_id_3cb45e0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_vue_vue_type_style_index_0_id_3cb45e0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_submit_vue_vue_type_style_index_0_id_3cb45e0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xZEO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCity; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t3Un");


function getList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/city/getList',
    method: 'get'
  });
}

var add = function add(city) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/city/add',
    method: 'post',
    data: city
  });
};

var edit = function edit(city) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/city/edit',
    method: 'post',
    data: city
  });
};

var del = function del(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/city/delById',
    method: 'post',
    data: {
      cityId: id
    }
  });
};

function getCity(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/city/findById',
    method: 'get',
    params: {
      cityId: id
    }
  });
}

/***/ })

}]);