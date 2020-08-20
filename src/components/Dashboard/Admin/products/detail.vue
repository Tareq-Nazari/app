<template>
  <div class="main">
    <admin-home></admin-home>
    <div class="textDetail">
      <h1>نام محصول : {{this.$route.query.product.name}}</h1>
      <h2>توضیحات : {{this.$route.query.product.caption}}</h2>
      <h3>قیمت:{{this.$route.query.product.price}} </h3>
      <h4> ایدی محصول :{{this.$route.query.product.id}} </h4>
      <h5>دسته بندی :{{this.$route.query.product.cat_name}} </h5>
      <h5>ایدی مغازه : :{{this.$route.query.product.store_id}} </h5>

      <div style="display: grid;grid-template-columns: 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(product,cat_names)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت کردن
        </button>
        <button @click="deleteProduct(id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">حذف کردن
        </button>

      </div>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;">
      <p style="font-family: vasir">عکس محصول</p>
      <img style="height: 420px" v-bind:src="'/src/img/'+this.$route.query.product.pic">




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
            name: "لباس تابستانه"
          },
          {
            id: 3,
            name: "aa"
          }

        ],
        product:{

          pic: this.$route.query.product.pic,
          store_id: this.$route.query.product.store_id,
          price: this.$route.query.product.price,
          caption: this.$route.query.product.caption,
          id: this.$route.query.product.id,
          cat_name: this.$route.query.product.cat_name,
          name: this.$route.query.product.name,

        },



      }


    },


    name: "storeProfile"
    , components: {
      AdminHome
    },
    methods: {
      deleteProduct: function (id) {
        if (confirm("آیا می خواهید مغازه را حذف کنید؟")) {
          axios.post()
        }
      },
      edit: function (product,cat_names) {
        this.$router.push({path: '/dashboard/admin/product/edit', query: {product,cat_names}});
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
