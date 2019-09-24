import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
  // contacts (credentials) {
  //   return Api().post('contacts', credentials)
  // }
}

// was npm run dev in pck.json
