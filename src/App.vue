<template>
  <div id="app">
    <m-header></m-header>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  import mHeader from './components/header'
//  import index from './components/index.vue'
//  import login from './components/login.vue'
export default {
    name: 'app',
    components: {
//      index,
//      login,
      mHeader
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
