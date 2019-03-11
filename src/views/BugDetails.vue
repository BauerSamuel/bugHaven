<template>
  <div class="bug-details container">
    <div v-if="bug.closed" class="Alert">
      <h1>BUG CLOSED</h1>
    </div>
    <bug-body :bug="bug"></bug-body>
    <hr>
    <bug-comments :bug="bug"></bug-comments>
  </div>
</template>

<script>
  import BugBody from "@/components/BugBody.vue"
  import BugComments from "@/components/BugComments.vue"

  export default {
    name: 'BugDetails',
    props: ['bugId'],
    data() {
      return {
      }

    },
    mounted() {
      if (this.$store.state.bugs.length == 0) {
        this.$store.dispatch('initialize')
      }
    },
    computed: {
      bug() {
        return this.$store.state.bugs.find(b => b._id == this.bugId) || {}
      }
    },
    methods: {

    },
    components: {
      BugBody,
      BugComments
    }
  }
</script>

<style>

</style>