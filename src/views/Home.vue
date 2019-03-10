<template>
  <div class="home container">
    <h2>Welcome to BugHa<img alt="Vue logo" src="../assets/logo.png">en!</h2>
    <ListOfBugs></ListOfBugs>
  </div>
</template>

<script>
  import ListOfBugs from '@/components/ListOfBugs.vue'

  export default {
    name: 'home',
    components: {
      ListOfBugs
    }
  }
</script>
<style>
  img {
    height: 1.5rem;
  }

  ul {
    list-style-type: none;
  }
</style>