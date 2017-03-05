/**
 * Created by pmumu on 2017/1/30.
 */
import api from '../../api'
import * as type from '../mutation-type'

const state = {
  id: JSON.parse(localStorage.getItem('user')) || null,
  keyword: [],
  keywordLength: null
}

// getters
const getters = {
  id: state => state.id,
  keyword: state => state.keyword,
  keywordLength: state => state.keyword.length
}

const actions = {
  // 登陆
  UserLogin: ({commit}, data) => {
    api.Login(
      data,
      () => {
        commit(type.USER_SIGNIN, data.user)
        window.location = '/home'
      },
      () => console.log('丢')
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
  UserAddKeyword: ({dispatch, commit}, val) => {
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
  [type.USER_SIGNIN] (state, id) {
    localStorage.setItem('user', JSON.stringify(id))
    state.isLogin = true
    state.id = id
  },
  [type.USER_SIGNOUT] (state) {
    state.isLogin = false
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
