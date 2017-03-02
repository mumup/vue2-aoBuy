// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {LoadingPlugin, ToastPlugin} from 'vux'
import moment from 'moment'
import store from './store/index'
import App from './App'
import api from './api'
import Index from './components/user/index'
import Login from './components/user/login'
import Home from './components/user/home'
import tools from './components/user/tools'
import userCenter from './components/user/userCenter'
import Search from './components/user/search'
import notFound from './components/notfound'
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

const routes = [
  {path: '/', name: 'index', component: Login, meta: {auth: false}},
  {
    path: '/user',
    name: 'user',
    component: Index,
    meta: {auth: true, title: 'AoBuy', hideBack: true},
    children: [                            //   嵌套路由
      {path: '/home', name: 'home', component: Home, meta: {auth: true, title: 'AoBuy', hideBack: true}},
      {path: '/tools', name: 'tools', component: tools, meta: {auth: true, title: '工具'}},
      {path: '/userCenter', name: 'userCenter', component: userCenter, meta: {auth: true, title: '用户中心'}},
      {path: '/search', name: 'search', component: Search, meta: {auth: true, title: '搜索'}}
    ]
  },
  {path: '*', name: 'notFound', component: notFound, meta: {auth: false}}
]

// moment格式化unix时间
Vue.prototype.$moment = function (model, val, format) {
  switch (model) {
    case 'default':
      return moment(val).format(format)
    case 'unix':
      return moment.unix(val).format(format)
  }
}

const router = new VueRouter({
  mode: 'history',
  saveScrollPosition: true,
  routes
})

router.beforeEach(({meta, path, store}, from, next) => {
  let {auth = true, title} = meta                    //  坑
  console.log(title)

  api.LoginCheck()
    .then((res) => {
      let isLogin = res.isLogin

      if (auth && !isLogin && path !== '/') {
        return next({path: '/'})
      }
      if (isLogin && (path === '/' || path === '/reg')) {
        return next({path: '/home'})
      }
    })
  next(vm => {
    // 通过 `vm` 访问组件实例

  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  ...App
})
