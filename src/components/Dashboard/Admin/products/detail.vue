<template>
  <div class="main">
    <div></div>
    <div class="textDetail">
      <h1>نام محصول : {{product[0].name}}</h1>
      <h2>توضیحات : {{product[0].caption}}</h2>
      <h3>قیمت:{{product[0].price}} </h3>
      <h4> ایدی محصول :{{product[0].id}} </h4>
      <h5>دسته بندی :{{product[0].cat_name}} </h5>
      <h5> رنگ :{{product[0].color}} </h5>
      <h5> سایز :{{product[0].size}} </h5>
      <h5>ایدی مغازه : :{{product[0].store_id}} </h5>

      <div style="display: grid;grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 5px">
        <button @click="edit(product[0])" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">ادیت
          کردن
        </button>
        <button @click="editPic(product[0].id,product)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">
          تغیرعکس محصول
        </button>
        <button @click="deleteProduct(product[0].id)" style="border-radius: 4px;background-color: rgba(255,102,37,0.78)">
          حذف کردن
        </button>

      </div>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;">
      <p style="font-family: vasir">عکس محصول</p>
      <img style="height: 420px" v-bind:src="'http://127.0.0.1/laravel/images/'+product[0].pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    data() {
      return {
        product:'',
        id:this.$route.query.id,




      }


    },


    name: "storeProfile"
    , components: {
      AdminHome
    },
    methods: {
      deleteProduct: function (id) {
        if (confirm("آیا می خواهید مغازه را حذف کنید؟")) {
          axios.get('http://127.0.0.1/laravel/public/api/admin/product/delete' + id)
            .then(resp => {
              this.$router.push({path: '/dashboard/admin/product/all'})
            }
            ).catch(error => console.log(error))



        }
      },

      edit: function (product, cat_names) {
        this.$router.push({path: '/dashboard/admin/product/edit', query: {product, cat_names}});
      },
      editPic: function (id, product) {
        this.$router.push({path: '/dashboard/admin/product/editPic', query: {id}});


      }
    },
    created() {
      axios.get('http://127.0.0.1/laravel/public/api/product/one' + this.id).then(
        response => {
          this.product = response.data
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
