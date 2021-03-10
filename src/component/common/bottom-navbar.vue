<template>
  <div class="nav-bar" ref="navBar">
    <ul>
      <template v-for="(item, index) in list">
        <li
          :key="index"
          @click="clickChangeNav(item, index)"
          :class="{ 'active': activeIndex === index }"
        >
          <p class="icon"><span :class="['iconfont', item.icon]"></span></p>
          <p class="name" :class="{ 'active': activeIndex === index }">{{ item.name }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      activeIndex: 0,
      list: [
        {
          icon: 'icon-zhuye',
          name: '首页',
          jump: 'home'
        },
        {
          icon: 'icon-fenlei',
          name: '分类',
          jump: 'categroy'
        },
        {
          icon: 'icon-gouwuche',
          name: '购物车',
          jump: 'shopping-cart'
        },
        {
          icon: 'icon-ren',
          name: '我的',
          jump: 'user-center'
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.SET_FOOT_HEIGHT(this.$refs['navBar'].offsetHeight);
    this.$nextTick(() => {
      setTimeout(() => {
        let { name } = this.$route;
        this.activeIndex = this.list.findIndex((el) => el.jump === name);
      }, 100);
    });
  },

  methods: {
    ...mapMutations(['SET_FOOT_HEIGHT']),
    clickChangeNav(item, index) {
      this.activeIndex = index;
      this.$router.push({
        name: item.jump
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/iconfont.css';
.nav-bar {
  width: 100%;
  background: #ffffff;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 25%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0.1rem;
      padding-top: 0.2rem;

      .icon {
      }
      .name {
        margin-top: 0.2rem;
        font-size: 0.24rem;
        color: #666666;
      }
      .active {
        color: #1baeae;
      }
    }
    .active {
      color: #1baeae;
    }
  }
}
</style>
