import ClienteService from '../../services/cliente.service';

export default {
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
        const response = await ClienteService.save(cliente)
        commit('adicionarCliente', { id: response.data.name, cliente });
      } catch (error) {
        console.log(error);
      }
    },
    async editarCliente({ commit }, payload) {
      try {
        const { nome, whatsapp, pendentes } = payload
        const cliente = {nome, whatsapp, pendentes}
        await ClienteService.update(payload.id, cliente)
        commit('editarCliente', {
          id: payload.id,
          cliente
        });
      } catch (error) {
        console.log(error);
      }
    },
    async buscarClientes({ commit }) {
      try {
        const response = await ClienteService.index()
        commit('buscarClientes', response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
