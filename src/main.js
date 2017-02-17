// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store/index'
import App from './App'
import api from './api'
import Index from './components/user/index'
import Login from './components/user/login'
import tools from './components/user/tools'
import userCenter from './components/user/userCenter'
import notFound from './components/notfound'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', name: 'index', component: Login, meta: {auth: false}},
  {
    path: '/user',
    name: 'user',
    component: Index,
    meta: {auth: true},
    children: [                            //   嵌套路由
      {path: '/tools', name: 'tools', component: tools, meta: {auth: true}},
      {path: '/userCenter', name: 'userCenter', component: userCenter, meta: {auth: true}}
    ]
  },
  {path: '*', name: 'notFound', component: notFound, meta: {auth: false}}
]

const router = new VueRouter({
  mode: 'history',
  saveScrollPosition: true,
  routes
})

router.beforeEach(({meta, path}, from, next) => {
  let {auth = true} = meta                    //  坑

  api.LoginCheck()
    .then((res) => {
      let isLogin = res.isLogin

      if (auth && !isLogin && path !== '/') {
        return next({path: '/'})
      }
      if (isLogin && (path === '/' || path === '/reg')) {
        return next({path: '/user'})
      }
    })
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  ...App
})
