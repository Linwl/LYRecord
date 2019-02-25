<template>
  <div>
    <section>
      <mt-header fixed
                 title="注册">
        <div slot="left">
          <router-link to="/login">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </div>
      </mt-header>
    </section>
    <section>
      <mt-field label="手机号"
                placeholder="请输入手机号"
                type="tel"></mt-field>
      <mt-field label="密码"
                placeholder="请输入密码"
                type="password"></mt-field>
      <div class="protocol">
        <mt-checklist align="left"
                      :value.sync="value"
                      :options="['同意注册协议']">
        </mt-checklist>
      </div>

    </section>
    <div>
      <mt-button size="large"
                 type="primary"
                 @click.native="registerEvent">注册</mt-button>
    </div>

  </div>
</template>

<script>
import { Field, Checklist } from 'mint-ui';
export default {
  name: 'Login',
  data () {
    return {
      value: ['同意注册协议']
    }
  },
  components: {
    'mt-field': Field,
    'mt-checklist': Checklist
  },
  methods: {
    /**
     * 注册事件
     */
    registerEvent () {

    }
  }
}
</script>

<style scoped>
.protocol {
  float: left;
  @include sc(0.6rem, #3b95e9): ;
  margin-right: 0.3rem;
}
</style>
