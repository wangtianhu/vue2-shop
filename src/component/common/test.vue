<template>
  <div class="test">
    <p>我是attr内容{{ $attrs.test }}</p>
    <SonOne :level="1">
      我是啊实打实大所多
    </SonOne>
    <SonTwo @hook:created="handleLog1" :level="3">
      {{ times }}
    </SonTwo>
    <test2 :text="'123456'"> </test2>
    <div v-for="item in list" :key="item" @click="changeList">{{ item }}</div>
    <p>{{ da.state.name }}</p>
  </div>
</template>

<script>
import SonOne from './testSon1.vue';
import SonTwo from './son';
import test2 from './test2';
import data from './data';
import data2 from './data';
import { mapState, mapMutations } from 'vuex';
console.log('SonOne---', SonOne);
console.log('SonTwo---', SonTwo);
export default {
  components: {
    test2,
    SonOne,
    SonTwo
  },
  props: ['allData'],
  data() {
    return {
      da: data,
      list: [1, 2, 3, 4],
      timer: null,
      times: null,
      user: {
        name: 'chenlong',
        age: 33
      }
    };
  },
  computed: {
    ...mapState(['obj'])
  },
  created() {
    console.log('data===data2---', data == data2);
    console.log('attrs---', this.$attrs);
  },
  mounted() {
    // this.timer = setInterval(() => {
    //   this.times = new Date().toGMTString();
    // }, 1000);
    // this.$on('hook:beforeDestroy', () => {
    //   this.timer = null;
    //   console.log('定时器清楚成功');
    // });
  },
  methods: {
    ...mapMutations(['CHANGE_OBJ']),
    changeList() {
      console.log('da---', this.da);
      this.da.state = {
        name: 'fffff'
      };
      // this.CHANGE_OBJ({
      //   name: 'ccccc'
      // });
    },
    handleLog1() {
      // console.log('子组件created');
      // this.timer = setInterval(() => {
      //   this.times = new Date().toGMTString();
      // }, 1000);
    },
    clickAlert() {
      console.log('666');
    }
  }
};
</script>

<style></style>
