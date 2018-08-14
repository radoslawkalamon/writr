import Vue from 'vue';
import App from './components/App.vue';
import store from './store/index.js';
import 'es6-promise/auto';

new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});
