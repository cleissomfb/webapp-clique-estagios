const baseURL = process.env.VUE_APP_API_LOCATION

import Vue from 'vue'
import { authHeader } from '../helpers/auth'

export const empresaService = {
  findEmpresa,
  // getByIdEmpresa,
  findEmpresaSearch,
  saveEmpresa,
  editEmpresa,
  delete: _deleteEmpresa
}

function findEmpresa () {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + '/empresas', requestCfg)
}

function findEmpresaSearch (buscaEmpresa) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + `/empresas/search?cnpj=${buscaEmpresa}`, requestCfg)
}

/*
function getByIdEmpresa (idEmpresa) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(`https://api-clique-estagios.herokuapp.com/empresa/${idEmpresa}`, requestCfg)
}
*/

function saveEmpresa (empresa) {
  const requestCfg = {
    method: 'POST',
    headers: authHeader()
  }
  return Vue.axios.post(baseURL + '/empresas', empresa, requestCfg)
}

function editEmpresa (empresa) {
  const requestCfg = {
    method: 'PUT',
    headers: authHeader()
  }
  return Vue.axios.put(baseURL + `/empresas`, empresa, requestCfg)
}

function _deleteEmpresa (idEmpresa) {
  const requestCfg = {
    method: 'DELETE',
    headers: authHeader()
  }
  return Vue.axios.delete(baseURL + `/empresas/${idEmpresa}`, requestCfg)
}
