import axios from './api';

const findOne = (id) => {
  return axios.get(`/clientes/${id}.json`)
}

const index = () => {
  return axios.get(`/clientes.json`)
}

const save = (cliente) => {
  return axios.post(`/clientes.json`, cliente)
}

const update = (id, cliente) => {
  return axios.patch(`/clientes/${id}.json`, cliente)
}

export default {
  findOne,
  index,
  save,
  update
}
