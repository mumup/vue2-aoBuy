/**
 * Created by pmumu on 2017/2/19.
 */
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
    api.GetNewData(data)
      .then((res) => {
        if (res) {
          commit(type.GET_NEW_DATA, res)
        } else {
          console.log('网络错误')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const mutations = {
  [type.GET_NEW_DATA] (state, data) {
    state.list = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
