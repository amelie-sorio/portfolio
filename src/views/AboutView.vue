<template >
  <div class="photographie-page">
  <div class="flex">
    <router-link :to="{ name: 'home' }" class="dot">
      <img src="../assets/img/output-onlinepngtools.png" alt="" class="spiral">
    </router-link>
    <div class="header-text">
      <h1 class="title">Photos personnelles</h1>
      <h4 class="subtitle">Creation personnelle</h4>
      <vue-picture-swipe class="gallery" :items="items"></vue-picture-swipe>
    </div>
    <div class="flex-column space">
      <div></div>
      <img class="bisous" src="../assets/img/bisous.png" alt="">
    </div>
    <div class="flex-column">

      <img class="photographie" src="../assets/img/photography.png" alt="">

    </div>
  </div>
</div>
</template>

<script>
import VuePictureSwipe from 'vue3-picture-swipe';
import Menu from '../components/Menu.vue'

import image1 from '../assets/img/photographie/1.png';
import image2 from '../assets/img/photographie/2.png';
import image3 from '../assets/img/photographie/3.png';
import image4 from '../assets/img/photographie/4.png';
import image5 from '../assets/img/photographie/5.png';
import image6 from '../assets/img/photographie/6.png';
import image7 from '../assets/img/photographie/7.png';
import image8 from '../assets/img/photographie/8.png';
import image9 from '../assets/img/photographie/9.png';
import image10 from '../assets/img/photographie/DSC06692.png';

export default {
  components: {
    Menu
  },
  data() {
    return {
      items: [{
        src: image1,
        thumbnail: image1,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image2,
        thumbnail: image2,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image3,
        thumbnail: image3,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image4,
        thumbnail: image4,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image5,
        thumbnail: image5,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image6,
        thumbnail: image6,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image7,
        thumbnail: image7,
        w: 1500,
        h: 900,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image8,
        thumbnail: image8,
        w: 900,
        h: 1500,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image9,
        thumbnail: image9,
        w: 900,
        h: 1500,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },
      {
        src: image10,
        thumbnail: image10,
        w: 900,
        h: 1500,
        alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
      },


      ]
    };
  }
}
</script>

<style>
img {
  height: 130px;
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
}

.space {
  justify-content: space-between;
}

.photographie-page{
  background-color: #FFF7F6 !important;
  margin: 0 !important;
  padding: 0 !important ;
}
</style>
