import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BugDetails from './views/BugDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bug/:bugId',
      name: 'details',
      props: true,
      component: BugDetails
    }
  ]
})
