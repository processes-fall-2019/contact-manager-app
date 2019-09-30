<template>
  <v-parallax height= "1000" dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <v-flex>
      <div class="fullscreen">
          <v-toolbar flat dense class="black" dark>
            <v-toolbar-title class="center">{{ email }}'s Contacts</v-toolbar-title>
            <v-btn dark @click="logout"> Logout </v-btn>
          </v-toolbar>
          <v-row align="center" justify="center">
            <div class="center">
              <v-col>
                <v-text-field
                  label=""
                  filled
                  type="search"
                  name="searchRes"
                  v-model="searchRes"
                  placeholder="search...">
                </v-text-field>
                <v-btn dark="" class="cyan" @click="searchContacts"> Search </v-btn>
                <br><br>
                <br><br>
                <ContactList> </ContactList>
              </v-col>
            </div>
          </v-row>
        <br>
        <div class="error" v-html="error"/>
        <br>
      </div>
    </v-flex>
  </v-parallax>
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
    async searchContacts () {
      try {
        const response = await AuthenticationService.searchContacts({
          user_id: this.userId,
          first_name: this.searchRes
        })

        console.log('ressy', response.data)

        return response
      } catch (error) {
        this.error = error.response.data.error
      }
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
  .error {
    color: red;
  }
  .center {
    margin:  auto;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
</style>
