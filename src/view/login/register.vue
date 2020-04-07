<template>
  <el-dialog :visible.sync="dialogFormVisible" class="register" width="600px" :show-close="false">
    <!-- 
      el-dialog
      visible.sync属性控该弹窗口是否显示
      slot可以重写title
      width属性用于设置宽度
      show-close	是否显示关闭按钮
    -->
    <!-- 
      label-width标题栏的宽度 
      label:标题
    -->
    <el-form :model="form" label-width="100px" ref="form" :rules="rules">
      <div slot="title" class="title">用户注册</div>
      <!-- 给头像加入表单验证 -->
      <el-form-item label="头像" prop="avatar">
        <!-- 上传东西
            el-upload
           1:上传地址  action
           2：参数     name="值" 该值就是上传文件的参数
           3:是否显示已上传文件列表    show-file-list 
           4:上传成功的回调函数   on-success
              成功回调函数里面有个res就是接口返回信息
              上传成功后须在form表单数据里面保存一下该图像avatar值
           5：上传前的处理（还没调用上传接口前的处理）       before-upload
              上传前处理它有一个file文件信息，通过file文件信息能够限制上传格式（file.type），大小等控制  (file.size以字节)
              该回调函数return的值就是控制让不让你通过  true通过  false不通过

        -->
        <el-upload
          class="avatar-uploader"
          :action="baseUrl+'/uploads'"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <!-- 加一个确定按钮 -->
    <div slot="footer" class="center">
      <el-button>取消</el-button>
      <el-button type="primary" @click="submitClick">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      // 表单数据
      form: {
        // 头像地址
        avatar: ""
      },
      // 表单验证规则绑定
      rules: {
        // trigger主动触发在没有在元素里面使用v-model的情况它是无效的
        avatar: [{ required: true, message: "请上传头像" }]
      },
      baseUrl: process.env.VUE_APP_URL,
      imageUrl: ""
    };
  },
  methods: {
    // 上传前处理
    beforeAvatarUpload(file) {
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      // 它return的值就是控制让不让你通过  true通过  false不通过
      // return false
      return isJPG && isLt2M;
    },
    // 上传成功处理
    handleAvatarSuccess(res) {
      // res就是上传图片接口调用成功后的返回值
      window.console.log(res);
      this.imageUrl = this.baseUrl + "/" + res.data.file_path;
      this.form.avatar = res.data.file_path;
      // 主动触发一下头像的表单验证validateField
      //它的第一个参数它可以传array|string 实际就是传它要验证的项
      //它还有第二个参数，是一个结果的回调函数,
      //如果前面传的是数组 ，有多个值时，它会有二条结果跑回来
      //该结果如果为空表示 没问题，如果不为空表示 验证不通过
      this.$refs.form.validateField("avatar");
    },
    // 注册确定按钮的点击
    submitClick() {
      // 全局验证
      // 1：在el-form上定义一个ref   2:调用el-form上的validate方法
      this.$refs.form.validate(result => {
        window.console.log(result);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  .title {
    height: 53px;
    background: rgba(3, 192, 249, 1);
    color: #fff;
    text-align: center;
    line-height: 53px;
  }
  .center {
    text-align: center;
  }
}
</style>
<style lang="less">
.register {
  .el-dialog__header {
    padding: 0;
  }
  .avatar-uploader {
    width: 178px;
    margin: 0 auto;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
