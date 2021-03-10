export default {
  props: {
    level: {
      require: true,
      type: Number
    }
  },
  render(createElement) {
    console.log('this.$slots--', this.$slots);
    return createElement(`h${this.level}`, this.$slots.default);
  }
};
