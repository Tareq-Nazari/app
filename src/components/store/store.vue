<template>
<div class="container">
  <img height="300px" width="100%" src="src/img/store1.jpeg">
  <div></div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>


</div>
</template>

<script>
    export default {
        name: "store"
    }
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(20,1fr);
  }
</style>
