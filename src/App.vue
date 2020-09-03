<template>

  <div id="app">

    <Nav></Nav>

    <transition name="fade">
      <router-view></router-view>

    </transition>




    <Footer ></Footer>

  </div>




</template>

<script>


  import "./assets/css/style.css"
  import Footer from "./components/Footer";
  import Nav from "./components/Nav";
  import "../node_modules/regenerator-runtime/runtime-module";





export default {

  components: {

    Footer,
    Nav,
      },
  data(){
    return {
      fav : true
    }
  },
  methods : {
    fav(){
      if(document.getElementsByClassName("fa-star").classList.remove("fas")){
        console.log(true)
      }
    }
  }

}
</script>

<style>

  @font-face {
    font-family: vasir;
    src: url('/src/assets/font/Vazir.woff');

    font-weight: normal;
    font-style: normal;
  }

.fade-enter {
  opacity: 0;
}
  .fade-enter-active{
    transition: opacity 0.75s;
  }
  .fade-leave{
    opacity: 1;
  }

  .fade-leave-active{
    transition: opacity 0.75s;
opacity: 0;
  }
  #app{
    direction: rtl;
  }


</style>
