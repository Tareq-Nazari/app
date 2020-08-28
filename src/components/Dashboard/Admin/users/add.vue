<template>


  <div class="main">
    <AdminHome></AdminHome>
    <div class="box">
      <form
        v-on:submit.prevent="submit"
      >
        <div>
          <h2 style="text-align: center;color: #d63938 ">اضافه کردن کاربرجدید</h2>
        </div>

        <div class="inp">
          <p>نام کاربر</p>
          <input
            id="name"
            type="text"
            v-model="name"
          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="text"
            name="email"
            v-model="email"
          >

        </div>
        <div class="inp">
          <p> رمزعبور </p>

          <input
            id="password"
            type="password"
            name="password"
            v-model="password"
          >

        </div>
        <div class="inp">
          <p> تکرار رمزعبور </p>

          <input
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            v-model="password_confirmation"
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
          <p> آدرس </p>

          <input
            id="address"
            type="text"
            name="address"
            v-model="address"
          >

        </div>
        <div class="inp">
          <p>نقش </p>
          <select v-model="selected"style="padding-right: 12%" name="categories" id="categories">
            <option v-for="role in roles"    :value="role.id">{{role.title}}</option>

          </select>
        </div>

        <div style="margin-top: 15px">
          <input
            type="submit"

            id="su"
            v-on:click="checkForm"
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
    name: "add",
    data() {
      return {
        name: '',
        password: '',
        phone: '',
        address: '',
        email: '',
        password_confirmation:'',
        selected:'',
        roles:''


      }
    }, components: {

      AdminHome


    },
    methods: {
      checkForm: function () {

        axios.post('http://127.0.0.1/laravel/public/api/admin/users/add',
          {
            name: this.name,
            password: this.password,
            email: this.email,
            phone: this.phone,
            address: this.address,
            role: this.selected,
            password_confirmation:this.password_confirmation

          }
        )
      },
    },
    created() {
      axios.post('http://127.0.0.1/laravel/public/api/admin/roles')
        .then(response => (this.roles = response.data)
        ).catch(error => console.log(error))
    },


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















