<template>
   <p class="container" :id="id">
   </p>
</template>

<script>
import HighCharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
Exporting(HighCharts)
export default {
    data(){
        return{
        }
    },
      components: {
        HighCharts
    },
  // 验证类型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  mounted() {
    HighCharts.chart(this.id,this.option)
  }
}
</script>

<style lang="less">
  .container {
width: 80%;
height: 100%;
margin: 40px auto;
}
</style>