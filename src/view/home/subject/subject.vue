<template>
  <div>学科列表</div>
</template>
<script>
export default {
  created() {
    // document.getElementById("title").innerText = this.$route.meta.title;
    // window.console.log("title:", document.getElementById("title"));
    document.title = this.$route.meta.title;
    window.console.log("当前路由信息：", this.$route);
  }
};
</script>
<style>
</style>