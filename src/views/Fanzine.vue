<template >
    <div class="fanzine-page">
    <div class="flex" style="margin-bottom: 100px;">
      <router-link :to="{ name: 'home' }" class="dot">
        <img src="../assets/img/output-onlinepngtools.png" alt="" class="spiral">
      </router-link>
      <div class="header-text">
        <h1 class="title">Fanzine</h1>
        <h4 class="subtitle">Création personnelle</h4>
        <Carousel  class="gallery">
      <Slide v-for="(slide, index) in slides" :key="index" >
        <img :src="slide" :alt="`Slide ${index + 1}`" class="carousel-image"/>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
      </div>
      <div class="flex-column space">
        <!-- <div></div> -->
        <!-- <img class="bisous" src="../assets/img/bisous.png" alt=""> -->
      </div>
      <div class="flex-column">
  
        <img class="photographie" src="../assets/img/fanzine-affiche.png" alt="">
  
      </div>
    </div>
  </div>
  </template>
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  // Importer les 24 fichiers d'images
  import slide1 from '../assets/img/fanzine/Une histoire à croquer (1)-01.png'
  import slide2 from '../assets/img/fanzine/Une histoire à croquer (1)-02.png'
  import slide3 from '../assets/img/fanzine/Une histoire à croquer (1)-03.png'
  import slide4 from '../assets/img/fanzine/Une histoire à croquer (1)-04.png'
  import slide5 from '../assets/img/fanzine/Une histoire à croquer (1)-05.png'
  import slide6 from '../assets/img/fanzine/Une histoire à croquer (1)-06.png'
  import slide7 from '../assets/img/fanzine/Une histoire à croquer (1)-07.png'
  import slide8 from '../assets/img/fanzine/Une histoire à croquer (1)-08.png'
  import slide9 from '../assets/img/fanzine/Une histoire à croquer (1)-09.png'
  import slide10 from '../assets/img/fanzine/Une histoire à croquer (1)-10.png'
  import slide11 from '../assets/img/fanzine/Une histoire à croquer (1)-11.png'
  import slide12 from '../assets/img/fanzine/Une histoire à croquer (1)-12.png'
  import slide13 from '../assets/img/fanzine/Une histoire à croquer (1)-13.png'
  import slide14 from '../assets/img/fanzine/Une histoire à croquer (1)-14.png'
  import slide15 from '../assets/img/fanzine/Une histoire à croquer (1)-15.png'
  import slide16 from '../assets/img/fanzine/Une histoire à croquer (1)-16.png'
  import slide17 from '../assets/img/fanzine/Une histoire à croquer (1)-17.png'
  import slide18 from '../assets/img/fanzine/Une histoire à croquer (1)-18.png'
  import slide19 from '../assets/img/fanzine/Une histoire à croquer (1)-19.png'
  import slide20 from '../assets/img/fanzine/Une histoire à croquer (1)-20.png'
  import slide21 from '../assets/img/fanzine/Une histoire à croquer (1)-21.png'

  
  export default defineComponent({
    name: 'Basic',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        slides: [
          slide1,
          slide2,
          slide3,
          slide4,
          slide5,
          slide6,
          slide7,
          slide8,
          slide9,
          slide10,
          slide11,
          slide12,
          slide13,
          slide14,
          slide15,
          slide16,
          slide17,
          slide18,
          slide19,
          slide20,
          slide21,
        ],
      }
    },
  })
  </script>
  
  <style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 5px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    /* border: 5px solid white; */
  }

  .custom-carousel {
  width: 400px;
  height: 900px;
}
.carousel-image {
    height: 65vh !important;
    /* height: 700px; */
  /* max-width: 400px;
  max-height: 700px; */
  object-fit: contain;
}


.bisous {
  height: 90px !important;
  width: 80px;
  /* margin-top: 3.5vh;
  margin-left: 1.3vw; */
  transform: rotate(4deg);
}

.gallery {
  margin-top: 7vh;
  width: 40vw;
  height: 65vh;
}

.space {
  justify-content: space-between;
}

.fanzine-page{
  background-color: #e0f2e8 !important;
  margin: 0 !important;
  padding: 0 !important ;
}
  </style>
  