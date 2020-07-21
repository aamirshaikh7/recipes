import Vue from 'vue'
import VueRouter from 'vue-router'
import Init from '@/components/Init.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Init',
    component: Init
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
