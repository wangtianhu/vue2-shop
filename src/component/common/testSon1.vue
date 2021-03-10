<template>
  <div>
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-if="level === 5">
      <slot></slot>
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      require: true,
      type: Number
    }
  }
};
</script>

<style>
h1 {
  font-size: 1rem;
}
</style>
