<template>
  <TopHead>
    <div class="head-content">
      <slot name="back">
        <img src="@/assets/back-icon.png" alt="" />
      </slot>
      <slot name="title">
        <p class="p1">登录</p>
      </slot>
      <slot name="right">
        <p class="p2">...</p>
      </slot>
    </div>
  </TopHead>
</template>

<script>
import TopHead from './top-head.vue';
export default {
  components: {
    TopHead
  }
};
</script>

<style lang="less" scoped>
.head-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  img {
    width: 0.4rem;
    height: 0.4rem;
  }
  .p1 {
    font-size: 0.32rem;
    font-weight: bold;
  }
}
</style>
