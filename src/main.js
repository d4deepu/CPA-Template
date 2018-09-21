import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
import vmodal from 'vue-js-modal'
import router from './router'

Vue.use(vmodal)

Vue.use(ToggleButton)



Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
