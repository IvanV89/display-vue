import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase';
import 'firebase/auth';
import store from "./store/store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from 'vuelidate';
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

//Filters
// za max 300 karaktera
Vue.filter('snippet', function (value) {
 return value.slice(0, 250)+ "...";
});

// za izbjegavanje difoltnih html tagova
Vue.filter('strip', function (html) {
 var tmp = document.createElement("DIV");
 tmp.innerHTML = html;
 return tmp.textContent || tmp.innerText;
});

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app =
      new Vue({
        router,
        store,
        validations: {},
        render: h => h(App)
      }).$mount("#app");
  }
});
