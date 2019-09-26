<template>
  <v-parallax height= "1000" dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-flex>
        <div class="fullScreen">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title class="center">Welcome to Easy Contacts</v-toolbar-title>
          </v-toolbar>
            <v-row align="center" justify="center">
            </v-row>
            
          <v-row align="center" justify="center">
            <v-img
              src="./assets/phone.png"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="500"
              max-height="300"
            ></v-img>
          </v-row>
            
            <br><br><br><br><br><br><br><br>
            <div class="error" v-html="error"/>
            <br>
            <router-link :to="{name: 'login'}">
              <v-btn dark class="cyan" @click = "login"> Login </v-btn>
            </router-link>
            <router-link :to="{name: 'register'}">
              <v-btn dark class="cyan" @click="register"> Register </v-btn>
            </router-link>
        </div>
      </v-flex>
  </v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Easy Contacts',
      enabled: true,
      error: null
    }
  },
  methods: {
    handleSignUpButton () {
      this.enabled = false
    },
    handleBackButton () {
      this.enabled = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .center {
    margin:  auto;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
</style>
