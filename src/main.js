import Vue from 'vue'
import App from './App.vue'


import Lightbox from 'vue-easy-lightbox'

import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faFacebook, faInstagram, faYoutube)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


axios.defaults.baseURL = 'http://127.0.0.1/test/public/api/'


import VueRouter from 'vue-router'
import {routes} from './router'
import VueCarousel from 'vue-carousel';



Vue.use( VueRouter , Lightbox);
const router = new VueRouter({
  routes,
  mode : 'history'
})






new Vue({
  el: '#app',
  router,

  render: h => h(App)
})
