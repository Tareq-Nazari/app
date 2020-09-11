<template>
<div>
  <div class="wrapper">

      <vue-alert></vue-alert>

    <form v-on:submit.prevent="">
      <div class="group">
        <input type="text" v-model="store.name" required="required"/><span class="highlight"></span><span class="bar"></span>
        <label>نام فروشگاه</label>
      </div>
      <div class="group">
        <input type="text" v-model="store.email" required="required"/><span class="highlight"></span><span class="bar"></span>
        <label>ایمیل</label>
      </div>
      <div class="group">
        <input type="text" v-model="store.caption" required="required"/><span class="highlight"></span><span class="bar"></span>
        <label>شعار</label>
      </div>
      <div class="group">
        <input type="text" v-model="store.address" required="required"/><span class="highlight"></span><span class="bar"></span>
        <label>آدرس</label>
      </div>
      <div class="group">
        <input type="number" v-model="store.phone" required="required"/><span class="highlight"></span><span class="bar"></span>
        <label>شماره همراه</label>
      </div>
      <div class="group">
        <select v-model="store.cat_id">
          <option :value="store.cat_id" selected>{{store.cat_name}}</option>
        <option v-for="category in categories" :value="category.id">{{category.name}}</option>
        </select>
        <label>دسته بندی فروشگاه</label>
      </div>

      <div class="btn-box">
        <button class="btn btn-submit" @click="submit">ثبت</button>

      </div>
    </form>
  </div>
</div>
</template>
<script>
  import {http} from "../../../services/http_service";

  export default {
    data(){
      return {
        store : null,
        name : '',
        caption : '',
        phone : Number,
        email : '',
        address : '',
        cat_id : null,
        categories : null
      }
    }
    ,
    mounted(){
      http().get('category/store_all').then((response) =>{
        this.categories = response.data



      })
      http().get('shopOwner/store/detail').then((response) =>{
        this.store = response.data[0]
        console.log(this.store)


      })

    },
    methods : {
      submit(){
        http().post('shopOwner/store/edit' , this.store).then((response) =>{

          this.$alert.success({
            message : 'تفییرات جدید ثبت شد'
          })

        })
      }
    }
  }
</script>

<style scoped>
  *,
  :before,
  :after {
    box-sizing: border-box;
  }
  body {
    background-color: black;
  }


  form {
    width: 320px;
    margin: 45px auto;
  }
  form h1 {
    font-size: 3em;
    font-weight: 300;
    text-align: center;
    color: #2196f3;
  }
  form h5 {
    text-align: center;
    text-transform: uppercase;
    color: #c6c6c6;
  }
  form hr.sep {
    background: #2196f3;
    box-shadow: none;
    border: none;
    height: 2px;
    width: 25%;
    margin: 0px auto 45px auto;
  }
  form .emoji {
    font-size: 1.2em;
  }

  .group {
    position: relative;
    margin: 45px 0;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    background: none;
    color: black;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 320px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #c6c6c6;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  input:focus ~ label, input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: #2196f3;
  }
  input:focus ~ .bar:before,
  textarea:focus ~ .bar:before {
    width: 320px;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  label {
    color: black;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    -webkit-transition: 300ms ease all;
    transition: 300ms ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 320px;
  }
  .bar:before {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #2196f3;
    -webkit-transition: 300ms ease all;
    transition: 300ms ease all;
    left: 0%;
  }

  .btn {
    background: #fff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .btn:hover {
    color: #8b8b8b;
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);
  }
  .btn.btn-link {
    background: #2196f3;
    color: #d3eafd;
  }
  .btn.btn-link:hover {
    background: #0d8aee;
    color: #deeffd;
  }
  .btn.btn-submit {
    background: #2196f3;
    color: white;
  }
  .btn.btn-submit:hover {
    background: #0d8aee;
    color: #deeffd;
  }
  .btn.btn-cancel {
    background: #eee;
  }
  .btn.btn-cancel:hover {
    background: #e1e1e1;
    color: #8b8b8b;
  }

  .btn-box {
    text-align: center;
    margin: 50px 0;
  }

</style>
