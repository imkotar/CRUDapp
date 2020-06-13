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
          <div class="overline mb-4">{{post._id}}</div>
          <v-list-item-title class="headline mb-1">{{post.title}}</v-list-item-title>
          <v-list-item-subtitle>{{post.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn text @click="deletePost(post._id)">DELETE</v-btn>
        <EditPostCard buttonName="Modify" :post="post" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'
import EditPostCard from './EditPostCard'

export default {
  name: 'AdminPostCard',
  components: {
    EditPostCard
  },
  props: {
    posts: Array
  },
  methods: {
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.refreshParent()
    }
  }
}
</script>
