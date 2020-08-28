<template>


  <div class="main">
    <div></div>
    <div class="box">
      <form
        id="app"
        v-on:submit.prevent="submit"
      >
<div>
  <h2 style="text-align: center;color: #d63938 ">ایجاد مغازه جدید</h2>
</div>

        <div class="inp">
          <p>نام مغازه</p>
          <input
            id="name"
            type="text"
            name="name"
            v-model="name"
          >

        </div>
        <div class="inp">
          <p> توضیحات درباره مغازه </p>

          <input
            id="caption"
            type="text"
            name="caption"
            v-model="caption"
          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="email"
            name="email"
            v-model="email"
          >

        </div>
        <div class="inp">
          <p> شماره تلفن </p>

          <input
            id="phone"
            type="number"
            name="phone"
            v-model="phone"
          >

        </div>
        <div class="inp">
          <p>  پروفایل آی دی  </p>

          <input
            id="profile_id"
            type="number"
            name="profile_id"
            v-model="profile_id"
          >

        </div>
        <div class="inp">
          <p>  آدرس  </p>

          <input
            id="address"
            type="number"
            name="address"
            v-model="address"
          >

        </div>
        <div class="inp">
          <p> دسته بندی مغازه </p>
          <select  v-model="selected" style="padding-right: 12%" name="categories" id="categories">
            <option  v-for="cat in cats" :value="cat.id">{{cat.name}}</option>

          </select>
        </div>

        <div style="margin-top: 15px">
          <button
            type="submit"

            id="su"
            v-on:click="checkForm"
          >ثبت مغازه</button>
        </div>

      </form>

    </div>


  </div>
</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    name: "create",
    data() {
      return {
        name:'',
        email:'',
        caption:'',
        phone:'',
        profile_id:'',
        cats:'',
        address:'',
        selected:'',

      }
    }, components: {

      AdminHome


    }, created() {
      axios.post('http://127.0.0.1/laravel/public/api/category/store_all')
        .then(response => (this.cats = response.data)
        ).catch(error => console.log(error))
    },

    methods: {
      checkForm: function () {
        let formData = new FormData();
        formData.append('phone', this.phone)
        formData.append('profile_id', this.profile_id)
        formData.append('address', this.address)
        formData.append('caption', this.caption)
        formData.append('email', this.email)
        formData.append('cat_id', this.selected)
        formData.append('name', this.name)
        axios.post('http://127.0.0.1/laravel/public/api/admin/store/create',
          formData,
        ).then(function () {
          console.log('SUCCESS!!');
        })
          .catch(function () {
            console.log('FAILURE!!');
          });

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

    height: 1045px;
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
  select{
    border-radius: 3px;
    border: solid 1px #dcdcdc;
    min-height: 45px;
    font-size: 15px;
    width: 40%;

  }
  select:focus{
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
  p{
    color: #d81c1e;
  }

</style>















