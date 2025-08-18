import { createRouter, createWebHistory } from 'vue-router'

import Facial_Recognition from '../views/Facial_Recognition.vue'
import Accidentology from '../views/Accidentology.vue'
import Research from '../views/Research.vue'
import HomePage from '../views/HomePage.vue'
import TPTRM from '../views/TPTRM.vue'
import RIIF from '../views/RIIF.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/RIIF',
      name: 'RIIF',
      component: RIIF,
    },
    {
      path: '/TPTRM',
      name: 'TPTRM',
      component: TPTRM,
    },
    {
      path: '/Accidentology',
      name: 'Accidentology',
      component: Accidentology,
    },
    {
      path: '/Research',
      name: 'Research',
      component: Research,
    },
    {
      path: '/Facial_Recognition',
      name: 'Facial_Recognition',
      component: Facial_Recognition,
    }
  ],
})

export default router
