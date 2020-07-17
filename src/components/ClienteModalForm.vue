<template>
  <b-modal
    id="modal-ClienteNovo"
    title="Adicionar Cliente"
    aria-autocomplete="off"
    @hide="limpar"
    @ok="submeter"
  >
    <b-form @submit.stop.prevent="$emit('', $event)">
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="md"
          v-model="cliente.nome"
          placeholder="Digite o nome do cliente"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Whatsapp:">
        <b-form-input
          type="text"
          size="md"
          v-model="cliente.whatsapp"
          placeholder="Digite o whatsapp do cliente"
        ></b-form-input>
      </b-form-group>
      <!-- <b-form-group label="Periodo de pagamento:">
        <b-form-input
          type="text"
          size="md"
          v-model="cliente.whatsapp"
          placeholder="Com que frequencia o cliente irá pagar?"
        ></b-form-input>
      </b-form-group> -->
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: 'ClienteModalForm',
  data() {
    return {
      cliente: {}
    };
  },
  methods: {
    submeter() {
      this.cliente.pendente = 0;
      this.$emit('submetido', this.cliente);
    },
    limpar() {
      this.cliente = {};
    }
  }
};
</script>
