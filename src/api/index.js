/**
 * Created by pmumu on 2017/1/28.
 */
import Vue from 'vue'
import {base, dev} from '../../config'

const version = 'v1'
const apiUrl = process.env.NODE_ENV === 'development' ? dev.ApiUrl : base.api

export default {
  //  注册
  Register: data => Vue.http.post(`${apiUrl}/${version}/user/register`, data),

  // 登录
  Login: function (data, cb, errCb) {
    Vue.http.post(`${apiUrl}/${version}/user/login`, data)
      .then((rs) => {
        rs.status === 200 && rs.body.status === 0
          ? cb(rs.body)
          : errCb(rs.body)
      })
  },
  // 登出
  LoginOut: () => Vue.http.get('/apis/api/logoff'),

  // 登录状态检查
  LoginCheck: function () {
    return Vue.http.get(`${apiUrl}/${version}/user/logincheck`)
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
  fetchKeyword: () => Vue.http.get('/apis/api/fetchKeyword'),

  //  添加关键词
  addKeyword: keyword => Vue.http.get('/apis/api/add_key?keyword=' + keyword),

  //  删除关键词
  deleteKeyword: keyword => Vue.http.get('/apis/api/delete_key?keyword=' + keyword),

  //  改变关键词状态
  changeKeyStatus: status => Vue.http.post('/apis/api/change_status', status),

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
  GetSearchData: word => {
    return Vue.http.get('/apis/api/s?word=' + word)
      .then(data => {
        if (data.status === 200) {
          return data.body
        }
      })
  },

  //  添加签到账号
  addSignAccount: data => Vue.http.get('apis/api/addSignAccount', {params: data}),

  //  获取签到列表
  getSignList: data => Vue.http.get('apis/api/getSignList'),

  //  删除签到账号
  deleteSignAccount: ac => Vue.http.get('apis/api/deleteSign', {params: ac})

}

