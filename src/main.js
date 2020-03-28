import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/zerogrid.css"
import "./assets/css/style.css"
import "./assets/css/responsiveslides.css"
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel,CarouselItem,Image } from 'element-ui';
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')






