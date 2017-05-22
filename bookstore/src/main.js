import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import {routes} from './routes'
import App from './App.vue'
import firebase from 'firebase'

Vue.use(VueRouter);
Vue.use(VueFire);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
