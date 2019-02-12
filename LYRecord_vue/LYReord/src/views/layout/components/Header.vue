<template>
  <div>
    <mt-header fixed
               :title="title"></mt-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
      default: '首页'
    }
  }
};
</script>
