<template>
  <div>



<div class="dsh-container">

<div class="dsh-box">
  <img src="./../../../img/product.svg" height="60%" width="60%">
  <div class="dsh-a-con">
    <router-Link tag="a" to="/dashboard/store/addProduct">افزودن محصول</router-Link>

  </div>
</div>
  <div class="dsh-box">
    <img src="./../../../img/shop.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/skin">قالب فروشگاه</router-Link>

    </div>
  </div>
  <div class="dsh-box">
    <img src="./../../../img/edit.svg" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/editproduct/">ویرایش محصولات</router-Link>

    </div>
  </div>
  <div class="dsh-box">
    <img src="./../../../img/store-info.png" height="60%" width="60%">
    <div class="dsh-a-con">
      <router-Link tag="a" to="/dashboard/store/storenfo"> اطلاعات فروشگاه</router-Link>

    </div>
  </div>

</div>
    <hr>
    <div style="text-align: center;width: 100%;">
      <h1>دسته بندی</h1>
    </div>

    <div style="display: flex;justify-content: space-around;margin-bottom: 30px">
      <div style="margin-right: 38px">
        <label for="categoryAdd">افزودن دسته بندی به محصولات</label>
        <input v-model="category" id="categoryAdd">
        <button v-on:click="addCategory" style="border : none;background-color: #ff2400;text-shadow: rgba(0,0,0,0.64);color: white;height: 25px;width: 70px">افزودن</button>

      </div>
      <div style="min-height: 100px;width: 400px;border: solid 1px rgba(208,212,211,0.64);box-shadow: 5px 5px rgba(0,0,0,0.64);text-align: center">
      <h3>دسته بندی های فروشگاه</h3>
        <div style="display: flex;justify-content: flex-start;width: 100%;flex-wrap: wrap">
          <div v-for="cat in categories" :id="cat.id" style="height: auto;width: auto;background-color: #b8dd3c;padding: 13px;border-radius: 50%;margin: 5px">{{cat.name}} <font-awesome-icon @click="deleteCategory(cat.id)" :icon="['fas','times-circle']" style="color: red;cursor: pointer"></font-awesome-icon></div>
        </div>
      </div>
    </div>
    <hr>



  </div>
</template>

<script>
  import axios from 'axios';
  import * as auth from '../../../services/auth_service'
  import {http} from "../../../services/http_service";
    export default {
        name: "EditStore"
      ,
      data(){
          return {
            status : 0,
            category : '',
            categories : null

          }
      },
      methods : {
         addCategory(){
           http().post('shopOwner/category/add',{name : this.category})
         },
        deleteCategory(id){
          http().get('shopOwner/category/delete'+id).then((res) => {
            document.getElementById(id).remove()
          })
        }

      },
      mounted() {

          http().get('shopOwner/category/all').then((res) => {
            this.categories = res.data

            console.log(this.categories)
          })
        }



    }
</script>

<style scoped>
.ca-container {
  background-color: rgba(255,36,0,0.64);
  height: 100px;
  width: 320px;
  display: flex;
  justify-content: space-evenly;
}
  .ca-container label {

  }
</style>
