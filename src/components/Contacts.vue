<template>
  <div>
    <h1>  {{ email }}'s Contacts </h1>
    <button @click="logout"> Logout </button>
    <br>
    <br>
    <input type="search" name="searchRes" v-model="searchRes" placeholder="search..."/>
    <button> Search </button>
    <!-- TOdo: make a way to edit contacts -->
    <br>
    <br>
    <div>
      <ContactList> </ContactList>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import ContactList from './ContactList'
import Contact from './Contact'

export default {
  components: {
    ContactList,
    Contact
  },
  data () {
    return {
      email: this.$store.state.user[0].email,
      userId: this.$store.state.user[0].id,
      password: '',
      error: null,
      canLoginIn: false,
      searchRes: '',
      contacts: []
    }
  },
  methods: {
    searchContacts () {
    },
    logout () {
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    },
    getUserId () {
      return this.$store.state.user[0].id
      // console.log(this.$store.state.user[0].id) // use to somehow get user id
    },
    async getContacts () {
      console.log('hi')
      console.log(this.userId)
      try {
        const response = await AuthenticationService.contacts({
          user_id: this.userId
        })

        // console.log('the ressy', response)
        console.log('the res', response.data)
        console.log('the res 2', this.userId)
        //
        let conts = response.data.filter(x => x.email)
        console.log(conts)

        this.contacts = conts
        this.$store.dispatch('setContacts', conts)
        console.log('here', this.$store.state)

        console.log('contacts', this.contacts)
        return response
      } catch (error) {
        this.error = error.response.data.error
      }
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
