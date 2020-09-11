<template>
  <div class="main">
    <div></div>
    <div class="textDetail">
      <p style="color: red">{{message}}</p>
      <h1>نام:{{user.name}}</h1>
      <h2>ایمیل : {{user.email}}</h2>
      <h3>profile_id:{{user.profile_id}} </h3>
      <h4> user_id :{{user.user_id}} </h4>
      <h5>شماره تلفن : {{user.phone}}</h5>
      <h5>آدرس :{{user.address}} </h5>
      <div style="display: grid;grid-template-columns: 1fr 1fr">
      <button  @click="editPic()"
              style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">
        تغیر عکس پروفایل
      </button>
      </div>
    </div>


    <div style="display: grid;grid-template-columns: 1fr;grid-row-gap: 20px">
      <p style="font-family: vasir">عکس پروفایل</p>
      <img style="height: 80%" v-bind:src="'http://127.0.0.1/storeBackend/images/'+user.pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";
  import {http} from "../../../../services/http_service";

  export default {
    data() {
      return {
        user: '',
        message:this.$route.query.message


      }
    },

    name: "storeProfile"
    , components: {
      AdminHome
    },
    created() {
      http().get('users/profile/show')
        .then(response => (this.user = response.data[0])
        ).catch(error => console.log(error))
    },
    mounted() {
      setTimeout(() => {
        this.message = ''
      }, 5000);
    },


    methods: {
      editPic: function () {
        this.$router.push({path: '/dashboard/admin/profile/editPic'});


      }
    }
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
