<template>

  <div >

    <vueper-slides 3d

      class="no-shadow"
      :visible-slides="1"

      fixed-height="300px"
      :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }">
      <vueper-slide v-for="(slide,i) in slides" :key="i" :title="slide.title" :image="slide.image"  pauseOnHover="true" autoPlay="true"/>
    </vueper-slides>


  </div>


</template>

<script>

  import 'vueperslides/dist/vueperslides.css'
  import { VueperSlides, VueperSlide } from 'vueperslides'

    export default {

    components : {
      VueperSlide,VueperSlides
    },

      data() {
        return {
          slides: [

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


</style>
