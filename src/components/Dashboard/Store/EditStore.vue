<template>
<div class="dsh-container">
<div class="dsh-box">
  <img src="./../../../img/product.svg" height="60%" width="60%">
  <div class="dsh-a-con">
    <router-Link tag="a" to="/dashboard/store/:id/edit/addproduct">افزودن محصول</router-Link>

  </div>
</div>
  <div class="dsh-box">
    <img src="./../../../img/shop.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/:id/edit/skin">قالب فروشگاه</router-Link>

    </div>
  </div>
  <div class="dsh-box">
    <img src="./../../../img/edit.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/:id/edit/">ویرایش محصولات</router-Link>

    </div>
  </div>
  <div class="dsh-box">
    <img src="./../../../img/product.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/:id/edit/addproduct">افزودن محصول</router-Link>

    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "EditStore"
      ,
      data(){
          return {

          }
      },
      methods : {

      }
    }
</script>

<style scoped>
.dsh-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
  .dsh-box{
    height: 300px;
    width: 300px;
    margin: 30px;
    background-color: #a8d4ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .dsh-a-con {

    height: 45px;
    width: 126px;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }
  .dsh-box .dsh-a-con a{
    outline: none;
    text-decoration: none;
    color: black;
    font-family: vasir;


  }

</style>
