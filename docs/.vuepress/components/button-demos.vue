<template>
  <div>
    <g-button>默认</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button disabled>禁用</g-button>
    <g-button icon="settings" :loading="loading" @click="loading = !loading">状态切换</g-button>
  </div>
</template>
<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      loading: false
    };
  }
};
</script> 