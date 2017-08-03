<template>
  <div class="CreateVote" v-if="latest_vote[0]">
    <h1>{{ title }}</h1>
    <h2>{{ latest_vote[0].vote_info.title }}</h2>
    <input type="radio" id="option1" name="vote" value="option1" v-model="option">
    <label for="option1">{{ latest_vote[0].vote_info.option1 }}</label>
    <br>
    <input type="radio" id="option2" name="vote" value="option2" v-model="option">
    <label for="option2">{{ latest_vote[0].vote_info.option2 }}</label>
    <br>
    <button id="submitVote" @click="submitVote(latest_vote[0])">送出</button>
    <br>
    <router-link to="/create">創建投票</router-link>
  </div>
</template>

<script>
import db from '../firebasedb';

export default {
  name: 'LatestVote',
  data() {
    return {
      title: 'Vote for Your Choice',
      option: 'option1',
    };
  },
  firebase: {
    latest_vote: db.ref('votes').limitToLast(1),
  },
  methods: {
    submitVote(vote) {
      const option = this.$data.option;
      const voteRef = this.$firebaseRefs.latest_vote.child(vote['.key']);
      let optionNum;

      switch (option) {
        case 'option1':
          optionNum = parseInt(vote.option1_num, 10);
          voteRef.update({ option1_num: optionNum + 1 });
          break;
        case 'option2':
          optionNum = parseInt(vote.option2_num, 10);
          voteRef.update({ option2_num: optionNum + 1 });
          break;
        default:
          break;
      }
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
