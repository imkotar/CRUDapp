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
    },
    addPost (state, postData) {
      state.posts.push(postData)
    },
    deletePost (state, id) {
      state.posts = state.posts.filter(({ _id }) => _id !== id)
    },
    modifyPost (state, postData) {
      state.posts.find(({ _id }) => _id === postData.id).title = postData.title
      state.posts.find(({ _id }) => _id === postData.id).description = postData.description
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
    },
    async addPost (context, postData) {
      return Axios.post(`${baseURL}`, {
        title: postData.title,
        description: postData.description
      })
        .then(res => context.commit('addPost', res.data))
        .catch(err => console.log(err))
    },
    async deletePost (context, id) {
      context.commit('deletePost', id)
      return await Axios
        .delete(`${baseURL}/${id}`)
        .then(context.commit('deletePost', id))
        .catch(err => console.log(err))
    },
    async modifyPost (context, postData) {
      return Axios.patch(`${baseURL}/${postData.id}`, {
        title: postData.title,
        description: postData.description
      })
        .then(context.commit('modifyPost', postData))
        .catch(err => console.log(err))
    }
  }
}
