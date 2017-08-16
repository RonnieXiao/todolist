<template>
  <mt-tabbar v-model="selected" fixed @click.native="handleClick">
    <mt-tab-item id="home">
      <img slot="icon" src="/static/img/28.png">home
      <!--<router-link to="/index/"></router-link>-->
    </mt-tab-item>
    <mt-tab-item id="one">
      <img slot="icon" src="/static/img/28.png">one
      <!--<router-link to="/Hello"></router-link>-->
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
        selected: ''
      }
    },
    methods: {
      handleClick: function () {
        console.log(this.selected)
        switch (this.selected) {
          case 'home':
            this.$router.push({path: 'index'})
            break
          case 'one':
            this.$router.push({path: 'Hello'})
            break
        }
      }
    }
  }
</script>
