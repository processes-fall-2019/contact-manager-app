<template>
  <div>
    <h1>contact</h1>
    <div v-for="contact in contacts" v-bind:key="contact.id">
       <li>
         {{ contact.first_name }}
       </li>
    </div>
    <button> Add </button>
    <button> Delete </button>
  </div>
</template>

<script>

export default {
  props: ['contact-id'],

  data () {
    return {
      contacts: this.$store.state.contacts
    }
  },

  methods: {
    getContact () {
      let count = 0
    }
  }
}

</script>

<style>
</style>
