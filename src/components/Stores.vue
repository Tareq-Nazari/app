<template>
  <div style="width: 100%;height: auto">
    <img src="src/img/stores-header.jpg" width="100%" height="300px">
    <div style="width: 100%;height: 40px;color: white;background-color: white;">
      <swiper class="swiper"  :options="swiperOption">
        <swiper-slide v-for="i in 30"><div style="border-radius: 10px;display: flex;align-items: center;background-color: red;height: 40px;min-width: 100px">
          <input type="checkbox">
          <p>مردانه</p>
        </div> </swiper-slide>


        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
    <br><br>
    <div style="display: flex;justify-content: space-around;flex-wrap: wrap;">
      <div v-for="i in 10" class="stores-card" style="position: relative;margin: 10px;border: #888888 1px solid;border-radius: 8px;height: 250px;width:320px;display: flex;flex-direction: column;align-items: center;justify-content: space-evenly">
        <div style="background-color: #282A37;color: #F3F8FB;padding: 6px;border-radius: 5px">فروشگاه کفش آراتامیس</div>
        <img style="border-radius: 50%" src="src/img/store1.jpeg" height="50%" width="50%">


      <font-awesome-icon @click="gotoshop" :icon="['fas' , 'arrow-right']" style="position: absolute;right: 9px;bottom: 7px;
      font-size: 2em;color: white;background-color: #d63938;border-radius: 50%;padding: 5px;
"/>

      </div>
      </div>

    </div>


</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  import 'swiper/swiper-bundle.css'
    export default {
        name: "Stores",
      components : {
        Swiper,
        SwiperSlide,

      },
      created() {
          axios.get('')
      },
      methods : {
        gotoshop(){
          this.$router.push({path: '/storepage'})
        }
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
.stores-card{
  background-image: url("../img/stores-header.jpg");
}

</style>
