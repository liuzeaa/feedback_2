import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '@/views/LoginView'
import home from '@/views/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
