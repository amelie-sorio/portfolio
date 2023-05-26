<template >
    <div class="harmonie-page">
        <div class="flex">
            <router-link :to="{ name: 'home' }" class="dot">
                <img src="../assets/img/output-onlinepngtools.png" alt="" class="spiral">
            </router-link>
            <div class="header-text">
                <h1 class="title">Harmonie de christus</h1>
                <h4 class="subtitle">Travail bénévol</h4>
                <vue-picture-swipe class="gallery" :items="items"></vue-picture-swipe>
            </div>
            <div class="flex-column space">
                <div></div>
                <img src="../assets/img/goals.png" alt="">
            </div>
            <div class="flex-column">

                <img class="photographie" src="../assets/img/harmonie-affichepng.png" alt="">

            </div>
        </div>
    </div>
</template>
  
<script>
import VuePictureSwipe from 'vue3-picture-swipe';

import image1 from '../assets/img/harmonie/1-min.jpg';
import image2 from '../assets/img/harmonie/2-min.jpg';
import image3 from '../assets/img/harmonie/3-min.jpg';
import image4 from '../assets/img/harmonie/4-min.png';
import image5 from '../assets/img/harmonie/5-min.png';
import image6 from '../assets/img/harmonie/6-min.png';

export default {
    data() {
        return {
            items: [{
                src: image1,
                thumbnail: image1,
                w: 1500,
                h: 800,
                alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
            },
            {
                src: image2,
                thumbnail: image2,
                w: 1500,
                h: 800,
                alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
            },
            {
                src: image3,
                thumbnail: image3,
                w: 1500,
                h: 800,
                alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
            },
            {
                src: image4,
                thumbnail: image4,
                w: 1500,
                h: 1500,
                alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
            },
            {
                src: image5,
                thumbnail: image5,
                w: 1500,
                h: 1500,
                alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
            },
            {
                src: image6,
                thumbnail: image6,
                w: 1500,
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
    /* transform: rotate(4deg); */
}

.gallery {
    margin-bottom: 150px;
    height: min-content !important;
    margin-top: 7vh;
    width: 40vw;
}

.space {
    justify-content: space-between;
}

.harmonie-page {
    background-color: #dfeffd !important;
    margin: 0 !important;
    padding: 0 !important;
}
</style>
  