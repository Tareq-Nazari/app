<template>

  <div id="app">

    <Nav></Nav>
   <router-view></router-view>

    <main-slider></main-slider>


    <html dir="rtl">



    <Nav></Nav>
    <ProductDetail></ProductDetail>

    <Footer></Footer>

  </div>

</template>

<script>


  import MainSlider from "./components/MainSlider";

  import Footer from "./components/Footer";
  import Nav from "./components/Nav";
  import ProductDetail from "./components/ProductDetail";



export default {

  components: {


    MainSlider,



    WeeklyBox,




    Footer,
    Nav,
    ProductDetail,



  }

}
</script>

<style>



</style>
