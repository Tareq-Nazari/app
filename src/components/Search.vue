<template>
  <div style="width: 100%">
{{min}}dddddddddd

  <div class="s008">
    <form v-on:submit.prevent="">
      <div class="inner-form">
        <div class="basic-search">
          <div class="input-field">
            <input v-model="reqProduct.name" id="search" type="text" placeholder="نام محصول مورد نظر" />
            <div class="icon-wrap">

            </div>
          </div>
        </div>
        <div class="advance-search">
          <span class="desc">جستجوی پیشرفته</span>
          <div class="row">
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">ACCESSORIES</option>
                  <option>ACCESSORIES</option>
                  <option>SUBJECT B</option>
                  <option>SUBJECT C</option>
                </select>
              </div>
            </div>
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">رنگ</option>
                  <option>GREEN</option>
                  <option>SUBJECT B</option>
                  <option>SUBJECT C</option>
                </select>
              </div>
            </div>
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">سایز</option>
                  <option>SIZE</option>
                  <option>SUBJECT B</option>
                  <option>SUBJECT C</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row second">
            <div class="input-field" style="width: 67px">
              <label style="color: white;margin-bottom: 2px">قیمت : </label>

            </div>
            <div class="input-field" style="width: 150px">

                <input v-model="min" type="number" style="height: 30px;width: 120px;padding: 1px 1px 1px 1px" placeholder="از">
            </div>

            <div class="input-field">
              <input v-model="max" type="text" style="height: 30px;width: 120px;padding: 1px 1px 1px 1px"  placeholder="تا">


            </div>
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">TIME</option>
                  <option>THIS WEEK</option>
                  <option>SUBJECT B</option>
                  <option>SUBJECT C</option>
                </select>
              </div>
            </div>
            <div class="input-field">
              <div class="input-select">
                <select data-trigger="" name="choices-single-defaul">
                  <option placeholder="" value="">TYPE</option>
                  <option>TYPE</option>
                  <option>SUBJECT B</option>
                  <option>SUBJECT C</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row third">
            <div class="input-field">
              <div class="result-count">
                <span>{{productFound}} </span>نتیجه </div>
              <div class="group-btn">

                <button v-on:click="search" class="btn-search">جستجو</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

  </div>

    <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content: space-evenly">

      <div v-for="product in resProduct" dir="rtl" v-on:click="goToProduct(product.id)" style="cursor: pointer;box-shadow: 10px 10px rgba(208,212,211,0.52);border: solid 0.5px rgba(195,199,198,0.52);background-color: white;margin: 15px;height: 400px;width: 300px;border-radius: 2%;display: flex;flex-direction: column;align-items: center;justify-content: space-around" >

        <img :src="'http://localhost/storeBackend/images/'+product.pic" style="margin-right: 1%;margin-top: 1%;border-radius: 2%" height="65%" width="98%">
        <p  style="font-size: 20px;">{{product.name}}</p>
        <p style="background-color: #ff2400;border-radius: 10px 5px 10px 5px;color: white;padding: 5px">{{product.price}} تومان</p>

      </div>







    </div>
  </div>

</template>

<script>
  import "../assets/css/searchPage.css"
  import axios from 'axios'
    export default {
    data(){
      return {
        reqProduct : {
          name : null,
          max : null,
          min : null,
          price: null,


        },
        resProduct : null,
        productFound : 0,
        min : null,
        max : null
      }
    },
      methods : {
      goToProduct(id){
        this.$router.push('/product/'+id)
      },

      search(){

        axios.post('product/search',{

          name : this.reqProduct.name,
          min : this.min,
          max : this.max,

        }).then((response) => {
          this.resProduct = response.data
          this.productFound = response.data.length
          console.log(response.data)
        })
      }
      },
    }

</script>

<style scoped>



</style>
