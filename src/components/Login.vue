<template>
  <div>
      <h1> Login </h1>

      <input type="email" name="email" v-model="email" placeholder="email"/>
      <input type="password" name="password" v-model="password" placeholder="password"/>

      <br>

      <div class="error" v-html="error"/>

      <br>
      <!-- <router-link :to="{name: 'HelloWorld'}">
        <button @click="login"> Login </button>
      </router-link> -->
      <button @click="login"> Login </button>

      <router-link :to="{name: 'HelloWorld'}">
        <button> Cancel </button>
      </router-link>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
// import addUser from '../api/addUserToDatabase'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
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
