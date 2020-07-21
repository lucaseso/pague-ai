import Multiselect from 'vue-multiselect';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './core/router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import './assets/custom.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Vuelidate);

Vue.component('multiselect', Multiselect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
