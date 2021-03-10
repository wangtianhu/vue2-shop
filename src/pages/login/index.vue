<template>
  <div class="content">
    <CommonHead></CommonHead>
    <div class="login-content">
      <div class="logo">
        <img src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="" />
      </div>
      <div class="form">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHead from '@/component/common/common-head.vue';
export default {
  components: { CommonHead },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      //
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true
      });
      setTimeout(() => {
        window.localStorage.setItem('token', true);
        this.$router.push({ name: 'home' });
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.logo {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 3.2rem;
    height: 3.2rem;
    margin: 1rem;
  }
}
</style>
