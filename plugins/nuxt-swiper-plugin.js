import Vue from 'vue'
import {Swiper as SwiperClass, Pagination, Mousewheel, Autoplay, Navigation, EffectFade, Lazy} from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay, Navigation, EffectFade, Lazy])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))
