<template>
  <div>
    <g-layout style="color: white;">
      <g-header style="height: 50px; background:lightskyblue;">header</g-header>
      <g-content style="height: 100px; background:deepskyblue;">content</g-content>
      <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
    </g-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-footer": Footer,
    "g-content": Content
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>