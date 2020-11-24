export function authHeader () {
  const user = JSON.parse(localStorage.getItem('token'))

  if (user) {
    // return { Authorization: 'Bearer ' + user }
    return { 'x-auth-token': user }
  } else {
    return {}
  }
}
