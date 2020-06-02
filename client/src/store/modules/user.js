import Axios from 'axios'
const baseURL = 'http://localhost:7000/users'

export default {
  state: {},
  getters: {},
  mutations: {
    getToken (state, token) {
      state.token = token
    }
  },
  actions: {
    getToken (context, credentials) {
      return Axios.post(`${baseURL}/login`, {
        email: credentials.email,
        password: credentials.password
      })
        .then(res => {
          console.log(res.data)
          if (res.data.error) {
            return res.data
          } else {
            const token = res.data.token
            localStorage.setItem('access_token', token)
            context.commit('getToken', token)
            return res.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
