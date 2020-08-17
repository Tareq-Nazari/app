<template>
  <div style="font-family: vasir;background-color: #d9dddc">
    <div class="container">
      <img class="header-img" height="100%" width="100%" src="src/img/store1.jpeg">
      <img style="border-radius: 50%;border: solid black 5px" src="src/img/store_profile.jpg" class="profile" >
      <div class="store-name">
        <p style="" >فروشگاه من</p>
      </div>

      <div  class="store-caption">

        <p style="text-align: end">فروشگاه مواد غذایی - فروشگاه باز است</p>

      </div>
      <div class="store-contact">
        <button style="border-radius: 5px;border: solid 3px #4a61d3;width: 40%;height: 72%;background-color: white;color: #4a61d3;margin-top: 7px;"><font-awesome-icon :icon="['fas','phone']"></font-awesome-icon>&nbsp;&nbsp;تماس با ما</button>
      </div>

    </div>
    <h2 style="margin-right: 65px">جستجو در فروشگاه</h2>
    <div style="display: flex;justify-content: center;justify-items: center">
      <input type="text" placeholder="نام محصول ..." style="height: 33px;width: 80%;margin-left: 10px;border-radius: 5px;padding: 7px">
      <button style="width: 10%;height: 50px;background-color: #ec1c1e;border: none;color: white;font-size: 26px;border-radius: 5px">جستجو</button>
    </div>
    <br>
      <br><br><br>
    <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-evenly">

      <div @click="productpage(1)" v-for="i in 50" dir="rtl" style="background-color: white;margin: 15px;height: 400px;width: 300px;border-radius: 2%;display: flex;flex-direction: column;align-items: center;justify-content: space-around" >

        <img src="src/img/tshirt.jpg" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="65%" width="98%">
        <p  style="font-size: 20px;">تیشرت گوچی</p>
        <p style="background-color: #ff2400;border-radius: 10px 5px 10px 5px;color: white;padding: 5px">127000 تومان</p>

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
      addtocart() {

        this.$store.commit('increment')

      },
      productpage(id){
        this.$router.push({path: `product/${id}`})
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
  .store-contact{
    grid-column: 2/4;
    grid-row: 12/14;

  }

  /* center container in the middle */
  .product-card{

    height: 336px;
    width: 250px;
    position: relative;
    border: 1px solid  rgba(208,212,211,0.44);
    box-shadow: rgba(217,221,220,0.44) 20px;
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
