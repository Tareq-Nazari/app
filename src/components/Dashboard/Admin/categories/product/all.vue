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

          ><input style="font-size: 58%" v-model="name1" name="name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="id1" name="id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="store_id1" name="store_id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          >
            <button @click="send" style="touch-action: none;cursor: pointer;background-color: #00a8ed;border: solid 1px" type="submit">
              اعمال فیلتر
            </button>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(category, index) in cats" :key="index">
          <td class="counter" style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none">
          </td>
          <td style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
              v-for="(column, indexColumn) in columns" :key="indexColumn">{{category[column]}}
          </td>
          <td
            style="color: #00a8ed;text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
          >
            <button @click="delete1(category.id)"
                    style=" cursor:pointer;background-color: #EF394E;border: 1px solid #d63938">حذف کردن
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>


</template>

<script>

  import AdminHome from "../../AdminHome";
  import {mapGetters} from 'vuex';
  import axios from "axios";

  export default {
    name: "all",
    data() {
      return {
        cats: '',
        name1: '',
        id1: '',
        store_id1: '',


        columns: ['name', 'id', 'store_id'],
        columns1: ['شمارنده', 'نام دسته بندی', 'id', 'idمغازه', 'جزئیات'],
        columns2: ['دسته بندی', 'id', 'idمغازه']
      }
    },
    components: {AdminHome},
    methods: {

      delete1: function (id) {
        if (confirm("آیا می خواهید دسته بندی را حذف کنید؟")) {
          axios.get('http://127.0.0.1/laravel/public/api/admin/category/product/delete' + id)
            .then(response => {
                axios.get('http://127.0.0.1/laravel/public/api/admin/category/product/all')
                  .then(response => (this.cats = response.data)
                  ).catch(error => console.log(error))

              }
            ).catch(error => console.log(error))

        }
      },
      name2: function (msg) {
        if (msg === 'id') {
          this.id1 = msg;
          return 'id';
        }
        if (msg === 'دسته بندی') {
          this.name1 = msg;
          return 'name';
        }
        if (msg === 'idمغازه') {
          this.store_id1 = msg;
          return 'store_id';
        }
      },
      send: function () {
        axios.post('http://127.0.0.1/laravel/public/api/admin/category/product/search', {
          store_id: this.store_id1,
          id: this.id1,
          name: this.name1,
        }).then(response => (this.cats = response.data))
      }

    },
    created() {
      axios.get('http://127.0.0.1/laravel/public/api/admin/category/product/all')
        .then(response => (this.cats = response.data)
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
