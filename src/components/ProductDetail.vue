<template>

  <div class="main">
    <div class="main1">
      <div></div>
      <div class="description">
        <div class="details" style="border-bottom:1px solid #e8e8e8">
          <a style="font-size: 12px">برگشت به صفحه اصلی </a>
          <h1>اسم محصول : </h1>
          <h2>قیمت : </h2>
          <h3>برند: </h3>
          <h4>سایز : </h4>
          <h5>رنگ : </h5>
        </div>
        <div class="description1">
          <button style="font-family: vasir" id="but"> اضافه کردن به سبد خرید</button>
          <div></div>
          <div style="display: grid;grid-template-columns: 1fr">
            <button class="dec-but" style="">+</button>
            <button class="dec-but" style=";border-top:0px">-</button>
          </div>
          <button class="dec-but" style="font-family: vasir;border-right:0px"> تعداد</button>
        </div>


      </div>
      <div>
        <img style="max-width: 100%;height: auto" src="src/img/product-12.jpg">
      </div>

      <div>
        <img style="max-width: 100%;height: auto" src="src/img/product-12.jpg" @click="showSingle">
        <img style="max-width: 100%;height: auto" src="src/img/product-151.jpg" @click="showSingle">

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

        <a style="text-align: center">توضیحات</a>
        <a>اطلاعات بیشتر</a>
        <a style="text-align: center">بازخوردها</a>
      </div>
      <div></div>

    </div>

    <div style="display: grid;
    grid-template-columns: 1fr 2fr 1fr ;
margin-top: 80px">
      <div></div>
      <img style="max-width: 100%;height: 500px" src="src/img/item-detail-1.jpg">
    </div>
    <div style="display: grid;
grid-template-columns: 1fr 1.8fr 1fr ">
      <p></p>
      <p style="font-family: vasir;text-align: justify">قرارداد اوبامیانگ در تابستان سال 2021 به اتمام می رسد و با توجه به عدم توافق طرفین برای تمدید قرارداد، احتمال جدایی این مهاجم گلزن زیاد است. اما نشریه دیلی میل امروز در گزارشی مدعی شد آرسنال علیرغم علم به این موضوع، قصد ندارد اوبامیانگ را تابستان امسال با قیمتی ارزان به فروش برساند و حداقل 20 میلیون پوند برای فروش او طلب کرده است.



        بارسلونا جدی ترین مشتری اوبامیانگ محسوب می شود و در صورت ناکامی در خرید لائوتارو مارتینز برای انتقال او اقدام خواهد کرد. حتی مذاکراتی نیز بین طرفین انجام شده، اما پرداخت 20 میلیون پوند برای مهاجمی که تنها یک سال قرارداد دارد کار آسانی نیست و بعید است بارسلونا در این شرایط با اوبامیانگ به توافق برسد. بدین ترتیب آرسنال حتی حاضر است بک سال بعد اوبامیانگ را رایگان واگذار کند، اما با قیمتی کمتر از رقم مورد نظر او را نفروشد.</p>
    </div>
    <div style="display: grid;
grid-template-columns: 3fr 3fr 3fr;
margin-top: 100px">
      <div ></div>
      <p style="font-family: vasir;text-align: center;text-after-overflow: 2px">محصولات مرتبط</p>
    </div>
    <div>
      <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
      </vueper-slides>
    </div>
  </div>


</template>

<script>

  import VueEasyLightbox from 'vue-easy-lightbox'
  import 'vueperslides/dist/vueperslides.css'
  import { VueperSlides, VueperSlide } from 'vueperslides'

  export default {
    components: {
      VueEasyLightbox,
   VueperSlides, VueperSlide ,

    },
    data() {
      return {
        src: "src/img/product-12.jpg",
        display: "none",
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


  .description1 {
    display: grid;
    grid-template-columns: 1fr 0.01fr 0.1fr 0.2fr;
    grid-template-rows: 40px;
    margin-top: 0;
    padding-top: 0;
  }

  .dec-but {
    background-color: white;
    border: black 1px solid;

    pointer-events: none;
    border-radius: 0
  }

  #but {
    border-radius: 0;
    border: 0px solid black;
    background-color: #222222;
    color: #ffffff;


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

  .moreDetail > a:hover {
    border-bottom: 1px solid #222222;
    cursor: pointer;
  }


</style>
