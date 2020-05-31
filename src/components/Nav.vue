<template>
<div class="nav-container">

  <div class="item">خانه</div>
  <div class="item">فروشگاه ها</div>
  <div class="item">محصولات</div>
  <div class="item">تماس با ما</div>
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
