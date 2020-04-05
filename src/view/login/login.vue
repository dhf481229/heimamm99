<template>
  <!-- 最外层标签的class名字使用组件名     -->
  <div class="login">
    <div class="left">
      <div class="title">
        <img src="@/assets/img/loginLogo.png" alt />
        <span class="titleName">黑马面面</span>
        <span class="titleLine">|</span>
        <span class="titleName2">用户登陆</span>
      </div>
    </div>
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
    padding: 43px;
    .titleName {
      font-size: 24px;
      font-weight: 400;
      color: rgba(12, 12, 12, 1);
      margin-left: 15px;
      margin-right: 15px;
    }
    .titleLine {
      color: #ccc;
      font-size: 24px;
    }
    .titleName2 {
      font-size: 22px;
      margin-left: 15px;
    }
  }
}
</style>