<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div v-transfer-dom>
    </div>
  <view-box ref="viewBox">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
    <router-view></router-view>
    <tabbar slot="bottom">
      <tabbar-item>
        <img slot="icon" src="@/assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</div>
</template>

<script>
import { Tabbar, TabbarItem ,TransferDom,XHeader,ViewBox } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    TransferDom,
    XHeader,
    ViewBox
  },
  
}
</script>

<style>

</style>