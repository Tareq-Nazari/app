<template>
  <div style="font-family: vasir">
    <div class="container" style="position:relative;">

      <img style="filter: blur(1.45px);z-index: 0" class="header-img" height="100%"
           width="100%" src="./../../../img/store-header1.jpg">
      <label style="grid-column: 5/6;grid-row: 4/5;cursor: pointer;z-index: 1"><img src="./../../../img/plus.svg">
        <input style="display: none;position: absolute;top: 50%;height: 100%;width: 100%" type="file">
      </label>
      <div class="profile">
        <img  src="./../../../img/store_profile.jpg" height="100%" width="100%" style="filter: blur(1.45px);z-index: 2;position: relative;border-radius: 50%;border: solid black 5px">
        <label style="cursor: pointer;position: absolute;top: 59%;left: 9.5%;height: 10px;width: 100px;z-index: 3"><img  src="./../../../img/plus.svg">
          <input style="display: none;position: absolute;top: 50%;height: 100%;width: 100%" type="file">
        </label>
      </div>


      <div class="store-name">
        <input class="store-dsh-input" value="فروشگاه من" type="text">
      </div>

      <div  class="store-caption">

        <input class="store-dsh-input" value="توضیحات" type="text" style="width: 100%">

      </div>
      <div style="grid-column: 5/7;grid-row: 16/18;display: flex;align-items: center;justify-content: center">
            <button style="height: 70%;width: 70%;background-color: dodgerblue;font-family: vasir;color: white;border: 0;border-radius: 5px">تغییر</button>
      </div>

    </div>

  </div>




</template>

<script>
  import axios from "axios";

  export default {

    data(){
      return {
        data : ''
      }
    },
    mounted() {
      axios
        .get('http://127.0.0.1/test/public/api/store')
        .then(response => (this.info = response.data));
    },

    methods : {
      addtocart(event) {

        console.log(event)

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
