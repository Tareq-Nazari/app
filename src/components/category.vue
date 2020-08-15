<template>

  <div style="font-family: vasir">

    <img class="ac-header" src="../img/accessories-header.jpg">
    <div class="ac-title">
      <div class="ac-title-side"></div>
      <h3 >اکسسوری</h3>
      <div class="ac-title-side"></div>
    </div>
    <div style="height: 40px;width: 100%"></div>


    <div style="display: flex;justify-content: center;justify-items: center">
      <input type="text" placeholder="نام محصول ..." style="height: 33px;width: 80%;margin-left: 10px;border-radius: 5px;padding: 7px">
      <button style="width: 10%;height: 50px;background-color: #ec1c1e;border: none;color: white;font-size: 26px;border-radius: 5px">جستجو</button>
    </div>
    <br>
    <div style="display: flex;justify-content: space-around">
      <label for="company">برند : <select id="company">

        <option>brand</option>
        <option>brand</option>
        <option>brand</option>
        <option>brand</option>

      </select></label>


      <label>سایز : <select >
        <option>سایز</option>
        <option>سایز</option>
        <option>سایز</option>
      </select></label>

      <div>محدوده قیمت
        <label for="from">از :
          <input id="from"></label>
        <label for="to">تا :
          <input id="to">  (تومان) </label>
      </div>
      <label>
        <input type="checkbox">فقط کالا های موجود
      </label>
<br>
      <br>


    </div>
    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly;">
      <div v-for="i in 30" class="product-card" >

        <img src="../img/store-header1.jpg"
             height="50%" width="100%">
        <p class="card-title">چیپس سرکه ای چیتوز</p>

        <p class="card-desc">محدوده وزن:
          کمتر از 150 گرم</p>
        <p class="card-price">قیمت : </p>
        <button class="card-button" >افزودن به سبد خرید</button>
      </div>
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
      }

      ,
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
  margin: 10px;


}
button , input , label , select , option{
  font-family: vasir;
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
