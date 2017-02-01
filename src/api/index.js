/**
 * Created by pmumu on 2017/1/28.
 */
import Vue from 'vue'

export default {
  Login: function (data) {
    return Vue.http.post('/api/tools/user_login', data)
  },
  LoginOut: function () {
    console.log('11111')
    return Vue.http.get('/api/logout')
  },
  LoginCheck: function () {
    return Vue.http.get('/api/loginCheck')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  },
  CheckUserName: function (user) {
    return Vue.http.get('/api/tools/user_check')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  }
}
