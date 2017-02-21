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
  // 登录状态检查
  LoginCheck: function () {
    return Vue.http.get('/apis/api/loginCheck')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  },
  // 用户名检查
  CheckUserName: function (user) {
    return Vue.http.get('/apis/api/user_check')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  },
  // 搜索工具=》获取最新数据
  GetNewData: function () {
    return Vue.http.get('/apis/api/getNew')
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  },
  // 搜索功能
  GetSearchData: function (word) {
    return Vue.http.get('/apis/api/s?word=' + word)
      .then(function (data) {
        if (data.status === 200) {
          return data.body
        }
      })
  }
}
