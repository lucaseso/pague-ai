<template>
  <section class="container">
    <h3>Cliente</h3>
    <hr />
    <p><strong>Nome: </strong>{{ cliente.nome }}</p>
    <p><strong>Whatsapp: </strong>{{ cliente.whatsapp }}</p>
    <p>
      <strong>Pendência: </strong>
      <b-badge :variant="cliente.pendente ? 'warning' : 'primary'" pill>{{
        cliente.pendente
      }}</b-badge>
    </p>
    <hr />
    <div class="actions">
      <b-button variant="success" v-if="cliente.pendente">Receber pagamento</b-button>
      <router-link :to="{ name: 'clienteEdit', params: { id: id } }">
        <b-button variant="primary">Editar</b-button></router-link
      >
      <router-link :to="{ name: 'novaVenda', params: { id: id } }">
        <b-button variant="info">Nova venda</b-button></router-link
      >
    </div>
  </section>
</template>

<script>
import axios from '../../../services/api';

export default {
  name: 'ClienteAdicionar',
  mounted() {
    axios
      .get(`clientes/${this.id}.json`)
      .then(res => {
        console.log(res);
        this.cliente = res.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  data() {
    return {
      cliente: {}
    };
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    editar(cliente) {
      // Mover para then da chamada do serviço em actions
      this.$router.push('/clientes');
      this.$store.dispatch('cliente/editarCliente', cliente);
    }
  }
};
</script>
