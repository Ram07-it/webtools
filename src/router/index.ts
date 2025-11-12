import { createRouter, createWebHistory } from 'vue-router'
import JsonFormatter from '../pages/JsonFormatter.vue'
import TextCleaner from '../pages/TextCleaner.vue'

const routes = [
  { path: '/', redirect: '/json-formatter' },
  { path: '/json-formatter', component: JsonFormatter },
  { path: '/text-cleaner', component: TextCleaner },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
