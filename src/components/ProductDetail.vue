<template>

  <div class="main">

    <div class="main1">
<div></div>
      <div class="description">

        <div class="details" style="border-bottom:1px solid #e8e8e8">
          <a style="font-size: 12px">برگشت به صفحه اصلی </a>
          <h1>اسم محصول : </h1>
          <h2>  قیم</h2>
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
        <p v-if="ReviewsDisplay==='block'">بازخوردها</p>
      </div>

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
      <p style="font-family: vasir;text-align: justify">قرارداد اوبامیانگ در تابستان سال 2021 به اتمام می رسد و با توجه
        به عدم توافق طرفین برای تمدید قرارداد، احتمال جدایی این مهاجم گلزن زیاد است. اما نشریه دیلی میل امروز در گزارشی
        مدعی شد آرسنال علیرغم علم به این موضوع، قصد ندارد اوبامیانگ را تابستان امسال با قیمتی ارزان به فروش برساند و
        حداقل 20 میلیون پوند برای فروش او طلب کرده است.


        بارسلونا جدی ترین مشتری اوبامیانگ محسوب می شود و در صورت ناکامی در خرید لائوتارو مارتینز برای انتقال او اقدام
        خواهد کرد. حتی مذاکراتی نیز بین طرفین انجام شده، اما پرداخت 20 میلیون پوند برای مهاجمی که تنها یک سال قرارداد
        دارد کار آسانی نیست و بعید است بارسلونا در این شرایط با اوبامیانگ به توافق برسد. بدین ترتیب آرسنال حتی حاضر است
        بک سال بعد اوبامیانگ را رایگان واگذار کند، اما با قیمتی کمتر از رقم مورد نظر او را نفروشد.</p>
    </div>
    <div style="display: grid;
grid-template-columns: 3fr 3fr 3fr;
margin-top: 100px
">
      <div></div>
      <p style="font-family: vasir;text-align: center;text-after-overflow: 2px">محصولات مرتبط</p>
    </div>
    <div>
      <vueper-slides autoplay

                     class="no-shadow"
                     :visible-slides="10"
                     :arrows="true"

                     :slide-ratio="1 / 10"
                     :gap="1"
                     :bullets="false"
                     :dragging-distance="500"

                     :duration="1500"
      >
        <vueper-slide v-for="(slide,i) in cat" :key="i" :image="slide.image"   pauseOnHover="true" />
      </vueper-slides>
    </div>
  </div>


</template>

<script>

  import VueEasyLightbox from 'vue-easy-lightbox'
  import 'vueperslides/dist/vueperslides.css'
  import {VueperSlides, VueperSlide} from 'vueperslides'
  import axios from 'axios'

  export default {
    components: {
      VueEasyLightbox,
      VueperSlides, VueperSlide,

    },

    data() {
      return {
        info : null,

        cat : [

          {

            image : require('../img/smart-watch.svg')
          },
          {

            image : require('../img/laptop.svg')
          },
          {

            image : require('../img/glasses.svg')
          },
          {

            image : require('../img/beauty-treatment.svg')
          },
          {

            image : require('../img/shoes.svg')
          },
          {

            image : require('../img/hawa.svg')
          },
          {

            image : require('../img/pants.svg')
          },

          {

            image : require('../img/smart-watch.svg')
          },
          {

            image : require('../img/laptop.svg')
          },
          {

            image : require('../img/glasses.svg')
          },
          {

            image : require('../img/beauty-treatment.svg')
          },
          {

            image : require('../img/shoes.svg')
          },
          {

            image : require('../img/hawa.svg')
          },
          {

            image : require('../img/pants.svg')
          },
        ],
        src: "src/img/product-12.jpg",
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
