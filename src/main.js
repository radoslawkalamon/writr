import Vue from 'vue';
import App from '@/views/App/App.vue';
import store from '@/store/index';
import i18n from '@/i18n';
// import tinyLittleScamp from '@/tiny-little-scamp';

Vue.config.productionTip = false;

// window.tinyLittleScamp = tinyLittleScamp;

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
