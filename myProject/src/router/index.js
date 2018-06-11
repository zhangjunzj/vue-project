import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Charts from '@/components/charts'
import Home from '@/page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/charts',
      name: 'Charts',
      component: Charts
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
