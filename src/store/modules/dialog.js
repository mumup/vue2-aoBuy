/**
 * Created by pmumu on 2017/2/19.
 */
import * as type from '../mutation-type'

const state = {
  isLoading: false,
  isToast: false
}

const getters = {
  isLoading: state => state.isLoading,
  isToast: state => state.isToast
}

const actions = {}

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
