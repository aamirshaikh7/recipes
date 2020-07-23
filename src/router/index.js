import Vue from 'vue'
import VueRouter from 'vue-router'

import Init from '@/components/Init.vue'
import AddRecipe from '@/components/AddRecipe.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Init',
    component: Init
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
