import Vue from 'vue'
import Router from 'vue-router'
import ChartAnalyse from '@/components/ChartAnalyse'
import DicManager from '@/components/DicManager'
Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'DicManager',
      component: DicManager
    },
    {
      path: '/chart',
      name: 'chartAnalyse',
      component: ChartAnalyse
    },

  ]
})
