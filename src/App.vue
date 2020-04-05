<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <tt></tt>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from "@/components/HelloWorld.vue";
import tt from "@/components/tt.vue";
// 导入子组件
// import 组件名 from  "路径"
// @就是代表了src路径
export default {
  name: "App",
  components: {
    tt
  }
};
</script>

<style>
/* 如何导入刚才的css 
注意：@在style中的使用需要加一个~@
*/
@import url(~@/assets/base.css);
</style>
