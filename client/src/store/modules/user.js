import Axios from 'axios'
const baseURL = 'http://localhost:7000/users'

export default {
  state: {},
  getters: {},
  mutations: {
    getToken (state, data) {
      state.token = data.token
    }
  },
  actions: {
    getToken (context, credentials) {
      return Axios.post(`${baseURL}/login`, {
        email: credentials.email,
        password: credentials.password
      })
        .then(res => {
          if (res.data.error) {
            return res.data
          } else {
            const data = res.data
            localStorage.setItem('access_token', data.token)
            context.commit('getToken', data)
            return res.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
