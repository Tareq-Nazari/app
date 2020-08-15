<template>
  <div dir="rtl" style="border-radius: 2%" class="product-card">

    <img src="./../../../img/shoes.svg" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="50%" width="98%">
    <p class="card-title" style="font-size: 20px">چیپس سرکه ای چیتوز</p>
    <p class="card-desc">محدوده وزن:
      کمتر از 150 گرم</p>
    <div class="card-button-1" style="right: 15px;top: 280px">
      <router-link tag="a" to="/asd" >ویرایش</router-link>
    </div>
    <div class="card-button-1" style="top: 280px;left: 15px;background-color: #c74d4a">
      <router-link tag="a" to="/sfd">حذف</router-link>

    </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      product : {
        id : 1,
        name : '',
        price : 123,
      }
    }
  }
}
</script>
<style>
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
  .card-button-1 {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    border: none;
    background-color: green;
    color: white;
    font-family: vasir;
    height: 14%;
    width: 40%;
    cursor: pointer;
  }
  .card-button-1 a {
    color: white;
    text-decoration: none;

  }
  .card-desc {
    font-size: 10px;
    position: absolute;
    top: 223px;
    right: 62px;
  }

</style>
