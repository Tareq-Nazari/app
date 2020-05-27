<template>
  <div id="app">
    <SearchBox></SearchBox>
    <weekly-box></weekly-box>
    <Footer></Footer>
  </div>
</template>

<script>

  import SearchBox from "./components/SearchBox";
  import WeeklyBox from "./components/WeeklyBox";
  import Footer from "./components/Footer";
export default {

  components: {
    SearchBox,
    WeeklyBox,
    Footer
  }

}
</script>

<style>

</style>
