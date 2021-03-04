<template>
  <transition>
    <div v-if="mask" class="masks"></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      mask: true
    };
  },
  mounted() {
    this.mask = false;
  }
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.masks {
  background-color: #fff;
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

/* v-enter-active 【入场动画的时间段】 */
/* v-leave-active 【离场动画的时间段】 */
.v-enter-active,
.v-leave-active {
  transition: all 1.2s ease;
}
</style>
