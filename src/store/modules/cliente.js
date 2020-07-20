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
      state.listaClientes = { ...state.listaClientes, [payload.id]: payload.cliente };
    },
    editarCliente(state, payload) {
      state.listaClientes[payload.id] = payload.cliente;
    }
  },
  actions: {
    async adicionarCliente({ commit }, cliente) {
      try {
        const response = await axios.post('/clientes.json', cliente);
        commit('adicionarCliente', { id: response.data.name, cliente });
      } catch (error) {
        console.log(error);
      }
    },
    async editarCliente({ commit }, payload) {
      try {
        const response = await axios.post('/clientes.json', payload);
        console.log(response);
        commit('editarCliente', { id: response.data.name, cliente: payload });
      } catch (error) {
        console.log(error);
      }
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
