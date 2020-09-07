<template>

<div class="nav-container">

  <div class="item" ref="t" v-on:click="currentNav($event)" id="/"><router-link to="/">خانه</router-link></div>
  <div class="item" @click="currentNav($event)" id="/store"><router-link to="/stores">فروشگاه ها</router-link></div>
  <div class="item" @click="currentNav($event)" id="/products"><router-link to="/products">محصولات</router-link></div>
  <div class="item" @click="currentNav($event)" id="/contact"><router-link to="/contact">درباره ما</router-link></div>
  <div v-if="showDash === true" style="background-color: #E11D20;color: white;border-radius: 6px" class="item" v-on:click="currentNav($event)" id="/about"><router-link style="color: white" to="/dashboard/user/" replace>داشبورد</router-link></div>
  <div v-else class="item"></div>
  <div class="item">لوگو</div>
  <div style="cursor: pointer" v-on:click="searchPage"><font-awesome-icon :icon="['fas','search']" /></div>
  <div v-on:click="getCart" style="position:relative;cursor: pointer" ><font-awesome-icon :icon="['fas','shopping-cart']" /><div style="position:absolute;height: 15px;width: 15px;
  background-color: red;border-radius: 50%;top: 58%;right: 14%;font-size: 12px;color: white">{{cartCounter}}</div></div>
  <div><font-awesome-icon :icon="['fas','user']" style="cursor: pointer" v-on:click="showuserr"/></div>

<transition name="fade">
  <div v-if="showuser" style="width: 100px;height: 150px;background-color: #d6d7ff;position:absolute;left: 12px;top: 55px">
    <button style="height: 33px;width: 76px;color: white;background-color: #00a5bb;margin-top: 25px;border: none;outline: none"><router-link to="/signup" >ثبت نام</router-link></button>
    <button style="height: 33px;width: 76px;color: white;background-color: #f31d21;margin-top: 25px;border: none;outline: none"><router-link to="/login" >ورود</router-link></button>

  </div>
</transition>

  <transition name="fade">

  <div v-if="shopClick == 1" class="shopping-cart" style="">
    <div style="height: 5%;width: 90%;background-color: white;border-radius: 10px">
      <p style="font-size: 13px;position: absolute;top: -8px;left: 118px">سبد خرید</p>
      <font-awesome-icon v-on:click="shopClick=0" :icon="['fas','times-circle']" style="cursor: pointer;position: absolute;right: 4px;top: 5px;z-index: 10;color: red" height="20px" width="20px" />
    </div>

    <div style="height: 90%;width: 95%;background-color: white;border-radius: 7px;padding: 1%;overflow: auto" id="par">

      <div v-for="product in products"  :id="product.id" style="width: 100%;height: 55px;border-bottom: 1px solid black;display: flex;justify-items: center;justify-content: space-around;align-items: center">
        <img src="../img/tshirt.jpg" height="50px" width="50px" >
        <p>{{product.name}}</p>
        <p>{{product.price}}</p>
        <font-awesome-icon :icon="['fas','times-circle']"  style="color : red;cursor: pointer" v-on:click="deleteFromCart(product.id)" />
      </div>


    </div>
    <button style="position: absolute;bottom: 0;outline: none;left: 100px;height: 30px;width: 100px;background-color: dodgerblue;font-family: vasir;color: white;border: 0;border-radius:  50% 50% 0 0">
      <router-link to="/shoppingcart">پرداخت</router-link>

    </button>


  </div>

  </transition>

</div>



</template>
<script>


  import {isLoggedIn} from "../services/auth_service";
  import axios from 'axios'
  import {http} from "../services/http_service";
  export default {
    name: "Nav",
    data(){
      return {
          shopClick : 0,
          searchClick: false,
          forc : 10,
        user: {
            isLoggedIn: 1
        },
        products : null,
        showDash : false,
        cartCounter: null,
        showuser : false
      }

    },

    methods : {
      showuserr(){
       let x = false
        x = (this.showuser == false) ? true : false
        this.showuser = x

      },
      currentNav(event){
      },
      getCart(){
        http().post('users/basket/all').then((response) => {
          this.shopClick = 1
          this.products = response.data

        }).catch((e) => {
          return 'خالی است'
        })

      },
      deleteFromCart(id) {
        let x = document.getElementById(id)
        x.remove()
        http().post('users/basket/delete'+id).then((res)=>{

        })
      },
      searchPage(){
        this.$router.push('/search')
      }


    },
    watch: {


    },
    created() {

        this.cartCounter = this.$store.getters.cartNum
        if (this.$store.getters.isLoggedIn) {
          this.showDash = true
        }else this.showDash=false



    },
    computed: {

    }

  }
</script>
<style>

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.5s;

  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  @keyframes shop {
    0% {height: 0}
    25% {height: 100px}
    50%{height: 200px}
    75% {height: 300px}
    100% {height: 400px}

  }
  @font-face {
    font-family: vasir;
    src: url('/src/assets/font/Vazir.woff');

    font-weight: normal;
    font-style: normal;
  }

.nav-container {
  display: grid;
  font-family: vasir;
  grid-template-rows: 50px;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 10fr 1fr 1fr 1fr;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
}
  .nav-container > div {
    text-align: center;
    align-self: center;
  }
  .nav-container > div > a {
    text-decoration: none;
  }
  .shopping-cart {
    background-color: rgb(186 209 189);
    height: 400px;width: 300px;
    position: absolute;
    z-index: 1;
    top: 64px;
    left: 32px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }


</style>
