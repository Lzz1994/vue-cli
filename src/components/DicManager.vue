<template>
   <div class="dic-manager">
           <Header></Header>  
       <div class="dic-manager-todayCount">
           <todayCount></todayCount>
       </div>
       <div class="dic-manager-detailCard">
           <detailCard></detailCard>
       </div>
   </div>
</template>
<script>
import Header from '../common/Header'
import TodayCount from '../common/TodayCount'
import DetailCard from '../common/DetailCard'
import Router from 'vue-router'

export default {
   components: {
    Header,
    TodayCount,
    DetailCard
  }
}
</script>

<style lang="less">
   .dic-manager{
       width: 100%;
       background: #4A5966;
       padding-bottom: 300px;
       .dic-manager-todayCount{
           width:80%;
           margin:  0 auto;
           margin-top: 33px;
           
       }
       .dic-manager-detailCard{
            width: 84%;
             margin:  0 auto;
           margin-top: 80px;
       }
   }
</style>

