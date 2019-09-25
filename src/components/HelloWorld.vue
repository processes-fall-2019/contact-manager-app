<template>

<div class = "container">
  <body>
  <div class="hello">
    <br><br><br><br><br>
    <h1 v-if="enabled">{{ msg }}</h1>
    <h2> We got the easiest contacts in town, <small><i><u>guaranteed</u></i></small> </h2>
    <br><br><br><br><br>

    <router-link :to="{name: 'login'}">
      <button v-if="enabled" class = "buttons"> Login </button>
    </router-link>
    <router-link :to="{name: 'register'}">
      <button v-if="enabled" class = "buttons"> Register </button>
    </router-link>
  </div>
  <br><br><br><br><br>
  </body>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Easy-Contacts',
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
.container {
height: 600px;
width: 60%;
border-radius: 30%;
margin: auto;
background-image: url('~@/assets/green-triangle-3.png');

}
.buttons{
font-weight: normal;
  background-color:Green;
  border-radius: 50%;
  border: none;
  color: white;
  padding: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
}

h1 {
  font-weight: normal;
  font-size: 60px;
  color: black;
}
h2{
  color:black;
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
</style>
