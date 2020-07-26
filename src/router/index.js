import Vue from 'vue'
import VueRouter from 'vue-router'

import Init from '@/components/Init.vue'
import AddRecipe from '@/components/AddRecipe.vue'
import EditRecipe from '@/components/EditRecipe.vue'

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
  },

  {
    path: '/edit-recipe/:slug_param',
    name: 'EditRecipe',
    component: EditRecipe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
