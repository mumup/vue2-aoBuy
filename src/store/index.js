/**
 * Created by pmumu on 2017/1/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import User from './modules/user'
import Dialog from './modules/dialog'
import Search from './modules/search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    User,
    Dialog,
    Search
  },
  strict: debug
})
