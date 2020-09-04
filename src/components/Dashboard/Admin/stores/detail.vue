<template>
  <div class="main">
    <div></div>
    <div class="textDetail">
      <h1>اسم مغازه : {{store[0].name}}</h1>
      <h2>توضیحات : {{store[0].caption}}</h2>
      <h3>ایمیل:{{store[0].email}} </h3>
      <h4>شماره تلفن :{{store[0].phone}} </h4>
      <h5>دسته بندی :{{store[0].cat_name}} </h5>
      <h5>ایدی مغازه : :{{store[0].id}} </h5>
      <div style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(store[0])" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت
          کردن مغازه
        </button>
        <button @click="editProfilePic(store[0].id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">
          ادیت
          کردن عکس پروفایل مغازه
        </button>
        <button @click="editHeaderPic(store[0].id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">
          ادیت
          کردن عکس هدر مغازه
        </button>
        <button @click="deleteStore(store[0].id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">حذف
          کردن
        </button>

      </div>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;grid-row-gap: 20px">
      <p style="font-family: vasir">عکس پروفایل</p>
      <img style="height: 120px" v-bind:src="'http://127.0.0.1/laravel/images/'+store[0].profile_pic">

      <p style="font-family: vasir">عکس هدر مغازه</p>
      <img style="height: 120px" v-bind:src="'http://127.0.0.1/laravel/images/'+store[0].header_pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    data() {
      return {
        id: this.$route.query.id,
        store: ''
        ,
        e: 1,
      }
    },

    name: "storeProfile"
    , components: {
      AdminHome
    },

    methods: {

      deleteStore: function (id) {
        if (confirm("آیا می خواهید مغازه را حذف کنید؟")) {
          axios.get('http://127.0.0.1/laravel/public/api/admin/store/delete' + id)
            .then(resp => {
              this.$router.push({path: '/dashboard/admin/store/all', query: {id}})
            }).catch(error => console.log(error))


        }
      },
      edit: function (store) {
        this.$router.push({path: '/dashboard/admin/store/edit', query: {store}});
      },
      editProfilePic: function (id) {
        this.$router.push({path: '/dashboard/admin/store/edit_profile_pic', query: {id}});
      },
      editHeaderPic: function (id) {
        this.$router.push({path: '/dashboard/admin/store/edit_header_pic', query: {id}});
      }
    },
    created() {
      axios.get('http://127.0.0.1/laravel/public/api/store/one' + this.id).then(
        response => {
          this.store = response.data
        }
      ).catch(error => console.log(error))
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
