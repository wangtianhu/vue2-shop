import Vue from 'vue';
// import { Swipe, SwipeItem } from 'vant';
import Swipe from 'vant/lib/swipe';
import VanImage from 'vant/lib/image';
import Lazyload from 'vant/lib/lazyload';
// import { Lazyload } from 'vant';

import '@/assets/css/common.css';
import SwipeItem from 'vant/lib/swipe-item';
console.log('Swipe--', Swipe);
import router from './router';
import Index from './index.vue';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Lazyload);

new Vue({
  router,
  render: (h) => h(Index)
}).$mount('#app');
