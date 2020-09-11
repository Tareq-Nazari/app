<template>
  <div class="main">
    <div></div>
    <div style="margin-bottom: 10px;display: grid;grid-template-columns: 1fr;grid-row-gap: 20px; ">
      <p style="color: red">{{message}}</p>
      <table class="table">

        <thead>
        <tr>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
              v-for="(column, index) in columns1"
              :key="index"> {{column}}
          </th>
        </tr>
        </thead>
        <thead>
        <tr>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          >
            -
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="name" name="name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="size" name="size" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="color" name="color" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          ><input style="font-size: 58%" v-model="cat_name" name="cat_name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"


          ><input style="font-size: 58%" v-model="id" name="id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="price" name="price" placeholder="فیلترکردن ">
          </th>

          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="store_id" name="store_id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="max" name="max" placeholder="حد بالا ">
            <input style="font-size: 58%" v-model="min" name="min" placeholder="حد پایین ">
          </th>


          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none">

            <button @click="send" style="cursor: pointer;background-color: #00a8ed;border: solid 1px" type="submit">
              اعمال فیلتر
            </button>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td class="counter" style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none">
          </td>
          <td style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
              v-for="(column, indexColumn) in columns" :key="indexColumn">{{product[column]}}
          </td>
          <td
            style="color: #00a8ed;text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
          >
            -
          </td>
          <td
            style="color: #00a8ed;cursor: pointer;text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
            @click="routerLinkToDetails(product.id)">
            مشاهده صفحه محصول
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>

<script>

  import AdminHome from "../AdminHome";
  import {mapGetters} from 'vuex';
  import axios from "axios";
  import {http} from "../../../../services/http_service";

  export default {
    name: "all",
    data() {
      return {
        cat_name: '',
        price: '',
        store_id: '',
        size: '',
        color: '',
        name: '',
        id: '',
        max: '',
        min: '',
        products: '',
        columns: ['name', 'size', 'color', 'cat_name', 'id', 'price', 'store_id'],
        columns1: ['شمارنده', 'نام محصول', 'سایز', 'رنگ', 'دسته بندی', 'id محصول', 'قیمت', 'store_id', 'حدود قیمت', 'جزئیات'],
        message:this.$route.query.message,
      }
    },
    components: {AdminHome},
    mounted() {
      setTimeout(() => {
        this.message = ''
      }, 5000);
    },

    methods: {

      routerLinkToDetails: function (id) {
        this.$router.push({path: '/dashboard/admin/product/detail', query: {id}});
      },
      name1: function (msg) {
        if (msg === 'نام محصول') {
          return 'name';
        }
        if (msg === 'id محصول') {
          return 'id';
        }
        if (msg === 'دسته بندی') {
          return 'cat_name';
        }
        if (msg === 'سایز') {
          return 'size';
        }
        if (msg === 'قیمت') {
          return 'price';
        }
        if (msg === 'رنگ') {
          return 'color';
        }


      },
      send: function () {
        http().post('admin/product/search', {
          id: this.id,
          store_id: this.store_id,
          name: this.name,
          cat_name: this.cat_name,
          price: this.price,
          size: this.size,
          color: this.color,
          max: this.max,
          min: this.min,


        }).then(response => (this.products = response.data))

      },
    },
    created() {
      http().get('admin/product/all')
        .then(response => (this.products = response.data)
        ).catch(error => console.log(error))
    },


    computed: {
      ...mapGetters([
        'stores'
      ]),

    }
  }

</script>

<style scoped>
  .main {
    display: grid;
    grid-template-columns: 2fr 4fr 0.8fr;


  }

  /*.allStore {*/
  /*  display: grid;*/
  /*  grid-template-columns: 0.1fr 0.4fr 0.2fr 0.1fr 0.2fr 0.5fr;*/
  /*  padding-top: 30px;*/

  /*}*/

  /*.po {*/

  /*}*/

  /*.row {*/

  /*  border: solid 1px #dcdcdc;*/
  /*  height: 40px;*/
  /*  padding-top: 10px;*/
  /*  text-align: center;*/

  /*}*/

  .table {
    margin-top: 20px;
    border-spacing: 0;
    border: solid 1px #dcdcdc;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
    0 3px 1px -2px rgba(0, 0, 0, .12),
    0 1px 5px 0 rgba(0, 0, 0, .2);


  }

  .table:last-child {
    border-left: solid 1px #dcdcdc;
  }

  tbody {

    counter-reset: section;

  }

  .counter::before {
    counter-increment: section;
    content: counter(section);
  }

  .filter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  input {
    height: 30%;
    width: 70%;
  }

</style>
