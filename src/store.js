import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);
import userHead from '@/assets/user-head.png';
const state = {
  obj: {
    name: 'wangtianhu',
    age: 30
  },
  userInfo: {
    nickName: '13671661137',
    name: '13671661137',
    sign: '随心碎玉的飞翔',
    head: userHead
  },
  footHeight: 0
};

const mutations = {
  CHANGE_OBJ(state, data) {
    state.obj = data;
  },
  SET_FOOT_HEIGHT(state, height) {
    state.footHeight = height;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
