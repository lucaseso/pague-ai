import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Venda from '@/views/Venda.vue';
import Cliente from '@/views/cliente/Cliente.vue';
import ClienteAdd from '@/views/cliente/ClienteAdicionar.vue';
import ClienteEdit from '@/views/cliente/ClienteEditar.vue';

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
    path: '/clientes',
    name: 'cliente',
    component: Cliente
  },
  {
    path: '/clientes/add',
    name: 'clienteAdd',
    component: ClienteAdd
  },
  {
    path: '/clientes/:id/editar',
    name: 'clienteEdit',
    component: ClienteEdit,
  }
];

const router = new VueRouter({
  routes
});

export default router;
