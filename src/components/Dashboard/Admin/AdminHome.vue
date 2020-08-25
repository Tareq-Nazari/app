<template>
  <div style="display: grid;grid-template-columns: 1fr 2fr">
    <div id="myNav" class="overlay" :style="showTopMenu===true? style3:style2">
      <div
        style="display: grid;grid-template-columns: 1fr;grid-row-gap: 15px;height: 150px;position: relative;top: 10%;transition:display 5s">
        <a class="menu-but" :style="style[1]" @click="turnOff('1')" v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span class="title" style="display: inline-block;padding-right: 8%">مغازه ها</span>
          </div>
          <p style="display: inline-block;position: relative;bottom: 9px;left: -75%"> ></p>

        </a>


        <div class="sub-menu" v-if="showTopMenu===true && subMenu[1]===true">

          <router-link to="/dashboard/admin/store/create"><a href="#"> ایجاد مغازه جدید</a></router-link>
          <router-link to="/dashboard/admin/store/all"> تمام مغازه ها</router-link>


        </div>
        <a class="menu-but" :style="style[2]" @click="turnOff ('2')" v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span class="title" style="display: inline-block;padding-right: 8%">محصولات  </span>
          </div>
          <p style="display: inline-block;position: relative;bottom: 9px;left: -75%"> ></p>
        </a>
        <div class="sub-menu" v-if="showTopMenu===true && subMenu[2]===true">

          <router-link to="/dashboard/admin/product/all"><a href="#"> تمام محصولات</a></router-link>
          <router-link to="/dashboard/admin/product/create"><a href="#"> اضافه کردن محصول جدید</a></router-link>


        </div>
        <a class="menu-but" :style="style[3]" @click="turnOff('3')" v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span class="title" style="display: inline-block;padding-right: 8%"> دسته بندی ها</span>
          </div>
          <p style="display: inline-block;position: relative;bottom: 9px;left: -75%"> ></p>
        </a>
        <div class="sub-menu" v-if="turnOff ,showTopMenu===true && subMenu[3]===true">

          <router-link to="/dashboard/admin/storeCategory/all"><a href="#"> تمام دسته بندی های مغازه </a></router-link>
          <router-link to="/dashboard/admin/storeCategory/create"><a href="#"> اضافه کردن دسته بندی جدید مغازه </a></router-link>
          <router-link to="/dashboard/admin/productCategory/all"><a href="#"> تمام دسته بندی های محصولات </a></router-link>
          <router-link to="/dashboard/admin/productCategory/create"><a href="#"> اضافه کردن دسته بندی جدید محصول </a></router-link>



        </div>
        <a class="menu-but" :style="style[4]" @click="turnOff ('4')" v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span class="title" style="display: inline-block;padding-right: 8%"> فاکتورهای فروش</span>
          </div>
          <p style="display: inline-block;position: relative;bottom: 9px;left: -75%"> ></p>
        </a>
        <div class="sub-menu" v-if="showTopMenu===true && subMenu[4]===true">

          <router-link to="/dashboard/admin/factors/all"><a href="#"> همه ی فاکتورها </a></router-link>



        </div>
        <a class="menu-but" :style="style[5]" @click="turnOff('5')" v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span class="title" style="display: inline-block;padding-right: 8%"> کاربران</span>
          </div>
          <p style="display: inline-block;position: relative;bottom: 9px;left: -75%"> ></p>
        </a>
        <div class="sub-menu" v-if="showTopMenu===true && subMenu[5]===true">

          <router-link to="/dashboard/admin/user/add"><a href="#"> اضافه کردن کاربر </a></router-link>
          <router-link to="/dashboard/admin/users/all"><a href="#"> همه ی کاربران </a></router-link>


        </div>
        <a class="menu-but" :style="style[6]" @click="turnOff('6') " v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span class="title" style="display: inline-block;padding-right: 8%"> پروفایل من</span>
          </div>
          <p style="display: inline-block;position: relative;bottom: 9px;left: -75%"> ></p>
        </a>
        <div class="sub-menu" v-if="showTopMenu===true && subMenu[6]===true">
          <router-link to="/dashboard/admin/profile/show"><a href="#"> نمایش پروفایل من </a></router-link>
          <router-link to="/dashboard/admin/profile/edit"><a href="#"> تغیر دادن پروفایل من </a></router-link>

        </div>
        <a class="menu-but" :style="style[7]" @click="turnOff('7') " v-if="showTopMenu===true" href="#">
          <div style="display: inline-block">
            <span @click="logOut" class="title" style="display: inline-block;padding-right: 8%"> خروج</span>
          </div>

        </a>

      </div>

    </div>
    <div class="main" :style="showTopMenu===true? style4:style1">
      <span style="font-size:30px;cursor:pointer" @click="showTopMenu=!showTopMenu , turnOff(9)">&#9776; </span>

    </div>
<router-view></router-view>
  </div>

</template>

<script>
  import {mapMutations} from 'vuex';
  import {mapGetters} from 'vuex';
  import axios from 'axios';
  import * as auth from '../../../services/auth_service'

  export default {
    name: "AdminHome",

    data() {
      return {
        showTopMenu: true,
        style1: 'padding-right:4%;transition-duration:0.9s;',
        style4: 'padding-right:24%;transition-duration:0.9s;',
        style2: 'height:100%; width:0;position: fixed;z-index: 1;top: 0;right: 0;background-color:rgb(0, 0, 0);background - color:rgba(0, 0, 0, 0.9);overflow - x:hidden;',
        style3: 'height:100%; width:20%;position: fixed;z-index: 1;top: 0;right: 0;background-color:rgb(0, 0, 0);background - color:rgba(0, 0, 0, 0.9);overflow - x:hidden;',
        style5: 'display:none',
        style6: 'display:block',
        style7: '',
        p:'',
        length:'',
      }

    },
    methods: {
      ...mapMutations([
        "turnOff"
      ]),
      logOut: async function () {

          auth.logout();
          //this.$router.push('/login');


      }

    },
    computed: {
      ...mapGetters([
        "subMenu",
        "style"
      ])
    }


  }
</script>

<style scoped>

  .menu-but:hover {
    background-color: cornflowerblue !important;

  }

  .router-link-exat
  .overlay-content {
    position: relative;
    top: 10%;
    width: 20%;
    text-align: center;
    margin-top: 30px;
    transition-duration: 0.2s;
  }

  .title {
    padding-top: 6px;
  }


  .menu-but {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding-right: 10%;
    text-decoration: none;
    position: relative;
    font-weight: 400;
    height: 40px;


    color: #ebebeb;

  }

  .sub-menu {
    position: relative;
    top: -13%;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
    background-color: #1D1D1D;
    color: #ebebeb;


  }

  .sub-menu > a {
    height: 30px;
    color: #a6a5a5;
    text-decoration: none;
    padding-right: 15%;
    padding-top: 5px
  }

  .router-link {

    color: #a6a5a5;
    text-decoration: none;

  }

  .sub-menu > a:focus {
    color: #ebebeb;
  }

  /*.sub-menu > ul > li  {*/
  /*  padding-top: 20px;*/
  /*  font-weight: 400;*/
  /*  text-decoration: none;*/
  /*  color: white;*/
  /*}*/

  .sub-menu > a:hover {
    background-color: #434343;

  }

  .overlay {
    display: grid;
    grid-template-columns: 1fr;
    transition-duration: 0.9s;
  }

  > h7 {

  }

</style>
