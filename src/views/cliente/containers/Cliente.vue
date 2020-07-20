<template>
  <b-container>
    <h2 class="bd-content-title">
      Clientes
      <router-link :to="{ name: 'clienteAdd' }"
        ><b-button size="sm" variant="primary">
          Novo
        </b-button>
      </router-link>
    </h2>

    <b-list-group id="cliente-list" v-if="listaClientes">
      <b-list-group-item
        v-for="(cliente, id) in listaClientes"
        :key="id"
        class="cliente-list-item d-flex justify-content-between align-items-center"
      >
        <router-link :to="{ name: 'clienteDetalhes', params: { id: id } }">{{
          cliente.nome
        }}</router-link>
        <b-badge variant="primary" pill>{{ cliente.pendente }}</b-badge>
      </b-list-group-item>
    </b-list-group>
    <h6 v-else>Comece a cadastrar seus clientes</h6>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cliente',
  created() {
    this.$store.dispatch('cliente/buscarClientes');
  },
  data() {
    return {
      clientes: this.listaClientes
    };
  },
  computed: {
    ...mapGetters('cliente', ['listaClientes'])
  }
};
</script>
