// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import index from 'components/index2'
import Notice from 'components/Notice'
import Square from 'components/Project-square'
import Gwfc from 'components/Gwfc'
import download from 'components/download'
import Login from 'components/login'
import personal from 'components/Personal'
import Rewrite from 'components/Rewrite'
import Management from 'components/Management'
import vueTap from 'v-tap'
import regester from 'components/Regester'
import Communicate from 'components/Communicate'
import Knot from 'components/Knot'
// import fastclick from 'fastclick'
import Vuex from 'vuex'

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
/* 控制路由 */
const router = new VueRouter({
  routes: [{
    path: '/index',
    component: index
  }, {
    path: '/notice',
    component: Notice
  }, {
    path: '/square',
    component: Square
  }, {
    path: '/gwfc',
    component: Gwfc
  }, {
    path: '/download',
    component: download
  }, {
    path: '/personal',
    component: personal
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/rewrite',
    component: Rewrite
  }, {
    path: '/Knot',
    component: Knot
  }, {
    path: '/Management',
    component: Management
  }, {
    path: '/Communicate',
    component: Communicate
  }, {
    path: '/regester',
    component: regester
  }]
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

/* 默认跳转 */
router.push('index')
