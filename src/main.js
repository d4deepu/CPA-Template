import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
import vmodal from 'vue-js-modal'
import Router from 'vue-router'

import LgContainer from "./components/LgContainer.vue"
import router from './router'

Vue.use(vmodal)

Vue.use(ToggleButton)

Vue.use(Router)

Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      component: LgContainer
    }
  ]
})

new Vue({
  Router,
  router,
  render: h => h(App)
}).$mount('#app')
