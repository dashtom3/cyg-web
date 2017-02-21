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
import Regester from 'components/Regester'
import newsDetial from 'components/News'
import admUsers from 'components/Adm-users'
<<<<<<< HEAD
import communicate from 'components/Communicate'
import knot from 'components/Knot'
import update from 'components/Rewrite'
=======
import admPost from 'components/Adm-post'
import admProjects from 'components/Adm-projects'
import vueTap from 'v-tap'
>>>>>>> 1c9b0b4095bda8f28361a07f119ac97a18036421
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
    path: '/login',
    component: login
  }, {
    path: '/personal',
    component: personal
  }, {
    path: '/regester',
    component: Regester
  }, {
    path: '/newsDetial',
    component: newsDetial
  }, {
<<<<<<< HEAD
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
    component: update
  }, {
    path: '/Adm-news',
    component: admNews
  }, {
    path: '/Adm-post',
    component: admPost
  }, {
    path: '/Adm-projects',
    component: admProjects
>>>>>>> 1c9b0b4095bda8f28361a07f119ac97a18036421
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
