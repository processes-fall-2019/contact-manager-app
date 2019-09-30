<template>
  <div>
    <v-btn light class="cyan" @click="getContacts"> List Contacts </v-btn> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn light="" class="cyan" @click="makeAdding"> Add Contact </v-btn>
    <br />
    <br />
    <v-text-field
     v-show="adding"
     filled
     type="fname"
     name="first_name"
     v-model="first_name"
     placeholder="First Name">
    </v-text-field>

    <v-text-field
    v-show="adding"
    filled
    type="lname"
    name="last_name"
    v-model="last_name"
    placeholder="Last Name">
    </v-text-field>

    <v-text-field
    v-show="adding"
    filled=""
    type="pnum"
    name="phone_number"
    v-model="phone_number"
    placeholder="Phone Number">
    </v-text-field>

    <v-text-field
    v-show="adding"
    filled=""
    type="email"
    name="email"
    v-model="email"
    placeholder="Email">
    </v-text-field>

    <v-btn light v-show ="adding" @click="addContact"> Done </v-btn>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <v-btn light v-show ="adding" @click="adding=false"> Cancel </v-btn>

    <br/>
    <br/>
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

        console.log('the resssssy', response.data)
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

        // console.log('here', this.$store.state.contacts)
        // console.log('contacts', this.contacts)
        Object.assign(this.$data, this.$options.data.call(this))
        this.getContacts()
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
    force () {
      return this.$forceUpdate()
    }
  }
}

</script>

<style>
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
