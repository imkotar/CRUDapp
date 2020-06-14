<template>
  <v-card class="mx-auto" max-width="400" outlined>
    <v-card-title>
      <p>You are logged out!</p>
    </v-card-title>
    <v-card-text>
      Click OK to continue.
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green" text @click="close">OK</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    close () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
