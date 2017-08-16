<template>
  <div class="editor">
    <span>Hello{{msg}},{{ $route.params.id }}</span>
    <navbar></navbar>
  </div>
</template>
<style>

</style>

<script>
  import navbar from './navbar.vue'
export default {
    data () {
      return {
        msg: 'aaa'
      }
    },
    components: {
      navbar
    }
}
</script>

<style scoped>

</style>
