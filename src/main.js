
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ApiService from "./common/api.service";
import i18n from './common/i18n';


ApiService.init();

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
