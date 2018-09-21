import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Success from './components/Success.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
      },
      {
        path: '/success',
        name: 'success',
        component: Success
      }
    ]
  })