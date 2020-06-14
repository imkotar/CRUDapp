<template>
  <v-card class="mx-auto" max-width="600" min-width="350" outlined>
    <v-card-title>
      <p>About this application</p>
    </v-card-title>
    <v-card-text>
      {{info}}
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'AboutPage',
  data () {
    return {
      info: 'This is my full-stack CRUD application using: Express, Vue.js, Vuetify, Vuex and MongoDb. As logged user you will have access to create/modify/update posts displayed on the Main Page. You can access the administration panel after registering and logging in. There is already registered account that you can acces by clicking "Test Login" under Login button. The app is constantly upgraded and history of that process can be seen on my GitHub repo.'
    }
  }
}
</script>

<style scoped>

</style>
