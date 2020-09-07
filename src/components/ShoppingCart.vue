<template>
    <div style="background-color: #F5F5F5;width: 100%;min-height: 670px;overflow: auto">
      <div  style="background-color: #FFFFFF;min-height: 163px;width:55%;margin-top: 50px;margin-left: auto;margin-right: auto;">
     <div :id="product.id" v-for="product in products" style="display: flex;margin: 10px;position: relative;border-bottom: 1px solid #d0d4d3">
       <img style="border-radius: 5px" :src="'http://127.0.0.1/storeBackend/thumbnail/'+product.thumbnail" height="150" width="150">
       <div style="margin-right: 10px" >
        <h3>{{product.name}}</h3>
         <h5>{{product.caption}}</h5>


       </div>
       <font-awesome-icon v-on:click="deleteFromCart(product.id)" :icon="['fas' , 'trash']" style="color: red ; position: absolute;top: 0;left: 0"></font-awesome-icon>
       <div style="position: absolute;left: 0;bottom: 0">قیمت : {{product.price}}</div>
     </div>

      </div>
      <div style="width: 53%;height: 20%;background-color: #FFFFFF;margin-top: 10px;padding: 16px;margin-right: auto;margin-left: auto;display: flex;flex-direction: column;">
        <div style="border-bottom: 1px solid #d0d4d3"><p style="float: left">{{off}}</p><p style="float: right">تخفیف کالا ها : </p></div>
        <div style="border-bottom: 1px solid #d0d4d3"><p style="float: left">{{total}}</p><p style="float: right">جمع : </p></div>
        <div style="border-bottom: 1px solid #d0d4d3"><p style="float: left">{{pay}}</p><p style="float: right">قابل پرداخت : </p></div>
        <button style="margin-top: 5px;height: 36px;width: 80%;border: none;color: white;background-color: #EF394E;margin-left: auto;margin-right: auto;outline: none;border-radius: 5px" v-on:click="payment">پرداخت</button>
      </div>

    </div>
</template>

<script>
    import {http} from "../services/http_service";

    export default {
        name: "ShoppingCart",
      data(){
          return {
            show : true,
            products : null,
            total : 0,
            pay : 0,
            off : 0
          }
      },
      methods : {
          payment(){
            http().post('users/basket/payment',this.products).then((res) => {

            })
          },
        deleteFromCart(id){
          let x = document.getElementById(id)
          x.remove()
          http().post('users/basket/delete'+id).then((res)=>{

          })
        },
      },

      mounted(){

          http().post('users/basket/all').then((response) => {

            this.products = response.data
            console.log(this.products)
            for (let product of this.products) {
              this.total += product.price
            }
            this.pay = this.total-this.off

          })




      }
    }
</script>

<style scoped>

</style>
