import Vue from 'vue'
import Router from 'vue-router'
import CityHome from '@/pages/netCityHome/cityHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'cityHome'
    },
    {
      path: '/cityHome',
      name: 'CityHome',
      component: CityHome
    }
  ]
})
