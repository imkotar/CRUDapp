import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: User,
    posts: Posts
  }
})
