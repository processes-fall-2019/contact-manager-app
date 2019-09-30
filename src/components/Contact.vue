<template>
  <div>
    <div v-for="contact in contacts" v-bind:key="contact.id">
      <div class="contactCard">
        <br />
        <h4>
          First Name: {{ contact.first_name }} <br>
          Last Name: {{ contact.last_name }} <br>
          Phone Number: {{ contact.phone_number }} <br>
          Email: {{ contact.email }} <br><br>
        </h4>
        <v-btn light="" @click="deleteContact"> Delete</v-btn>
      </div>
      <br />
    </div>
  </div>
</template>

<script>

export default {
  props: ['contact-id'],

  data () {
    return {
      contacts: this.$store.state.contacts,
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      i: 0
    }
  },
  // mounted: {
  // },
  methods: {
    getContact () {
    },
    deleteContact () {
      this.contacts.pop()
      // Object.assign(this.$data, this.$options.data.call(this))
    }
  },
  computed: {
    set (i) {
      return i++
    }
  }
}

</script>

<style>
  .contactCard{
  border: 10px solid teal;
  font-size: 20px;
  border-radius: 25%;
  margin:  auto;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  }
</style>
