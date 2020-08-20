<template>

<div class="nav-container">

  <div class="item" ref="t" v-on:click="currentNav($event)" id="/"><router-link to="/">خانه</router-link></div>
  <div class="item" @click="currentNav($event)" id="/store"><router-link to="/store">فروشگاه ها</router-link></div>
  <div class="item" @click="currentNav($event)" id="/products"><router-link to="/product">محضولات</router-link></div>
  <div class="item" @click="currentNav($event)" id="/contact"><router-link to="/contact">تماس با ما</router-link></div>
  <div class="item" v-on:click="currentNav($event)" id="/about">درباره ما</div>

  <div class="item">لوگو</div>
  <div style="cursor: pointer" v-on:click="searchClick = !searchClick"><font-awesome-icon :icon="['fas','search']" /></div>
  <div style="position:relative;cursor: pointer" v-on:click="shopClick = 1"><font-awesome-icon :icon="['fas','shopping-cart']" /><div style="position:absolute;height: 15px;width: 15px;
  background-color: red;border-radius: 50%;top: 58%;right: 14%;font-size: 12px;color: white">{{counter}}</div></div>
  <div><font-awesome-icon :icon="['fas','user']" /></div>
  <transition name="fade">
    <div v-if="searchClick" style="height: 50px;width: 400px;display: flex;align-items: center;background-color: white;border-radius: 7px;border:3px solid limegreen;position: absolute;top: 50px;left: 37px">
      <input placeholder="نام محصول ..." style="outline: none;font-size: 19px;background-color: #d9dddc;border: none;height: 40px;width: 320px;padding: 5px;display: inline-block">
      <div style="display: inline-block;width: 70px;height: 50px;background-color: #d81c1e;text-align: center;cursor: pointer">
        <font-awesome-icon :icon="['fas','search']" :style="{color : 'white',width: '28px',height: '28px',marginTop: '10px'}"></font-awesome-icon>

      </div>
    </div>
  </transition>


  <transition name="fade">

  <div v-if="shopClick == 1" class="shopping-cart" style="">
    <div style="height: 5%;width: 90%;background-color: white;border-radius: 10px">
      <p style="font-size: 13px;position: absolute;top: -8px;left: 118px">سبد خرید</p>
      <img v-on:click="shopClick=0" src="src/img/close.svg"  style="cursor: pointer;position: absolute;right: 4px;top: 5px;z-index: 10" height="20px" width="20px">
    </div>

    <div style="height: 90%;width: 95%;background-color: white;border-radius: 7px;padding: 1%;overflow: auto">

      <div v-for="r in forc" style="width: 100%;height: 55px;border-bottom: 1px solid black;display: flex;justify-items: center;justify-content: space-around;align-items: center">
        <img src="src/img/chetoz.webp" height="50px" width="50px" >
        <p>xxxxxxxxxxxxxx</p>
        <p>price</p>
        <font-awesome-icon :icon="['fas','times-circle']"  :style="{color : 'red'}"/>
      </div>


    </div>
    <button style="position: absolute;bottom: 0;outline: none;left: 100px;height: 30px;width: 100px;background-color: dodgerblue;font-family: vasir;color: white;border: 0;border-radius:  50% 50% 0 0">
      پرداخت
    </button>
    <img src="src/img/triangle.svg" style="z-index: -1;position:absolute;top: -20px;left: 52px;" height="40px" width="40px">

  </div>

  </transition>

</div>



</template>
<script>


  export default {
    name: "Nav",
    data(){
      return {
          shopClick : 0,
          searchClick: false,
          forc : 10
      }

    },

    methods : {
      currentNav(event){

              }



    },
    computed: {
      counter() {
        return this.$store.getters.increase;
      }
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
