import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Venda from '../views/Venda.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/venda',
    name: 'Venda',
    component: Venda,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
