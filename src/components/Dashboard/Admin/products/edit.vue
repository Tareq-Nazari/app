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
          <h2 style="text-align: center;color: #d63938 "> ادیت کردن محصول </h2>
        </div>

        <div class="inp">
          <p>نام محصول</p>
          <input
            id="name"
            type="text"
            name="name"
            :placeholder="$route.query.product.name"
          >

        </div>
        <div class="inp">
          <p> توضیحات درباره محصول </p>

          <input
            id="caption"
            type="text"
            name="caption"
            :placeholder="$route.query.product.caption"
          >

        </div>

        <div class="inp">
          <p> قیمت محصول </p>

          <input
            id="phone"
            type="number"
            name="price"
            :placeholder="$route.query.product.price"
          >

        </div>

        <div class="inp">
          <p> id مغازه </p>

          <input
            id="store_id"
            type="number"
            name="store_id"
            :placeholder="$route.query.product.store_id"
          >

        </div>
        <div >
          <p>  عکس محصول </p>

          <input style="border: none"
                 id="profile_pic"
                 type="file"
                 name="profile_id"
                 :placeholder="$route.query.product.pic"

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

    data() {
      return {
        cat_names: this.$route.query.cat_names,
        test: this.$route.query.product.cat_name
      }

    }, methods: {
      checkForm: function () {
        axios.post()
      }

    },
    components: {AdminHome},
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
