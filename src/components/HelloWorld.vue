<template>
  <div class="hello">
    <h1 v-if="enabled">{{ msg }}</h1>

    <br>
    <br>

    <router-link :to="{name: 'login'}">
      <button v-if="enabled"> Login </button>
    </router-link>

    <router-link :to="{name: 'register'}">
      <button v-if="enabled"> Register </button>
    </router-link>

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
</style>
