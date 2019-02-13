import {
  login
} from '@/api/login'

const user = {
  state: {
    token: getToken(),
    name: getUser(),
    avatar: '',
    views: getViews(),
  },
  mutations: {

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
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
