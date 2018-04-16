<template>
   
   <div class="chart-bar">
       <Chart :id="id" :option="option"></Chart>
       
   </div>
</template>

<script>
// 导入chart组件
import Chart from "./Chart.vue"
// 导入chart组件模拟数据
import options from "../chart-options/option";
export default {
  data(){
      let option = options.bar;
      return{
          id:"bar",
          option:option,
      }
  },
   components: {
    Chart
  },
  methods:{

  }
}
</script>

<style lang="less">
  .chart-bar{
      width: 100%;
      height: 100%; 
      #bar{
          width: 100%;
          height: 100%;
           border: 1px solid #ccc;
      }
  }

</style>
