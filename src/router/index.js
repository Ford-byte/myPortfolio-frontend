import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/experience',
      name: 'MyExperiences',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/contact',
      name: 'ContactMe',
      component: () => import('../views/ContactView.vue'),
    }
  ]
})

export default router
