<template>

  <div class="main">
<vue-alert></vue-alert>
    <div class="main1">
<div></div>
      <div class="description">

        <div class="details" style="border-bottom:1px solid #e8e8e8">
          <h1>اسم محصول : {{product.name}}</h1>
          <h2>قیمت : {{product.price}}</h2>
          <h3>دسته بندی:{{product.cat_name}} </h3>
          <h4>سایز :{{product.size}} </h4>
          <h5>رنگ :{{product.color}} </h5>
        </div>
          <div style="height: 30px;width: 530px;display: grid;grid-template-columns: 30px 500px;grid-template-rows: repeat(2,15px);">
            <button v-on:click="addToCart(product.id)" style="grid-column: 2/3;grid-row: 1/3;color: white;background-color: black;border: none"> اضافه کردن به سبد خرید</button>


          </div>





      </div>
      <div>
        <img style="width: 75%;height: 500px" :src="'http://localhost/storeBackend/images/'+product.pic">
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
    <div v-if="log" style="margin-right: 38px">
      <label for="categoryAdd">نظر شما : </label>
      <input style="width: 300px" v-model="userComment" id="categoryAdd">
      <button v-on:click="addComment" style="border : none;background-color: #ff2400;text-shadow: rgba(0,0,0,0.64);color: white;height: 25px;width: 70px">ثبت</button>

    </div>
    <div v-else style="margin-right: 43px">برای ثبت نظر ابتدا وارد شوید</div>
    <br>
    <br>
    <div class=" comments">


      <div :id="coment.id" v-for="coment in comments" style="border-radius: 10px;height: auto;width: 300px;margin: 30px;background-color: rgb(183 217 209 / 48%);word-break: break-all;padding: 5px;">
        <div style="height: 30px;width: 50%;display: flex;align-items: center">
          <font-awesome-icon :icon="['fas' , 'comment']" style="color: rgba(0,0,0,0.64)"></font-awesome-icon><h4 style="margin-right: 10px">
          {{coment.name}}</h4>
        </div>
        <p>{{coment.comment}}</p>

      </div>



    </div>





  </div>


</template>

<script>

  import VueEasyLightbox from 'vue-easy-lightbox'

  import axios from 'axios'
  import {http} from "../services/http_service";
  import {isLoggedIn} from "../services/auth_service";

  export default {
    components: {
      VueEasyLightbox,


    },

    data() {
      return {
        info : null,


        src: "../img/product-12.jpg",
        display: "none",
        style5:"border-bottom:1px solid black;text-align:center;color:black",
        style4:"text-align:center;color:#888888",
        DescriptionDisplay: "none",
        moreInformationDisplay: "none",
        ReviewsDisplay: "none",
        imgs: '',  // Img Url , string or Array
        visible: false,
        index: 0,   // default
        slides: [
          {
            title: 'Slide #1',
            content: 'Slide content.'
          }
        ],
        product : null,
        comments : null,
        userComment : '',
        log : false
      }
    },

    mounted() {
      axios
      .get('product/one'+this.$route.params.id)
      .then(response => {
        this.product = response.data[0]
        console.log(response.data)
        axios.get('product/comments/'+this.product.id).then((res) => {
          this.comments = res.data
          console.log(this.comments)
        })
      }
    )
      this.log = isLoggedIn()
    },
    methods: {
      addComment(){
      http().post('users/product/add_comment',{text : this.userComment,product_id : this.product.id}).then(()=>{
        alert('نظر شما ثبت شد')
      })
      },
      addToCart(id){
        http().post('users/basket/add/'+id).then((response) => {
          this.$alert.success({
            message : 'به سبد خرید افزوده شد'
          })
          console.log(response)
        }).catch(e =>{
          console.log(e)
        })
      },
      showSingle() {
        this.imgs = this.src
        this.show()
      },

      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      },
      change(){
        this.style5="font-size:40px"
      }

    }

  }
</script>


<style>
  .main1 {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 0.1fr 2fr 2fr ;
    column-gap: 50px;

  }

  .description {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 25px;

  }








  .details {
    font-family: vasir;
  }



  .moreDetail > p:hover {
    border-bottom: 1px solid #888888;
    cursor: pointer;
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

</style>
