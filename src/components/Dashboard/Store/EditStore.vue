<template>
<div class="dsh-container">
<div class="dsh-box">
  <img src="./../../../img/product.svg" height="60%" width="60%">
  <div class="dsh-a-con">
    <router-Link tag="a" to="/dashboard/store/edit/addProduct">افزودن محصول</router-Link>

  </div>
</div>
  <div class="dsh-box">
    <img src="./../../../img/shop.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/edit/skin">قالب فروشگاه</router-Link>

    </div>
  </div>
  <div class="dsh-box">
    <img src="./../../../img/edit.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/edit/">ویرایش محصولات</router-Link>

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
  import * as auth from '../../../services/auth_service'
    export default {
        name: "EditStore"
      ,
      data(){
          return {

          }
      },
      methods : {
          axoiss(){
            return
          }

      }
    }
</script>

<style scoped>

</style>
