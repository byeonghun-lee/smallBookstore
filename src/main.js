// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire';
import {routes} from './router/routes';
import App from './App.vue';
import firebase from 'firebase';
// import faFontPath from '../src/assets/font-awesome/css/font-awesome.min.css';
// import nanumbarungothic from '../src/assets/font/nanumbarungothic.css';

Vue.use(VueRouter);
Vue.use(VueFire);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
