<template>
  <div>
    <h1> My Contacts </h1>
    <button @click="logout"> Logout </button>
    <br>
    <br>
    <button> Add </button>
    <button> Delete </button>
    <br>
    <br>
    <button @click="getContacts"> List Contacts </button>
    &nbsp; &nbsp;
    <input type="search" name="searchRes" v-model="searchRes" placeholder="search..."/>
    <button> Search </button>
    <!-- TOdo: make delete and add buttons dynamic. (one delete button per contact) (an add button soemwhere) -->
    <!-- TOdo: make a way to edit contacts -->
    <!-- TODo: make contact its own component, then also create a contact list component -->
    <br>
    <br>
    <div>
      <h3>List</h3>

      <!-- <ul>
        <li v-for="contact in contacts">
          {{ contact }}
        </li>
      </ul> -->
      <div v-for="contact in contacts">
        <li>
          {{ contact }}
        </li>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
import ContactList from './ContactList'

export default {
  components: {
    ContactList
  },
  data () {
    return {
      email: '',
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
      try {
        const response = await AuthenticationService.contacts({
          user_id: this.userId
        })

        console.log('the ressy', response)
        console.log('the res', response.data)
        console.log('the res 2', this.userId)

        let conts = response.data.filter(x => x.email)

        this.contacts = conts

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
