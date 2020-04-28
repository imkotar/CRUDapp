<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">{{buttonName}}</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        <v-text-field
          label="Title"
          v-model=title
          outlined
        >
        </v-text-field>
      </v-card-title>
      <v-card-text>
        <v-textarea
            label="Post description"
            v-model=description
            outlined
          ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">CLOSE</v-btn>
        <v-btn v-if="post._id===undefined" color="green darken-1" text @click="addPost()">add new post</v-btn>
        <v-btn v-else color="green darken-1" text @click="modifyPost(post._id)">SAVE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'EditPostCard',
  props: {
    buttonName: String,
    post: Object
  },
  data () {
    return {
      dialog: false,
      title: this.post.title,
      description: this.post.description
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost(this.title, this.description)
      this.title = ''
      this.description = ''
      this.dialog = false
      this.refreshParent()
    },
    async modifyPost (id) {
      await PostsService.modifyPost(id, this.title, this.description)
      this.dialog = false
      this.refreshParent()
    },
    refreshParent () {
      this.$emit('refreshParent')
    }
  }
}
</script>
