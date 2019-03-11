<template>
  <div class="bug-details container">
    <div v-if="bug.closed" class="Alert">
      <h1>BUG CLOSED</h1>
    </div>
    <bug-body :bugId="bugId"></bug-body>
    <hr>
    <bug-comments v-if="!bug.closed" :bugId="bugId"></bug-comments>
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
      if (this.$store.state.comments.length == 0) {
        this.$store.dispatch('getComments')
      }
    },
    computed: {
      bug() {
        return this.$store.state.bugs.find(b => b._id == this.bugId)
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