<template>
  <mt-header fixed title="豆瓣app">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button slot="right">分享</mt-button>
  </mt-header>
</template>
<style scoped>
  header{
    background-color: #42bd56;
  }
</style>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
