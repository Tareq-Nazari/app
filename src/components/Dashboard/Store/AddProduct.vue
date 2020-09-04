<template>
  <div class="add-product-container">

  <div v-if="img == ''" style="height: 233px;width: 98%;border: 5px dotted rgba(28,110,164,0.78);
border-radius: 7px 7px 7px 7px;position: relative">
    <label style="cursor: pointer;display: inline-block;position: absolute;top: 83px;left: 225px">
      <img src="./../../../img/plus.svg" style="" height="50px" width="50px">

      <input ref="file" type="file" v-on:change="previewImage" style="display: none;height: 100%;width: 100%">

    </label>

  </div>
  <div v-else style="width: 100%">
    <img :src="img" width="100%" height="233px">
  </div>


  <input v-model="product.name" type="text" placeholder="نام محصول" class="add-product-input" >

  <input v-model="product.price" type="text" placeholder="قیمت" class="add-product-input" >
  <textarea v-model="product.caption" placeholder="توضیحات" style="padding: 8px;border: 0;border-radius: 12px;background-color: #d9dddc;outline: 0;height: 50px;width: 220px;" ></textarea>
  <label>دسته بندی :  <select>
    <option @click="product.cat_id = 1">1</option>
    <option @click="product.cat_id = 2">2</option>
    <option @click="product.cat_id = 3">3</option>

  </select></label>

  <button @click="addProduct" style="height: 30px;width: 100px;background-color: dodgerblue;font-family: vasir;color: white;border: 0;border-radius:  50% 50% 0 0" >ثبت</button>







  </div>
</template>
<script>
  import axios from 'axios'
  import * as auth from '../../../services/auth_service'

export default  {

  data(){
    return {
      img : '',
      header : 'Bearer '+auth.getAccessToken(),


      product : {
        file : '',
        name : '',
        price : null,
        caption : '',
        cat_id : 1,
        store_id : 6
      }




    }
  },
  methods : {
    previewImage: function(event) {
      this.product.file = this.$refs.file.files[0]



      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.img = e.target.result;
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);

      }
    },
    addProduct(){
    let formData = new FormData()
      formData.append('pic' , this.product.file)
      formData.append('name',this.product.name)
      formData.append('price',this.product.price)
      formData.append('cat_id',this.product.cat_id)
      formData.append('caption',this.product.caption)
      formData.append('product_id' , 5)

console.log(formData)
        axios({
          method: 'post',
          url: 'http://127.0.0.1/storeBackend/public/api/shopOwner/product/create',
          data: formData,
          headers: {
            'Authorization': this.header,
            //'Content-Type': 'multipart/form-data'
          }
        }).then((respone) => {
          alert('success')
        }).catch(e =>{
          alert(e)
        })


    },
    }
  }

</script>
<style>
  .add-product-input {
    padding: 8px;
    border: 0;
    border-radius: 31px;
    background-color: #d9dddc;
    outline: 0;
    height: 25px;
    width: 100px;
  }
.add-product-container {
  border: 0.25px solid #989c9b;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 0px 5px 5px #d9dddc;
  outline: 0px;
}
</style>

