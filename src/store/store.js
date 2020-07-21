import Vue from 'vue'
import Vuex from 'vuex'
import user from 'module/User'

export const store = new Vuex.store({
    state: {
      cart : [{}],
      style5:"border-bottom:1px solid "
    },
  moduls:{
      user : user
  }

})
