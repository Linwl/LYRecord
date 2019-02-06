<template>
  <div>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Bookkeeping">
        <img slot="icon" src="@/assets/cashbook.png">
        记账
      </mt-tab-item>
      <mt-tab-item id="Report">
        <img slot="icon" src="@/assets/report.png">
        报表
      </mt-tab-item>
      <mt-tab-item id="Me">
        <img slot="icon" src="@/assets/me.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


</style>
