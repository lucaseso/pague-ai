<template>
  <b-form @submit.prevent="submeter" aria-autocomplete="off">
    <b-form-group label="Nome:">
      <b-form-input
        type="text"
        size="md"
        v-model.trim="$v.form.nome.$model"
        :state="validateState('nome')"
        aria-describedby="input-nome-live-feedback"
        placeholder="Digite o nome do cliente"
      ></b-form-input>
      <b-form-invalid-feedback id="input-nome-live-feedback"
        >Este é um campo obrigatório e deve ter no mínimo 3 caracteres
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Whatsapp:">
      <b-form-input
        type="text"
        size="md"
        v-model.trim="$v.form.whatsapp.$model"
        :state="validateState('whatsapp')"
        aria-describedby="input-whatsapp-live-feedback"
        placeholder="Digite o whatsapp do cliente"
      ></b-form-input>
      <b-form-invalid-feedback id="input-nome-live-feedback"
        >O whatsapp não deve ser nulo e deve ter um formato válido
      </b-form-invalid-feedback>
    </b-form-group>
    <div class="actions">
      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button @click="cancelar()" variant="danger">Cancelar</b-button>
    </div>
    <!-- <b-form-group label="Periodo de pagamento:">
        <b-form-input
          type="text"
          size="md"
          v-model="cliente.whatsapp"
          placeholder="Com que frequencia o cliente irá pagar?"
        ></b-form-input>
      </b-form-group> -->{{ this.cliente }}
  </b-form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'ClienteForm',
  props: {
    cliente: {
      type: Function
    }
  },
  mounted() {
    console.log(this.cliente);
  },
  data() {
    return {
      form: this.cliente
    };
  },
  validations: {
    form: {
      nome: {
        required,
        minLength: minLength(3),
        value: 0
      },
      whatsapp: {
        required,
        minLength: 9
      }
    }
  },
  methods: {
    submeter() {
      this.$v.$reset();
      this.$emit('submetido', this.form);
    }
  }
};
</script>

<style scoped>
.error {
  border-color: brown;
}
</style>
