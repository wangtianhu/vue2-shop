// import './index.scss';
// import pic from './assets/test.png';
// class Animal {
//   constructor(name = 'aaa') {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }
// console.log(66666);
// console.log(555);
// const dog = new Animal('dog');

// const img = document.createElement('img');
// img.src = pic;
// document.body.append(img);
import Vue from 'vue';
// import { Swipe, SwipeItem } from 'vant';
import Swipe from 'vant/lib/swipe';
import SwipeItem from 'vant/lib/swipe-item';
// import 'vant/lib/swipe/style';
// import 'vant/lib/swipe-item/style';
console.log('Swipe--', Swipe);
import router from './router';
import Index from './index.vue';
Vue.use(Swipe);
Vue.use(SwipeItem);
new Vue({
  router,
  render: (h) => h(Index)
}).$mount('#app');
