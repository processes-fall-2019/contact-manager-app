<template>
  <v-parallax height= "1000" dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-flex>
        <div class="fullScreen">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title class="center">Welcome to Easy Contacts</v-toolbar-title>
          </v-toolbar>
            <v-row align="center" justify="center">
            </v-row>
            <br><br><br />

            <v-row align="center" justify="center">
              <v-col class="center" sm="2">
                  <v-img
                    src="https://masciadev.com/wp-content/uploads/2018/06/white-phone-icon.png"
                  ></v-img>
                </v-col>
            </v-row>

            <br><br><br />
            <div class="error" v-html="error"/>
            <br>
            <router-link :to="{name: 'login'}">
              <v-btn dark class="cyan"> Login </v-btn>
            </router-link>
            <router-link :to="{name: 'register'}">
              <v-btn dark class="cyan"> Register </v-btn>
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
