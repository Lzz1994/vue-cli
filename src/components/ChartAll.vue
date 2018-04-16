<template>
  <div class="chart-all">
         <router-link to="/">点击返回首页</router-link>
         <router-link to="/chartAll/line">折线图</router-link>
         <router-link to="/chartAll/pie">饼图</router-link>
        <el-row :gutter="40">
          <el-col :span="12">
            <ChartAnalyse></ChartAnalyse>
          </el-col>
           <el-col :span="12">
            <Bar></Bar>
          </el-col>
        </el-row>
  </div>
</template>


<script>
import ChartAnalyse from './ChartAnalyse'
import Bar from './Bar'
import Router from 'vue-router'
export default {
    components: {
    ChartAnalyse,
    Bar,
  }
}
</script>

<style lang='less'>
.chart-all{
    width: 100%;
    a{
        text-decoration: none;
    }
}
</style>
