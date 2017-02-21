// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import index from 'components/index2'
import Notice from 'components/Notice'
import Square from 'components/Project-square'
import Gwfc from 'components/Gwfc'
import download from 'components/Download'
import personal from 'components/Personal'
import login from 'components/Login'
import regester from 'components/Regester'
import newsDetial from 'components/News'
import projectsDetial from 'components/Details'
import vueTap from 'v-tap'
import admNews from 'components/Adm-news'
import communicate from 'components/Communicate'
import knot from 'components/Knot'
import update from 'components/Rewrite'
// import comment from 'components/Comment'
import test from 'components/TestDate'
// import fastclick from 'fastclick'
import Vuex from 'vuex'

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.filter('time', function (value) {
  return new Date(parseInt(value)).getFullYear() + '-' + new Date(parseInt(value)).getMonth() + 1 + '-' + new Date(parseInt(value)).getDay()
})
Vue.filter('year', function (value) {
  return new Date(parseInt(value)).getFullYear() + '-' + new Date(parseInt(value)).getMonth() + 1
})
Vue.filter('day', function (value) {
  return new Date(parseInt(value)).getDay()
})

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
    path: '/admNews',
    component: admNews
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
    path: '/login',
    component: login
  }, {
    path: '/personal',
    component: personal
  }, {
    path: '/regester',
    component: regester
  }, {
    path: '/newsDetial/:id',
    name: 'newsDetial',
    component: newsDetial
  }, {
    path: '/projectsDetial/:id',
    name: 'projectDetial',
    component: projectsDetial
  }, {
    path: '/communicate',
    name: 'communicate',
    component: communicate
  }, {
    path: '/knot',
    name: 'knot',
    component: knot
  }, {
    path: '/update',
    name: 'update',
    components: update
  }, {
    path: '/test',
    components: test
  }]
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('')

/* 默认跳转 */
router.push('index')
