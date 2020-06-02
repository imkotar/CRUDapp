<template>
  <div class="menu">
    <Register/>
    <Login/>
    <Logout/>
  </div>
</template>
<script>
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
export default {
  name: 'Authentication',
  components: {
    Login,
    Logout,
    Register
  },
  data () {
    return {
      isLogged: false
    }
  }
}
</script>
<style scoped>
.menu{
  display: flex
}
</style>
