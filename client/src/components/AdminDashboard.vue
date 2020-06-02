<template>
  <div class="center">
    <h1>Admin Dashboard page</h1>
    <EditPostCard buttonName="Add new post" :post="newPost" v-on:refreshParent="viewData()" />
    <AdminPostCard :posts="posts" v-on:refreshParent="viewData()"/>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import AdminPostCard from './AdminPostCard'
import EditPostCard from './EditPostCard'

export default {
  name: 'AdminDashboard',
  components: {
    AdminPostCard,
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
      if (localStorage.getItem('access_token') === null) {
        this.$router.push('/')
      }
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
