<template>

<div class="usr-dsh-container">

  <div class="usr-dsh-aside">
    <div @click="show.profile=true,show.history=false,show.fav=false,show.shop=false"  style="cursor: pointer;border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: #e1d4de;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'user-circle']" style="color: #e1d4de"></font-awesome-icon>&nbsp;پروفایل</div>
    <div  @click="show.profile=false,show.history=true,show.fav=false,show.shop=false" style="border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: white;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'shopping-cart']" style="color: #e1d4de"></font-awesome-icon>&nbsp;تاریخچه سفارشات</div>
    <div v-if="show.userScope !== 'shopOwner'" @click="show.profile=false,show.history=false,show.fav=false,show.shop=true" style="border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: white;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'store']" style="color: #e1d4de"></font-awesome-icon>&nbsp;ثبت فروشگاه</div>
    <div v-else style="border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: white;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'store']" style="color: #e1d4de"></font-awesome-icon>&nbsp;<router-link to="/dashboard/store"> فروشگاه من</router-link></div>
    <div @click="logout" style="border-bottom: #c3c7c6 solid 1px;font-size: 24px;color: white;text-align: center;margin-top: 30px"><font-awesome-icon :icon="['fas' , 'sign-out-alt']" style="color: #e1d4de"></font-awesome-icon> خروج </div>
  </div>
  <div style="width: 1080px;height: auto;">
    <div v-if="show.profile" style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: space-between">
      <label> نام و نام خانوادگی :
      <input v-model="profile.name" type="text" style="height: 30px;width: 200px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <label>شماره همراه :
        <input v-model="profile.phone" type="text" style="height: 30px;width: 150px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <label>ایمیل :
        <input v-model="profile.email" type="text" style="height: 30px;width: 150px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></label>
      <label for="addr"> آدرس :
        <textarea v-model="profile.address" id="addr" style="height: 145px;width: 215px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></textarea></label>

      <button style="height: 50px;width: 100px;border: none;outline: none;background-color: #4a61d3;color: white;align-self: center" @click="editProfile">بروزرسانی</button>

    </div>
    <div  class="usr-dsh-order-history-container" v-else-if="show.history">
      <div v-for="factor in factors" class="usr-dsh-order-history" style="">
        <img :src="'http://localhost/storeBackend/images/'+factor.thumbnail_pic" style="height: 90%;width: 80px;border-radius: 5px" >
        <h6>نام محصول : {{factor.product_name}}</h6>
        <h6>کد سفارش : {{factor.payment_receipt}}</h6>
        <h6>فروشگاه  : {{factor.store_name}}</h6>
        <h6>قیمت : {{factor.price}}</h6>
        <h6>تاریخ : {{factor.created_at}} </h6>
      </div>
    </div>

      <div v-if="show.shop" style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: space-between;margin-right: 15px">
        <label> نام فروشگاه :
          <input v-model="shopRegister.name" type="text" class="usr-dsh-input" ></label>
        <label>توضیحات :
          <input type="text" v-model="shopRegister.caption" class="usr-dsh-input"></label>
        <label>ایمیل :
          <input type="text" v-model="shopRegister.email" class="usr-dsh-input"></label>
        <label> شماره تماس فروشگاه :
          <input v-model="shopRegister.phone" class="usr-dsh-input"></label>
        <label for="addr"> آدرس :
          <textarea v-model="shopRegister.address" style="height: 145px;width: 215px;background-color: #d0d4d3;padding: 2px;border: none;border-radius: 5px;outline: none"></textarea></label>
        <label>دسته بندی فروشگاه :
          <select v-on:click="select">
          <option  v-for="category in categories"  v-model="selectedCategory">{{category.name}}</option>

          </select>
        </label>
        <button style="height: 50px;width: 100px;border: none;outline: none;background-color: #4a61d3;color: white;align-self: center" v-on:click="createStore">ثبت فروشگاه</button>

      </div>


{{selectedCategory}}
  </div>
</div>
</template>

<script>
  import "../../../assets/css/style.css"
  import * as auth from "../../../services/auth_service";
  import axios from 'axios'
  import {http} from "../../../services/http_service";


    export default {
        name: "UserDashboard",
      data(){
          return {
            show : {
              profile : true,
              history : false,
              fav: false,
              shop: false,
              userScope: ''

            },
            shopRegister: {
              name : '',
              caption : '',
              email : '',
              phone : '',
              address : '',
              status : 0
            },
            categories : null,
            selectedCategory : null,
            profile : null,
            factors : null
          }
      },
      mounted: function(){

           this.show.userScope =  auth.getScope()
        axios.get('category/store_all').then((response) => {
          this.categories = response.data

        })
        http().get('users/profile/show').then((res) => {
          this.profile = res.data[0]

          http().post('users/factor').then((res) => {
            this.factors = res.data
            console.log(this.factors)
          })
        })




      },
      methods : {
          editProfile(){
            http().post('users/profile/edit',{
              name : this.profile.name,
              address : this.profile.address,
              phone :  this.profile.phone,
              email : this.profile.email
              })
          },
          logout(){
            auth.logout()
            this.$router.push('/login')
            this.$router.go()
          },
          createStore(){

            http().post('/users/store/create',{
              name : this.shopRegister.name,
              phone : this.shopRegister.phone,
              email : this.shopRegister.email,
              cat_id : this.selectedCategory,
              caption : this.shopRegister.caption,
              address : this.shopRegister.address,

            }).then(res => {
              setTimeout(
                this.logout(),2000
              )
              alert('فروشگاه ثبت شد')
            }).catch(e => {
              alert(e)
            })
          },
        select(ev){
          this.selectedCategory = ev.target.options.selectedIndex
        }
      }
    }
</script>

<style scoped>
.usr-dsh-container {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 30px;
  height: auto;



}

  .usr-dsh-order-history-container {

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start
      }
    .usr-dsh-order-history {
      height: auto;
      width: 100%;
      background-color: #f0f0f0;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      align-items: center
    }
    .usr-dsh-aside {
      border-radius: 5px;
      width: 268px;
      height: 390px;
      background-color: #e11d20;
      position: sticky;
      top: 50px;
      padding: 10px
    }
  .usr-dsh-aside div {
    cursor: pointer;
  }
  .usr-dsh-input {
    height: 30px;
    width: 200px;
    background-color: #d0d4d3;
    padding: 2px;
    border: none;
    border-radius: 5px;
    outline: none
  }
</style>
