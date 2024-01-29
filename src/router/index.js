import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWord from '../views/HelloWord.vue'
import DashBoard from '../components/dashboard/DashBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:  HelloWord
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard
  }
]

const router = new VueRouter({
  routes
})

export default router
