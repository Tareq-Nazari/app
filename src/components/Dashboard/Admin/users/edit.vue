<template>
  <div class="main">
    <div>

      <div></div>
    </div>
    <div class="box">
      <form
        v-on:submit.prevent="submit"
      >
        <div>
          <h2 style="text-align: center;color: #d63938 "> ادیت کردن کاربر</h2>
        </div>

        <div class="inp">
          <p>نام کاربر</p>
          <input
            id="name"
            type="text"
            name="name"
            v-model="name"

          >

        </div>
        <div class="inp">
          <p> ایمیل </p>

          <input
            id="email"
            type="email"
            name="email"
            v-model="email"

          >

        </div>

        <div class="inp">
          <p> شماره تلفن </p>

          <input
            id="phone"
            type="number"
            name="phone"
            v-model="phone"

          >

        </div>
        <div class="inp">
          <p> آدرس </p>

          <input
            id="address"
            type="text"
            name="address"
            v-model="address"

          >

        </div>


        <div class="inp">
          <p> نقش </p>
          <select style="padding-right: 12%" name="cat_id" id="cars">
            <option v-for="role1 in roles " @click="rolee(role1.id)" :selected="role1.name===test">{{role1.name}}
            </option>

          </select>
        </div>

        <div style="margin-top: 15px">
          <button
            v-on:click="checkForm(id)"
            type="submit"
            value=" ثبت تغیرات"
            name="submit"
          >ثبت
          </button>
        </div>

      </form>

    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";
  import axios from "axios";

  export default {
    name: "edit",
    components: {AdminHome},
    data() {
      return {
        file: '',
        id: this.$route.query.user.id,
        roles: this.$route.query.roles,
        test: this.$route.query.user.role,
        role: this.$route.query.user.role,
        pic: this.$route.query.user.pic,
        name: this.$route.query.user.name,
        phone: this.$route.query.user.phone,
        email: this.$route.query.user.email,
        address: this.$route.query.user.address,

      }

    }, methods: {
      checkForm: function (id) {
        axios.post('http://127.0.0.1/laravel/public/api/admin/users/edit', {
          role: this.role,
          id: this.id,
          pic: this.file,
          name: this.name,
          phone: this.phone,
          email: this.email,
          address: this.address
        }).then(res =>{
          this.$router.push({
            path: '/dashboard/admin/user/detail', query: {id}
          })
        }).catch(error => console.log(error))

      },

    }
    , rolee: function (msg) {
      this.role = msg;

    },
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

    height: 1000px;
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
user
