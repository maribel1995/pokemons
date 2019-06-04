import Vue from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
