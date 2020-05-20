import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

// 1. 生成路由器
const router = new VueRouter({
 //  mode: 'history' 设置路由模式
  routes
})

export default router
