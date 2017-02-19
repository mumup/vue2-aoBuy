/**
 * Created by pmumu on 2017/2/19.
 */
import * as type from '../mutation-type'

const state = {
  isLoading: false
}

const getters = {
  isLoading: state => state.isLoading
}

const actions = {}

const mutations = {
  [type.UPDATE_LOADING] (state, status) {
    state.isLoading = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
