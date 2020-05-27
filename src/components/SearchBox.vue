<template>
  <div class="search-block-container">


    <img style="width: 250px;height: 250px;" src="/src/img/logo.svg" >

    <div style="display: flex;justify-content: center;flex-direction: row;margin-top: 27px">
      <input style="border: #e3342f 3px solid;border-radius: 5px 0 0 0" size="55">
      <button style="background-color: #ff1a1c;border-radius: 0  5px 5px 0;margin: 0;border: 0;padding-top: 5px;">
        <img style="" src="/src/img/search.svg" height="30px" width="30px"></button>
    </div>



  </div>
</template>

<script>
    export default {
        name: "SearchBox"
    }
</script>


<style scoped>
  .search-block-container {
    animation-name: search-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url("/src/img/back.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 1000px;
    width: 100%;

  }

</style>
