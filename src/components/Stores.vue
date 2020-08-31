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
      <div v-for="store in stores" class="stores-card" v-bind:style="{ backgroundImage: 'url(http://localhost/storeBackend/images/' + store.header_pic + ')' }">
        <div style="background-color: #282A37;color: #F3F8FB;padding: 6px;border-radius: 5px">{{store.name}}</div>
        <img style="border-radius: 50%" v-bind:src="'http://localhost/storeBackend/images/126027390.jpg'+store.profile_pic" height="50%" width="50%">


      <router-link :to="'/store/'+store.id" > asdfsdfdsfsdf</router-link>

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
          s: 10,
          stores : null
        }

      },

      components : {
        Swiper,
        SwiperSlide,

      },
      mounted: function(){
          axios.post('store/all').then((response) => {
          this.stores = response.data
          console.log(response)
          }).catch(e => {
            alert(e)
          })
      },
      methods : {
        gotoshop(ev){

          this.$router.push({path: '/store/'+ev.target.id})
        }
      },

    }
</script>

<style scoped>
.stores-card{
  position: relative;
  margin: 10px;
  border: #888888 1px solid;
  border-radius: 8px;
  height: 250px;
  width:320px;display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly
}

</style>
