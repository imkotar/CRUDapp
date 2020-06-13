<template>
  <div class="center">
    <h1>Admin Dashboard page</h1>
    <EditPostCard buttonName="Add new post" :post="newPost" v-on:refreshParent="viewData()" />
    <Posts/>
  </div>
</template>

<script>
import EditPostCard from './EditPostCard'
import Posts from './Posts'

export default {
  name: 'AdminDashboard',
  components: {
    EditPostCard,
    Posts
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
