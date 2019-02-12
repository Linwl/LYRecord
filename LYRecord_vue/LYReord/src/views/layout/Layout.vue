<template>
  <div>
    <Header :title="headerTitle" />
    <AppMain />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import AppMain from "./components/App-Main.vue";
import Header from "./components/Header.vue";
export default {
  name: 'Layout',
  data () {
    return {
      headerTitle: '首页'
    }
  },
  methods: {
    /**
     * 选择底部菜单触发事件
     * @param {string} itemName菜单名字
     */
    selectedItem (itemName) {
      console.log(itemName);
      // click后打印出当前mt-tab-item的id
      this.$router.push({
        path: "/" + itemName
      });
      this.headerTitle = this.foramtMenuName(itemName)
    },
    /**
     * 格式化菜单名
     */
    foramtMenuName (name) {
      return name == 'dashboard' ?
        "首页" : name == 'report' ?
          "报表" : name == 'aboutme' ?
            "我的" : "未知"
    }
  },
  components: {
    Header,
    Footer,
    AppMain
  }
}

</script>


</style>
