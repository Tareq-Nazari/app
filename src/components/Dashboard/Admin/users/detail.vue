<template>
  <div class="main">
    <admin-home></admin-home>
    <div class="textDetail">
      <h1>نام : {{this.$route.query.user.name}}</h1>
      <h2>profile_id : {{this.$route.query.user.id}}</h2>
      <h3>ایمیل:{{this.$route.query.user.email}} </h3>
      <h4>شماره تلفن :{{this.$route.query.user.phone}} </h4>
      <h5>user_id :{{this.$route.query.user.user_id}} </h5>
      <h5>آدرس : :{{this.$route.query.user.address}} </h5>
      <h5>نقش : :{{this.$route.query.user.role}} </h5>
      <div style="display: grid;grid-template-columns: 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(user,roles)"
                style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت
          کردن
        </button>
        <button @click="deleteUser(user.id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">حذف کردن
        </button>


      </div>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;grid-row-gap: 20px">
      <p style="font-family: vasir">عکس پروفایل</p>
      <img style="height: 80%" :src="'/src/img/'+this.$route.query.user.pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    data() {
      return {
        user: {
          email: this.$route.query.user.email,
          name: this.$route.query.user.name,
          id: this.$route.query.user.id,
          phone: this.$route.query.user.phone,
          user_id: this.$route.query.user.user_id,
          role: this.$route.query.user.role,
          address: this.$route.query.user.address,
          pic: this.$route.query.user.pic,
        },
        roles: [
          {
            'id': '1',
            'name': 'author',

          }, {
            'id': '2',
            'name': 'admin',

          }, {
            'id': '3',
            'name': 'shopOwner',

          }
        ]

      }
    },

    name: "storeProfile"
    , components: {
      AdminHome
    },

    methods: {
      deleteUser: function (id) {
        if (confirm("آیا می خواهید مغازه را حذف کنید؟")) {
          axios.post()

        }
      },
      edit: function (user, roles) {
        this.$router.push({path: '/dashboard/admin/user/edit', query: {user, roles}});
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
