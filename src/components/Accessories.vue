<template>

  <div style="font-family: vasir">

    <img class="ac-header" src="../img/accessories-header.jpg">
    <div class="ac-title">
      <div class="ac-title-side"></div>
      <h3 >اکسسوری</h3>
      <div class="ac-title-side"></div>
    </div>
    <div style="height: 40px;width: 100%"></div>
    <div dir="rtl" style="border-radius: 2%" class="product-card">

      <img src="src/img/chetoz.webp" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="50%" width="98%">
      <p class="card-title" style="font-size: 20px">{{info[0].name}}</p>
      <p class="card-desc">محدوده وزن:
        کمتر از 150 گرم</p>
      <p class="card-price">قیمت : {{info[0].price}}</p>
      <button class="card-button">اقزودن به سبد خرید</button>
    </div>



  </div>

</template>

<script>
  import axios from 'axios'

    export default {
        name: "Accessories",
      data(){
          return {
            info : ''

          }
      },
      mounted() {
          axios.get('http://127.0.0.1/test/public/api/accessories').then(response => (this.info = response.data))
      }
    }
</script>

<style scoped>
.ac-header {
  height: 500px;
  width: 100%;

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
.card-price {
  font-size: 10px;
  position: absolute;
  top: 246px;
  right: 62px;
}
</style>
