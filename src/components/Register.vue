<template>
  <v-parallax height= "1000" dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-flex>
        <div class="fullScreen">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title class="center">Registration</v-toolbar-title>
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
            <!-- <router-link :to="{name: 'HelloWorld'}"> -->
              <v-btn dark class="cyan" @click="register"> Register </v-btn>
            <!-- </router-link> -->
            <router-link :to="{name: 'HelloWorld'}">
              <v-btn dark class="cyan"> Cancel </v-btn>
            </router-link>
        </div>
      </v-flex>
  </v-parallax>
<!-- =======
      <input type="email" name="email" v-model="email" placeholder="email"/>
      <input type="password" name="password" v-model="password" placeholder="password"/>

      <br>

      <div class="error" v-html="error"/>

      <br>
      <! <router-link :to="{name: 'HelloWorld'}">
        <button @click="register"> Register </button>
      </router-link> -->
      <!-- <button @click="register"> Register </button>

      <router-link :to="{name: 'HelloWorld'}">
        <button> Cancel </button>
      </router-link> -->

  <!-- </div> -->
<!-- >>>>>>> Stashed changes -->
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        if (response.data.error) {
          alert(response.data.error)
          return false
        }

        this.$router.push({
          name: 'HelloWorld'
        })

        alert('Hello ' + this.email + ' your user was successfully registered!')

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
    color: black;
  }

  h1{
    font-color: blue;
  }

  .email{
    font-color:blue;
  }

  .center {
    margin:  auto;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
</style>
