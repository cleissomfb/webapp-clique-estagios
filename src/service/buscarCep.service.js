import Vue from 'vue'

export const buscarCepService = {
  buscarCep
}

function buscarCep (cep) {
  const requestCfg = {
    method: 'GET'
  }
  return Vue.axios.get(`https://viacep.com.br/ws/${cep}/json/`, requestCfg)
}