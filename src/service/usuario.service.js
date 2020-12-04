const baseURL = process.env.VUE_APP_API_LOCATION
import Vue from 'vue'
import { authHeader } from '../helpers/auth'

const user = JSON.parse(localStorage.getItem('token'))

export const usuarioService = {
  findUsuario,
  // getByIdUsuario,
  findUsuarioSearch,
  saveUsuario,
  editUsuario,
  delete: _deleteUsuario
}

function findUsuario () {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + '/usuarios', requestCfg)
}

function findUsuarioSearch (buscaUsuario) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(baseURL + `/usuarios/search?cpf=${buscaUsuario}`, requestCfg)
}

/*
function getByIdUsuario (idUsuario) {
  const requestCfg = {
    method: 'GET',
    headers: authHeader()
  }
  return Vue.axios.get(`https://api-clique-estagios.herokuapp.com/usuarios/${idUsuario}`, requestCfg)
}
*/

function saveUsuario (usuario) {
  const requestCfg = {
    method: 'POST',
    headers: authHeader()
  }
  return Vue.axios.post(baseURL + '/usuarios', usuario, requestCfg)
}

function editUsuario (usuario) {
  const requestCfg = {
    method: 'PUT',
    headers: authHeader()
  }
  // console.log(requestCfg.headers)
  return Vue.axios.put(baseURL + `/usuarios`, usuario, requestCfg)
}

function _deleteUsuario (idUsuario) {
  const requestCfg = {
    method: 'DELETE',
    headers: authHeader()
  }
  return Vue.axios.delete(baseURL + `/usuarios/${idUsuario}`, requestCfg)
}
