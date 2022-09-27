import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuemask from "v-mask";
require("@/assets/css/global.css");

Vue.use(Vuemask);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
