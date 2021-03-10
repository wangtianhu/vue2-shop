<template>
  <div class="top-head">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.top-head {
  width: 100vw;
  height: 1rem;
  background: #ffffff;
  box-sizing: border-box;
  padding: 0 0.2rem;
//   border-bottom: 1px solid #eaeaea;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 1px;
    background: #eaeaea;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
</style>
