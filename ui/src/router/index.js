import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [   
    {
      path: '/register',
      name:'register',
      component: () => import('../components/users/Register.vue')
    },
    {
      path: '/login',
      name:'login',
      component: () => import('../components/users/Login.vue')
    },
    {
      path: '/',
      name:'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/car/:id',
      name: 'car',
      component: () => import('../components/Car/CarDetails.vue')
    },
    {
      path: '/rent/:id',
      name: 'rent',
      component: () => import('../components/Reservation/addrent.vue')
    },
    {
      path: '/myrent/',
      name: 'myrent',
      component: () => import('../components/Reservation/myrent.vue')
    },
    {
      path: '/me/',
      name: 'me',
      component: () => import('../components/users/Inos.vue')
    },
  ]
})

export default router
