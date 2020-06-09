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
  name: 'PostCard',
  props: {
    posts: Array
  },
  computed: {
    getPosts () {
      return this.posts
    }
  },
  methods: {
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.refreshParent()
    }
  }
}
</script>
