/**
 * Created by pmumu on 2017/1/28.
 */
import Vue from 'vue'

export default {
  Login: function (data) {
    return Vue.http.post('/apis/api/user_login', data)
  },
  LoginOut: function () {
    return Vue.http.get('/apis/api/logout')
  },
  LoginCheck: function () {
    return Vue.http.get('/apis/api/loginCheck')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  },
  CheckUserName: function (user) {
    return Vue.http.get('/apis/api/user_check')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  }
}
