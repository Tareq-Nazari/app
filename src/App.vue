<template>

  <div id="app">

    <html dir="rtl">



    <Nav></Nav>
    <ProductDetail></ProductDetail>

    <Footer></Footer>
    </html>
  </div>

</template>

<script>


  import WeeklyBox from "./components/WeeklyBox";

  import Footer from "./components/Footer";
  import Nav from "./components/Nav";
  import ProductDetail from "./components/ProductDetail";



export default {

  components: {

    WeeklyBox,
    Footer,
    Nav,
    ProductDetail,



  }

}
</script>

<style>



</style>
