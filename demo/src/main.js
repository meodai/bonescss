var Vue = require('vue');
/* var css = require('!style!css!sass!../../main.scss'); */
var base = require('./base.vue');
var typography = require('./typography.vue');
var lists = require('./lists.vue');
var header = require('./_header.vue');

/*
var sassSettings = require("!!raw!sass!../../_0.settings.scss");
console.log(sassSettings)
*/

new Vue({
  el: 'body',
  components: {
    base: base,
    pageheader: header,
    typography: typography,
    lists: lists,
  },
});
