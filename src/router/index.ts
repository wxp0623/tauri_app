import { createRouter, createWebHistory } from 'vue-router'

// 自动导入 views 目录下所有 vue 文件
const modules = import.meta.glob('@/views/*.vue')

// 自动生成路由
const routes = Object.keys(modules).map((path) => {
  // 获取文件名作为路由 path
  const name = path.match(/\/([^\/]+)\.vue$/)?.[1] || 'home'
  return {
    path: name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`,
    component: modules[path],
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router