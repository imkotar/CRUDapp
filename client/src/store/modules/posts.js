import Axios from 'axios'
const baseURL = 'http://localhost:7000/posts'

export default {
  state: {
    posts: []
  },
  getters: {},
  mutations: {
    getPosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async getPosts (context) {
      return await Axios
        .get(baseURL)
        .then(res => {
          context.commit('getPosts', res.data)
          return res.data
        })
        .catch(err => console.log(err))
    }
  }
}
