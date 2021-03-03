<template>
  <div class="content">
    我是首页
    <img :src="require('@/assets/test.png')" alt="" />
  </div>
</template>

<script>
const img = require('@/assets/test.png');
console.log('img---', img);
export default {};
</script>

<style></style>
