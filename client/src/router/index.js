import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminHome from '../views/AdminHome.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  routes
})

export default router
