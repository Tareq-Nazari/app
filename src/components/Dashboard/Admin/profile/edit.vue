<template>
  <div class="main">
    <div>
      <div></div>
    </div>
    <div class="box">
      <form
        id="app"
        v-on:submit.prevent="submit"
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
            :placeholder="this.user.name"
            v-model="user.name"
          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="email"
            name="email"
            :placeholder="this.user.email"
            v-model="user.email"
          >

        </div>
        <div class="inp">
          <p> شماره تلفن </p>

          <input
            id="phone"
            type="number"
            name="phone"
            :placeholder="this.user.phone"
            v-model="user.phone"
          >

        </div>
        <div class="inp">
          <p> آدرس </p>

          <input
            id="address"
            type="text"
            name="address"
            :placeholder="this.user.address"
            v-model="user.address"
          >

        </div>

        <div style="margin-top: 15px">
          <button
            type="submit"
            name="submit"
            value=" ثبت تغیرات"
            id="su"
            v-on:click="checkForm"
          >ثبت تغیرات</button>
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
        user: '',
        user_name: "sd",
        user_phone: "22",
        user_pic: "sd",
        user_email: "dd@hmail",
        user_address: "sd",


      }

    }, created() {
      axios.get('users/profile/show')
        .then(response => (this.user = response.data[0])
        ).catch(error => console.log(error))
    },
    methods: {
      checkForm: function () {
        axios.post('users/profile/edit', {
          name: this.user.name,
          email: this.user.email,
          address: this.user.address,
          phone: this.user.phone,
        }).then(res =>{
          this.$router.push({
            path: '/dashboard/admin/profile/show', query: {message:'اطلاعات پروفایل با موفقیت تغیر یافت'}
          })
        }).catch(error => console.log(error))


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
