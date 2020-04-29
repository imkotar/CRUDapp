<template>
  <v-app>
  <v-app-bar app>
    <AppBar/>
  </v-app-bar>
  <!-- <v-navigation-drawer app>  </v-navigation-drawer> -->
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>

  <v-footer app>
  </v-footer>
</v-app>
</template>

<script>
import AppBar from '../src/views/AppBar'
export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  })
}
</script>
