<template>
  <div class="bug-comments row">
    <div class="col-12 text-left">
      <form v-if="!bug.closed" @submit.prevent="addComment">
        <span>Name</span><br>
        <input type="text" v-model="comment.creator" placeholder="Created by..."><br><br>
        <textarea rows="5" cols="60" type="text" v-model="comment.content" placeholder="Write comment here..."
          required></textarea><br>
        <button type="button" class="btn btn-outline-success">Submit Comment</button>
      </form>
    </div>
    <div class="col-8 offset-2 text-left">
      <table v-if="this.$store.state.comments.length != 0" class="table">
        <thead class="thead-light">
          <th scope="col">Creator</th>
          <th scope="col">Message</th>
          <th scope="col">Status</th>
        </thead>
        <tbody v-for="comment in comments">
          <tr>
            <td>{{comment.creator}}</td>
            <td>{{comment.content}}</td>
            <td>{{comment.flagged}}</td>
            <td><button @click="deleteComment(comment)" type="button" class="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BugComments',
    props: ['bug'],
    data() {
      return {
        comment: {
          content: '',
          bug: this.bug._id,
          creator: '',
          user: 'Admin',
          flagged: "pending"
        }
      }

    },
    mounted() {
      let active = this.bug
      console.log(active)
      console.log(" " + active)
      if (this.$store.state.comments.length == 0) {
        this.$store.dispatch('getComments', this.$route.params.bugId)
      }
    },
    computed: {
      comments() {
        return this.$store.state.comments
      },
    },
    methods: {
      addComment() {
        this.$store.dispatch('addComment', this.comment)
      },
      deleteComment(comment) {
        console.log(comment)
        this.$store.dispatch('deleteComment', comment)
      }
    },
    components: {
    }
  }
</script>

<style>

</style>