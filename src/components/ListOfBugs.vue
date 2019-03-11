//will be list of all bugs on home page, plus form for this.

<template>
  <div class="myBugs row">
    <div class="col-12">
      <!--<button @click="!this.sorted" type="button" class="btn button-info">Active</button>-->
      <!--Why does this line and line 47 have issues? I don't get it.-->
      <table class="table">
        <thead class="thead-light">
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
          <th scope="col">First Posted On</th>
        </thead>
        <tbody>
          <router-link v-if="sorted" :to="{name: 'details', params: {bugId:bug._id}}" tag="tr" v-for="bug in bugs"
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
        <span>Name</span><br>
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
        //       sorted=false, //Super annoyed I get an error from this line. Why? This isnt weird
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
        if (!this.sorted) {
          return this.$store.state.bugs
        } else {
          return this.$store.state.bugs.map(b => !b.closed)
        }
      }
    },
    methods: {
      submitBug() {
        this.$store.dispatch('addBug', this.newBug)
      }
    },
    components: {

    }
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