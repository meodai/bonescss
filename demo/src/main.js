var Vue = require('vue');
var typography = require('./typography.vue');
var css = require('!style!css!sass!../../main.scss');

console.log('css', css);

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    // include the required component
    // in the options
    typography: typography,
  },
});
