<template>
  <div class="center">
    <h1>Admin Dashboard page</h1>
    <EditPostCard buttonName="Add new post" :post="newPost" v-on:refreshParent="viewData()" />
    <PostCard :posts="posts" v-on:refreshParent="viewData()"/>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import PostCard from './PostCard'
import EditPostCard from './EditPostCard'

export default {
  name: 'AdminDashboard',
  components: {
    PostCard,
    EditPostCard
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
  },
  methods: {
    async viewData () {
      this.posts = await PostsService.getPosts()
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
