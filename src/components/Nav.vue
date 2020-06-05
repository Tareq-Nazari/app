<template>
<div class="nav-container">

  <div class="item"><router-link to="/">خانه</router-link></div>
  <div class="item"><router-link to="/store">فروشگاه ها</router-link></div>
  <div class="item"><router-link to="/product">محضولات</router-link></div>
  <div class="item"><router-link to="/contact">تماس با ما</router-link></div>
  <div class="item">درباره ما</div>
  <div class="item">لوگو</div>
  <div><font-awesome-icon :icon="['fas','search']" /></div>
  <div><font-awesome-icon :icon="['fas','shopping-cart']" /></div>
  <div><font-awesome-icon :icon="['fas', 'user']" /></div>


</div>


</template>
<script>


  export default {
    name: "Nav"

  }
</script>
<style>
  @font-face {
    font-family: vasir;
    src: url('/src/assets/font/Vazir.woff');

    font-weight: normal;
    font-style: normal;
  }
.nav-container {
  display: grid;
  font-family: vasir;
  grid-template-rows: 50px;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 10fr 1fr 1fr 1fr;
}
  .nav-container > div {
    text-align: center;
    align-self: center;
  }

</style>
