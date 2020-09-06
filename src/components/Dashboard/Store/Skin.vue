<template>
  <div style="font-family: vasir">
    <div class="container" style="position:relative;">

      <img v-if="hed_pic" style="filter: blur(1.45px);z-index: 0" class="header-img" height="100%"
           width="100%" :src="'http://127.0.0.1/storeBackend/images/'+shop.header_pic">
      <img v-else style="filter: blur(1.45px);z-index: 0" class="header-img" height="100%"
           width="100%" src="../../../img/header-st.jpg">
      <label style="grid-column: 5/6;grid-row: 4/5;cursor: pointer;z-index: 1"><img src="./../../../img/plus.svg">
        <input v-on:change="previewImage" ref="header" style="display: none;position: absolute;top: 50%;height: 100%;width: 100%" type="file">
      </label>
      <div class="profile">
        <img v-if="prof_pic"  :src="'http://127.0.0.1/storeBackend/images/'+shop.profile_pic" height="100%" width="100%" style="filter: blur(1.45px);z-index: 2;position: relative;border-radius: 50%;border: solid black 5px">
        <img v-else src="./../../../img/profile-st.png" height="100%" width="100%" style="filter: blur(1.45px);z-index: 2;position: relative;border-radius: 50%;border: solid black 5px">


        <label style="cursor: pointer;position: absolute;top: 59%;left: 9.5%;height: 10px;width: 100px;z-index: 3"><img  src="./../../../img/plus.svg">
          <input ref="prof" v-on:change="previewImage" style="display: none;position: absolute;top: 50%;height: 100%;width: 100%" type="file">
        </label>
      </div>





      <div style="grid-column: 5/7;grid-row: 16/18;display: flex;align-items: center;justify-content: center">
            <button @click="changeSkin" style="height: 70%;width: 70%;background-color: dodgerblue;font-family: vasir;color: white;border: 0;border-radius: 5px">تغییر</button>
      </div>

    </div>

  </div>




</template>

<script>
  import axios from "axios";
  import {http} from "../../../services/http_service";

  export default {

    data(){
      return {
        data : '',
        img: '',
        shop: null,
        hed_pic : null,
        prof_pic : null,
        header : null,
        profile : null
      }
    },
    mounted() {
      http()
        .get('shopOwner/store/detail')
        .then((response) => {
          this.shop = response.data
          this.shop = this.shop[0]
         this.hed_pic = this.shop.header_pic
         this.prof_pic = this.shop.profile_pic
          console.log(this.shop)

        });
    },

    methods : {
      addtocart(event) {

        console.log(event)

      },
      changeSkin(){
        if(this.header) {
          let formData = new FormData()
          formData.append('header_pic',this.header)
          http().post('shopOwner/store/profile/edit_header_pic',formData).then((res) => {
               this.$router.go()
          })
        }
        if (this.profile) {
          let formData = new FormData()
          formData.append('profile_pic',this.profile)
          http().post('shopOwner/store/profile/edit_profile_pic',formData).then((res) => {
            this.$router.go()
          })
        }


      },
      previewImage: function(event) {
        this.header = this.$refs.header.files[0]
        this.profile = this.$refs.prof.files[0]



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
      }
    }

  }
</script>

<style scoped>
  .container {

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(18,30px);
  }
  .header-img {
    grid-column: 1/11;
    grid-row: 1/13;
  }
  .profile {
    grid-column: 9/11;
    grid-row: 10/16;
    height: 100%;
    width: 70%;

  }
  .store-name {
    font-size: 20px;

    grid-row: 13/14;
    grid-column: 7/9;
    text-align: end;
    padding-right: 15px;
    border-radius: 6%;
    align-items: center;


  }
  .store-caption {
    grid-column: 7/9;
    grid-row: 14/15 ;
    justify-content: center;
    font-size: 20px;
  }

  .header-button {
    height: 150px;
    width: 300px;


  }
  .store-dsh-input {
    border: dodgerblue 3px dotted;
    outline: none;
    font-family: vasir;
  }





</style>
