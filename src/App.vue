<template>

  <div id="app">
    <html dir="rtl">
    <Nav></Nav>    <SearchBox></SearchBox>
    <weekly-box></weekly-box>
    <Footer></Footer>
    </html>
  </div>

</template>

<script>

  import SearchBox from "./components/SearchBox";
  import WeeklyBox from "./components/WeeklyBox";
  import Footer from "./components/Footer";
  import Nav from "./components/Nav";
export default {

  components: {
    SearchBox,
    WeeklyBox,
    Footer,
    Nav,
  }

}
</script>

<style>

</style>
