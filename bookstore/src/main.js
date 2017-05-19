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

var config = {
  apiKey: "AIzaSyBPFkMbEl6XuT_GDv9cmTOEp3EIXfEOb8E",
  authDomain: "smallbookstore-ad9d6.firebaseapp.com",
  databaseURL: "https://smallbookstore-ad9d6.firebaseio.com",
  projectId: "smallbookstore-ad9d6",
  storageBucket: "smallbookstore-ad9d6.appspot.com",
  messagingSenderId: "680514796006"
};

firebase.initializeApp(config);

window.firebase = firebase;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
