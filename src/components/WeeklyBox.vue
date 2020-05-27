<template>
  <div class="weekly-box-container">

    <div class="coll">
      <img  style="margin: auto;border-radius: 10px" height="80%" width="90%" src="/src/img/movie1.jpg">
      <h4 style="margin: auto">Moonlight is a great movie</h4>
    </div>
    <div class="coll">
      <img  style="margin: auto;border-radius: 10px" height="80%" width="90%" src="/src/img/movie1.jpg">
      <h4 style="margin: auto">Moonlight is a great movie</h4>
    </div>
    <div class="coll">
      <img  style="margin: auto;border-radius: 10px" height="80%" width="90%" src="/src/img/movie1.jpg">
      <h4 style="margin: auto">Moonlight is a great movie</h4>
    </div>
    <div class="coll">
      <img  style="margin: auto;border-radius: 10px" height="80%" width="90%" src="/src/img/movie1.jpg">
      <h4 style="margin: auto">Moonlight is a great movie</h4>
    </div>
    <div class="coll">
      <img  style="margin: auto;border-radius: 10px" height="80%" width="90%" src="/src/img/movie1.jpg">
      <h4 style="margin: auto">Moonlight is a great movie</h4>
    </div>
    <div class="coll">
      <img  style="margin: auto;border-radius: 10px" height="80%" width="90%" src="/src/img/movie1.jpg">
      <h4 style="margin: auto">Moonlight is a great movie</h4>
    </div>



  </div>
</template>

<script>
    export default {
        name: "WeeklyBox"
    }
</script>

<style scoped>
  .weekly-box-container {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: 400px 400px;
    column-gap: 20px;
    row-gap: 20px;
    justify-content: center;

    border: #E50914 solid 5px;
    margin-top: 10px;
    position: relative;
    padding: 20px;

  }

  .coll {
    background-color: rgba(255,5,2,0.15);
    background-image: radial-gradient(rgba(255,26,28,0.17),white ,white);
    box-shadow: 0px 0px 5px 5px rgba(255,26,28,0.03);
    display: flex;
    flex-direction: column;

    border-radius: 5px;




  }
</style>
