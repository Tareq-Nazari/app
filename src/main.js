import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Lightbox from 'vue-easy-lightbox'
import {store} from "./store/store";
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook, faInstagram, faYoutube)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)


axios.defaults.baseURL = ''


import VueRouter from 'vue-router'
import {routes} from './router'




Vue.use( VueRouter);


const router = new VueRouter({
  routes,
  mode : 'history'
})






new Vue({
  el:'#app',
  router,
  store,



  render: h => h(App)

})
