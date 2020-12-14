import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "Calendar" */ './views/Calendar.vue')
  },
  {
    path: '/patient-register',
    name: 'Cadastro de Paciente',
    component: () => import(/* webpackChunkName: "PatientRegister" */ './views/PatientRegister.vue')
  },
  {
    path: '/patient-list',
    name: 'Lista dos pacientes',
    component: () => import(/* webpackChunkName: "PatientRegister" */ './views/PatientList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
