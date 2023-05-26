  <template >
    <div class="baudelaire-page">
    <div class="flex" style="margin-bottom: 100px;">
      <router-link :to="{ name: 'home' }" class="dot">
        <img src="../assets/img/output-onlinepngtools.png" alt="" class="spiral">
      </router-link>
      <div class="header-text">
        <h1 class="title">Recueil Baudelaire</h1>
        <h4 class="subtitle">Illustrations digitales</h4>
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
  
        <img class="photographie" src="../assets/img/baudelaire-affiche.png" alt="">
  
      </div>
    </div>
  </div>
  </template>
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  // Importer les 24 fichiers d'images
  import slide1 from '../assets/img/bodelaire/baudelaire-01.jpg'
  import slide2 from '../assets/img/bodelaire/baudelaire-02.jpg'
  import slide3 from '../assets/img/bodelaire/baudelaire-03.jpg'
  import slide4 from '../assets/img/bodelaire/baudelaire-04.jpg'
  import slide5 from '../assets/img/bodelaire/baudelaire-05.jpg'
  import slide6 from '../assets/img/bodelaire/baudelaire-06.jpg'
  import slide7 from '../assets/img/bodelaire/baudelaire-07.jpg'
  import slide8 from '../assets/img/bodelaire/baudelaire-08.jpg'
  import slide9 from '../assets/img/bodelaire/baudelaire-09.jpg'
  import slide10 from '../assets/img/bodelaire/baudelaire-10.jpg'
  import slide11 from '../assets/img/bodelaire/baudelaire-11.jpg'
  import slide12 from '../assets/img/bodelaire/baudelaire-12.jpg'
  import slide13 from '../assets/img/bodelaire/baudelaire-13.jpg'
  import slide14 from '../assets/img/bodelaire/baudelaire-14.jpg'
  import slide15 from '../assets/img/bodelaire/baudelaire-15.jpg'
  import slide16 from '../assets/img/bodelaire/baudelaire-16.jpg'
  import slide17 from '../assets/img/bodelaire/baudelaire-17.jpg'
  import slide18 from '../assets/img/bodelaire/baudelaire-18.jpg'
  import slide19 from '../assets/img/bodelaire/baudelaire-19.jpg'
  import slide20 from '../assets/img/bodelaire/baudelaire-20.jpg'
  import slide21 from '../assets/img/bodelaire/baudelaire-21.jpg'
  import slide22 from '../assets/img/bodelaire/baudelaire-22.jpg'
  import slide23 from '../assets/img/bodelaire/baudelaire-23.jpg'
  import slide24 from '../assets/img/bodelaire/baudelaire-24.jpg'
  
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
          slide22,
          slide23,
          slide24,
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
  margin-bottom: 100px !important;
  margin-top: 7vh;
  width: 40vw;
  height: 65vh;
}

.space {
  justify-content: space-between;
}

.baudelaire-page{
  background-color: #FFF7F6;
  margin: 0 !important;
  padding: 0 !important ;
}
  </style>
  