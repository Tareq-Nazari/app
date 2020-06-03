import Vue from 'vue'
import App from './App.vue'
import Lightbox from 'vue-easy-lightbox'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter, faFacebook, faInstagram, faYoutube)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Lightbox)


new Vue({
  el: '#app',
  render: h => h(App)
})
