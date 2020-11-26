const baseURL = process.env.VUE_APP_API_LOCATION

import Vue from 'vue'
import { authHeader } from '../helpers/auth'

export const vagaService = {
  findVaga,
  // getByIdVaga,
  getByCompany,
  getByPerson,
  findVagaSearch,
  saveVaga,
  editVaga,
  _deleteVaga,
  vagaInterese
}

function findVaga () {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + '/vagas', requestCfg)
}

function findVagaSearch (buscaVaga) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + `/vagas/search?id=${buscaVaga}`, requestCfg)
}

function getByCompany (cnpj) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + `/vagas/getByCompany?cnpj=${cnpj}`, requestCfg)
}

function getByPerson (cpf) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + `/vagas/getByPerson?cpf=${cpf}`, requestCfg)
}

/*
function getByIdVaga (idVaga) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(`https://api-clique-estagios.herokuapp.com/vaga/${idVaga}`, requestCfg)
}
*/

function saveVaga (vaga) {
  const requestCfg = {
    method: 'POST',
    headers: authHeader()
  }
  return Vue.axios.post(baseURL + '/vagas', vaga, requestCfg)
}

function editVaga (vaga) {
  const requestCfg = {
    method: 'PUT',
    headers: authHeader()
  }
  return Vue.axios.put(baseURL + `/vagas`, vaga, requestCfg)
}

function _deleteVaga (idVaga) {
  const requestCfg = {
    method: 'DELETE',
    headers: authHeader()
  }
  return Vue.axios.delete(baseURL + `/vagas/${idVaga}`, requestCfg)
}

function vagaInterese (vaga) {
  const requestCfg = {
    method: 'POST',
    headers: authHeader()
  }
  return Vue.axios.post(baseURL + '/vagas/interesse', vaga, requestCfg)
}
