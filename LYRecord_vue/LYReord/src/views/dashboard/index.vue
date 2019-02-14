<template>
  <div>
    <mt-swipe :auto="4000"
              :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in items"
                     :key="index">
        <img :src="item.url"
             class="img" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'Dashboard',
  data () {
    return {
      items: [{
        url: config.BASE_API
      }, {
        url: '@/assets/book.jpg'
      }]
    }
  },
  components: {
    'mt-swipe': Swipe,
    'mt-swipe-item': SwipeItem
  },
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
img {
  width: 100%;
  height: 300px;
}
.mint-swipe {
  height: 218px;
}
</style>
