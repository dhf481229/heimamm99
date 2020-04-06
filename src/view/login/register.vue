<template>
  <el-dialog :visible.sync="dialogFormVisible" class="register" width="600px" :show-close="false">
    <!-- 
      el-dialog
      visible.sync属性控该弹窗口是否显示
      slot可以重写title
      width属性用于设置宽度
      show-close	是否显示关闭按钮
    -->
    <div slot="title" class="title">用户注册</div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false
    };
  }
};
</script>
<style lang="less">
.register {
  .title {
    height: 53px;
    background: rgba(3, 192, 249, 1);
    color: #fff;
    text-align: center;
    line-height: 53px;
  }
  .el-dialog__header {
    padding: 0;
  }
}
</style>