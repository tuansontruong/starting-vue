import Vue from 'vue'
import Router from 'vue-router'
import AllUserPage from '@/pages/AllUserPage'
Vue.use(Router)

export default new Router({
  // mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/all-users',
    },
    {
      path: '/all-users',
      component: AllUserPage,
    },
  ],
})
 