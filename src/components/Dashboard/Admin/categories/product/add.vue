<template>


  <div class="main">
    <AdminHome></AdminHome>
    <div class="box">
      <form
        id="app"


      >
        <div>
          <h2 style="text-align: center;color: #d63938 ;padding-right: 0!important;font-size: 17px"> اضافه کردن دسته
            بندی جدید به محصولات</h2>
        </div>

        <div class="inp">
          <p>نام کتگوری</p>
          <input
            id="name"
            type="text"
            name="name"
            v-model="name"

          >

        </div>
        <div class="inp">
          <p> store_id</p>
          <input
            id="store_id"
            type="number"
            name="store_id"
            v-model="store_id"

          >

        </div>

        <div style="margin-top: 15px">
          <button
            type="submit"
            id="su"
            v-on:click="checkForm"
          >Sd
          </button>
        </div>

      </form>

    </div>


  </div>
</template>

<script>
  import AdminHome from "../../AdminHome";
  import axios from 'axios';

  export default {
    name: "add",
    data() {
      return {
        name:'',
        store_id:''

      }
    }, components: {

      AdminHome


    },
    methods: {

      checkForm: function () {

        axios.post('http://127.0.0.1/laravel/public/api/admin/category/product/add',
          {
            name: this.name,
            store_id: this.store_id
          }
        )
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

    height: 945px;
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















