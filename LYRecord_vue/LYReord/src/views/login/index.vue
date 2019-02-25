<template>
  <div>
    <mt-header fixed
               title="登录">
    </mt-header>
    <mt-field label="手机号"
              placeholder="请输入手机号"
              type="tel"></mt-field>
    <mt-field label="密码"
              placeholder="请输入密码"
              type="password"></mt-field>

    <div>
      <mt-button size="large"
                 type="primary">登录</mt-button>
      <router-link tag="span"
                   to="/register">
        <a class="to_register">注册</a>
      </router-link>
      <router-link tag="span"
                   to="#">
        <a class="to_forget">重置密码</a>
      </router-link>

    </div>
  </div>
</template>

<script>
import { Field } from 'mint-ui';
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'mt-field': Field
  },
}
</script>

<style  scoped>
.to_register {
  float: left;
  @include sc(0.6rem, #3b95e9): ;
  margin-right: 0.3rem;
}
.to_forget {
  float: right;
  @include sc(0.6rem, #3b95e9): ;
  margin-right: 0.3rem;
}
</style>
