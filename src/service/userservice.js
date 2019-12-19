import Api from '@/service/api'

export default {
  Login (username) {
    return Api().post('/login/username', username,
      {headers: {'Content-type': 'application/json'}})
  },
  LoginWithEmail (email) {
    return Api().post('/login/email', email,
      {headers: {'Content-type': 'application/json'}})
  },
  Register (register) {
    return Api().post('/register', register,
      {headers: {'Content-type': 'application/json'}})
  }
}
