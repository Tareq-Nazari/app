<template>
  <div class="main">
    <div></div>
    <div style="margin-bottom: 10px;display: grid;grid-template-columns: 1fr;grid-row-gap: 20px; ">
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

          ><input style="font-size: 58%" v-model="id" name="id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="product_name" name="product_name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="store_name" name="store_name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="price" name="price" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="payment_receipt" name="payment_receipt" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="created_at" name="created_at" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="store_id" name="store_id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="product_id" name="product_id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="profile_id" name="profile_id" placeholder="فیلترکردن ">
          </th>

          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          >
            <button @click="send" style="cursor: pointer;background-color: #00a8ed;border: solid 1px" type="submit">
              اعمال فیلتر
            </button>
          </th>
        </tr>
        </thead>
        <tbody >
        <tr v-for="(product, index) in factors" :key="index">
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

  export default {
    name: "all",
    data() {
      return {
        id: '',
        product_name: '',
        product_id: '',
        store_name: '',
        store_id: '',
        payment_receipt: '',
        created_at: '',
        profile_id: '',
        price: '',
        factors: '',
        columns: ['id', 'product_name', 'store_name', 'price', 'payment_receipt', 'created_at', 'store_id', 'product_id', 'profile_id'],
        columns1: ['شمارنده', 'id', 'نام محصول', 'نام مغازه', 'قیمت', 'شماره پرداخت', 'تاریخ پرداخت', 'idمغازه', 'idمحصول', 'idپروفابل خریدار', 'جزئیات'],
        columns2: ['id', 'نام محصول', 'نام مغازه', 'قیمت', 'شماره پرداخت', 'تاریخ پرداخت', 'idمغازه', 'idمحصول', 'idپروفابل خریدار',]
      }
    },
    components: {AdminHome},
    methods: {

      routerLinkToDetails: function (product) {
        this.$router.push({path: '/dashboard/admin/product/detail', query: {product}});
      },
      name1: function (msg) {
        if (msg === 'نام محصول') {
          return 'product_name';
        }
        if (msg === 'idمحصول') {
          return 'product_id';
        }
        if (msg === 'id') {
          return 'id';
        }
        if (msg === 'idپروفابل خریدار') {
          return 'profile_id';
        }
        if (msg === 'idمغازه') {
          return 'store_id';
        }
        if (msg === 'نام مغازه') {
          return 'store_name';
        }
        if (msg === 'شماره پرداخت') {
          return 'payment_receipt';
        }
        if (msg === 'قیمت') {
          return 'price';
        }
        if (msg === 'تاریخ پرداخت') {
          return 'created_at';
        }

      },
      send: function () {
        axios.post('http://127.0.0.1/laravel/public/api/admin/factors/search', {
          id: this.id,
          product_name: this.product_name,
          product_id: this.product_id,
          store_name: this.store_name,
          store_id: this.store_id,
          payment_receipt: this.payment_receipt,
          created_at: this.created_at,
          profile_id: this.product_id,
          price: this.price,
        }).then(response => (this.factors = response.data))

      },
    },
    created() {
      axios.post('http://127.0.0.1/laravel/public/api/admin/factors/all')
        .then(response => (this.factors = response.data)
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
    grid-template-columns: 0.4fr 1fr 0.2fr;

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
