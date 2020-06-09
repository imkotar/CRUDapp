<template>
  <div>
    <v-card
      max-width="600"
      outlined
      v-for="post in posts"
      :key="post.id"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{post.title}}</v-list-item-title>
          <v-list-item-subtitle>{{post.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'Posts',
  computed: {
    posts () {
      console.log(this.$store.state.posts.posts)
      return this.$store.state.posts.posts
    }
  },
  methods: {
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.refreshParent()
    }
  },
  created () {
    this.$store.dispatch('getPosts')
  }
}
</script>
