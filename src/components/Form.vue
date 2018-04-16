<template>
   <div class="form">
       <h1>表单练习</h1>
       <form class="form-detail">
           <!-- 输入框 -->
           <div class="form-item">
              <span>姓名：</span>
                   <input type="text" v-model="username">
           </div>

           <!-- 单选框 -->
           <div class="form-item">
              <span>性别：</span>
                 <input type="radio" id="boy" value="男" v-model="gender">
                  <label for="男">男</label>
                  <input type="radio" id="girl" value="女" v-model="gender">
                 <label for="女">女</label>
           </div>
         
         <!-- 下拉选择 -->
           <div class="form-item">
               <span>城市：</span>
                    <select v-model="city">
                    <option disabled value="">请选择</option>
                      <option>北京</option>
                      <option>上海</option>
                      <option>广州</option>
                </select>
          </div> 
      
         <!-- 使用v-for进行遍历渲染 -->
          <div class="form-item">
             <span>城市1：</span>
                 <select v-model="newCity">
                 <option v-for="option in options" :value="option.value">
                 {{ option.text }}
                 </option>
              </select>
          </div>
        
        <!-- 复选框 -->
          <div class="form-item">
             <span>兴趣：</span> 
                 <input type="checkbox" id="sing" value="唱歌" v-model="funny">
                       <label for="唱歌">唱歌</label>
                    <input type="checkbox" id="read" value="读书" v-model="funny">
                      <label for="读书">读书</label>
                    <input type="checkbox" id="piano" value="弹琴" v-model="funny">
                     <label for="弹琴">弹琴</label>
          </div>

          <div class="form-item">
              <span>年龄:</span>
            <input v-model.number="age" type="number"><br>
          </div>

          <!-- 文本域 -->
          <div class="form-item">
            <span> 输入其他补充内容：</span><br>
            <p style="white-space: pre-line;">{{addMore }}</p>
             <textarea v-model="addMore" placeholder="add more"></textarea>
         </div>

         <div class="form-item">
             <input type="button" value="提交" @click.prevent="submit">
         </div>
       </form>
       <router-link to="/">点击返回首页</router-link>
   </div>
 
</template>

<script>
export default {
  data(){
      return{
          username:"",
          gender:"",
          city:'',
          funny:[],
          newCity: '南京',
          options: [
          { text: 'BJ', value: '北京' },
          { text: 'NJ', value: '南京' },
          { text: 'GZ', value: '广州' }
         ],
         age:'',
         addMore:'',
      }
  },

  methods:{
      submit:function(){
          console.log(this.addMore)
          alert(this.username+","+"性别"+this.gender,+"今年"+this.age+"岁"+","+"来自"+this.newCity,"喜欢"+this.funny,+this.addMore)
      }
  }
}
</script>


<style lang="less">
.form{
    width:100%;
    height: 100%; 
    background:rgb(233, 231, 231);
    padding: 10px;
    a{
        text-decoration: none;
    }
   .form-detail{
        width: 100%;
        line-height: 30px;
        font-size: 16px;
         margin: 20px auto;
    .form-item{
        width: 60%;
        margin: 5px auto;
        text-align:left;
    }
   }
       
        
    
}
</style>