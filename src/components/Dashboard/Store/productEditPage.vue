<template>
  <div class="main">
    <vue-alert></vue-alert>
    <div class="main1">
      <div></div>
      <div class="description">

        <div class="details" style="border-bottom:1px solid #e8e8e8">

          <div class="input-container">
            <label for="inp" class="inp">
              <input type="text" id="inp" v-model="product.name">
              <span class="label">اسم محصول </span>
              <span class="focus-bg"></span>
            </label>
          </div>
          <div class="input-container">
            <label for="inp" class="inp">
              <input type="text" id="inp" v-model="product.price">
              <span class="label">قیمت </span>
              <span class="focus-bg"></span>
            </label>
          </div>
          <div class="input-container">
            <label for="inp" class="inp">
              <input type="text" id="inp" v-model="product.color">
              <span class="label">رنگ </span>
              <span class="focus-bg"></span>
            </label>
          </div>
          <div class="input-container">
            <label for="inp" class="inp">
              <input type="text" id="inp" v-model="product.size">
              <span class="label">سایز </span>
              <span class="focus-bg"></span>
            </label>
          </div>
          <div class="input-container">
            <label for="inp" class="inp">
              <input type="text" id="inp" v-model="product.caption">
              <span class="label">توضیحات </span>
              <span class="focus-bg"></span>
            </label>
          </div>
          <div class="input-container">

            <select v-model="product.cat_id">
              <option :value="product.cat_id" selected>{{product.cat_name}}</option>
              <option v-for="category in categories" :value="category.id">{{category.name}}</option>
            </select>
            <label>دسته بندی محصول</label>
          </div>
          <button v-on:click="submitt" style="font-family: vasir;position: absolute;right: 274px;margin-top: 60px;background-color: #c74d4a;color: white;border: none;outline: none;height: 35px;width: 130px;border-radius: 7px" class="" >ثبت تغیرات</button>

        </div>






      </div>
      <div>
        <img style="max-width: 100%;height: auto" :src="'http://127.0.0.1/storeBackend/images/'+product.pic">
      </div>


    </div>

<br><br>
    <div>
      <div class="ac-title">
        <div class="ac-title-side"></div>
        <h3>نظرات</h3>
        <div class="ac-title-side"></div>
      </div>
    </div>
<br><br>
      <div class=" comments">


            <div :id="coment.id" v-for="coment in comments" style="border-radius: 10px;height: auto;width: 300px;margin: 30px;background-color: rgb(183 217 209 / 48%);word-break: break-all;padding: 5px;">
              <div style="height: 30px;width: 50%;display: flex;align-items: center">
                <font-awesome-icon :icon="['fas' , 'comment']" style="color: rgba(0,0,0,0.64)"></font-awesome-icon><h4 style="margin-right: 10px">
                {{coment.name}}</h4>
              </div>
              <p>{{coment.comment}}</p>
              <font-awesome-icon :icon="['fas','trash']" style="color: red;cursor: pointer" @click="deleteComment(coment.id)" />
            </div>



      </div>

    </div>





</template>
<script>



  import axios from 'axios'
  import {http} from "../../../services/http_service";

  export default {
    components: {



    },

    data() {
      return {
        info: null,


        src: "../img/product-12.jpg",
        display: "none",
        DescriptionDisplay: "none",
        moreInformationDisplay: "none",
        ReviewsDisplay: "none",

        visible: false,
        index: 0,   // default
        slides: [
          {
            title: 'Slide #1',
            content: 'Slide content.'
          }
        ],
        product: null,
        comments : null,
        categories : null,
        product_id : null
      }
    },
created(){
},
    mounted() {

      axios.get('product/one' + this.$route.params.id)
        .then(response => {
            this.product = response.data[0]
            this.product_id = this.product.id
          http().get('shopOwner/product/comments'+this.product.id).then((res) => {
            this.comments = res.data
            console.log(this.comments)
          })
          }
        )




      http().get('shopOwner/category/all').then((res) => {
        this.categories = res.data
      })
    },
    methods: {

      deleteComment(id){
        let x = document.getElementById(id)
        x.remove()
        http().get('shopOwner/product/commentDelete'+id)
      },
      updateProduct(){

      },
      submitt(){
        http().post('shopOwner/product/edit' , this.product).then(res => {
          this.$alert.success({
            message : 'تفییرات جدید ثبت شد'
          })
        })
      }

    }
  }
</script>
<style scoped>
  .main1 {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 0.1fr 2fr 2fr 0.3fr 0.5fr;
    column-gap: 50px;

  }

  .description {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 25px;

  }

  .myButton {
    box-shadow:inset 0px 50px 0px -24px #e67a73;
    background-color:#E11D20;
    border-radius:21px;
    border:5px solid #ffffff;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:20px;
    padding:20px 40px;
    text-decoration:none;
    text-shadow:-2px 4px 2px #b23e35;
  }
  .myButton:hover {
    background-color:#eb675e;
  }
  .myButton:active {
    position:relative;
    top:1px;
  }


  .ac-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .ac-title-side{
    height: 6px;
    width: 40%;
    background-color: #888888;
    border-radius: 50%;
  }



  .details {
    font-family: vasir;
  }
  .details div {
    margin-bottom: 20px;
  }


  .moreDetail > p:hover {
    border-bottom: 1px solid #888888;
    cursor: pointer;
  }

  .comments {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;


  }

  .inp {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 280px;
    border-radius: 3px;
    overflow: hidden;
  }
  .inp .label {
    position: absolute;
    top: -2px;
    left: 12px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    pointer-events: none;
  }
  .inp .focus-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.05);
    z-index: -1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: left;
    transform-origin: left;
  }
  .inp input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 16px 12px 0 12px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    background: rgba(0, 0, 0, 0.02);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    color: #000;
    -webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
  }
  .inp input:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  .inp input:not(:placeholder-shown) + .label {
    color: rgba(0, 0, 0, 0.5);
    -webkit-transform: translate3d(0, -12px, 0) scale(0.75);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }
  .inp input:focus {
    background: rgba(0, 0, 0, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 #0077FF;
  }
  .inp input:focus + .label {
    color: #0077FF;
    -webkit-transform: translate3d(0, -12px, 0) scale(0.75);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }
  .inp input:focus + .label + .focus-bg {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
  }
  .input-container {}

  body {
    height: 100vh;
    display: grid;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }




</style>
