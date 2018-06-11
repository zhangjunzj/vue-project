// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vuex from 'vuex'
import store from './store'
import './config/rem'
import Http from './service/http'

Vue.store = Vue.prototype.$store = store

Vue.Http = Vue.prototype.$Http = Http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
