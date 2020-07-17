import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Venda from '../views/Venda.vue';
import Cliente from '../views/Cliente.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/venda',
    name: 'Venda',
    component: Venda
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente
  }
];

const router = new VueRouter({
  routes
});

export default router;
