import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    contacts: null,
    isUserLoggedIn: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      console.log('user', user)
      console.log(state.isUserLoggedIn)

      if (user) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setContacts (state, contacts) {
      state.contacts = contacts
      console.log('contacts', contacts)
    }
  },
  actions: {
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setContacts ({ commit }, contacts) {
      commit('setContacts', contacts)
    }
  }
})
