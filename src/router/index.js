import Vue from 'vue';
import Router from 'vue-router';
import LatestVote from '@/components/LatestVote';
import CreateVote from '@/components/CreateVote';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'CreateVote',
      component: CreateVote,
    },
    {
      path: '/',
      name: 'LatestVote',
      component: LatestVote,
    },
  ],
});
