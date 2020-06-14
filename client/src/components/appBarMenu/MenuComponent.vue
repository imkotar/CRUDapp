<template>
  <div class="menu">
    <v-btn text @click="$router.push('/')">Main Page</v-btn>
    <AuthenticationComponent/>
    <v-tooltip bottom>
      <template v-slot:activator="{ on: tooltip }">
        <v-btn text @click="$router.push('admin')" v-on="tooltip">Admin Dashboard</v-btn>
      </template>
      <span>Log in to use me!</span>
    </v-tooltip>
    <v-btn text @click="$router.push('about')">About this App</v-btn>
  </div>
</template>
<script>
import AuthenticationComponent from '../Authentication/AuthenticationComponent'

export default {
  name: 'menuComponent',
  data () {
    return {
    }
  },
  components: {
    AuthenticationComponent
  }
}
</script>
<style scoped>
.menu{
  display: flex
}
</style>
