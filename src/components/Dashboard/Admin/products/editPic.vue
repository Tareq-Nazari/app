<template>
  <div class="main"
       style="display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;">
    <div></div>
    <div class="box">
      <form
        id="app"
        v-on:submit.prevent="submit"
      >
        <p> عکس محصول </p>

        <input style="border: none"
               id="file"
               type="file"
               name="file"
               ref="file"
               v-on:change="selectFile"
        >
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
  import axios from "axios";

  export default {
    name: "editPic",
    data() {
      return {
        file: '',
        id: this.$route.query.id,


      }
    },
    methods: {
      selectFile: function () {

        // `files` is always an array because the file input may be in multiple mode
        this.file = this.$refs.file.files[0];

      },
      checkForm: function (id) {
        let formData = new FormData();
        formData.append('pic', this.file)
        formData.append('id', this.id)

        axios.post('http://127.0.0.1/laravel/public/api/admin/product/edit_pic',
          formData
          , {
            headers: {
              'Content-Type': 'multipart/form-data'
            }

          }).then((resp) => {
          this.$router.push({
            path: '/dashboard/admin/product/detail',query:{id}
          })
        }).catch(error => console.log(error))


      },

    }
  }
</script>

<style scoped>
  .box {
    margin-top: 20px;
    padding-top: 15%;
    padding-right: 10%;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
    0 3px 1px -2px rgba(0, 0, 0, .12),
    0 1px 5px 0 rgba(0, 0, 0, .2);
    height: 300px;
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
