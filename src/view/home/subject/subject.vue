<template>
  <div class="subject">
    <el-card>
      <!-- inline就是将表单form下面的form-item由块级元素转换成行级块元素，不让他们独占一行 
      :model="form"  绑定全表单的数据
      -->
      <el-form :model="form" label-width="90px" :inline="true">
        <el-form-item label="学科编号">
          <el-input class="setWidth" v-model="form.rid"></el-input>
        </el-form-item>
        <el-form-item label="学科名称">
          <el-input class="setWidth" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="创建者">
          <el-input class="setWidth" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="请选择状态" class="setWidth" v-model="form.status">
            <!-- option里，label代表我们看见的选项文字，value就代表当前项的值 -->
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>清除</el-button>
          <el-button type="primary">+新增学科</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <!-- 
        el-table   data绑定全部数据  
        el-table-column  栏   label当前栏的标题   width可以设置宽度  prop="当前栏对应数据字段名"
      自定义栏
          1：在需要自定义的栏里面加入template
          2:在该template上获取当前 行的所有数据   slot-scope="变量"
          注意点：该变量是一个局部变量，只能用于template里面
            变量.$index="当前数据的序号，从0开始"
            变量.row  当前 行的所有字段 数据      
      
      -->
      <el-table :data="tableData">
        <el-table-column label="序号" width="50px">
          <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column label="学科编号 " prop="rid"></el-table-column>
        <el-table-column label="学科名称 " prop="name"></el-table-column>
        <el-table-column label="简称" prop="short_name"></el-table-column>
        <el-table-column label="创建者 " prop="username"></el-table-column>
        <el-table-column label="创建日期 " prop="create_time"></el-table-column>
        <el-table-column label="状态" width="100px">
          <template slot-scope="scope">{{scope.row.status==1?'启用':'禁用'}}</template>
        </el-table-column>
        <el-table-column label="操作" width="270px">
          <template slot-scope="scope">
            <el-button>编辑</el-button>
            <el-button @click="setStatus(scope)">禁用</el-button>
            <el-button>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
// 导入搜索接口
import { getSubjectData } from "@/api/subject.js";
export default {
  data() {
    return {
      pagination: {
        pageSize: 10, //每页条数
        currentPage: 1, //当前页
        total: 40 //总条数
      },
      form: {
        rid: "", //学科编号
        name: "", //学科名称
        username: "", //创建者
        status: "" //状态
      },
      tableData: [] //列表数据
    };
  },
  created() {
    getSubjectData().then(res => {
      this.tableData = res.data.items;
      window.console.log(res);
    });
  },
  methods: {
    // 设置状态
    setStatus(scope) {
      window.console.log(scope);
    },
    // 页容量改变时
    handleSizeChange(size) {
      this.pagination.pageSize = size;
    },
    // 页码改变时
    handleCurrentChange(page) {
      this.pagination.currentPage = page;
    }
  }
};
</script>
<style lang="less">
.subject {
  .setWidth {
    width: 120px;
  }
  .pagination {
    text-align: center;
    margin-top: 30px;
  }
}
</style>