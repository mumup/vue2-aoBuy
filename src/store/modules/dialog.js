/**
 * Created by pmumu on 2017/2/19.
 */
import * as type from '../mutation-type'

const state = {
  isLoading: false,
  isToast: {
    isShow: false,
    type: 'success',
    text: ''
  }
}

const getters = {
  isLoading: state => state.isLoading,
  isToast: state => state.isToast
}

const actions = {
  showToast: ({commit}, status) => {
    commit(type.UPDATE_TOAST, status)
    setTimeout(() => {
      commit(type.UPDATE_TOAST, {isShow: false})
    }, status.time || 2000)
  }
}

const mutations = {
  [type.UPDATE_LOADING] (state, status) {
    state.isLoading = status
  },
  [type.UPDATE_TOAST] (state, status) {
    state.isToast = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
