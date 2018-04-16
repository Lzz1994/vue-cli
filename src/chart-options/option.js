
module.exports = {
    line: {
      chart: {
              type:'line'//指定图表的类型，默认是折线图（line）
              },
              credits: {
                enabled:false
              },//去掉地址
              title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
             },
             subtitle: {
                text: 'Source: thesolarfoundation.com'
             },
             yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
             colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
                      '#24CBE5'  ],
              xAxis: {
                      categories: ['Jnu', 'Fbu', 'May','Apr','Mar','Jun','July','Aug'] //指定x轴分组
                  },
              plotOptions: {
                      column: {
                      colorByPoint:true
                          },
                      },

            series: [{
                        name: 'Installation',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: 'Manufacturing',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }, {
                        name: 'Sales & Distribution',
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                    }, {
                        name: 'Project Development',
                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                    }, {
                        name: 'Other',
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                    }],
    },
    bar: {
    
          title:{
              text:'某网站上各浏览器的访问量'
          },
          type:"bar",
          tooltip:{
             headerFormat:`{series.name}<br>`,
             pointFormat:`{point.name}:<b>{point.percentage:.1f}%</b>`
         },
         plotOptions: {
             pie:{
                 allowPointSelect:true,
                 cursor:'pointer',
                 dataLabels:{
                     enabled:true,
                    //  style:{
                    //      color:(highCharts.theme&&HighCharts.theme.contrastTextColor) || 'black'
                    //  }
                 }
             }
         },
         series:[{
             type:'pie',
             name:'浏览器访问量占比',
             data:[
                 ["火狐浏览器" , 25.0],
                 ["IE浏览器" , 10.0],
                 ["谷歌浏览器" ,40.0],
                 ["欧朋浏览器" , 5.0],
                 {
                     name:"其他",
                     y:0.7,
                     sliced:true,
                     selected:true
                 }
             ]

         }]
           
      }
    }
  