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
          <h2 style="text-align: center;color: #d63938 "> ادیت کردن مغازه </h2>
        </div>

        <div class="inp">
          <p>نام مغازه</p>
          <input
            id="name"
            type="text"
            name="name"
            v-model="name"
          >

        </div>
        <div class="inp">
          <p> توضیحات درباره مغازه </p>

          <input
            id="caption"
            type="text"
            name="caption"
            v-model="caption"
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
          <p> دسته بندی مغازه </p>
          <select v-model="selected" style="padding-right: 12%" name="cat_id" id="cars">
            <option v-for="cat in this.categories" :value="cat.id">{{cat.name}}</option>
          </select>
        </div>

        <div style="margin-top: 15px">
          <button
            type="submit"
            value=" ثبت تغیرات"
            id="su"
            v-on:click="checkForm(id)"
          > ثبت تغیرات
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
        categories: '',
        selected: this.$route.query.store.cat_id,
        name: this.$route.query.store.cat_name,
        phone: this.$route.query.store.phone,
        pic: '',
        email: this.$route.query.store.email,
        address: this.$route.query.store.address,
        caption: this.$route.query.store.caption,
        id: this.$route.query.store.id,
      }

    }, methods: {
      checkForm: function (id) {

        let formData = new FormData();
        formData.append('id', this.id)
        formData.append('caption', this.caption)
        formData.append('name', this.name)
        formData.append('cat_id', this.selected)
        formData.append('address', this.address)
        formData.append('email', this.email)
        formData.append('phone', this.phone)
        axios.post('http://127.0.0.1/laravel/public/api/admin/store/edit',
          formData
          ,


          ).then((resp) =>
        {
          this.$router.push({
            path: '/dashboard/admin/store/detail', query: {id}
          })


        }).catch(error => console.log(error))

      },



    },
    created() {
      axios.get('http://127.0.0.1/laravel/public/api/admin/category/store/all')
        .then(response => (this.categories = response.data)
        ).catch(error => console.log(error))
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
