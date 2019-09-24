<template>
  <div>
    <h1> My Contacts </h1>
    <button @click="logout"> Logout </button>
    <br>
    <br>
    <button> Add </button>
    <button> Delete </button>
    &nbsp; &nbsp;
    <input type="search" name="searchRes" v-model="searchRes" placeholder="search..."/>
    <button> Search </button>
    <!-- TOdo: make delete and add buttons dynamic. (one delete button per contact) (an add button soemwhere) -->
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      canLoginIn: false,
      searchRes: '',
      contacts: ['franco', 'yo']
    }
  },
  methods: {
    search () {
    },
    logout () {
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
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
