import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import JobView from '../views/JobView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jobs/:id',
    name: 'jobs',
    component: JobView,
    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
