<template>
  <div>
    <button @click="getContacts"> List Contacts </button>
    <Contact v-for="contact in contacts" v-bind:key="contact.id"> </Contact>
  </div>
</template>

<script type="text/javascript">
import AuthenticationService from '../services/AuthenticationService'
import Contact from './Contact'

export default
{
  data () {
    return {
      contacts: this.$store.state.contacts
    }
  },
  // props: ,
  components: {
    Contact
  },

  methods: {
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
        console.log('here', this.$store.state.contacts)

        console.log('contacts', this.contacts)
        return response
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<style>

</style>
