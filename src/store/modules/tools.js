/**
 * Created by pmumu on 2017/2/19.
 */
import * as type from '../mutation-type'
import api from '../../api'

const state = {
  list: [],
  listLength: null,
  signerList: []
}

const getters = {
  list: state => state.list,
  listLength: state => state.list.length,
  signerList: state => state.signerList
}

const actions = {
  //  获取最新数据
  AC_GetNewData: ({commit}, data) => {
    commit('UPDATE_LOADING', true)
    api.GetNewData(data)
      .then((res) => {
        res
          ? commit(type.GET_NEW_DATA, res)
          : console.log('网络错误')
        commit('UPDATE_LOADING', false)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  //  获取搜索数据
  AC_GetSearchData: ({commit}, word) => {
    commit('UPDATE_LOADING', true)
    api.GetSearchData(word)
      .then((res) => {
        if (res) {
          commit('UPDATE_LOADING', false)
          commit(type.GET_SEARCH_DATA, res)
        } else {
          commit('UPDATE_LOADING', false)
          console.log('网络错误')
        }
      })
  },
  //  获取签到列表
  getSignList: ({commit}) => {
    api.getSignList()
      .then(res => {
        let data = res.body.data
        commit('GET_SIGN_LIST', data)
      })
  },

  //  添加签到账号
  addSignAccount: ({dispatch, commit}, from) => {
    commit('UPDATE_LOADING', true)
    api.addSignAccount(from)
      .then(res => {
        let body = res.body
        commit('UPDATE_LOADING', false)
        if (res.status === 200 && body.status === 0) {
          dispatch('showToast', {
            isShow: true,
            type: 'success',
            text: body.msg
          })
        } else {
          dispatch('showToast', {
            isShow: true,
            type: 'warn',
            text: body.msg
          })
        }
      })
  },

  //  删除签到账号
  deleteSign: ({dispatch, commit}, playload) => {
    api.deleteSignAccount(playload)
      .then(res => {
        if (res.body.status === 0) {
          commit('DELETE_SIGN', playload.account)
          dispatch('showToast', {
            isShow: true,
            type: 'success',
            text: res.body.msg
          })
        }
      })
  }
}

const mutations = {
  [type.GET_NEW_DATA] (state, data) {
    state.list = data
  },
  [type.GET_SEARCH_DATA] (state, data) {
    state.list = data
  },
  [type.GET_SIGN_LIST] (state, data) {
    state.signerList = data
  },
  [type.DELETE_SIGN] (state, ac) {
    state.signerList = state.signerList.filter(t => t.user !== ac)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
