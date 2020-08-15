import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {

      style5:"border-bottom:1px solid ",
      counter : 0
    },
    getters : {
      increase : state => {
        return state.counter;
      }
    },
    mutations : {
      increment : state => {
        state.counter++;
      }
    }


})
