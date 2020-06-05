<template>

  <div id="app">

    <Nav></Nav>
   <router-view></router-view>

   

    <Footer></Footer>

  </div>

</template>

<script>



  import Footer from "./components/Footer";
  import Nav from "./components/Nav";
  import ProductDetail from "./components/ProductDetail";



export default {

  components: {











    Footer,
    Nav,
    ProductDetail,



  }

}
</script>

<style>



</style>
