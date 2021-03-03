import Vue from 'vue';

import Router from 'vue-router';

import Home from './pages/home/index.vue';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login/index.vue')
    }
  ]
});

export default router;
