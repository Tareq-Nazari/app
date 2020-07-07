<template>
  <div style="font-family: vasir">
    <div class="container">
      <img class="header-img" height="100%" width="100%" src="src/img/store1.jpeg">
      <img style="border-radius: 50%;border: solid black 5px" src="src/img/store_profile.jpg" class="profile" >
      <div class="store-name">
        <p style="" >فروشگاه من</p>
      </div>

      <div  class="store-caption">

        <p style="text-align: end">فروشگاه مواد غذایی - فروشگاه باز است</p>

      </div>

    </div>
    <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-around">

      <div dir="rtl" style="border-radius: 2%" class="product-card">

        <img src="src/img/chetoz.webp" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="50%" width="98%">
        <p class="card-title" style="font-size: 20px">چیپس سرکه ای چیتوز</p>
        <p class="card-desc">محدوده وزن:
          کمتر از 150 گرم</p>
        <button class="card-button" @click="addtocart($event)">اقزودن به سبد خرید</button>
      </div>
      <div dir="rtl" style="border-radius: 2%" class="product-card">

        <img src="src/img/chetoz.webp" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="50%" width="98%">
        <p class="card-title" style="font-size: 20px">چیپس سرکه ای چیتوز</p>
        <p class="card-desc">محدوده وزن:
          کمتر از 150 گرم</p>
        <button class="card-button">اقزودن به سبد خرید</button>
      </div>
      <div dir="rtl" style="border-radius: 2%" class="product-card">

        <img src="src/img/chetoz.webp" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="50%" width="98%">
        <p class="card-title" style="font-size: 20px">چیپس سرکه ای چیتوز</p>
        <p class="card-desc">محدوده وزن:
          کمتر از 150 گرم</p>
        <button class="card-button">اقزودن به سبد خرید</button>
      </div>
      <div dir="rtl" style="border-radius: 2%" class="product-card">

        <img src="src/img/chetoz.webp" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="50%" width="98%">
        <p class="card-title" style="font-size: 20px">چیپس سرکه ای چیتوز</p>
        <p class="card-desc">محدوده وزن:
          کمتر از 150 گرم</p>
        <button class="card-button">اقزودن به سبد خرید</button>
      </div>


    </div>

    </div>




</template>

<script>
  import axios from "axios";

  export default {

    data(){
      return {
        data : ''
      }
    },
    mounted() {
      axios
        .get('http://127.0.0.1/test/public/api/store')
        .then(response => (this.info = response.data));
    },

    methods : {
      addtocart(event) {

        console.log(event)

      }
    }

  }
</script>

<style scoped>
  .container {

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(18,30px);
  }
  .header-img {
    grid-column: 1/11;
    grid-row: 1/13;
  }
  .profile {
    grid-column: 9/11;
    grid-row: 10/16;
    height: 100%;
    width: 70%;

  }
  .store-name {
    font-size: 20px;

    grid-row: 13/14;
    grid-column: 7/9;
    text-align: end;
    padding-right: 15px;
    border-radius: 6%;
    align-items: center;


  }
  .store-caption {
    grid-column: 6/9;
    grid-row: 14/15 ;
    justify-content: center;
    font-size: 20px;
  }


  /* center container in the middle */
  .product-card{

    height: 336px;
    width: 250px;
    position: relative;
    border: 1px solid  rgba(208,212,211,0.44);
    box-shadow: rgba(217,221,220,0.44) 20px;


  }
  .card-title {
    position: absolute;
    right: 42px;
    top: 162px;

      }
  .card-button {
    position: absolute;
    right: 9px;
    top: 282px;
    border-radius: 5%;
    border: none;
    background-color: green;
    color: white;
    font-family: vasir;
    height: 14%;
    width: 94%;
    cursor: pointer;
  }
  .card-desc {
    font-size: 10px;
    position: absolute;
    top: 223px;
    right: 62px;
  }





</style>
