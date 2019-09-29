<template>
  <div>
    <div v-for="contact in contacts" v-bind:key="contact.id">
      <h2>contact card</h2>
       <ul>
         First Name: {{ contact.first_name }}&nbsp;&nbsp;&nbsp;
         Last Name: {{ contact.last_name }}
         <br/>
         Phone Number: {{ contact.phone_number }}&nbsp;&nbsp;&nbsp;
         Email: {{ contact.email }}
       </ul>
       <br>
       <button> Edit </button>
       <button @click="deleteContact"> Delete </button>
       <br>
       <br>
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
</style>
