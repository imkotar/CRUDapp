<template>
  <div>
    <h1>Hello page</h1>
    <button @click="viewData">GET POSTS</button>
    <p>{{getPosts}}</p>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      getPosts: {}
    }
  },
  methods: {
    async viewData () {
      this.getPosts = await PostsService.getPosts()
    }
  }
}
</script>

<style scoped>

</style>
