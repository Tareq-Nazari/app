<template>
  <div class="main">
    <div>
      <div></div>
    </div>
    <div class="box">
      <form
        id="app"
        @submit="checkForm"
        action="#"
        method="post"
      >
        <div>
          <h2 style="text-align: center;color: #d63938 "> ادیت کردن پروفایل</h2>
        </div>

        <div class="inp">
          <p>نام </p>
          <input
            id="name"
            type="text"
            name="name"
            :placeholder="this.user_name"
            :value="this.user_name"
          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="email"
            name="email"
            :placeholder="this.user_email"
            :value="this.user_email"
          >

        </div>
        <div class="inp">
          <p> شماره تلفن </p>

          <input
            id="phone"
            type="number"
            name="phone"
            :placeholder="this.user_phone"
            :value="this.user_phone"
          >

        </div>
        <div class="inp">
          <p> آدرس </p>

          <input
            id="address"
            type="text"
            name="address"
            :placeholder="this.user_address"
            :value="this.user_address"
          >

        </div>

        <div >
          <p> عکس پروفایل </p>

          <input style="border: none"
                 id="pic"
                 type="file"
                 name="pic"
                 v-on:value="user_pic"

          >

        </div>

        <div style="margin-top: 15px">
          <input
            type="submit"
            value=" ثبت تغیرات"
            id="su"
          >
        </div>

      </form>

    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    name: "edit",
    components: {AdminHome},
    data() {
      return {

        user_name:"sd",
        user_phone:"22",
        user_pic:"sd",
        user_email:"dd@hmail",
        user_address:"sd",


      }

    }, methods: {
      checkForm: function () {

      }

    }
  }
</script>

<style scoped>
  .main {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;


  }

  .box {
    margin-top: 20px;
    padding-top: 15%;
    padding-right: 10%;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
    0 3px 1px -2px rgba(0, 0, 0, .12),
    0 1px 5px 0 rgba(0, 0, 0, .2);

    height: 800px;
  }

  input {

    border-radius: 3px;
    border: solid 1px #dcdcdc;
    min-height: 45px;
    font-size: 15px;
    width: 80%;

  }

  input:focus {
    outline: none;
  }

  select {
    border-radius: 3px;
    border: solid 1px #dcdcdc;
    min-height: 45px;
    font-size: 15px;
    width: 40%;

  }

  select:focus {
    outline: none;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }

  #su {
    background-color: #00a8ed;
    font-size: 13px;
    border-radius: 2px;
    cursor: pointer;
    color: #fff;
    border: none;
    transition: all .3s;
    text-align: center !important;
  }

  .inp {
    display: grid;
    grid-template-columns: 1fr;

  }

  .inp > p {
    margin-right: 2%;
  }

  p {
    color: #d81c1e;
  }

</style>
user
