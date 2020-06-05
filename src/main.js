import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueRouter from 'vue-router'
import {routes} from './router'
import VueCarousel from 'vue-carousel';



Vue.use( VueRouter);
const router = new VueRouter({
  routes,
  mode : 'history'
})



new Vue({
  el: '#app',
  router,

  render: h => h(App)
})
