import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// was npm run dev in pck.json
