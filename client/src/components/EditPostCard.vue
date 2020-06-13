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
        <v-btn v-if="post._id===undefined" color="green darken-1" text @click="addPostTrigger()">add new post</v-btn>
        <v-btn v-else color="green darken-1" text @click="modifyPostTrigger(post._id)">SAVE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

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
    ...mapActions(['modifyPost', 'addPost']),
    modifyPostTrigger (id) {
      const postData = {
        id: id,
        title: this.title,
        description: this.description
      }
      this.modifyPost(postData)
      this.dialog = false
    },
    addPostTrigger () {
      const postData = {
        title: this.title,
        description: this.description
      }
      this.addPost(postData)
      this.dialog = false
    }
  }
}
</script>
