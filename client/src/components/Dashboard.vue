<template>
  <div class="center">
    <h1>Main page</h1>
    <PostCard :posts="posts"/>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import PostCard from './PostCard'

export default {
  name: 'Dashboard',
  components: {
    PostCard
  },
  data () {
    return {
      posts: [],
      newPost: {}
    }
  },
  async created () {
    try {
      this.posts = await PostsService.getPosts()
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
</style>
