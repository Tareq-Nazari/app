<template>
  <div class="main">
    <admin-home></admin-home>
    <div class="textDetail">
      <h1>نام:{{user.name}}</h1>
      <h2>ایمیل : {{user.email}}</h2>
      <h3>profile_id:{{user.profile_id}} </h3>
      <h4> user_id :{{user.user_id}} </h4>
      <h5>شماره تلفن : {{user.phone}}</h5>
      <h5>آدرس :{{user.address}} </h5>

    </div>

    <div style="display: grid;grid-template-columns: 1fr;grid-row-gap: 20px">
      <p style="font-family: vasir">عکس پروفایل</p>
      <img style="height: 80%" :src="'/src/img/'+user.pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    data() {
      return {


        roles: [
          {
            id: 1,
            name: "admin"
          },
          {
            id: 2,
            name: "author"
          },
          {
            id: 3,
            name: "shopOwner"
          }

        ],
        user: {
          profile_id: "21",
          name: "sd",
          user_id: "25",
          address: "dD",
          phone: "656",
          email: "@",
          role: "admin",
          pic: "product-151.jpg",

        },

      }
    },

    name: "storeProfile"
    , components: {
      AdminHome
    },

    methods: {}
  }
</script>

<style scoped>
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }

  .textDetail {
    display: grid;
    grid-template-columns: 1fr;
    font-family: vasir;
  }

  @media only screen and (max-width: 470px) {
  }

</style>
