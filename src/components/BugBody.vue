<template>
  <div class="bug-body row text-center">
    <div class="col-6 offset-3 text-left mt-5">
      <h1>{{bug.title}}</h1>
      <h3>Reported by: {{bug.creator}}</h3>
    </div>
    <div class="my-1 col-6 offset-3 text-left">
      <p>Bug description:</p>
    </div>
    <div class="col-6 offset-3 description text-left">
      <p>{{bug.description}}</p>
    </div>
    <div class="col-3">
      <button type="button" class="btn btn-outline-danger">
        <!--Changes closed to true instead of false. Closes bug.-->
        Close
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BugBody',
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
        return this.$store.state.bugs.find(b => b._id == this.bugId)
      }
    },
    methods: {

    },
    components: {
    }
  }
</script>

<style>
  .description {
    border: 1px solid grey;
    border-radius: 8px;
    margin-top: -15px
  }

  h3 {
    text-indent: 5%;
  }

  .border {
    border: 2px solid grey;
  }
</style>