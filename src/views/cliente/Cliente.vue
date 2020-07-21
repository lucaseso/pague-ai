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
        class="cliente-list-item flex-column"
      >
        <h6>
          <strong>Nome: </strong> {{ cliente.nome }}
        </h6>
        <h6>
          <strong>Whatsapp: </strong> {{ cliente.whatsapp }}
        </h6>
        <div class="actions">
          <!-- <b-button variant="success" v-if="cliente.pendente">Receber pagamento ({{ cliente.pendente }})</b-button>
          <router-link :to="{ name: 'clienteEdit', params: { id: id } }" v-else>
            <b-button variant="success"><b-icon icon="plus" variant="white"></b-icon> Venda</b-button>
          </router-link> -->
          <router-link :to="{ name: 'clienteEdit', params: { id: id } }">
            <b-button variant="info"><b-icon icon="pencil-square" variant="white"></b-icon> Editar</b-button>
          </router-link>
        </div>
      </b-list-group-item>
    </b-list-group>
    <h6 v-else>Comece a cadastrar seus clientes</h6>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { BIcon } from 'bootstrap-vue'

export default {
  name: 'Cliente',
  components: {
    BIcon
  },
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
