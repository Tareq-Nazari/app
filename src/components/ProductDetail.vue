<template>

  <div class="main">

    <div class="main1">
<div></div>
      <div class="description">

        <div class="details" style="border-bottom:1px solid #e8e8e8">
          <h1>اسم محصول : </h1>
          <h2>قیمت : </h2>
          <h3>برند: </h3>
          <h4>سایز : </h4>
          <h5>رنگ : </h5>
        </div>
          <div style="height: 30px;width: 530px;display: grid;grid-template-columns: 30px 500px;grid-template-rows: repeat(2,15px);">
            <button style="grid-column: 2/3;grid-row: 1/3;color: white;background-color: black;border: none"> اضافه کردن به سبد خرید</button>

            <font-awesome-icon :icon="['fas','plus']" style="color: green;"></font-awesome-icon>
            <font-awesome-icon :icon="['fas','minus']" style="color: red;margin-top: 4px;"></font-awesome-icon>

          </div>





      </div>
      <div>
        <img style="max-width: 100%;height: auto" src="../img/tshirt.jpg">
      </div>

      <div>
        <img style="max-width: 100%;height: auto" src="../img/tshirt.jpg" @click="showSingle">
        <img style="max-width: 100%;height: auto" src="../img/tshirt.jpg" @click="showSingle">

        <VueEasyLightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
        ></VueEasyLightbox>

      </div>
    </div>
    <div class="main2">

      <div></div>
      <div class="moreDetail">

        <p @click="change,moreInformationDisplay='none',DescriptionDisplay='block',ReviewsDisplay='none'"
           :style="DescriptionDisplay==='block'? style5:style4">

          توضیحات</p>
        <p :style="moreInformationDisplay==='block'? style5:style4" @click="moreInformationDisplay='block',DescriptionDisplay='none',ReviewsDisplay='none'">اطلاعات
          بیشتر</p>
        <p @click="moreInformationDisplay='none',DescriptionDisplay='none',ReviewsDisplay='block'"
           :style="ReviewsDisplay==='block'? style5:style4">بازخوردها</p>
      </div>
      <div></div>

    </div>
    <div v-if="moreInformationDisplay==='block'||DescriptionDisplay==='block'||ReviewsDisplay==='block'"
         class="moreInformation">
      <div></div>
      <div class=" aboutProduct">
        <p v-if="DescriptionDisplay==='block'">

          اما مدیر ورزشی ناپولی، کریستیانو جیونتولی آب پاکی روی دست شیاطین سرخ ریخته و می‌گوید وضعیت بغرنج مالی ناشی از
          اپیدمی کرونا باعث نمی‌شود این باشگاه ایتالیایی ستاره‌اش را ارزانتر از ارزش واقعی‌اش واگذار کند. گیونتولی
          می‌گوید بازیکنی مثل کولیبالی را نمی‌توان به خاطر یک بحران ارزان‌تر فروخت.


          کولیبالی 28ساله تا سال 2023 با ناپولی قرارداد دارد. مدیر ورزشی ناپولی در این باره گفت:" کالیدو بازیکن بزرگی
          است و هنوز با ما قراردادی بلندمدت دارد. ما اگر بخواهیم او را بفروشیم مبلغ قابل توجهی درخواست خواهیم کرد".

        </p>
        <p v-if="moreInformationDisplay==='block'">اطلاعات بیشتر</p>
        <div v-if="ReviewsDisplay==='block'">
          <div style="height: 900px;width: 700px;display: flex;flex-direction: column;align-content: center;">
            <div v-for="i in 3" style="border-radius: 10px;height: auto;max-width: 60%;margin: 10px;background-color: #d0d4d3;word-break: break-all;padding: 5px">
          <p>ww</p>

            </div>

          </div>
        </div>
      </div>

    </div>




  </div>


</template>

<script>

  import VueEasyLightbox from 'vue-easy-lightbox'

  import axios from 'axios'

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
        ]
      }
    },

    mounted() {
      axios
      .get('http://127.0.0.1/test/public/api/product')
      .then(response => (this.info = response.data));
    },
    methods: {
      resize: function () {
        this.display = "block"

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
    grid-template-columns: 0.1fr 2fr 2fr 0.3fr 0.5fr;
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

  .main2 {
    display: grid;
    margin-top: 80px;
    grid-template-columns: 1.7fr auto 1.7fr;
    grid-row-gap: 20px;
  }

  .moreDetail {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    font-family: vasir;
    font-size: large;
  }

  .moreDetail > p:hover {
    border-bottom: 1px solid #888888;
    cursor: pointer;
  }

  .moreInformation {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

  }

  .aboutProduct {
    transition-delay: 5s;
    font-family: vasir;
    text-align: justify;
  }


</style>
