<template>
  <v-app>
  <v-app-bar app>
    <!-- -->
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
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
}
</script>
