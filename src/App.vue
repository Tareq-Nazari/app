<template>

  <div id="app">
    <Nav></Nav>
   <router-view></router-view>

    <main-slider></main-slider>
    <Footer></Footer>

  </div>

</template>

<script>


  import MainSlider from "./components/MainSlider";

  import Footer from "./components/Footer";
  import Nav from "./components/Nav";



export default {

  components: {

    MainSlider,
    

    Footer,
    Nav,


  }

}
</script>

<style>



</style>
