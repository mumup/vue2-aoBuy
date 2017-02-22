/**
 * Created by pmumu on 2017/2/19.
 */
import * as type from '../mutation-type'
import api from '../../api'

const state = {
  list: [],
  listLength: null
}

const getters = {
  list: state => state.list,
  listLength: state => state.list.length
}

const actions = {
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
  }
}

const mutations = {
  [type.GET_NEW_DATA] (state, data) {
    state.list = data
  },
  [type.GET_SEARCH_DATA] (state, data) {
    state.list = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
