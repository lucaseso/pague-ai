import Multiselect from 'vue-multiselect';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Vue Multiselecet
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('multiselect', Multiselect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
