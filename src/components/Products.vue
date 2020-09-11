<template>
  <div style="width: 100%;height: auto">

    <img src="../img/products-header.jpg" width="100%" height="300px">
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3>همه محصولات</h3>
        <div class="ac-title-side"></div>
      </div>
    </div>
    <div style="width: 100%;height: 40px;color: white;background-color: white;">

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div style="border-radius: 10px;display: flex;justify-content: space-evenly;align-items: center;background-color: red;height: 40px;min-width: 100px">

            <input id="all" v-model="picked1" v-on:change="selectall" type="radio">
            <label for="all">all</label>

          </div>
        </swiper-slide>
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
      <div class="prod-cart" @click="productPage(product.id)" v-for="product in products" dir="rtl"
           style="box-shadow: 10px 10px rgba(208,212,211,0.52);border: solid 0.5px rgba(195,199,198,0.52);background-color: white;margin: 15px;height: 400px;width: 300px;border-radius: 2%;display: flex;flex-direction: column;align-items: center;justify-content: space-around">

        <img :src="'http://localhost/storeBackend/images/'+product.pic"
             style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="65%" width="98%">
        <p style="font-size: 20px;">{{product.name}}</p>
        <p style="background-color: #ff2400;border-radius: 10px 5px 10px 5px;color: white;padding: 5px">
          {{product.price}} تومان</p>

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
        picked1: '',
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
        products: null,
        route: ''
      }

    },

    components: {
      Swiper,
      SwiperSlide,

    },
    created() {


    },
    mounted: function () {
      axios.get('product/all').then((response) => {
        this.products = response.data
        console.log(response)

      }).catch(e => {
        alert(e)
      })
      axios.get('category/store_all')
        .then(response => (this.cats = response.data)
        ).catch(error => console.log(error))
      if (this.$route.params){
        this.picked1=''
        axios.post('product/search', {
          cat_id: this.picked
        })
          .then(response => (this.products = response.data)
          ).catch(error => console.log(error))
      }
    },


    methods: {
      productPage(id){
        this.$router.push('product/'+id)
      },
      gotoshop: function (id) {

        this.$router.push({path: '/storePage' ,query:{id} })
      },
      select1: function () {

        this.picked1=''
        axios.post('product/search', {
          cat_id: this.picked
        })
          .then(response => (this.products = response.data)
          ).catch(error => console.log(error))


      },
      selectall:function(){
        this.picked=''
        axios.post('product/search', {

        })
          .then(response => (this.products = response.data)
          ).catch(error => console.log(error))

      },
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
  .prod-cart:hover{
    transform: rotate(2deg);
    cursor: pointer;
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
