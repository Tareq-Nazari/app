<template>
  <div style="font-family: vasir;background-color: white;">

    <div class="container">
      <img class="header-img" height="100%" width="100%"
           :src="'http://localhost/laravel/images/'+shopDetail.header_pic">
      <img style="border-radius: 50%;border: solid black 5px"
           :src="'http://localhost/laravel/images/'+shopDetail.profile_pic" class="profile">
      <div class="store-name">
        <p style=""> فروشگاه {{shopDetail.name}} </p>
      </div>

      <div class="store-caption">

        <p style="text-align: end">{{shopDetail.caption}} - فروشگاه
          <mark v-if="shopDetail.status===1">باز</mark>
          <mark v-else>بسته</mark>
          است
        </p>

      </div>
      <div class="store-contact">
        <button v-on:click="contact"
                style="border-radius: 5px;border: solid 3px #4a61d3;width: 40%;height: 72%;background-color: white;color: #4a61d3;margin-top: 7px;">
          <font-awesome-icon :icon="['fas','phone']"></font-awesome-icon>&nbsp;&nbsp;تماس با ما
        </button>
      </div>

    </div>
    <h2 style="margin-right: 65px">جستجو در فروشگاه</h2>
    <div style="display: flex;justify-content: center;justify-items: center">
      <input v-model="search" type="text" placeholder="نام محصول ..."
             style="height: 33px;width: 80%;margin-left: 10px;border-radius: 5px;padding: 7px">
      <button @click="send"
        style="width: 10%;height: 50px;background-color: #ec1c1e;border: none;color: white;font-size: 26px;border-radius: 5px">
        جستجو
      </button>
    </div>
    <br>
    <br><br><br>
    <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-evenly">

      <div @click="productpage(`${product.id}`)" v-for="product in shopProducts" dir="rtl"
           style="box-shadow: 10px 10px rgba(208,212,211,0.52);border: solid 0.5px rgba(195,199,198,0.52);background-color: white;margin: 15px;height: 400px;width: 300px;border-radius: 2%;display: flex;flex-direction: column;align-items: center;justify-content: space-around">

        <img :src="'http://localhost/laravel/images/'+product.pic"
             style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="65%" width="98%">
        <p style="font-size: 20px;">{{product.name}}</p>
        <p style="background-color: #ff2400;border-radius: 10px 5px 10px 5px;color: white;padding: 5px">
          {{product.price}} تومان</p>

      </div>


    </div>
    <br><br>
    <div class="contact-footer" id="contactus">
      <div>
        <font-awesome-icon :icon="['fas','phone']" style="color: red;font-size: 1.3em"/>&nbsp;&nbsp;{{shopDetail.phone}}111111
      </div>
      <div>
        <font-awesome-icon :icon="['fas','envelope']" style="color: red;font-size: 1.6em"/>&nbsp;&nbsp;{{shopDetail.email}}
      </div>
    </div>

  </div>


</template>

<script>
  import axios from "axios";

  export default {

    data() {
      return {
        data: '',
        search:'',
        routeParam: '',
        shopDetail: null,
        shopProducts: null
      }
    },
    created() {
      this.routeParam = this.$route.params.id
    },
    mounted() {
      axios.get('http://127.0.0.1/laravel/public/api/store/one' + this.$route.query.id).then((response) => {
        this.shopDetail = response.data[0]
        axios.get('http://127.0.0.1/laravel/public/api/product_store' + this.$route.query.id).then((response) => {
          this.shopProducts = response.data[0]
        })
      }).catch(e => {
        console.log(e)
      })
    },

    methods: {
      addtocart() {

      },
      productpage(id) {
        this.$router.push('/product/' + id)
      },
      contact() {
        let pos = document.getElementById("contactus")
        pos.scrollIntoView(false)
      },
      send:function () {
        axios.post('http://127.0.0.1/laravel/public/api/product_store' ,{
          name:this.search
        }).then(response=>{
          ( this.shopProducts=response.data)
        }).catch(error=>console.log(error))

      }
    }

  }
</script>

<style scoped>
  .contact-footer {
    margin-top: 20px;
    height: 90px;
    background-color: rgba(208, 212, 211, 0.52);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center
  }

  .contact-footer div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    width: 215px;
    padding-right: 50px;
    background-color: rgba(255, 12, 0, 0.25)
  }

  .container {

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(18, 30px);
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
    grid-row: 14/15;
    justify-content: center;
    font-size: 20px;
  }

  .store-contact {
    grid-column: 2/4;
    grid-row: 12/14;

  }

  /* center container in the middle */
  .product-card {

    height: 336px;
    width: 250px;
    position: relative;
    border: 1px solid rgba(208, 212, 211, 0.44);
    box-shadow: rgba(217, 221, 220, 0.44) 20px;
    margin: 12px;


  }

  .card-title {
    position: absolute;
    right: 42px;
    top: 203px;

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
