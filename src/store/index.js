/**
 * Created by pmumu on 2017/1/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import User from './modules/user'
import Dialog from './modules/dialog'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    User,
    Dialog
  },
  strict: debug
})
