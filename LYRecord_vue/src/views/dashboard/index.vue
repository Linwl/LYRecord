<template>
   <section class="app-main">
   <router-view/>
  </section>
</template>

<script>

export default {
 
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
