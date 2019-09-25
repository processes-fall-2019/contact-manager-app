<template>
  <div class = "container">
      <br><br><br><br><br><br>
      <h1> Register </h1>
      
      <h2> It's so easy a dog could do it! </h2>
      <br>
      <input type="email" name="email" v-model="email" placeholder="email"/>
      <input type="password" name="password" v-model="password" placeholder="password"/>

      <br>

      <div class="error" v-html="error"/>

      <br>
      <router-link :to="{name: 'HelloWorld'}">
        <button class = "buttons"@click="register"> Register </button>
      </router-link>

      <router-link :to="{name: 'HelloWorld'}">
        <button class = "buttons"> Cancel </button>
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
.container {
height: 600px;
width: 60%;
border-radius: 30%;
margin: auto;
background-image: url('~@/assets/green-triangle-3.png');

}
  
h1 {
  font-weight: normal;
  font-size: 60px;
  color: black;
}
h2{
  color:black;
}
.buttons{
font-weight: normal;
  background-color:Green;
  border-radius: 50%;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
