import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/teamDashboard',
    name: 'teamDashboard',
    component: ()=>import( '../views/TeamDashboardView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFoundPage',
    component: ()=>import( '../views/NotFoundPageView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
