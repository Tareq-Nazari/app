<template>


  <div class="main">
    <AdminHome></AdminHome>
    <div class="box">
      <form
        id="app"
        @submit="checkForm"
        action="#"
        method="post"
      >
        <div>
          <h2 style="text-align: center;color: #d63938 ">اضافه کردن کاربرجدید</h2>
        </div>

        <div class="inp">
          <p>نام کاربر</p>
          <input
            id="name"
            type="text"
            name="name"
          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="text"
            name="email"
          >

        </div>
        <div class="inp">
          <p> رمزعبور </p>

          <input
            id="password"
            type="password"
            name="password"
          >

        </div>
        <div class="inp">
          <p> شماره تلفن </p>

          <input
            id="phone"
            type="number"
            name="phone"
          >

        </div>
        <div class="inp">
          <p> آدرس  </p>

          <input
            id="address"
            type="text"
            name="address"
          >

        </div>
        <div class="inp">
          <p>نقش </p>
          <select style="padding-right: 12%" name="categories" id="categories">
            <option v-for="role in roles"  :value="role.id">{{role.name}}</option>

          </select>
        </div>

        <div style="margin-top: 15px">
          <input
            type="submit"
            value="ثبت"
            id="su"
          >
        </div>

      </form>

    </div>


  </div>
</template>

<script>
  import AdminHome from "../AdminHome";

  export default {
    name: "add",
    data() {
      return {
        roles: [
          {
            id: 1,
            name: "admin"
          },
          {
            id: 2,
            name: "shopOwner"
          },
          {
            id: 3,
            name: "author"
          }]
      }
    }, components: {

      AdminHome


    },
    methods: {
      checkForm:function () {

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















