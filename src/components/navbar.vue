<template>
  <mt-tabbar v-model="selected" value="#home" fixed>
    <mt-tab-item id="home">
      <img slot="icon" src="/static/img/28.png">
      <router-link to="/index/">home</router-link>
    </mt-tab-item>
    <mt-tab-item id="one">
      <img slot="icon" src="/static/img/28.png">
      <router-link to="/Hello">one</router-link>
    </mt-tab-item>
    <mt-tab-item id="two">
      <img slot="icon" src="/static/img/28.png">two
    </mt-tab-item>
    <mt-tab-item id="three">
      <img slot="icon" src="/static/img/28.png">three
    </mt-tab-item>
  </mt-tabbar>
</template>
<style>

</style>
<script>
  export default {
    data () {
      return {
        msg: 'aaa',
        selected: '#home'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
      }
    }
  }
</script>
