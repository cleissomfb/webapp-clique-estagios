import decode from 'jwt-decode'
import request from './request'

export async function signInEmp(cnpj, senha) {
  // console.log(cnpj, senha);
  await request('POST', '/auth', {
    cnpj,
    senha
  }).then((data) => {
    localStorage.setItem('token', JSON.stringify(data.token))
    localStorage.setItem('empresa', JSON.stringify(data.empresa))
  })
}

export function signOutEmp() {
  localStorage.removeItem('token')
  localStorage.removeItem('empresa')
}

export function isSignedInEmp() {
  const token = localStorage.getItem('token')

  if (!token) { // Se não existe o token no LocalStorage
    return false // significa que o usuário não está assinado.
  }
  try {
    const { exp: expiration } = decode(token)
    const isExpired = !!expiration && Date.now() > expiration * 1000

    if (isExpired) { // Se o token tem uma data de expiração e
      alert("Sessão encerrada, logue novamente!");
      return false // essa data é menor que a atual o usuário
    }// não está mais assinado.
    return true
  } catch (_) { // O "jwt-decode" lança erros pra tokens inválidos.
    return false // Com um token inválido o usuário não está assinado.
  }
}