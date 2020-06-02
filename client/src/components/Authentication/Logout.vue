<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn text @click="clearToken" v-on="on">Logout</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">
        <p>You are logged out!</p>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" text @click="close">CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Logout',
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    clearToken () {
      localStorage.removeItem('access_token')
    },
    close () {
      this.$router.push('/')
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
