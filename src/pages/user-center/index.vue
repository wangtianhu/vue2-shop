<template>
  <div class="content">
    <CommonHead>
      <template slot="name">
        <p class="p1">我的</p>
      </template>
    </CommonHead>
    <div class="user-info">
      <template v-if="userInfo">
        <div class="info">
          <img :src="userInfo.head" alt="" />
          <div class="info-detail">
            <p>昵称：{{ userInfo.nickName }}</p>
            <p>登录名：{{ userInfo.name }}</p>
            <p>个性签名：{{ userInfo.sign }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import CommonHead from '@/component/common/common-head.vue';
import { mapState } from 'vuex';
export default {
  components: {
    CommonHead
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['userInfo'])
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100vh;
}
.user-info {
  width: 94%;
  margin: 3%;
  padding: 0.5rem;
  height: 2.3rem;
  background: linear-gradient(90deg, #1baeae, #51c7c7);
  box-shadow: 0 0.05333rem 0.13333rem #269090;
  border-radius: 0.16rem;
  .info {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 100%;
      width: auto;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .info-detail {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: column;
      height: 100%;
      p {
        color: #fff;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
