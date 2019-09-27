<template>
  <v-parallax height= "1000" dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-flex>
      <div class="fullscreen">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title class="center">Login</v-toolbar-title>
          </v-toolbar>
          <v-row align="center" justify="center">
            <div class="center">
              <v-col>
                <v-text-field
                  label="email"
                  filled
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="">
                </v-text-field>
              </v-col>

              <v-col>
                <v-text-field label="password"
                  filled
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="">
                </v-text-field>
              </v-col>
            </div>
          </v-row>
        <br>
        <div class="error" v-html="error"/>
        <br>
        <v-btn dark @click="login"> Login </v-btn>
        <router-link :to="{name: 'HelloWorld'}">
          <v-btn dark> Cancel </v-btn>
        </router-link>
      </div>
    </v-flex>
  </v-parallax>
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

  .center {
    margin:  auto;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
</style>
