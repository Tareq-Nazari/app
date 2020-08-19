<template>
  <div class="main">
    <admin-home></admin-home>
    <div class="textDetail">
      <h1>اسم مغازه : {{name}}</h1>
      <h2>توضیحات : {{caption}}</h2>
      <h3>ایمیل:{{email}} </h3>
      <h4>شماره تلفن :{{phone}} </h4>
      <h5>دسته بندی :{{cat_id}} </h5>
    </div>
    <div style="display: grid;grid-template-columns: 1fr;">
      <p style="font-family: vasir">عکس پپروفایل</p>
      <img style="height: 120px" :src="'/src/img/'+profile_pic">

      <p style="font-family: vasir">عکس هدر مغازه</p>
      <img style="height: 120px" :src="'/src/img/'+header_pic">


    </div>


  </div>

</template>

<script>
  import AdminHome from "../AdminHome";

  export default {
    data() {
      return {
        store_id: this.$route.params.store_id,
        name: "ss",
        email: 'dd',
        caption: "sad",
        phone: "sdds",
        cat_id: 1,
        header_pic: "movie1.jpg",
        profile_pic: "movie1.jpg",

      }
    },

    name: "storeProfile"
    , components: {
      AdminHome
    }
  }
</script>

<style scoped>
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .textDetail {
    display: grid;
    grid-template-columns: 1fr;
    font-family: vasir;
  }

  @media only screen and (max-width: 470px) {
  }

</style>
