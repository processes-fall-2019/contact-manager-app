<template>
  <v-parallax dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-row>
      <v-flex>
        <div class="fullScreen">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
            

              <!-- <input type="email" name="email" v-model="email" placeholder="email"/>
              <br>
              <input type="password" name="password" v-model="password" placeholder="password"/> -->

                 <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    label="email"
                    filled
                    type="email"
                    name="email"
                    v-model="email"
                    placeholder=""
                  ></v-text-field>
                </v-col>

                 <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    label="password"
                    filled
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder=""
                  ></v-text-field>
                </v-col>

              <br>

              <div class="error" v-html="error"/>

              <br>
              <router-link :to="{name: 'HelloWorld'}">
                <v-btn class="cyan" @click="register"> Register </v-btn>
              </router-link>
              <router-link :to="{name: 'HelloWorld'}">
                <v-btn class="cyan"> Cancel </v-btn>
              </router-link>

            
        </div>
      </v-flex>
    </v-row>
  </v-parallax>

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

  h1{
    font-color: blue;
  }

  .email{
    font-color:blue;
  }
</style>
