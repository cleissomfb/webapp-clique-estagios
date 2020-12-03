import Vue from 'vue'

export const buscarCepService = {
  buscarCep
}

function buscarCep (cep) {
  const requestCfg = {
    method: 'GET'
  }
  return Vue.axios.get(`https://ws.apicep.com/cep/${cep}.json/`, requestCfg)
}