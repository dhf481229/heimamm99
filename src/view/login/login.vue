<template>
  <!-- 最外层标签的class名字使用组件名 -->
  <div class="login">
    <div class="left"></div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="less">
.login {
  // 弹性盒子布局
  display: flex;
  //   主轴布局
  justify-content: space-around;
  //   侧轴居中
  align-items: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .left {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
  }
}
</style>