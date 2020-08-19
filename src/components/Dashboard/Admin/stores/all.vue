<template>
  <div class="main">
    <admin-home></admin-home>
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
              v-for="(column, index) in columns2"
              :key="index"><input style="font-size: 58%" :name="name1(column)" :placeholder="'فیلترکردن '+column">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"
          >
            <button @click="send" style="cursor: pointer;background-color: #00a8ed;border: solid 1px" type="submit">اعمال فیلتر</button>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="counter" style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none">
          </td>
          <td style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
              v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}
          </td>
          <td
            style="color: #00a8ed;cursor: pointer;text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
            @click="routerLinkToDetails(item.id)">
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
        stores: [
          {name: "مغازه من", id: "21", cat_name: 'خشکشویی'},
          {name: "مغازه او", id: "22", cat_name: 'ترشویی'},
          {name: "مغsdازه او", id: "25", cat_name: 'ترشsdویی'},
          {name: "مغاasزه او", id: "27", cat_name: 'ترشویsdی'},
          {name: "مغازwه او", id: "28", cat_name: 'ترشوsdیی'},
          {name: "as او", id: "29", cat_name: 'ترشویی'},
        ],
        items: [
          {
            'id': '1',
            'title': 'hello',
            'description': 'ok ok',
            'created_date': '2018-09-09'
          },
          {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          }, {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          }, {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          }, {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          }, {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          }, {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          }, {
            'id': '2',
            'title': 'hello 2',
            'description': 'ok ok 2',
            'created_date': '2018-10-09'
          },
        ],
        columns: ['description', 'title', 'id',],
        columns1: ['شمارنده', 'نام مغازه', 'دسته بندی مغازه', 'id مغازه', 'جزئیات'],
        columns2: [ 'نام مغازه', 'دسته بندی مغازه', 'id مغازه']
      }
    },
    components: {AdminHome},
    methods: {

      routerLinkToDetails: function (store_id) {
        this.$router.push({path: '/dashboard/admin/store/detail/'+store_id});
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

      },
      send(){
        axios.post()
      }

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
