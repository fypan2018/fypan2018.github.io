<template>
  <div>
    <iframe :src="url" width="100%" height="1000rpx" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.so.com/',
    };
  },
};
</script>

<style>
</style>