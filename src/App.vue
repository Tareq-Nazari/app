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

export default {

  components: {
    SearchBox,
    WeeklyBox,

  }

}
</script>

<style>

</style>
