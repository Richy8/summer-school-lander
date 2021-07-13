import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "gradely_asset_store/dist/css/app.css";

import { API_BASE_URL } from "./env";
import axios from "axios";
axios.defaults.baseURL = API_BASE_URL;

import { renderAssets } from "@/services/assetHelper";

import Meta from "vue-meta";
import VueLazyload from "vue-lazyload";
import PortalVue from "portal-vue";

Vue.use(Meta);
Vue.use(PortalVue);
Vue.mixin(renderAssets);
Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
