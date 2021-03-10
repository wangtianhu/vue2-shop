<template>
  <div class="app">
    <router-view></router-view>
    <div class="footer">
      <BottomNavbar v-if="$route.meta.footShow" />
    </div>
  </div>
</template>
<script>
import BottomNavbar from '@/component/common/bottom-navbar.vue';
import testData from '@/component/common/data.js';
export default {
  components: {
    BottomNavbar
  },
  data() {
    return {
      da: testData
    };
  }
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
