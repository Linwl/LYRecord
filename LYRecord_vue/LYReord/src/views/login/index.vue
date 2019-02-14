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
    <mt-button size="normal"
               type="danger">注册</mt-button>
    <mt-button size="normal"
               type="primary">登录</mt-button>

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