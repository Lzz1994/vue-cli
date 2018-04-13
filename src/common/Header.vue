<template>
 <div class="header">
   <el-row>
  <el-col :span="5">
      <div class="demo-name">词库管理平台</div>
  </el-col>
  <el-col :span="13">
         <div class="header-menu">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
           <el-menu-item index="1">
             <router-link to="/DicManager">词库总览</router-link>
             </el-menu-item>
           <el-menu-item index="2">
             <router-link to="/chart">图表分析</router-link>
             </el-menu-item>
           <el-menu-item index="3">运行监控</el-menu-item>
           <el-menu-item index="4">权限管理</el-menu-item>
           <el-menu-item index="5">审核更新</el-menu-item>
      </el-menu>
    </div>
  </el-col>
  <el-col :span="4">
        <div class="header-search">
          <el-input
            placeholder="请输入内容">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
      </div>
  </el-col>
  </el-row>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      activeIndex: "1",
      input: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style lang="less">
.header {
  width: 100%;
  height: 64px;
  background: #333333;

  .demo-name {
    font-size: 24px;
    color: #ffffff;
    line-height: 64px;
  }

  .header-menu {
    height: 64px;
    .el-menu {
      background: #333;
      border-bottom: none;
      .el-menu-item {
        font-size: 18px;
        color: #ffffff;
        line-height: 64px;
        a{
        text-decoration: none;
        }
        &.is-active {
          color: #33c3f0;
          background: #333;
        }
        &:hover {
          background: #333;
        }
      }
    }
  }

  .header-search {
    height: 64px;
    .el-input--prefix {
     margin-top: 13px;
   }
  }
}
</style>
