import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import '../services/auth_service'
import {isLoggedIn} from "../services/auth_service";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    role:'admin',
    idToken : null,
    userId : null,
    fav : false,
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
    productAdd : {
      name : '',
      price : 0,
      cat_id : 1,
      caption : '',
      pic : ''
    }

  },

  getters: {
    cartNum: (state) => {
      return state.counter;
    },
    subMenu: state => {
      return state.subMenu;

    },
    style: state => {
      return state.style;

    },
    stores: state => {
      return state.stores;
    },
    isLoggedIn(){
      return isLoggedIn();
    },


  }
  ,
  mutations: {
    increment: state => {
      state.counter++;
    },
    authUser(state , userData){
      state.idToken = userData.token;
      state.userId = userData.userId
    },


    deleteFromCart(){

    },

    turnOff: (state, payload) => {

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
    },

  },
  actions : {
    signup({commit} , authData){
      axios.post('/register',{
        name : authData.name,
        email : authData.email,
        password : authData.password,
        address : authData.address,
        phone : authData.phone,
        role : authData.role,
        returnSecureToken: true


      }).then(response => {
        alert(response.data.idToken)
        commit('authUser' , {

          token : response.data.idToken,
          userId : response.data.userId,


        })
      })
        .catch(e => {})
    }
    ,
    login({commit} , authData){

      axios.post('users/login' , {
        email : authData.email,
        password : authData.password,

      }).then(function (response) {
        commit('authUser' , {
          token : response.data.access_token,
          userId: response.data.id

        })



      })
        .catch(function (error) {
          // handle error
          console.log(error[0])
        })

    },


  }


})
