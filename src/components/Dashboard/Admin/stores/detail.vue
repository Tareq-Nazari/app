<template>
  <div class="main">
    <admin-home></admin-home>
    <div class="textDetail">
      <h1>اسم مغازه : {{name}}</h1>
      <h2>توضیحات : {{caption}}</h2>
      <h3>ایمیل:{{email}} </h3>
      <h4>شماره تلفن :{{phone}} </h4>
      <h5>دسته بندی :{{cat_id}} </h5>
      <h5>ایدی مغازه : :{{id}} </h5>
      <div style="display: grid;grid-template-columns: 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(store)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت کردن
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
        store: {
          store_id: this.$route.params.store_id,
          name: "ss",
          email: 'dd',
          caption: "sad",
          phone: "sdds",
          cat_name: "aa",
          cat_names: [
           {
              id: 1,
              name: "sdsd"
            },
            {
              id: 2,
              name: "dd"
            },
            {
              id: 3,
              name: "aa"
            }

         ] ,
          profile_id: 1,
          header_pic: "movie1.jpg",
          profile_pic: "movie1.jpg",
          id: 21

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
      edit: function (store) {
        this.$router.push({path: '/dashboard/admin/store/edit', query: {store}});
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
