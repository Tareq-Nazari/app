<template>
  <div class="main">
    <admin-home></admin-home>
    <div class="textDetail">
      <h1>اسم مغازه : {{this.$route.query.store.name}}</h1>
      <h2>توضیحات : {{this.$route.query.store.caption}}</h2>
      <h3>ایمیل:{{this.$route.query.store.email}} </h3>
      <h4>شماره تلفن :{{this.$route.query.store.phone}} </h4>
      <h5>دسته بندی :{{this.$route.query.store.cat_name}} </h5>
      <h5>ایدی مغازه : :{{this.$route.query.store.id}} </h5>
      <div style="display: grid;grid-template-columns: 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(store,cat_names)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت
          کردن
        </button>
        <button @click="deleteStore(id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">حذف کردن
        </button>

      </div>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;grid-row-gap: 20px">
      <p style="font-family: vasir">عکس پپروفایل</p>
      <img style="height: 120px" :src="'/src/img/'+profile_pic">

      <p style="font-family: vasir">عکس هدر مغازه</p>
      <img style="height: 120px" :src="'/src/img/'+header_pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    data() {
      return {


        cat_names: [
          {
            id: 1,
            name: "sdsd"
          },
          {
            id: 2,
            name: "خشکشویی"
          },
          {
            id: 3,
            name: "aa"
          }

        ],
        store: {
          profile_id: this.$route.query.store.profile_id,
          header_pic: this.$route.query.store.header_pic,
          profile_pic: this.$route.query.store.profile_pic,
          email: this.$route.query.store.email,
          phone: this.$route.query.store.id,
          address: this.$route.query.store.address,
          caption: this.$route.query.store.caption,
          id: this.$route.query.store.id,
          cat_name: this.$route.query.store.cat_name,
          name: this.$route.query.store.name,

        },
        e: 1,
      }
    },

    name: "storeProfile"
    , components: {
      AdminHome
    },

    methods: {
      delete1: function (id) {
        if (confirm("آیا می خواهید مغازه را حذف کنید؟")) {
          axios.post()

        }
      },
      edit: function (store, cat_names) {
        this.$router.push({path: '/dashboard/admin/store/edit', query: {store, cat_names}});
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
