//will be list of all bugs on home page, plus form for this.

<template>
  <div class="myBugs row">
    <div class="col-12">
      <!--Table with lables for List: title, reported by, status, date.-->

      <table class="table">
        <thead class="thead-light">
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">First Posted On</th>
        </thead>
        <tbody>
          <router-link :to="{name: 'details', params: {bugId:bug._id}}" tag="tr" v-for="bug in bugs"
            :class="{ 'table-success':bug.closed, 'table-warning':!bug.closed }">
            <td>{{bug.title}}</td>
            <td>{{bug.creator}}</td>
            <td v-if="bug.closed">closed</td>
            <td v-else>active</td>
            <td>{{bug.createdAt.split('T')[1].split('Z')[0]}} on {{bug.createdAt.split('T')[0]}}</td>
          </router-link>
        </tbody>
      </table>
      <hr>
    </div>
    <div class="col-12 text-left">
      <form @submit.prevent="submitBug">
        <span class="form-stuff">Name</span><br>
        <input type="text" v-model="newBug.creator" placeholder="Who are you? Name..." required><br><br>
        <span class="form-stuff">Bug title</span><br>
        <input type="text" v-model="newBug.title" placeholder="Title of bug..." required><br><br>
        <textarea rows="5" cols="80" type="text" v-model="newBug.description" placeholder="Describe your bug please..."
          required></textarea><br>
        <button>Submit Bug</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListOfBugs",
    props: [],
    data() {
      return {
        newBug: {
          creator: '',
          title: '',
          description: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch('initialize')
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
      // activeBug() {
      //   return this.$store.state.activeBug
      // }
    },
    methods: {
      submitBug() {
        this.$store.dispatch('addBug', this.newBug)
      }
    },
    components: {}
  }
</script>
<style>
  tr:hover {
    scale: .1;
    transition: scale 2s;
    cursor: pointer
  }

  p {
    margin-bottom: 0px
  }
</style>