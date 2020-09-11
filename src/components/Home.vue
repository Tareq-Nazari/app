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


<div style="width: 100%;height: 200px;display: flex;justify-content: space-evenly;align-items: center">
  <div style="background-color: rgba(243,231,0,0.36);border: 1px solid #e1d4de;height: 150px;width: 200px;display: flex;flex-direction: column;padding-top: 26px;align-items: center;justify-content: space-evenly">
    <font-awesome-icon :icon="['fas','dollar-sign']" style="font-size: 2em"/>
    <h5>پرداخت امن</h5>
    <h6>از طریق تمام بانک های عضو شتاب</h6>
  </div>
  <div style="background-color: rgba(0,10,243,0.2);border: 1px solid #e1d4de;height: 150px;width: 200px;display: flex;flex-direction: column;padding-top: 26px;align-items: center;justify-content: space-evenly">
    <font-awesome-icon :icon="['fas','truck']" style="font-size: 2em"/>
    <h5>ارسال رایگان</h5>
    <h6>ارسال به تمام کشور</h6>
  </div>
  <div style="background-color: rgba(243,29,33,0.2);border: 1px solid #e1d4de;height: 150px;width: 200px;display: flex;flex-direction: column;padding-top: 26px;align-items: center;justify-content: space-evenly">
    <font-awesome-icon :icon="['fas','headphones-alt']" style="font-size: 2em"/>
    <h5>پشتیبانی</h5>
    <h6>در تمام ساعات شبانه روز</h6>
  </div>
  <div style="background-color: rgba(0,243,76,0.2);border: 1px solid #e1d4de;height: 150px;width: 200px;display: flex;flex-direction: column;padding-top: 26px;align-items: center;justify-content: space-evenly">
    <font-awesome-icon :icon="['fas','undo-alt']" style="font-size: 2em"/>
    <h5>بازگشت کالا</h5>
    <h6>ضمانت بازگشت کالای خراب</h6>
  </div>
</div>


      <br>
<div style="width: 100%;height: 500px;position: relative">
  <div class="offer-container"  style="position: absolute;top: 0px">


    <div class="offer-logo-up">
      <div class="offer-logo-down">
        <h3>تخفیف ویژه</h3>
      </div>

    </div>
<swiper class="swiper" :options="swiperOption.s2">
  <swiper-slide v-for="product in products">
    <div class="product-card">

      <img class="card-image" :src="'http://localhost/storeBackend/images/'+product.pic"
           height="50%" width="98%">
      <p class="card-title">{{product.name}}</p>
      <p class="card-price">قیمت : {{product.price}}</p>
      <p class="card-desc">{{product.caption}}</p>

      <button class="card-button" @click="productPage(product.id)">مشاهده</button>
    </div>
  </swiper-slide>
  <div class="swiper-button-prev" slot="button-prev"></div>
  <div class="swiper-button-next" slot="button-next"></div>
</swiper>



  </div>

</div>
    <br><br>
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3>دسته بندی ها</h3>
        <div class="ac-title-side"></div>
      </div>
    </div>
    <br>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly;width: 51%;align-content: space-between;height: 341px;margin-right: auto;margin-left: auto">

      <div v-on:click="goToCat('shoe')" style="cursor: pointer;border-radius: 5px;border: 1px solid gray; height: 150px;width: 200px;display: flex;flex-direction: column;justify-content: flex-end;padding-top: 26px;align-items: center;">
        <img src="../img/wwshoe.svg" height="90px" width="90px">
        <h3>کفش</h3>

      </div>
      <div v-on:click="goToCat('tshirt')" style="cursor: pointer;border-radius: 5px;border: 1px solid gray; height: 150px;width: 200px;display: flex;flex-direction: column;justify-content: flex-end;padding-top: 26px;align-items: center;">
        <img src="../img/tshirt.svg" height="90px" width="90px">
        <h3>تیشرت</h3>

      </div>
      <div v-on:click="goToCat('watch')" style="cursor: pointer;border-radius: 5px;border: 1px solid gray; height: 150px;width: 200px;display: flex;flex-direction: column;justify-content: flex-end;padding-top: 26px;align-items: center;">
        <img src="../img/watch.svg" height="90px" width="90px">
        <h3>ساعت</h3>

      </div>
      <div v-on:click="goToCat('pants')" style="cursor: pointer;border-radius: 5px;border: 1px solid gray; height: 150px;width: 200px;display: flex;flex-direction: column;justify-content: flex-end;padding-top: 26px;align-items: center;">
        <img src="../img/pants.png" height="90px" width="90px">
        <h3>شلوار</h3>

      </div>
      <div v-on:click="goToCat('hat')" style="cursor: pointer;border-radius: 5px;border: 1px solid gray; height: 150px;width: 200px;display: flex;flex-direction: column;justify-content: flex-end;padding-top: 26px;align-items: center;">
        <img src="../img/hat.png" height="90px" width="90px">
        <h3>کلاه</h3>

      </div>
      <div v-on:click="goToCat('shirt')" style="cursor: pointer;border-radius: 5px;border: 1px solid gray; height: 150px;width: 200px;display: flex;flex-direction: column;justify-content: flex-end;padding-top: 26px;align-items: center;">
        <img src="../img/shirt.png" height="90px" width="90px">
        <h3>پیراهن</h3>

      </div>
    </div>
<br><br>
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3>فروشگاه ها </h3>
        <div class="ac-title-side"></div>
      </div>
    </div>

<div style="width: 100%;height: 340px;background-color: #f3d5ed;position: relative">
  <div style="width: 100%;height: 45px"></div>
  <div style="position:absolute;top: 10px;left: 10px;background-color: white;padding: 5px;border-radius: 35%"><router-link to="/stores" style="text-decoration: none">مشاهده همه</router-link></div>

  <swiper class="swiper" :options="swiperOption.s3">
    <swiper-slide v-for="store in stores">
      <div  class="stores-card"
           v-bind:style="{ backgroundImage: 'url(http://localhost/storeBackend/images/' + store.header_pic + ')' }">
        <div style="background-color: #282A37;color: #F3F8FB;padding: 6px;border-radius: 5px">{{store.name}}</div>
        <img style="border-radius: 50%" v-bind:src="'http://127.0.0.1/storeBackend/images/'+store.profile_pic"
             height="50%" width="50%">
        <h3 style="background-color: rgba(255,36,0,0.52);color: white;cursor: pointer;border-radius: 5px"
            v-on:click="gotoshop(store.id)" :id="store.id">مشاهده فروشگاه</h3>


      </div>
    </swiper-slide>
  </swiper>
</div>
    <br><br>
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3> محصولات </h3>
        <div class="ac-title-side"></div>
      </div>
    </div>

    <div style="width: 100%;height: 350px;background-color: rgba(246,240,0,0.45);position: relative;">
      <div style="width: 100%;height: 28px"></div>
      <div style="position:absolute;top: 10px;left: 10px;background-color: white;padding: 5px;border-radius: 35%"><router-link to="/products" style="text-decoration: none">مشاهده همه</router-link></div>
      <swiper class="swiper" :options="swiperOption.s4">
        <swiper-slide v-for="product in products">
          <div class="prod-cart" @click="productPage(product.id)" dir="rtl"
               style="box-shadow: 10px 10px rgba(208,212,211,0.52);border: solid 0.5px rgba(195,199,198,0.52);background-color: white;margin: 15px;height: 283px;width: 222px;border-radius: 2%;display: flex;flex-direction: column;align-items: center;justify-content: space-around">

            <img :src="'http://localhost/storeBackend/images/'+product.pic"
                 style="border-radius: 2%;height: 50%;width: 99%" >
            <p style="font-size: 20px;">{{product.name}}</p>
            <p style="background-color: #ff2400;border-radius: 10px 5px 10px 5px;color: white;padding: 5px">
              {{product.price}} تومان</p>

          </div>
        </swiper-slide>
      </swiper>
    </div>






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
            slidesPerView: 6,
            spaceBetween: 50,
            freeMode: true,
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
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,

          },
          s4 : {
            slidesPerView: 6,
            spaceBetween: 0,
            freeMode: true,

          }

},
        products : null,
        stores : null,
        msg : ''
      }
    },

    directives: {
      swiper: directive
    },
   methods : {
     goToCat(cat){
       this.$router.push('/products/'+cat)
     },
     productPage(id){
       this.$router.push('product/'+id)
     },
     increment(){
       this.$store.commit('increment')
     },
     gotoshop: function (id) {

       this.$router.push({path: '/storePage' ,query:{id} })
     }

   },
    mounted(){
      axios.get('product/all').then((res)=>{
        this.products = res.data
      })
      axios.get('store/all').then((res)=>{
        this.stores = res.data
      })



    },
    created() {

    }
  }

</script>

<style scoped>

  .prod-cart:hover{
    transform: rotate(2deg);
    cursor: pointer;
  }
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
    width: 100%;
    height: 500px;
    background-color: #b8dd3c;
    position: absolute;
    padding: 7px;
    right: -1px;
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
  .stores-card {
    position: relative;
    margin: 10px;
    border: #888888 1px solid;
    border-radius: 8px;
    height: 250px;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

  }

</style>
