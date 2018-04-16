import Vue from 'vue'
import Router from 'vue-router'
import ChartAnalyse from '@/components/ChartAnalyse'
import DicManager from '@/components/DicManager'
import Bar from '@/components/Bar'
import ChartAll from '@/components/ChartAll'
import Form from '@/components/Form'
Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'DicManager',
      component: DicManager
    },
    {
      path: '/chartAll',
      name: 'chartAll',
      component: ChartAll
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/chartAll/line',
      name: 'chartAnalyse',
      component: ChartAnalyse
    },
    {
      path: '/chartAll/pie',
      name: 'bar',
      component: Bar
    },

  ]
})
