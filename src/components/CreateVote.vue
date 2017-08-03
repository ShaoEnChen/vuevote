<template>
  <div class="CreateVote">
    <h1>{{ title }}</h1>
    <label for="new-vote-title">問券標題</label>
    <input v-model="vote.title" type="text" id="new-vote-title">
    <br>
    <label for="new-vote-opt1">問券選項1</label>
    <input v-model="vote.option1" type="text" id="new-vote-opt1">
    <br>
    <label for="new-vote-opt2">問券選項2</label>
    <input v-model="vote.option2" type="text" id="new-vote-opt2">
    <br>
    <button id="newVoteSubmit" @click="createVote">送出</button>
    <br>
    <router-link to="/">回到首頁</router-link>
  </div>
</template>

<script>
import db from '../firebasedb';

export default {
  name: 'CreateVote',
  data() {
    return {
      title: 'Create a New Vote',
      vote: {
        title: '',
        option1: '',
        option2: '',
      },
    };
  },
  firebase: {
    votes: db.ref('votes'),
  },
  methods: {
    createVote() {
      const date = Date();

      // Push data to Firebase
      this.$firebaseRefs.votes.push({
        vote_info: this.$data.vote,
        option1_num: 0,
        option2_num: 0,
        date,
      });

      // Empty value in input fields
      this.$data.vote.title = '';
      this.$data.vote.option1 = '';
      this.$data.vote.option2 = '';
    },
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
