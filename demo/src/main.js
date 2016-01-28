var Vue = require('vue');
/* var css = require('!style!css!sass!../../main.scss'); */
var base = require('./base.vue');
var typography = require('./typography.vue');
//var sassVariables = require("!!sass-variables!../../_0.settings.typography.scss");
//console.log(sassVariables)
new Vue({
  el: 'body',
  components: {
    base: base,
    typography: typography,
  },
});
