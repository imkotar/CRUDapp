<template>
  <div class="menu">
    <div>
      <Register/>
      <Login/>
    </div>
    <v-btn text @click="logout()">Logout</v-btn>
  </div>
</template>
<script>
import Login from './Login'
import Register from './Register'
export default {
  name: 'Authentication',
  components: {
    Login,
    Register
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/logout')
    }
  }
}
</script>
<style scoped>
.menu{
  display: flex
}
</style>
