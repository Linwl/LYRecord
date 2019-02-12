<template>
  <div>
    <router-view />
    <mt-tabbar :fixed="true" v-model="selected">
      <mt-tab-item id="dashboard">
        <img slot="icon" src="@/assets/cashbook.png">
        记账
      </mt-tab-item>
      <mt-tab-item id="report">
        <img slot="icon" src="@/assets/report.png">
        报表
      </mt-tab-item>
      <mt-tab-item id="aboutme">
        <img slot="icon" src="@/assets/me.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        selected: 'dashboard'
      }
    },
    methods: {

    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        // click后打印出当前mt-tab-item的id
        this.$router.push({
          path: '/' + val
        });
      }
    }
  }

</script>


</style>
