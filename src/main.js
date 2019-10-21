import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
import 'swiper/dist/css/swiper.css'
import axios from "axios";
Vue.prototype.$http=axios;
//解决浏览器promise兼容
import "babel-polyfill";

//取消点击延迟
import fastclick from "fastclick";
Vue.config.productionTip = false;

//轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper, /* { default global options } */)
fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
