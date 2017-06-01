// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import routes from './router'
import VueRouter from 'vue-router'
import {LoadingPlugin, ToastPlugin} from 'vux'
import moment from 'moment'
import store from './store/index'
import App from './App'
import api from './api'
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.http.headers.common['Authorization'] = localStorage.getItem('token')

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
  let {auth = true} = meta

  api.LoginCheck()
    .then((res) => {
      let isLogin = res.isLogin

      if (path === '/' || path === '/register') {
        if (isLogin) {
          return next({path: '/home'})
        }
      }

      if (auth && !isLogin && path !== '/') {
        return next({path: '/'})
      }
      if (isLogin && (path === '/' || path === '/reg')) {
        return next({path: '/home'})
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
