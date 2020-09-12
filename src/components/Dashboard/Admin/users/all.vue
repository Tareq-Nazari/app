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

          ><input style="font-size: 58%" v-model="profile_id" name="profile_id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="id" name="id" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="name" name="name" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="email" name="email" placeholder="فیلترکردن ">
          </th>

          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="phone" name="phone" placeholder="فیلترکردن ">
          </th>
          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none"

          ><input style="font-size: 58%" v-model="role" name="role" placeholder="فیلترکردن ">
          </th>

          <th style="color: #d81c1e;text-align: center;border:solid 1px #dcdcdc;border-left: none">
            <button @click="send" style="cursor: pointer;background-color: #00a8ed;border: solid 1px" type="submit">
              اعمال فیلتر
            </button>
          </th>
        </tr>
        </thead>
        <tbody >
        <tr v-for="(user, index) in users" :key="index">
          <td class="counter" style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none">
          </td>
          <td style="text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
              v-for="(column, indexColumn) in columns" :key="indexColumn">{{user[column]}}
          </td>
          <td
            style="color: #00a8ed;cursor: pointer;text-align: center;border:solid 1px #dcdcdc;border-top: none;border-left: none"
            @click="routerLinkToDetails(user.user_id)">
            مشاهده صفحه کاربر
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
        pull: 0,
        email: '',
        role: '',
        phone: '',
        id: '',
        profile_id: '',
        name: '',
        users: ''
        ,
        columns: ['id', 'user_id', 'name', 'email', 'phone', 'role'],
        columns1: ['شمارنده','profile_id', 'user_id', 'نام', 'ایمیل', 'شماره تلفن', 'نقش', 'جزئیات'],
        columns2: [' id', 'user_id', 'نام', 'ایمیل', 'شماره تلفن', 'نقش'],
        message:this.$route.query.message,
      }
    },
    components: {AdminHome},
    methods: {

      routerLinkToDetails: function (id) {
        this.$router.push({path: '/dashboard/admin/user/detail', query: {id}});
      },
      name1: function (msg) {
        if (msg === 'نام') {
          return 'name';
        }
        if (msg === 'id') {
          return 'id';
        }
        if (msg === 'store_id') {
          return 'store_id';
        }
        if (msg === 'نقش') {
          return 'role';
        }
        if (msg === 'شماره تلفن') {
          return 'phone';
        }

      },
      send: function () {
        http().post('admin/users/search', {
          id: this.id,
          profile_id: this.profile_id,
          name: this.name,
          phone: this.phone,
          role: this.role,
          email: this.email,
        }).then(response => (this.users = response.data))


      }

    },
    created() {
      http().get('admin/users/all')
        .then(response => (this.users = response.data)
        ).catch(error => console.log(error))
    },
    mounted() {
      setTimeout(() => {
        this.message = ''
      }, 5000);
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
