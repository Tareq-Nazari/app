<template>
  <div class="main">
    <div></div>
    <div class="textDetail">
      <p style="color: red">{{message}}</p>
      <h1>نام : {{user[0].name}}</h1>
      <h2>profile_id : {{user[0].id}}</h2>
      <h3>ایمیل:{{user[0].email}} </h3>
      <h4>شماره تلفن :{{user[0].phone}} </h4>
      <h5>user_id :{{user[0].user_id}} </h5>
      <h5>آدرس : :{{user[0].address}} </h5>
      <h5>نقش : :{{ user[0].role}} </h5>
      <div style="display: grid;grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(user[0],roles)"
                style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت
          کردن
        </button>
        <button @click="editPic(user[0].user_id)"
                style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">
          تغیر عکس پروفایل
        </button>
        <button @click="deleteUser(user[0].user_id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">حذف
          کردن
        </button>


      </div>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;grid-row-gap: 20px">
      <p style="font-family: vasir">عکس پروفایل</p>
      <img style="height: 80%" v-bind:src="'http://127.0.0.1/storeBackend/images/'+user[0].pic">


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
        user:'',

message:this.$route.query.message,
          id: this.$route.query.id,


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
        if (confirm("آیا می خواهید کاربر را حذف کنید؟")) {
          http().get('admin/users/delete' + id)
            .then(resp => {
                this.$router.push({path: '/dashboard/admin/users/all',query:{message:'کاربر باموفقیت حذف شد'}})
              }
            ).catch(error => console.log(error))

        }
      },
      mounted() {
        setTimeout(() => {
          this.message = ''
        }, 5000);
      },
      edit: function (user, roles) {
        this.$router.push({path: '/dashboard/admin/user/edit', query: {user, roles}});
      },
      editPic: function (id) {
        this.$router.push({path: '/dashboard/admin/user/edit_pic', query: {id}});
      }
    },
    created() {
      http().post('admin/users/search', {
        'id': this.id
      })
        .then(response => (this.user = response.data)
        ).catch(error => console.log(error))
    },
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
