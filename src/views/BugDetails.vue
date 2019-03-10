<template>
  <div class="bug-details">
    <bug-body :bugId="bugId"></bug-body>
    <hr>
    <bug-comments :bugId="bugId"></bug-comments>
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

    },
    computed: {

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