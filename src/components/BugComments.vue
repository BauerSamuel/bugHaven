<template>
  <div class="bug-comments row">
    <div class="col-12">
      <form @submit.prevent="addComment">
        <input type="text" v-model="comment.creator" placeholder="Created by...">
        <p>Comments</p>
        <textarea rows="5" cols="60" type="text" v-model="comment.content" placeholder="Write comment here..."
          required></textarea>
        <button>Submit Comment</button>
      </form>
    </div>
    <div class="col-12">
      <table class="table">
        <thead class="thead-light">
          <th scope="col">Creator</th>
          <th scope="col">Messgae</th>
          <th scope="col">Status</th>
        </thead>
        <tbody v-for="comment in comments">
          <tr>
            <td>{{comment.creator}}</td>
            <td>{{comment.content}}</td>
            <!-- <td v-if="bug.closed">closed</td>
            <td v-else>active</td> -->
            <td>{{comment.flagged}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BugComments',
    props: ['bugId'],
    data() {
      return {
        comment: {
          content: '',
          bug: this.bugId,
          creator: '',
          user: 'Admin',
          flagged: "pending"
        }
      }

    },
    mounted() {
      this.$store.dispatch('getComments', this.bugId)
    },
    computed: {
      comments() {
        return this.$store.state.comments
      }
    },
    methods: {
      addComment() {
        this.$store.dispatch('addComment', this.comment)
      }
    },
    components: {
    }
  }
</script>

<style>

</style>