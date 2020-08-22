<template>
  <div class="main">
    <div>

      <admin-home></admin-home>
    </div>
    <div class="box">
      <form
        id="app"
        @submit="checkForm"
        action="#"
        method="post"
      >
        <div>
          <h2 style="text-align: center;color: #d63938 "> ادیت کردن مغازه </h2>
        </div>

        <div class="inp">
          <p>نام مغازه</p>
          <input
            id="name"
            type="text"
            name="name"
            :value="$route.query.store.name"
          >

        </div>
        <div class="inp">
          <p> توضیحات درباره مغازه </p>

          <input
            id="caption"
            type="text"
            name="caption"
            :value="$route.query.store.caption"
          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="email"
            name="email"
            :value="$route.query.store.email"
          >

        </div>
        <div class="inp">
          <p> شماره تلفن </p>

          <input
            id="phone"
            type="number"
            name="phone"
            :value="$route.query.store.phone"
          >

        </div>
        <div class="inp">
          <p> پروفایل آی دی </p>

          <input
            id="profile_id"
            type="number"
            name="profile_id"
            :value="$route.query.store.profile_id"
          >

        </div>
        <div >
          <p>  عکس پروفایل </p>

          <input style="border: none"
            id="profile_pic"
            type="file"
            name="profile_id"
           v-on:value="$route.query.store.profile_pic"

          >

        </div>
        <div >
          <p> عکس هدر </p>

          <input style="border: none"
            id="header_pic"
            type="file"
            name="profile_id"
            v-on:value="$route.query.store.header_pic"
          >

        </div>
        <div class="inp">
          <p> دسته بندی مغازه </p>
          <select style="padding-right: 12%" name="cat_id" id="cars">
            <option v-for="cats in cat_names" :value="cats.id" :selected="cats.name===test">{{cats.name}}</option>

          </select>
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
        cat_names: this.$route.query.cat_names,
        test: this.$route.query.store.cat_name
      }

    }, methods: {
      checkForm: function () {
        axios.post()
      },onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },

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

    height: 1200px;
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
