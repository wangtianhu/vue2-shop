import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  obj: {
    name: 'wangtianhu',
    age: 30
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
