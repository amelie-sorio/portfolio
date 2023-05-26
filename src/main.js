import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePictureSwipe from 'vue3-picture-swipe';

const app = createApp(App)

app.use(router)
app.component('vue-picture-swipe', VuePictureSwipe);
app.mount('#app')
