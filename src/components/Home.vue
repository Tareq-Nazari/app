<template>

  <div style="!important;direction: ltr ">

    <vueper-slides

      class="no-shadow"
      :visible-slides="1"
      :arrows="false"

      :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }">
      <vueper-slide v-for="(slide,i) in slides1" :key="i" :title="slide.title" :image="slide.image" pauseOnHover="true"
                    autoPlay="true"/>
    </vueper-slides>
    <br>

    <div class="category">

      <div></div>

        <img src="src/img/spring.jpg" class="zoom" style="max-width: 100%;height: auto" >
<div></div>



          <img src="src/img/spring.jpg" class="zoom" style="max-width: 100%;height: auto">
<div></div>

            <img src="src/img/spring.jpg" class="zoom" style="max-width: 100%;height: auto">

            <div></div>

          </div>
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
            <vueper-slide v-for="(slide,i) in cat" :key="i" :image="slide.image" pauseOnHover="true"/>
          </vueper-slides>


        </div>


</template>

<script>

  import 'vueperslides/dist/vueperslides.css'
  import {VueperSlides, VueperSlide} from 'vueperslides'

  export default {

    components: {
      VueperSlide, VueperSlides
    },

    data() {
      return {

        autoPlaying: true,

        cat: [

          {

            image: require('../img/smart-watch.svg')
          },
          {

            image: require('../img/laptop.svg')
          },
          {

            image: require('../img/glasses.svg')
          },
          {

            image: require('../img/beauty-treatment.svg')
          },
          {

            image: require('../img/shoes.svg')
          },
          {

            image: require('../img/hawa.svg')
          },
          {

            image: require('../img/pants.svg')
          },

          {

            image: require('../img/smart-watch.svg')
          },
          {

            image: require('../img/laptop.svg')
          },
          {

            image: require('../img/glasses.svg')
          },
          {

            image: require('../img/beauty-treatment.svg')
          },
          {

            image: require('../img/shoes.svg')
          },
          {

            image: require('../img/hawa.svg')
          },
          {

            image: require('../img/pants.svg')
          },
        ]

        ,
        slides1: [

          {
            title: 'Slide #1',
            content: 'Slide content.',
            image: require('../img/store-header1.jpg')
          },
          {
            title: 'Slide #2',
            content: 'Slide content.',
            image: require('../img/store-header2.jpg')
          },
          {
            title: 'Slide #3',
            content: 'Slide content.',
            image: require('../img/store-header3.jpg')
          }
        ]
      };
    },
  }

</script>

<style scoped>

  .category-box {
    display: grid;

  }

  .zoom:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02);
  }

  .category {
    display: grid;
    grid-template-columns: 0.5fr 1.2fr 0.1fr 1.2fr 0.1fr 1.2fr 0.5fr;
    grid-template-rows: 620px;
    margin-top: 50px;
    margin-bottom: 50px;
    direction: rtl;
  }

</style>
