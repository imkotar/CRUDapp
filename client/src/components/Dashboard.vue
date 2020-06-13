<template>
  <div class="center">
    <h1>Main page</h1>
    <Posts/>
  </div>
</template>

<script>
import Posts from './Posts'

export default {
  name: 'Dashboard',
  components: {
    Posts
  }
}
</script>

<style scoped>
  .center{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
</style>
