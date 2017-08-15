import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index/:id',
      name: 'index',
      component: index,
      children: [{
        path: '/',
        name: 'Hello',
        component: Hello
      }]
    },
    {
      path: '/',
      name: 'Login',
      component: login
    }
  ]
})
