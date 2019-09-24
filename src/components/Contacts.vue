<template>
  <div>
    <h1> My Contacts </h1>
    <br>
    <button> Add </button>
    <button> Delete </button>
    <input type="search" name="search" v-model="search" placeholder="search..."/>
    <button> Search </button>
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
      search: '',
      contacts: ['franco', 'yo']
    }
  },
  methods: {
    search () {
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
