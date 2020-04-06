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
      <!-- 
        1:加一个el-form表单，再加入子项el-form-item
           :model属性，绑定表单元素的值
        2:在el-form-item下加入一个el-input
           v-model双向绑定表单元素的值
           placeholder
           prefix-icon  input前面图标
           show-password是否显示密码图标，以点点形式显示           
      -->
      <el-form :model="form">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :show-password="true"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 栅栏处理共24栏
             el-row：行
                它有一个子项是el-col 代表栏 多少栏  :span="栏数"
        -->
        <el-form-item>
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.code" prefix-icon="el-icon-key" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <img src="@/assets/img/key.jpg" class="key" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 
          el-checkbox
          v-model默认值可以来一个空字符串，这样的的选择结果就是true/false
          el-link  type决定颜色 
        -->
        <el-form-item>
          <el-checkbox v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- el-button
             type="值"  值决定按钮的颜色
        -->
        <el-form-item>
          <el-button class="btn" type="primary">登陆</el-button>
          <br />
          <el-button class="btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      //表单绑定的值
      form: {
        phone: "", //手机号
        password: "", //密码
        code: "", //验证码
        isCheck: "" //是否同意协议
      }
    };
  }
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
    .title {
      margin-bottom: 20px;
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
    .key {
      width: 100%;
      height: 40px;
    }
    .btn {
      width: 100%;
    }
    .btn:nth-child(1) {
      margin-bottom: 26px;
    }
  }
}
</style>