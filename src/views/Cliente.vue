<template>
  <b-container>
    <h2 class="bd-content-title">
      Clientes
      <b-button size="sm" variant="primary" v-b-modal.modal-ClienteNovo>Novo</b-button>
    </h2>

    <b-list-group id="cliente-list">
      <b-list-group-item
        v-for="(cliente, id) in listaClientes"
        :key="id"
        class="cliente-list-item d-flex justify-content-between align-items-center"
      >
        {{ cliente.nome }}
        <b-badge variant="primary" pill>{{ cliente.pendente }}</b-badge>
      </b-list-group-item>
    </b-list-group>
    <ClienteModalForm @submetido="adicionar($event)"></ClienteModalForm>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import ClienteModalForm from '../components/ClienteModalForm.vue';

export default {
  components: {
    ClienteModalForm
  },
  created() {
    this.$store.dispatch('cliente/buscarClientes');
    console.log(this);
  },
  computed: {
    ...mapGetters('cliente', ['listaClientes'])
  },
  methods: {
    adicionar(cliente) {
      // Mover para then da chamada do serviço em actions
      this.$store.dispatch('cliente/adicionarCliente', cliente);
    }
  }
};
</script>

<style scoped>
.cliente-list-item {
  cursor: pointer;
}
</style>
