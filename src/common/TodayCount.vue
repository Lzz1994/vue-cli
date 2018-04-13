<template>
  <div class="todayCount">
      <el-row class="today-top">
          <el-col :span="12" class="today-top-content">
              <p class='sumDic-number'>{{sum}}</p>
              <p class="sumDic">今日总词条数</p>
          </el-col>
          <el-col :span="8" class="today-top-content">
              <p class='cover-title'>Query覆盖率</p>
              <p>
                  <span class="covered-rate">{{coverRate}}</span>
                  <span class="covered">搜索与词典均已覆盖</span>
              </p>
              <p>
                  <span class="uncovered-rate">{{uncoverRate}}</span>
                  <span class="uncovered">搜索与词典未覆盖</span>
              </p>
          </el-col>
     </el-row>
     
    <el-row class="today-foote">
          <el-col :span="12" >
              昨日新增：
              <span class='yesterday-add'>{{yesAdd}}</span>
          </el-col>
          <el-col :span="8" >
              总体覆盖率：
              <span class="yes-cover">{{yesCover}}</span>
          </el-col>
    </el-row>
    
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverRate: "93% ",
      sum: 5211314,
      uncoverRate: "3%",
      yesAdd: 14000,
      yesCover: "88%"
    };
  }
};
</script>

<style lang='less'>
.todayCount {
  height: 284px;
  background-image: linear-gradient(-269deg, #4ca6d6 0%, #3f8cff 95%);
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.5);
  .today-top {
    height: 208px;
    .sumDic-number {
      font-size: 64px;
      color: #ffc900;
      letter-spacing: 8px;
      line-height: 0;
    }
    .sumDic {
      height: 56px;
      font-size: 40px;
      color: #ffffff;
      height: 40px;
    }
    .cover-title {
      font-size: 20px;
      color: #ffffff;
    }
    .covered-rate,
    .uncovered-rate {
      height: 25px;
      background: #0069fd;
      border-radius: 5px;
      font-size: 14px;
      color: #ffffff;
      text-align: center;
      line-height: 25px;
      padding: 5px;
    }
    .covered,
    .uncovered {
      font-size: 16px;
      color: #ffffff;
      padding-left: 10px;
    }
    .uncovered-rate {
      background: #f02e18;
    }
  }
  .today-foote {
    background: #ffffff;
    border-radius: 11px;
    height: 76px;
    font-size: 18px;
    color: #7e7e7e;
    line-height: 76px;
    .yesterday-add,
    .yes-cover {
      font-size: 24px;
      color: #444444;
      padding: 0 5px;
    }
  }
}
</style>