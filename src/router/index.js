import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/auth.vue')
  }
]



const router = new VueRouter({
	mode: 'history',
  routes
})

export default router
