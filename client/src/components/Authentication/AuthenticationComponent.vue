<template>
  <div class="menu">
    <Register/>
    <LoginLogout/>
  </div>
</template>
<script>
import LoginLogout from './LoginLogout'
import Register from './Register'
export default {
  name: 'Authentication',
  components: {
    LoginLogout,
    Register
  }
}
</script>
<style scoped>
.menu{
  display: flex
}
</style>
