<template>
  <div id="home">
    <mt-tabbar class="tab" v-model="selected" fixed >
      <mt-tab-item id="home">
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon" v-show="selected != 'home'" class="normal">
        <img slot="icon" src="../assets/images/ic_tab_home_active.png" v-show="selected == 'home'" class="active">首页
      </mt-tab-item>
      <mt-tab-item id="movie">
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon" v-show="selected != 'movie'" class="normal">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon" v-show="selected == 'movie'" class="active">
        书影音
      </mt-tab-item>
      <mt-tab-item id="status">
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon" v-show="selected != 'status'" class="normal">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon" v-show="selected == 'status'" class="active">
        广播
      </mt-tab-item>
      <mt-tab-item id="group">
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon" v-show="selected != 'group'" class="normal">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="icon" v-show="selected == 'group'" class="active">
        小组
      </mt-tab-item>
      <mt-tab-item id="myself">
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon" v-show="selected != 'myself'" class="normal">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon" v-show="selected == 'myself'" class="active">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container class="home_main" v-model="selected">
      <div class="tab-main" v-show="selected == 'home'">
        <router-view></router-view>
      </div>
      <div class="movie" v-show="selected == 'movie'">
        <!--<div class="tab-menu">-->
          <!--<div :class="[tabName,{checkStyle:chooseIndex == index}]" @click='chooseItem(index,item.type)'-->
               <!--v-for='(item,index) in menuList'>{{item.name}}-->
          <!--</div>-->
        <!--</div>-->
        <movie></movie>
      </div>
      <div class="radio" v-show="selected == 'radio'">
        <radio></radio>
      </div>
      <div class="search" v-show="selected == 'search'">
        <search></search>
      </div>
      <div class="myself" v-show="selected == 'myself'">
        <myself></myself>
      </div>
    </mt-tab-container>
  </div>

</template>
<script>
  import movie from './movie'
//  import radio from 'status.vue'
//  import search from 'group.vue'
//  import myself from 'myself.vue'
  export default {
    data () {
      return {
        selected: 'home',
        chooseIndex: '',
        tabName: 'tabName',
        menuList: [{name: '电影', type: 1}, {name: '读书', type: 2}, {name: '电视', type: 3}, {
          name: '同城',
          type: 4
        }, {name: '音乐', type: 5}],
        isShow: true
      }
    },
    methods: {
      chooseItem (index, type) {
        this.chooseIndex = index
        console.log(type)
        switch (type) {
          case 1:
            this.$router.push({path: '/home'})
            break
          case 2:
            this.$router.push({path: '/home/book'})
            break
          case 3:
            this.$router.push({path: '/home/television'})
            break
          case 4:
            this.$router.push({path: '/home/city'})
            break
          case 5:
            this.$router.push({path: '/home/music'})
            break
        }
      }
    },
    components: {
      movie
//      radio,
//      search,
//      myself
    }
  }
</script>
<style>
.active{
  color: #42bd56;
}
</style>
