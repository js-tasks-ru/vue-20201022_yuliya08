import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

new Vue({
  el: '#app',
  data() {
    return {
      counter: 0,
    };
  },

  template: '#counterTemplate',

  methods: {
    counterButton() {
      this.counter += 1;
    },
  },
});
