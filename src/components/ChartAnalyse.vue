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
    let option = options.bar;
    return {
      id: "test",
      option: option
    }
  },
  components: {
    Chart
  },

};
</script lang="less">
#test {
  width: 80%;
  height: 100%;
  margin: 40px auto;
}
<style lang="less">

</style>