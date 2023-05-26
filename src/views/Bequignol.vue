<template >
  <div class="bequignol-page">
    <div class="flex">
      <router-link :to="{ name: 'home' }" class="dot">
        <img src="../assets/img/output-onlinepngtools.png" alt="" class="spiral">
      </router-link>
      <div class="header-text">
        <h1 class="title">Domaine de Béquignol</h1>
        <h4 class="subtitle">Teamworking</h4>
        <vue-picture-swipe class="gallery" :items="items"></vue-picture-swipe>
      </div>
      <div class="flex-column space">
        <div></div>
        <img class="bisous" src="../assets/img/bisous.png" alt="">
      </div>
      <div class="flex-column">

        <img class="photographie" src="../assets/img/bequignol-affiche.png" alt="">

      </div>
    </div>

  </div>
</template>

<script>
import VuePictureSwipe from 'vue3-picture-swipe';

import slide1 from '../assets/img/bequignol/Charte graphique-01.png';
import slide2 from '../assets/img/bequignol/Charte graphique-02.png';
import slide3 from '../assets/img/bequignol/Charte graphique-03.png';
import slide4 from '../assets/img/bequignol/Charte graphique-04.png';
import slide5 from '../assets/img/bequignol/Charte graphique-05.png';
import slide6 from '../assets/img/bequignol/Charte graphique-06.png';
import slide7 from '../assets/img/bequignol/Charte graphique-07.png';
import slide8 from '../assets/img/bequignol/Charte graphique-08.png';
import slide9 from '../assets/img/bequignol/Charte graphique-09.png';
import slide10 from '../assets/img/bequignol/Charte graphique-10.png';
import slide11 from '../assets/img/bequignol/Charte graphique-11.png';
import slide12 from '../assets/img/bequignol/Charte graphique-12.png';
import slide13 from '../assets/img/bequignol/Charte graphique-13.png';
import slide14 from '../assets/img/bequignol/Charte graphique-14.png';
import slide15 from '../assets/img/bequignol/Charte graphique-15.png';
import slide16 from '../assets/img/bequignol/Charte graphique-16.png';
import slide17 from '../assets/img/bequignol/Charte graphique-17.png';
import slide18 from '../assets/img/bequignol/Charte graphique-18.png';
import slide19 from '../assets/img/bequignol/Charte graphique-19.png';
import slide20 from '../assets/img/bequignol/Charte graphique-20.png';
import slide21 from '../assets/img/bequignol/Charte graphique-21.png';
import slide22 from '../assets/img/bequignol/Charte graphique-22.png';
import slide23 from '../assets/img/bequignol/Charte graphique-23.png';
import slide24 from '../assets/img/bequignol/Charte graphique-24.png';
import slide25 from '../assets/img/bequignol/Charte graphique-25.png';
import slide26 from '../assets/img/bequignol/Charte graphique-26.png';
import slide27 from '../assets/img/bequignol/Charte graphique-27.png';
import slide28 from '../assets/img/bequignol/Charte graphique-28.png';
import slide29 from '../assets/img/bequignol/Charte graphique-29.png';
import slide30 from '../assets/img/bequignol/Charte graphique-30.png';
import slide31 from '../assets/img/bequignol/Charte graphique-31.png';
import slide32 from '../assets/img/bequignol/Charte graphique-32.png';
import slide33 from '../assets/img/bequignol/Charte graphique-33.png';
import slide34 from '../assets/img/bequignol/Charte graphique-34.png';
import slide35 from '../assets/img/bequignol/Charte graphique-35.png';
import slide36 from '../assets/img/bequignol/Charte graphique-36.png';
import slide37 from '../assets/img/bequignol/Charte graphique-37.png';
import slide38 from '../assets/img/bequignol/Charte graphique-38.png';
import slide39 from '../assets/img/bequignol/Charte graphique-39.png';
import slide40 from '../assets/img/bequignol/Charte graphique-40.png';
import slide41 from '../assets/img/bequignol/Charte graphique-41.png';
import slide42 from '../assets/img/bequignol/Charte graphique-42.png';
import slide43 from '../assets/img/bequignol/Charte graphique-43.png';
import slide44 from '../assets/img/bequignol/Charte graphique-44.png';



export default {
  data() {
    return {
      items: [
  {
    src: slide1,
    thumbnail: slide1,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide2,
    thumbnail: slide2,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide3,
    thumbnail: slide3,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide4,
    thumbnail: slide4,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide5,
    thumbnail: slide5,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide6,
    thumbnail: slide6,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide7,
    thumbnail: slide7,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide8,
    thumbnail: slide8,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide9,
    thumbnail: slide9,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide10,
    thumbnail: slide10,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide11,
    thumbnail: slide11,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide12,
    thumbnail: slide12,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide13,
    thumbnail: slide13,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide14,
    thumbnail: slide14,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide15,
    thumbnail: slide15,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide16,
    thumbnail: slide16,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide17,
    thumbnail: slide17,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide18,
    thumbnail: slide18,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide19,
    thumbnail: slide19,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide20,
    thumbnail: slide20,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide21,
    thumbnail: slide21,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide22,
    thumbnail: slide22,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide23,
    thumbnail: slide23,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide24,
    thumbnail: slide24,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide25,
    thumbnail: slide25,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide26,
    thumbnail: slide26,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide27,
    thumbnail: slide27,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide28,
    thumbnail: slide28,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide29,
    thumbnail: slide29,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide30,
    thumbnail: slide30,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide31,
    thumbnail: slide31,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide32,
    thumbnail: slide32,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide33,
    thumbnail: slide33,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide34,
    thumbnail: slide34,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide35,
    thumbnail: slide35,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide36,
    thumbnail: slide36,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide37,
    thumbnail: slide37,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide38,
    thumbnail: slide38,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide39,
    thumbnail: slide39,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide40,
    thumbnail: slide40,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide41,
    thumbnail: slide41,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide42,
    thumbnail: slide42,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide43,
    thumbnail: slide43,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  },
  {
    src: slide44,
    thumbnail: slide44,
    w: 900,
    h: 1500,
    alt: 'some numbers on a grey background'
  }
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
  display: block;
  margin-top: 7vh !important;
  width: 40vw !important;
}

.space {
  justify-content: space-between;
}

.bequignol-page {
  background-color: #f4f4f4;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
