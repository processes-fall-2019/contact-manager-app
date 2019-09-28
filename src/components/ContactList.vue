<template>
  <div>
    <button @click="getContacts"> List Contacts </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="makeAdding"> Add Contact </button>
    <br>
    <br>
    <input v-show="adding" name="first_name" v-model="first_name" placeholder="First name"/>
    <input v-show="adding" name="last_name" v-model="last_name" placeholder="Last name"/>
    <input v-show="adding" name="phone_number" v-model="phone_number" placeholder="Phone number"/>
    <input v-show="adding" type="email" name="email" v-model="email" placeholder="email"/>
    <button v-show="adding" @click="addContact"> done </button>&nbsp;&nbsp;
    <button v-show="adding" @click="adding=false" > cancel </button>
    <br/>
    <br/>
    <!-- <Contact v-for="contact in contacts" v-bind:key="contact.id" :contact-id.sync="contact.id"> </Contact> -->
    <Contact v-for="i in holder" v-bind:key="i.id" :i-id.sync="i.id"> </Contact>
  </div>
</template>

<script type="text/javascript">
import AuthenticationService from '../services/AuthenticationService'
import Contact from './Contact'

export default
{
  data () {
    return {
      contacts: this.$store.state.contacts,
      userId: this.$store.state.user[0].id,
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      adding: false,
      holder: []
    }
  },
  // props: ,
  components: {
    Contact
  },
  methods: {
    async getContacts () {
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
        console.log('here', this.$store.state.contacts)
        this.holder = { id: 1 }

        console.log('contacts', this.contacts)
        return response
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async addContact () {
      this.adding = false
      try {
        const response = await AuthenticationService.addContact({
          user_id: this.userId,
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          email: this.email
        })

        console.log('the ressy', response.data)
        // console.log('the res', response.data)
        // console.log('the res 2', this.userId)
        // //
        // let conts = response.data.filter(x => x.email)
        // console.log(conts)
        //
        // this.contacts = conts
        // this.contacts.push(response.data[0])

        // this.$store.dispatch('setContacts', this.contacts)
        this.holder = { id: 1 }
        
        // this.$forceUpdate()
        // console.log('here', this.$store.state.contacts)
        //
        // console.log('contacts', this.contacts)
        return response
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    makeAdding () {
      this.adding = true
    }
  },
  computed: {
  }
}

</script>

<style>

</style>
