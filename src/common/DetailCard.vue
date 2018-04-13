<template>
    <div class="detail-card-list">
        <template  v-for="(item,index) of listData" >
            <div class="detail-card-content">
                  <div class="detail-top">
             <p class="detail-type">{{item.type}}</p>
             <p class="detail-total-number">{{item.total}}</p>
             <p class="detail-total">总词条数</p>
            </div>
            
             <div class="detail-foote">
                <div class="foote-left">
                       <p>{{item.yesAdd}}</p>
                        <p>昨日新增</p>
                </div>
                <div class="foote-left">
                       <p>{{item.coverRate}}</p>
                        <p>总体覆盖率</p>
                </div>
        
            </div>
            </div>
          
        </template>
    </div>
</template>


<script>
export default {
  data() {
    return {
      listData: [
        {
          id: 1,
          type: "A股",
          total: 123567,
          yesAdd: 1000,
          coverRate: "55%"
        },
        {
          id: 2,
          type: "A股",
          total: 123567,
          yesAdd: 1000,
          coverRate: "55%"
        },
        {
          id: 3,
          type: "A股",
          total: 123567,
          yesAdd: 1000,
          coverRate: "55%"
        },
        {
          id: 4,
          type: "A股",
          total: 123567,
          yesAdd: 1000,
          coverRate: "55%"
        }
      ]
    };
  }
};
</script>


<style lang="less">
.detail-card-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #4A5966;
  .detail-card-content {
  width: 20%;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: 220px;
  background: hsl(208, 23%, 39%);
  .detail-top {
    height: 150px;
    .detail-type {
      letter-spacing: 1px;
      font-size: 16px;
      color: #ffffff;
      text-align: left;
      padding-left: 16px;
    }
    .detail-total-number {
      font-size: 30px;
      color: #ffffff;
    }
    .detail-total {
        height: 20px;
      font-size: 14px;
      color: #ffffff;
    }
   
  }
  .detail-foote{
      height: 74px;
      background: #FFFFFF;
      border-radius: 8px;
      display: flex;
      .foote-left{
          flex:1;
          p{
              font-size: 20px;
              line-height: 12px;
              color: #444444;
              &:nth-child(2){
              font-size: 14px;
              color: #7E7E7E;
          }
          }
      }
  }
   &:hover{
      background:#267CF7;
  }
}
}

</style>
