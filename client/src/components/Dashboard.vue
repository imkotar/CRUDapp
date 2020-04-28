<template>
  <div>
    <h1>Dashboard page</h1>
    <button @click="viewData">refresh posts</button>
    <EditPostCard buttonName="Add new post" :post="newPost" v-on:refreshParent="viewData()" />
    <PostCard :posts="posts" v-on:refreshParent="viewData()"/>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import PostCard from './PostCard'
import EditPostCard from './EditPostCard'

export default {
  name: 'Dashboard',
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

</style>
