<template>

  <div style="font-family: vasir">


<swiper class="swiper" :option="swiperOption.s1">
  <swiper-slide >
    <div>
      <img height="400px" width="100%" src="src/img/store-header1.jpg">
    </div>
  </swiper-slide>
  <swiper-slide>
    <div>
      <img height="400px" width="100%" src="src/img/store-header2.jpg">
    </div>
  </swiper-slide>
  <swiper-slide>
    <div>
      <img height="400px" width="100%" src="src/img/store-header3.jpg">
    </div>
  </swiper-slide>
</swiper>





      <br>
<div style="width: 100%;height: 500px;position: relative">
  <div class="offer-container"  style="position: absolute;top: 0px">


    <div class="offer-logo-up">
      <div class="offer-logo-down">
        <h3>تخفیف ویژه</h3>
      </div>

    </div>
<swiper class="swiper" :options="swiperOption.s2">
  <swiper-slide v-for="i in 10">
    <div class="product-card">

      <img class="card-image" src="src/img/chetoz.webp"
           height="50%" width="98%">
      <p class="card-title">چیپس سرکه ای چیتوز</p>

      <p class="card-desc">محدوده وزن:
        کمتر از 150 گرم</p>
      <p class="card-price">قیمت : </p>
      <button class="card-button" @click="increment">افزودن به سبد خرید</button>
    </div>
  </swiper-slide>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
</swiper>



  </div>
  <div style="height: 100%;width: 28%;display: inline-block;position: absolute;left: 6px;top: 0">
    <div style="width: 100%;height: 50%;background-color: #b8dd3c;border-radius: 5px">
      <img src="src/img/takhfif.png" height="100%" width="100%">
    </div>
    <div style="height: 2%"></div>
    <div style="width: 100%;height: 50%;background-color: #c74d4a;border-radius: 5px;margin-top: 4px">
      <img src="src/img/takhfif.png" height="100%" width="100%">
    </div>
  </div>
</div>
<div style="height: 30px"></div>
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3>دسته بندی</h3>
        <div class="ac-title-side"></div>
      </div>
    </div>


      <div style="display: grid;grid-template-rows: 1fr 1fr;grid-template-columns: 1fr 1fr 1fr 1fr"></div>







  </div>



</template>

<script>

  import { Swiper, SwiperSlide , directive} from 'vue-awesome-swiper'
  import * as auth from '../services/auth_service'

  import 'swiper/swiper-bundle.css'
  import axios from 'axios'
  import Offer from './Search'
import {mapMutations} from 'vuex'
  export default {

    components: {
     Swiper,SwiperSlide
    },


    data() {
      return {


        swiperOption: {

          s1 : {
            slidesPerView: 1,
            spaceBetween: 50,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }},
          s2 : {
            slidesPerView: 4,
            spaceBetween: 50,
            freeMode: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }

          },
          s3 : {
            slidesPerView: 6,
            spaceBetween: 120,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }

}
      }
    },

    directives: {
      swiper: directive
    },
   methods : {
     increment(){
       this.$store.commit('increment')
     }

   }
  }

</script>

<style scoped>


  .zoom:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02);
  }
  .ac-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .ac-title-side{
    height: 6px;
    width: 40%;
    background-color: #888888;
    border-radius: 50%;
  }

  .category {

  }

  .offer-container {
    width: 70%;
    height: 500px;
    background-color: #b8dd3c;
    position: absolute;
    right: 5px;
    padding: 7px;
    display: inline-block;


  }

  .product-card {

    height: 405px;
    width: 250px;
    position: relative;
    border: 0px solid #989c9b;
    box-shadow: rgba(217, 221, 220, 0.44) 20px;
    border-radius: 2%;
    background-color: #ededed;
    margin-right: 10px;


  }

  .card-image {
    border-radius: 2%;
    margin-right: 1%;margin-top: 1%;
    border-radius: 2%;
  }

  .card-title {
    position: absolute;
    right: 2%;
    top: 48%;
    font-size: 20px;

  }

  .card-button {
    position: absolute;
    right: 2%;
    top: 82%;
    border-radius: 5%;
    border: none;
    background-color: #c74d4a;
    color: white;
    font-family: vasir;
    height: 14%;
    width: 94%;
    cursor: pointer;
  }

  .card-desc {
    font-size: 10px;
    position: absolute;
    top: 62%;
    right: 2%;
  }

  .card-price {

    font-size: 20px;
    position: absolute;
    top: 66%;
    right: 2%;
  }


  .category-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
  }
  .category-item{
    width: 100%;
    height: 100%;
    background-color: #2f2f2f;
  }
  .offer-logo-up {
    background-color: #c74d4a;width: 120px;transform: rotate(20deg);
    border-radius: 50%;text-align: center;align-content: center
  }
  .offer-logo-down {
    background-color: white;transform: rotate(-19deg);width: 120px;

    border-radius: 50%;text-align: center;align-content: center
  }

</style>
