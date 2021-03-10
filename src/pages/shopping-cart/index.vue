<template>
  <div class="content">
    购物中心
    <Test :allData="allData" :test="test" @clickLog="clickLog"> </Test>
  </div>
</template>

<script>
import Test from '@/component/common/test.vue';
export default {
  components: { Test },
  data() {
    return {
      allData: {
        name: 'chenlong',
        age: 44
      },
      test:'test'
    };
  },
  methods: {
    clickLog() {
      console.log('爷爷组件');
    }
  }
};
</script>

<style></style>
