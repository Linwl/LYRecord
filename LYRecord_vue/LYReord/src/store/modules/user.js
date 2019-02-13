import {
  login
} from '@/api/login'

const user = {
  state: {
    token: '',
    name: '',
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
  },
  actions: {
    /**
     * 登录
     *
     * @param {*} {
     *         commit
     *       }
     * @param {*} userInfo
     */
    Login({
      commit
    }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          commit('SET_TOKEN', response.Param)
          commit('SET_NAME', user.NickName)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user;
