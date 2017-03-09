/**
 * Created by pmumu on 2017/1/28.
 */
import Vue from 'vue'

export default {
  //  注册
  Register: function (data) {
    return Vue.http.post('/apis/api/user_reg', data)
  },
  // 登录
  Login: function (data, cb, errCb) {
    Vue.http.post('/apis/api/user_login', data)
      .then((rs) => {
        rs.status === 200 && rs.body.status === 0
          ? cb(rs.body)
          : errCb(rs.body)
      })
  },
  // 登出
  LoginOut: function () {
    return Vue.http.get('/apis/api/logoff')
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

  // HOME=》获取所有关键词
  fetchKeyword: function () {
    return Vue.http.get('/apis/api/fetchKeyword')
  },

  //  添加关键词
  addKeyword: function (keyword) {
    return Vue.http.get('/apis/api/add_key?keyword=' + keyword)
  },

  //  删除关键词
  deleteKeyword: function (keyword) {
    return Vue.http.get('/apis/api/delete_key?keyword=' + keyword)
  },

  //  改变关键词状态
  changeKeyStatus: function (status) {
    return Vue.http.post('/apis/api/change_status', status)
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
