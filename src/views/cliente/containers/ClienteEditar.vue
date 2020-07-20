<template>
  <section class="container">
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
        <b-button @click="voltar" variant="danger">Cancelar</b-button>
      </div>
      <!-- <b-form-group label="Periodo de pagamento:">
        <b-form-input
          type="text"
          size="md"
          v-model="cliente.whatsapp"
          placeholder="Com que frequencia o cliente irá pagar?"
        ></b-form-input>
      </b-form-group> -->
    </b-form>
  </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import axios from '../../../services/api';

export default {
  name: 'ClienteAdicionar',
  mounted() {
    this.carregarCliente();
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cliente: {},
      form: {
        nome: '',
        whatsapp: '',
        pendente: 0
      }
    };
  },
  validations: {
    form: {
      nome: {
        required,
        minLength: minLength(3)
      },
      whatsapp: {
        required,
        minLength: 9
      }
    }
  },
  methods: {
    submeter() {
      // Mover para then da chamada do serviço em actions
      this.$store.dispatch('cliente/editarCliente', this.form);
      this.voltar();
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    voltar() {
      this.$router.go(-1);
    },
    async carregarCliente() {
      try {
        const res = await axios.get(`clientes/${this.id}.json`);
        this.cliente = { ...res.data };
        this.cliente.id = this.id;
        this.form = { ...this.cliente };
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
