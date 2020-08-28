<template>
  <div class="main">
    <div></div>
    <div style="margin-bottom: 10px;display: grid;grid-template-columns: 1fr;grid-row-gap: 20px; ">
      <table class="table">

        <thead>
        <thead>
        <tr>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
              v-for="(column, index) in columns1"
              :key="index"> {{column}}
          </th>

        <tr>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          >
            -
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          ><input style="font-size: 58%" v-model="name" name="name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          ><input style="font-size: 58%" v-model="id" name="id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          ><input style="font-size: 58%" v-model="cat_name" name="cat_name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          ><input style="font-size: 58%" v-model="profile_id" name="profile_id" placeholder="فیلترکردن ">
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          >
            <button @click="send" style="cursor: pointer;background-color: #00a8ed;border: solid 1px" type="submit">
              اعمال فیلتر
            </button>
          </th>
        </tr>
        </thead>
        <tbody >
        <tr v-for="(store, index) in stores" :key="index">
          <td class="counter" style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none">
          </td>
          <td style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
              v-for="(column, indexColumn) in columns" :key="indexColumn">{{store[column]}}
          </td>
          <td
            style="color: #00a8ed;cursor: pointer;text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
            @click="routerLinkToDetails(store)">
            مشاهده صفحه مغازه
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
        pull: 0,
        stores: '',
        id: '',
        cat_id: '',
        profile_id: '',
        name: '',
        cat_name: '',
        columns: ['name', 'id', 'cat_name', 'profile_id'],
        columns1: ['شمارنده', 'نام مغازه', 'id مغازه', 'دسته بندی مغازه', 'پروفایلid', 'جزئیات'],

      }
    },
    components: {AdminHome},
    methods: {

      routerLinkToDetails: function (store) {
        this.$router.push({path: '/dashboard/admin/store/detail', query: {store}});
      },
      name1: function (msg) {
        if (msg === 'نام مغازه') {
          return 'name';
        }
        if (msg === 'id مغازه') {
          return 'id';
        }
        if (msg === 'دسته بندی مغازه') {
          return 'title';
        }
        if (msg === 'پروفایلid') {
          return 'profile_id';
        }
      },
      send: function () {
        axios.post('http://127.0.0.1/laravel/public/api/admin/store/search', {
          id: this.id,
          profile_id: this.profile_id,
          name: this.name,
          cat_id: this.cat_id,
        }).then(response => (this.stores = response.data))
      }
    },
    created() {
      axios.post('http://127.0.0.1/laravel/public/api/admin/store/all')
        .then(response => (this.stores = response.data)
        ).catch(error => console.log(error))
    },
    computed: {
      ...mapGetters([]),
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
