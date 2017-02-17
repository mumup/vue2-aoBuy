/**
 * Created by pmumu on 2017/1/30.
 */
import api from '../../api'
import * as type from '../mutation-type'

const state = {
  logo: 'AoBuy',
  id: JSON.parse(localStorage.getItem('user')) || null
}

// getters
const getters = {
  logo: state => state.logo
}

const actions = {
  UserLogin: ({commit}, data) => {
    api.Login(data)
      .then((res) => {
        if (res.body) {
          commit(type.USER_SIGNIN, data.user)
          window.location = '/user'
        } else {
          console.log('网络错误')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },

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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
