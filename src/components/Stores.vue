<template>
  <div style="width: 100%;height: auto">
    <img src="src/img/laptop.svg" width="100%" height="300px">
    <div style="width: 100%;height: 40px;color: white;background-color: white;border-top: 1px solid blue;border-bottom: 1px solid red">
      <swiper class="swiper"  :options="swiperOption">
        <swiper-slide ><div style="display: flex;align-items: center;background-color: red;height: 40px;min-width: 100px">
          <input type="checkbox">
          <p>آرایشی</p>
        </div> </swiper-slide>


        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
    <br><br>
    <div style="display: flex;justify-content: space-around;flex-wrap: wrap">
      <div v-for="i in 30" style="margin: 10px;border: #888888 1px solid;border-radius: 8px;height: 250px;width:350px;background-color: #efefef;display: grid;grid-template: 1fr 1fr 2fr/1fr 1fr;align-items: center;justify-items: center">
        <div style="grid-column: 2/3;grid-row: 1/4"><img style="border-radius: 50%" src="src/img/store1.jpeg" height="80%" width="90%"></div>
        <div style="grid-column: 1/2;grid-row: 1/2">فروشگاه کفش آراتامیس</div>
        <div style="grid-column: 1/2;grid-row: 2/3">همه چی صد هزار تومنه اینجا</div>
        <div style="grid-column: 1/2;grid-row: 3/4;">
        <button style="
        border-radius: 7px;
    border: none;
    background-color: #c74d4a;
    color: white;
    height: 40px;
    width: 100px;
    cursor: pointer;"><font-awesome-icon :icon="['fas' , 'shopping-cart']"/>مشاهده فروشگاه</button></div>
      </div>
    </div>
        </div>

</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  import 'swiper/swiper-bundle.css'
    export default {
        name: "Stores",
      components : {
        Swiper,
        SwiperSlide
      },
      data(){
          return {
            swiperOption: {
              slidesPerView: 15,
              spaceBetween: 50,
              freeMode: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              }
            },
            s: 10
          }

      },

    }
</script>

<style scoped>


</style>
