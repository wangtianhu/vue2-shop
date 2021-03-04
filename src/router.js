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
      path: '/user-center',
      name: 'user-center',
      component: () => import('./pages/user-center/index.vue')
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('./pages/shopping-cart/index.vue')
    },
    {
      path: '/goods-classification',
      name: 'goods-classification',
      component: () => import('./pages/goods-classification/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login/index.vue')
    }
  ]
});

export default router;
