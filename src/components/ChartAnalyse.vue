<template>
     
   <p class="chartAnalyse">
     <Chart :id="id" :option="option"></Chart>
    
  </p>
</template>

<script>
// 导入chart组件
import Chart from "./Chart.vue";
// 导入chart组件模拟数据
import options from "../chart-options/option";
export default {
  data() {
    let option = options.line;
    return {
      id: "line",
      option: option
    };
  },
  components: {
    Chart
  }
};
</script>

<style lang="less">
  .chartAnalyse{
      width: 100%;
      height: 100%; 
      #line{
          width: 100%;
          height: 100%;
          border: 1px solid #ccc;
      }
  }

</style>
