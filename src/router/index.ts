import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component:  () => import("./../views/AboutView.vue")
    },
    {
      path: '/financials',
      name: 'financials',
      component:  () => import("./../views/FinancialsView.vue")
    },
    {
      path: '/career',
      name: 'career',
      component:  () => import("./../views/CareerView.vue")
    },
    {
      path: '/ausstattungsmesse',
      name: 'ausstattungsmesse',
      component:  () => import("./../views/AusstattungsmesseView.vue")
    },
    {
      path: '/expansion',
      name: 'expansion',
      component:  () => import("./../views/ExpansionView.vue")
    },
    {
      path: '/this-is-the-end',
      name: 'this-is-the-end',
      component:  () => import("./../views/ThisIsTheEndView.vue")
    },
  ]
})

export default router
