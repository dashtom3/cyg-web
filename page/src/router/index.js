import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Index2 from 'components/Index2'
import Login from 'components/Login'
import Regester from 'components/Regester'
import Apply from 'components/Apply'
import Communicate from 'components/Communicate'
import Details from 'components/Details'
import Download from 'components/Download'
import Gwfc from 'components/Gwfc'
import Knot from 'components/Knot'
import Management from 'components/Management'
import News from 'components/News'
import Notice from 'components/Notice'
import Personal from 'components/Personal'
import Square from 'components/Project-square'
import Rewrite from 'components/Rewrite'
import Xq from 'components/Xq'
import Users from 'components/Adm-users'
import Projects from 'components/Adm-projects'
import Post from 'components/Adm-post'
import Admnews from 'components/Adm-news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index2',
      name: 'Index2',
      component: Index2
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regester',
      name: 'Regester-content',
      component: Regester
    },
    {
      path: '/apply',
      name: 'Apply-content',
      component: Apply
    },
    {
      path: '/communicate',
      name: 'Communicate',
      component: Communicate
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/gwfc',
      name: 'Gwfc',
      component: Gwfc
    },
    {
      path: '/knot',
      name: 'Knot-content',
      component: Knot
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/project-square',
      name: 'Square',
      component: Square
    },
    {
      path: '/rewrite',
      name: 'Rewrite-content',
      component: Rewrite
    },
    {
      path: '/xq',
      name: 'Xq',
      component: Xq
    },
    {
      path: '/adm-users',
      name: 'Adm-users',
      component: Users
    },
    {
      path: '/adm-projects',
      name: 'Adm-projects',
      component: Projects
    },
    {
      path: '/adm-post',
      name: 'Adm-post',
      component: Post
    },
    {
      path: '/adm-news',
      name: 'Adm-news',
      component: Admnews
    }
  ]
})
