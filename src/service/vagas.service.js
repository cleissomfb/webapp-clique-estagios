import Vue from 'vue'
import { authHeader } from '../helpers/auth'

export const vagaService = {
  findVaga,
  // getByIdVaga,
  findVagaSearch,
  saveVaga,
  editVaga,
  delete: _deleteVaga
}

function findVaga () {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get('https://api-clique-estagios.herokuapp.com/vagas', requestCfg)
}

function findVagaSearch (buscaVaga) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(`https://api-clique-estagios.herokuapp.com/vagas/search?cnpj=${buscaVaga}`, requestCfg)
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
  return Vue.axios.post('https://api-clique-estagios.herokuapp.com/vagas', vaga, requestCfg)
}

function editVaga (vaga) {
  const requestCfg = {
    method: 'PUT',
    headers: authHeader()
  }
  return Vue.axios.put(`https://api-clique-estagios.herokuapp.com/vagas`, vaga, requestCfg)
}

function _deleteVaga (idVaga) {
  const requestCfg = {
    method: 'DELETE',
    headers: authHeader()
  }
  return Vue.axios.delete(`https://api-clique-estagios.herokuapp.com/vagas/${idVaga}`, requestCfg)
}
