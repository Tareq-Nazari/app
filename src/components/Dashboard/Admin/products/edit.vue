<template>
  <div class="main">
    <div>

      <div></div>
    </div>
    <div class="box">
      <form
        id="app"
        v-on:submit.prevent="submit"
      >
        <div>
          <h2 style="text-align: center;color: #d63938 "> ادیت کردن محصول </h2>
        </div>

        <div class="inp">
          <p>نام محصول</p>
          <input
            id="name"
            type="text"
            name="name"
            v-model="name"
          >

        </div>
        <div class="inp">
          <p> توضیحات درباره محصول </p>

          <input
            id="caption"
            type="text"
            name="caption"
            v-model="caption"
          >

        </div>
        <div class="inp">
          <p> رنگ  محصول </p>

          <input
            id="color"
            type="text"
            name="color"
            v-model="color"
          >

        </div>
        <div class="inp">
          <p>  سایز محصول </p>

          <input
            id="size"
            type="text"
            name="size"
            v-model="size"
          >

        </div>

        <div class="inp">
          <p> قیمت محصول </p>

          <input
            id="price"
            type="number"
            name="price"

            v-model="price"
          >

        </div>

        <div class="inp">
          <p> id مغازه </p>

          <input
            id="store_id"
            type="number"
            name="store_id"


            v-model="store_id"
          >

        </div>


<!--        <div class="inp">-->
<!--          <p> دسته بندی مغازه </p>-->
<!--          <select v-model="selected" style="padding-right: 12%" name="cat_id" id="cars">-->
<!--            <option v-for="cats in  categories" :value="cats.id">{{cats.name}}</option>-->

<!--          </select>-->
<!--        </div>-->

        <div style="margin-top: 15px">
          <button
            type="submit"

            id="su"
            v-on:click="checkForm(id)"
          >ثبت تغیرات
          </button>
        </div>

      </form>

    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";
  import {http} from "../../../../services/http_service";

  export default {
    name: "edit",

    data() {
      return {
        cat_id: this.$route.query.product.cat_id,
        price: this.$route.query.product.price,
        store_id: this.$route.query.product.store_id,
        name: this.$route.query.product.name,
        selected: this.$route.query.product.cat_id,
        size: this.$route.query.product.size,
        color: this.$route.query.product.color,
        caption: this.$route.query.product.caption,
        categories: '',
        id:this.$route.query.product.id,

      }

    }, methods: {
      checkForm: function (id) {
        let formData = new FormData();
        formData.append('id', this.id)
        formData.append('price', this.price)
        formData.append('caption', this.caption)
        formData.append('size', this.size)
        formData.append('color', this.color)
        formData.append('name', this.name)
        formData.append('cat_id', this.selected)
        http().post('admin/product/edit',
          formData
        , {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

        }).then((resp) => {
          this.$router.push({
            path: '/dashboard/admin/product/detail', query: {id,message:'محصول باموفقیت تغیر یافت'}
          })
        }).catch(error => console.log(error))

      },
      selectFile:function ()

      {

        // `files` is always an array because the file input may be in multiple mode
        this.file = this.$refs.file.files[0];

      }

    },
    created() {
      // http().get('admin/category/product/all')
      //   .then(response => (this.categories = response.data)
      //   ).catch(error => console.log(error))
    },
    components: {AdminHome},
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

    height: 1200px;
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

  select {
    border-radius: 3px;
    border: solid 1px #dcdcdc;
    min-height: 45px;
    font-size: 15px;
    width: 40%;

  }

  select:focus {
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

  p {
    color: #d81c1e;
  }

</style>
