/**
 * Created by pmumu on 2017/2/19.
 */
/**
 * Created by pmumu on 2017/2/19.
 */
import * as type from '../mutation-type'

const state = {
  list: [],
  listLength: null
}

const getters = {
  list: state => state.list,
  listLength: state => state.list.length
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
