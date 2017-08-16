import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import login from '@/components/login'
import navbar from '@/components/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [{
        path: '/navbar',
        name: 'nabvar',
        component: navbar
      }]
    },
    {
      path: '/',
      name: 'Login',
      component: login
    }
  ]
})
