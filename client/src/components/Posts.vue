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
          <div v-if="(path === '/admin')" class="overline mb-4">{{post._id}}</div>
          <v-list-item-title class="headline mb-1">{{post.title}}</v-list-item-title>
          <v-list-item-subtitle>{{post.description}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions v-if="(path === '/admin')">
          <v-btn text @click="deletePostTrigger(post._id)">DELETE</v-btn>
          <EditPostCard buttonName="Modify" :post="post" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EditPostCard from './EditPostCard'
import { mapActions } from 'vuex'

export default {
  name: 'Posts',
  data () {
    return {
      path: String
    }
  },
  components: {
    EditPostCard
  },
  computed: {
    posts () {
      return this.$store.state.posts.posts
    },
    currentRouteName () {
      return this.$router.name
    }
  },
  methods: {
    ...mapActions([
      'getPosts',
      'deletePost'
    ]),
    deletePostTrigger (id) {
      this.deletePost(id)
    }
  },
  created () {
    this.getPosts()
    this.path = this.$router.history.current.path
  }
}
</script>
