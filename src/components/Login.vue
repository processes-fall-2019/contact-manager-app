<template>
  <div>
      <h1> Login </h1>
      <input type="email" name="email" v-model="email" placeholder="email"/>
      <input type="password" name="password" v-model="password" placeholder="password"/>
      <br>
      <div class="error" v-html="error"/>
      <br>
      <button @click="login"> Login </button>
      <router-link :to="{name: 'HelloWorld'}">
        <button> Cancel </button>
      </router-link>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      canLoginIn: false
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        console.log('res', response)

        if (response.data.error) {
          alert('User does not exist.')
          return false
        }

        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'contacts'
        })

        console.log('ressy', response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    loginCheck () {
      this.canLoginIn = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
