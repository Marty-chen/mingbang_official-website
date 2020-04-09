import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/zerogrid.css"
import "./assets/css/style.css"
import "./assets/css/responsiveslides.css"
import 'element-ui/lib/theme-chalk/index.css';

// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import axios from "axios"
import {
  Carousel,
  CarouselItem,
  Image,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Cascader,
  Pagination
} from 'element-ui';

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Cascader)
Vue.use(Pagination)
Vue.prototype.$message = Message;

axios.defaults.baseURL = 'http://192.168.101.233:11000';
axios.defaults.timeout = 10000;

let headers = {
  platform: "PC",
  version: "1.0.0",
  timestamp: Date.parse(new Date())
}
//请求头拦截
axios.interceptors.request.use(config => {
  config.headers = headers;
  if (config.url == "/api/home/featured.pub" || config.url == "/api/gds/detail.pub") {
    config.headers["Content-Type"] = "application/json"
}
  return config
})
//响应拦截
axios.interceptors.response.use(config => {
    // console.log(config.data)
    return config
  },
  err => {
    console.log(err);
    Message.error(err + ",网络开小差了哦，请稍后再试");
    return err;
  }
)

Vue.prototype.$http = axios
Vue.config.productionTip = false

router.afterEach(() => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')