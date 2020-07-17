import axios from '../../services/api';

export default {
  name: 'cliente',
  namespaced: true,
  state: { listaClientes: {} },
  getters: {
    listaClientes(state) {
      return state.listaClientes;
    }
  },
  mutations: {
    buscarClientes(state, lista) {
      state.listaClientes = lista;
    },
    adicionarCliente(state, payload) {
      state.listaClientes[payload.name] = payload.cliente;
    }
  },
  actions: {
    adicionarCliente({ commit }, cliente) {
      axios
        .post('/clientes.json', cliente)
        .then(data => {
          commit('adicionarCliente', { name: data.name, cliente });
        })
        .catch(error => {
          console.log(error);
        });
    },
    async buscarClientes({ commit }) {
      try {
        const response = await axios.get('/clientes.json');
        commit('buscarClientes', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
