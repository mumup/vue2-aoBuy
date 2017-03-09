/**
 * Created by pmumu on 2017/1/30.
 */
import api from '../../api'
import * as type from '../mutation-type'

const state = {
  userInfo: {},
  keyword: [],
  keywordLength: null
}

// getters
const getters = {
  userInfo: state => JSON.parse(localStorage.getItem('userInfo')) || '',
  keyword: state => state.keyword,
  keywordLength: state => state.keyword.length
}

const actions = {
  // 登陆
  UserReg: ({dispatch, commit}, data) => {
    api.Register(data)
      .then((res) => {
        if (res.status === 200 && res.body.status === 1) {
          dispatch('showToast', {
            isShow: true,
            text: '注册成功'
          })
        } else {
          dispatch('showToast', {
            isShow: true,
            text: res.body.data
          })
        }
      })
  },
  UserLogin: ({dispatch, commit}, data) => {
    api.Login(
      data,
      (res) => {
        try {
          localStorage.removeItem('userInfo')
        } catch (_) {
          alert('本地储存写入错误，若为safari浏览器请关闭隐身模式浏览。')
        }
        commit(type.USER_SIGNIN, res.userInfo)
        window.location = '/home'
      },
      (res) => dispatch('showToast', {
        isShow: true,
        type: 'warn',
        text: res.data
      })
    )
  },
  // 登出
  UserLogout: ({commit}) => {
    api.LoginOut()
      .then(function (res) {
        if (res.status === 200) {
          commit(type.USER_SIGNOUT)
          window.location = '/'
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // 首页获取所有关键词
  UserKeywordFetch: ({commit}) => {
    api.fetchKeyword()
      .then(function (res) {
        if (res.status === 200) {
          commit(type.USER_FETCH_KEYWORD, res.body)
        }
      })
  },
  // 删除关键词
  UserDeleteKeyword: ({dispatch, commit}, val) => {
    api.deleteKeyword(val)
      .then(function (res) {
        if (res.status === 200) {
          let newKeyword = state.keyword.filter(t => t.key_name !== val)
          commit(type.USER_DELETE_KEYWORD, newKeyword)
          dispatch('showToast', {
            isShow: true,
            text: '删除成功'
          })
        }
      })
  },
  // 添加关键词
  UserAddKeyword: ({dispatch}, val) => {
    api.addKeyword(val)
      .then(function (res) {
        if (res.status === 200) {
          let code = res.body.status
          dispatch('showToast', {
            isShow: true,
            text: res.body.msg,
            type: code === 0 ? 'success' : 'warn'
          })
        }
      })
  },
  //  改变关键词状态
  UserKeywordStatus: ({dispatch, commit}, status) => {
    api.changeKeyStatus(status)
      .then((res) => {
        if (res.status === 200) {
          commit(type.USER_KEYWORD_STATUS, status)
          dispatch('showToast', {
            isShow: true,
            text: '更改成功',
            time: 1000
          })
        }
      })
  }
}

const mutations = {
  [type.USER_SIGNIN] (state, userInfo) {
    state.isLogin = true
    state.userInfo = userInfo
    try {
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    } catch (_) {
      alert('隐身模式下可能出现BUG,请尽量在正常模式下访问')
    }
  },
  [type.USER_SIGNOUT] (state) {
    state.isLogin = false
    state.userInfo = ''
    localStorage.removeItem('userInfo')
  },
  [type.USER_FETCH_KEYWORD] (state, _keyword) {
    state.keyword = _keyword
  },
  [type.USER_DELETE_KEYWORD] (state, _keyword) {
    state.keyword = _keyword
  },
  [type.USER_KEYWORD_STATUS] (state, type) {
    state.keyword[type.index].status = type.type
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
