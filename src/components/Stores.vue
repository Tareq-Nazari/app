<template>
  <div style="width: 100%;height: auto">
    <img src="src/img/ww.jpg" width="100%" height="300px">
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3>فروشگاه ها </h3>
        <div class="ac-title-side"></div>
      </div>
    </div>
    <div style="width: 100%;height: 40px;color: white;background-color: white;">

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="cat in cats">
          <div
            style="border-radius: 10px;display: flex;justify-content: space-evenly;align-items: center;background-color: red;height: 40px;min-width: 100px">

            <input :id="cat.id" :value="cat.id" v-model="picked" v-on:change="select1" type="radio" >
            <label :for="cat.id" >{{cat.name}}</label>

          </div>
        </swiper-slide>



        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

    </div>
    <br><br>
    <div style="display: flex;justify-content: space-around;flex-wrap: wrap;">
      <div v-for="store in stores" class="stores-card"
           v-bind:style="{ backgroundImage: 'url(http://localhost/storeBackend/images/' + store.header_pic + ')' }">
        <div style="background-color: #282A37;color: #F3F8FB;padding: 6px;border-radius: 5px">{{store.name}}</div>
        <img style="border-radius: 50%" v-bind:src="'http://127.0.0.1/storeBackend/images/'+store.profile_pic"
             height="50%" width="50%">
        <h3 style="background-color: rgba(255,36,0,0.52);color: white;cursor: pointer;border-radius: 5px"
            v-on:click="gotoshop(store.id)" :id="store.id">مشاهده فروشگاه</h3>


      </div>
    </div>

  </div>


</template>

<script>

  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import axios from 'axios'
  import 'swiper/swiper-bundle.css'

  export default {
    name: "Stores",
    data() {
      return {
        cats: '',
        picked: '',
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
        stores: null,
        route: ''
      }

    },

    components: {
      Swiper,
      SwiperSlide,

    },
    created() {
      axios.get('http://127.0.0.1/laravel/public/api/category/store_all')
        .then(response => (this.cats = response.data)
        ).catch(error => console.log(error))
      axios.get('http://127.0.0.1/laravel/public/api/store/all')
        .then(response => (this.stores = response.data)
        ).catch(error => console.log(error))
    },
    mounted: function () {
      axios.get('store/all').then((response) => {
        this.stores = response.data
        console.log(response)
      }).catch(e => {
        alert(e)
      })
    },
    methods: {
      gotoshop: function (id) {

        this.$router.push({path: '/storePage' ,query:{id} })
      },
      select1: function () {
          axios.post('http://127.0.0.1/laravel/public/api/store/search', {
            cat_id: this.picked
          })
            .then(response => (this.stores = response.data)
            ).catch(error => console.log(error))


      }
    },

  }
</script>

<style scoped>
  .ac-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .ac-title-side {
    height: 6px;
    width: 40%;
    background-color: #888888;
    border-radius: 50%;
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
    transition: width 500ms;
  }

  .stores-card:hover {
    width: 340px;
    height: 270px;
  }

</style>
