import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    subMenu: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    },
    style: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
    },
    style5: "border-bottom:1px solid ",
    counter: 0,

  },

  getters: {
    increase: state => {
      return state.counter;
    },
    subMenu: state => {
      return state.subMenu ;

    },
    style: state => {
      return state.style;

    },

  }
  ,
  mutations: {
    increment: state => {
      state.counter++;
    },
    turnOff: (state,payload) => {
      if (state.subMenu[payload] === false) {
        var i;
        for (i = 1; i <= 8; i++) {
          state.subMenu[i] = false;
          state.style[i] = 'background-color:black';
        }
        state.subMenu[payload] = true;
        state.style[payload] = 'background-color:cornflowerblue';

      } else {
        state.subMenu[payload] = false;
        state.style[payload] = 'background-color:black';
      }
    }
  }


})
